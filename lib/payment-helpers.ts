import Razorpay from 'razorpay';
import getDbConnection from "./db";

export async function handleSubscriptionCancelled({
  subscriptionId,
  razorpay,
}: {
  subscriptionId: string;
  razorpay: Razorpay;
}) {
  try {
    // Retrieve subscription details from Razorpay
    const subscription = await razorpay.subscriptions.fetch(subscriptionId);
    
    const sql = await getDbConnection();
    // Update user status in the database
    await sql`UPDATE users SET status = 'cancelled' WHERE customer_id = ${subscription.customer_id}`;
  } catch (error) {
    console.error("Error handling subscription cancellation", error);
    throw error;
  }
}

export async function handlePaymentSuccess({
  payment,
  razorpay,
}: {
  payment: any; // Razorpay payment object
  razorpay: Razorpay;
}) {
  const sql = await getDbConnection();
  
  try {
    // Extract customer details
    const customerEmail = payment.email;
    const customerId = payment.customer_id;
    const planId = payment.notes?.plan_id; // Assuming you pass plan ID in notes

    if (customerEmail && planId) {
      // Create or update user
      await createOrUpdateUser(sql, {
        email: customerEmail,
        name: payment.notes?.customer_name || '',
        customer_id: customerId
      });

      // Update user subscription
      await updateUserSubscription(sql, planId, customerEmail);

      // Insert payment record
      await insertPayment(sql, payment, planId, customerEmail);
    }
  } catch (error) {
    console.error("Error handling payment success", error);
    throw error;
  }
}

async function insertPayment(
  sql: any,
  payment: any, // Razorpay payment object
  planId: string,
  customerEmail: string
) {
  try {
    await sql`
      INSERT INTO payments (
        amount, 
        status, 
        rp_payment_id, 
        plan_id, 
        user_email
      ) VALUES (
        ${payment.amount / 100}, // Razorpay amount is in paise
        ${payment.status}, 
        ${payment.id}, 
        ${planId}, 
        ${customerEmail}
      )
    `;
  } catch (err) {
    console.error("Error in inserting payment", err);
  }
}

async function createOrUpdateUser(
  sql: any,
  customer: {
    email: string;
    name: string;
    customer_id: string;
  }
) {
  try {
    const existingUser = await sql`
      SELECT * FROM users WHERE email = ${customer.email}
    `;

    if (existingUser.length === 0) {
      await sql`
        INSERT INTO users (
          email, 
          full_name, 
          customer_id
        ) VALUES (
          ${customer.email}, 
          ${customer.name}, 
          ${customer.customer_id}
        )
      `;
    }
  } catch (err) {
    console.error("Error in inserting user", err);
  }
}

async function updateUserSubscription(
  sql: any,
  planId: string,
  email: string
) {
  try {
    await sql`
      UPDATE users 
      SET price_id = ${planId}, 
          status = 'active' 
      WHERE email = ${email}
    `;
  } catch (err) {
    console.error("Error in updating user", err);
  }
}
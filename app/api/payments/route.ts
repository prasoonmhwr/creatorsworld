import crypto from 'crypto';
import { 
  handlePaymentSuccess, 
  handleSubscriptionCancelled 
} from "@/lib/payment-helpers";
import { NextRequest, NextResponse } from "next/server";
import Razorpay from 'razorpay';

// Initialize Razorpay client
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_SECRET!
});

export async function POST(req: NextRequest) {
  // Webhook functionality
  try {
    // Get the raw body as text
    const payload = await req.text();
    
    // Get webhook signature from headers
    const razorpaySignature = req.headers.get('x-razorpay-signature');
    
    // Validate webhook signature
    const generatedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET!)
      .update(payload)
      .digest('hex');

    // Verify signature
    if (razorpaySignature !== generatedSignature) {
      return NextResponse.json({ 
        status: 'error', 
        message: 'Invalid webhook signature' 
      }, { status: 400 });
    }

    // Parse the webhook payload
    const webhookPayload = JSON.parse(payload);

    // Handle different webhook events
    switch (webhookPayload.event) {
      case 'payment.captured': {
        // Retrieve full payment details
        const paymentId = webhookPayload.payload.payment.entity.id;
        const payment = await razorpay.payments.fetch(paymentId);
        
        // Handle payment success (e.g., create/update user, activate subscription)
        await handlePaymentSuccess({ payment, razorpay });
        break;
      }
      
      case 'subscription.cancelled': {
        const subscriptionId = webhookPayload.payload.subscription.entity.id;
        
        // Handle subscription cancellation
        await handleSubscriptionCancelled({ subscriptionId, razorpay });
        break;
      }
      
      default:
        console.log(`Unhandled event type ${webhookPayload.event}`);
    }

    // Respond with success
    return NextResponse.json({
      status: 'success'
    });

  } catch (err) {
    console.error('Webhook error:', err);
    return NextResponse.json({ 
      status: 'error', 
      message: err instanceof Error ? err.message : 'Unknown error' 
    }, { status: 500 });
  }
}
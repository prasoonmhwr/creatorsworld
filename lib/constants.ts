export const plansMap = [
    {
      id: "basic",
      name: "Basic",
      logo:'',
      title:'Basic',
      caption: "Get started with Creators world!",
      priceMonthly: 10,
      priceYearly:120,
      features: ["3 Blog Posts", "3 Transcription"],
      paymentLink: "https://rzp.io/rzp/eZowq3s",
      priceId:
        process.env.NODE_ENV === "development"
          ? "plink_PF8rdI5kArVuvv"
          : "",
    },
    {
      id: "pro",
      name: "Pro",
      logo:'',
      title:'Pro',
      caption: "All Blog Posts, let’s go!",
      priceMonthly: 2600,
      priceYearly: 239.88,
      features: ["Unlimited Blog Posts", "Unlimited Transcriptions"],
      paymentLink: "https://rzp.io/rzp/GwhsFhG",
      priceId:
        process.env.NODE_ENV === "development"
          ? "plink_PWafORCiy4rrnC"
          : "",
    },
    {
        id: "mid",
        name: "Mid",
        logo:'',
        title:'Mid',
        caption: "Getting the hang of it!",
        priceMonthly: 15,
        priceYearly: 180,
        features: ["6 Blog Posts", "6 Transcription"],
        paymentLink: "https://rzp.io/rzp/IkhLB7Mm",
        priceId:
          process.env.NODE_ENV === "development"
            ? "plink_PF8uKHF0iKUqDF"
            : "",
      },
  ];
  
  export const ORIGIN_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://www.creatorsworld.live";
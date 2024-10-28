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
      paymentLink: "https://buy.stripe.com/test_aEU9D35X65fH0MMeUW",
      priceId:
        process.env.NODE_ENV === "development"
          ? "price_1PtLVqBPnsISnc82CW4au1uq"
          : "",
    },
    {
      id: "pro",
      name: "Pro",
      logo:'',
      title:'Pro',
      caption: "All Blog Posts, let’s go!",
      priceMonthly: 19.99,
      priceYearly: 239.88,
      features: ["Unlimited Blog Posts", "Unlimited Transcriptions"],
      paymentLink: "https://buy.stripe.com/test_cN26qRclufUl9jibIL",
      priceId:
        process.env.NODE_ENV === "development"
          ? "price_1PtLVqBPnsISnc82bspCVu5e"
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
        paymentLink: "https://buy.stripe.com/test_cN26qRclufUl9jibIL",
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1PtLVqBPnsISnc82bspCVu5e"
            : "",
      },
  ];
  
  export const ORIGIN_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://www.creatorsworld.live";
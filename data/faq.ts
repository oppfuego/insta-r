export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "How does the balance system work?",
    answer: "Our platform uses a prepaid balance system. You top up your account with any amount, and then use that balance to purchase services across all supported platforms. There are no subscriptions or recurring charges — you only spend what you add.",
    category: "Balance",
  },
  {
    id: "faq-2",
    question: "What platforms do you support?",
    answer: "We currently support three major social media platforms: Instagram, TikTok, and YouTube. Each platform offers likes, followers/subscribers, and views services with various package sizes to fit your needs.",
    category: "Platforms",
  },
  {
    id: "faq-3",
    question: "How quickly will I see results?",
    answer: "Most orders begin processing within minutes of placement. Smaller orders are typically completed within 1-2 hours, while larger orders may take up to 24-48 hours for gradual, natural-looking delivery.",
    category: "Services",
  },
  {
    id: "faq-4",
    question: "What services do you offer?",
    answer: "We offer three core services for each platform: Likes to boost your content engagement, Followers/Subscribers to grow your audience, and Views to increase your content reach. Each service comes in multiple package sizes from starter to pro level.",
    category: "Services",
  },
  {
    id: "faq-5",
    question: "Can I track my orders?",
    answer: "Yes! Your dashboard provides real-time order tracking with three status levels: Processing (order received), In Progress (delivery started), and Completed (fully delivered). You can also view your complete transaction history and filter by platform or service.",
    category: "Orders",
  },
  {
    id: "faq-6",
    question: "What payment methods do you accept?",
    answer: "We accept all major payment methods including Visa, Mastercard, Apple Pay, Google Pay, and cryptocurrency. All transactions are processed securely through our encrypted payment system.",
    category: "Payments",
  },
  {
    id: "faq-7",
    question: "Is there a minimum top-up amount?",
    answer: "The minimum top-up amount is £10. We offer quick-select buttons for £10, £25, £50, and £100, or you can enter any custom amount. Your balance never expires and can be used across all platforms and services.",
    category: "Balance",
  },
  {
    id: "faq-8",
    question: "Are the followers and likes from real accounts?",
    answer: "We prioritize quality and deliver engagement from genuine-looking accounts with profile pictures, posts, and activity. This helps ensure your growth appears natural and doesn't trigger platform algorithms negatively.",
    category: "Services",
  },
  {
    id: "faq-9",
    question: "Can I get a refund if I'm not satisfied?",
    answer: "We offer a satisfaction guarantee. If an order is not delivered or partially delivered, your balance will be automatically refunded. For quality concerns, please contact our support team within 7 days of order completion.",
    category: "Payments",
  },
  {
    id: "faq-10",
    question: "Is my account information safe?",
    answer: "Absolutely. We never ask for your social media passwords. All we need is your username or post link. Your payment information is encrypted and processed through secure, PCI-compliant systems.",
    category: "Services",
  },
];

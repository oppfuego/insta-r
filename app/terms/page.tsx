"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { siteConfig } from "@/config/site";

const sections = [
  {
    id: "service-description",
    title: "1. Service Description",
    content: `GrowPulse is a social media growth platform that provides engagement services including likes, followers, and views for Instagram, TikTok, and YouTube. Our services are designed to help creators and businesses increase their social media presence and reach.

All services are delivered through our platform using a prepaid balance system. Users top up their account balance and use it to purchase individual services or packages. We do not offer subscription-based plans.`,
  },
  {
    id: "account-registration",
    title: "2. Account Registration",
    content: `To use our services, you must create an account by providing your name, email address, phone number, date of birth, address, and a secure password. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.

You must be at least 18 years of age or have the consent of a legal guardian to use our services. By creating an account, you represent that the information you provide is accurate and complete.`,
  },
  {
    id: "balance-and-payments",
    title: "3. Balance and Payments",
    content: `Our platform operates on a prepaid balance system. You can add funds to your account at any time using supported payment methods. The minimum top-up amount is £10.00. Your balance does not expire and can be used to purchase any service across all supported platforms.

All prices are stored in British Pounds (GBP) and can be displayed in GBP, EUR, or USD using static conversion rates. The price of a service at the time of purchase is the final price. We reserve the right to modify service pricing at any time, but changes will not affect orders already placed.`,
  },
  {
    id: "order-processing",
    title: "4. Order Processing",
    content: `Once an order is placed, it enters our processing queue. Most orders begin delivery within minutes, though larger orders may take longer. Order statuses are updated in real-time on your dashboard:

- Processing: Your order has been received and is in the queue.
- In Progress: Delivery has begun and units are being added.
- Completed: The full order has been delivered.

Delivery times vary depending on the service type, platform, and order size. We aim to deliver all orders within 24-48 hours, but some larger orders may take up to 72 hours for natural-looking gradual delivery.`,
  },
  {
    id: "user-responsibilities",
    title: "5. User Responsibilities",
    content: `By using our services, you agree to:

- Provide accurate information when placing orders (correct usernames, post links, etc.)
- Not use our services for any illegal purposes or to violate any platform's terms of service
- Not attempt to manipulate, exploit, or abuse our platform or pricing
- Not resell our services without authorization
- Maintain the security of your account credentials

We reserve the right to suspend or terminate accounts that violate these terms without prior notice.`,
  },
  {
    id: "refund-policy",
    title: "6. Refund Policy",
    content: `We offer refunds under the following circumstances:

- Non-delivery: If an order is not delivered within the estimated timeframe, your balance will be automatically refunded.
- Partial delivery: If an order is only partially completed, the remaining undelivered portion will be refunded to your balance.
- Service quality: If you experience quality issues, please contact support within 7 days of order completion.

Balance top-ups are generally non-refundable once credited to your account. Exceptions may be made at our discretion for extenuating circumstances. All refunds are issued as account balance credits, not as cash refunds to your original payment method.`,
  },
  {
    id: "limitation-of-liability",
    title: "7. Limitation of Liability",
    content: `GrowPulse provides services on an "as is" basis. While we strive for the highest quality, we cannot guarantee specific results from our services, including but not limited to increased engagement rates, follower retention, or algorithmic benefits on any platform.

We are not responsible for any actions taken by third-party social media platforms, including but not limited to removal of delivered engagement, account restrictions, or changes to platform algorithms. Use of social media growth services carries inherent risks that users acknowledge and accept.`,
  },
  {
    id: "modifications-to-terms",
    title: "8. Modifications to Terms",
    content: `We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes acceptance of the modified terms.

We recommend reviewing these terms periodically to stay informed of any updates.`,
  },
  {
    id: "intellectual-property",
    title: "9. Intellectual Property",
    content: `All content, features, and functionality of the GrowPulse platform — including but not limited to the brand name, logo, website design, software, text, graphics, and user interface — are the exclusive property of GrowPulse and are protected by international copyright, trademark, and other intellectual property laws.

The GrowPulse name, logo, and all related marks are trademarks of GrowPulse. You may not use, reproduce, or display any of our trademarks without prior written permission. Unauthorised use of our intellectual property may result in legal action.

You agree not to reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code of any part of the GrowPulse platform. You may not copy, modify, distribute, or create derivative works based on any portion of our platform without express written consent.`,
  },
  {
    id: "governing-law",
    title: "10. Governing Law",
    content: `These Terms of Service shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.

Before initiating formal legal proceedings, both parties agree to attempt to resolve any disputes through good-faith negotiation. If a resolution cannot be reached within 30 days, either party may pursue formal dispute resolution. Nothing in this section limits your statutory rights as a consumer under applicable law.`,
  },
  {
    id: "contact",
    title: "11. Contact",
    content: null,
  },
];

export default function TermsPage() {
  return (
    <section className="py-12 lg:py-20">
      <Container>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Terms of Service</h1>
            <p className="mt-4 text-gray-500">Last updated: April 29, 2026</p>
            {siteConfig.companyLegalName && (
              <p className="mt-2 text-sm text-gray-400">
                Operated by {siteConfig.companyLegalName}
                {siteConfig.companyNumber && ` (Company No: ${siteConfig.companyNumber})`}
              </p>
            )}

            {/* Table of Contents */}
            <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-900">Table of Contents</h2>
              <ol className="mt-3 space-y-2">
                {sections.map(({ id, title }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-10 space-y-8">
              {sections.map(({ id, title, content }) => (
                <div key={id} id={id}>
                  <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
                  {content ? (
                    <div className="mt-3 text-sm leading-relaxed text-gray-500 whitespace-pre-line">{content}</div>
                  ) : title === "11. Contact" ? (
                    <div className="mt-3 text-sm leading-relaxed text-gray-500">
                      <p>
                        If you have any questions, concerns, or requests regarding these Terms of Service, please
                        contact us using the details below.
                      </p>
                      {siteConfig.companyEmail && (
                        <p className="mt-3">
                          <span className="font-medium text-gray-900">Email:</span>{" "}
                          <a href={`mailto:${siteConfig.companyEmail}`} className="underline hover:text-gray-900">
                            {siteConfig.companyEmail}
                          </a>
                        </p>
                      )}
                      {siteConfig.companyAddress && (
                        <p className="mt-1">
                          <span className="font-medium text-gray-900">Address:</span>{" "}
                          {siteConfig.companyAddress}
                        </p>
                      )}
                      <p className="mt-3">
                        We aim to respond to all enquiries within 5 business days.
                      </p>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

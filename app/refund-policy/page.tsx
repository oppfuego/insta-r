"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { siteConfig } from "@/config/site";

const sections = [
  {
    id: "digital-services",
    title: "1. Nature of Digital Services",
    content: `GrowPulse provides digital social media growth services, including likes, followers, subscribers, and views for Instagram, TikTok, and YouTube. These services are digital in nature and begin processing immediately upon order placement.

By placing an order, you acknowledge that the services are digital content that is delivered electronically and that delivery begins immediately after your order is confirmed.`,
  },
  {
    id: "wallet-topups",
    title: "2. Wallet Top-Ups",
    content: `Funds added to your GrowPulse wallet (balance top-ups) are generally non-refundable once credited to your account. Your wallet balance does not expire and can be used at any time to purchase services across all supported platforms.

Exceptions to this policy may be considered on a case-by-case basis, at our sole discretion, in the following circumstances:

- You have not used any of the topped-up funds and request a refund within 14 days of the top-up
- There was a technical error that resulted in an incorrect charge
- You were charged multiple times for the same top-up due to a payment processing error

To request a wallet refund, please contact our support team with your account details and the reason for your request.`,
  },
  {
    id: "order-refunds",
    title: "3. Order Refunds",
    content: `We are committed to delivering the services you order. However, refunds to your wallet balance may be issued under the following circumstances:

Non-Delivery — If your order is not delivered within the estimated delivery timeframe and we are unable to fulfil it, the full order amount will be automatically refunded to your wallet balance.

Partial Delivery — If only a portion of your order is delivered and the remaining units cannot be fulfilled, the cost of the undelivered portion will be refunded to your wallet balance.

Quality Issues — If you believe the quality of the delivered service does not meet reasonable expectations, you may contact our support team within 7 days of order completion to request a review. Quality-related refunds are assessed on a case-by-case basis.

Please note: Refunds for completed orders are issued as wallet balance credits, not as cash refunds to your original payment method.`,
  },
  {
    id: "non-refundable",
    title: "4. Non-Refundable Circumstances",
    content: `Refunds will not be issued in the following cases:

- The order was fully delivered as described
- You provided an incorrect URL, handle, or target information
- Your social media account was set to private, preventing delivery
- The social media platform removed delivered engagement (likes, followers, etc.) as part of their own moderation — this is outside our control
- You changed your mind after the order began processing
- Your social media account was suspended, deleted, or restricted during or after delivery`,
  },
  {
    id: "right-of-withdrawal",
    title: "5. Right of Withdrawal",
    content: `Under the Consumer Contracts Regulations 2013 (UK) and equivalent EU consumer protection laws, you have the right to cancel a contract for digital content within 14 days of purchase.

However, by placing an order on GrowPulse, you expressly consent to the immediate delivery of digital content and acknowledge that you lose your right of withdrawal once the order processing begins.

For wallet top-ups, you may request cancellation within 14 days provided the funds have not been used. Once funds have been spent on services, the right of withdrawal no longer applies to those funds.`,
  },
  {
    id: "how-to-request",
    title: "6. How to Request a Refund",
    content: `To request a refund, please contact our support team with the following information:

- Your registered email address
- The order ID (found in your dashboard under Order History)
- A description of the issue
- Any relevant screenshots or evidence

We aim to review all refund requests within 3-5 business days. You will be notified by email of the outcome.`,
  },
  {
    id: "changes",
    title: "7. Changes to This Policy",
    content: `We reserve the right to update this Refund Policy at any time. Changes will be posted on this page with an updated "Last updated" date. The policy in effect at the time of your purchase will apply to that transaction.`,
  },
  {
    id: "contact",
    title: "8. Contact",
    content: null,
  },
];

export default function RefundPolicyPage() {
  return (
    <section className="py-12 lg:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Refund Policy
            </h1>
            <p className="mt-4 text-gray-500">Last updated: April 29, 2026</p>
            {siteConfig.companyLegalName && (
              <p className="mt-2 text-sm text-gray-400">
                Operated by {siteConfig.companyLegalName}
                {siteConfig.companyNumber &&
                  ` (Company No: ${siteConfig.companyNumber})`}
              </p>
            )}

            <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
                Table of Contents
              </h2>
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
                  <h2 className="text-lg font-semibold text-gray-900">
                    {title}
                  </h2>
                  {content ? (
                    <div className="mt-3 text-sm leading-relaxed text-gray-500 whitespace-pre-line">
                      {content}
                    </div>
                  ) : (
                    <div className="mt-3 text-sm leading-relaxed text-gray-500">
                      <p>
                        If you have any questions about our refund policy or
                        would like to request a refund, please contact us.
                      </p>
                      {siteConfig.companyEmail && (
                        <p className="mt-3">
                          <span className="font-medium text-gray-900">
                            Email:
                          </span>{" "}
                          <a
                            href={`mailto:${siteConfig.companyEmail}`}
                            className="underline hover:text-gray-900"
                          >
                            {siteConfig.companyEmail}
                          </a>
                        </p>
                      )}
                      {siteConfig.companyAddress && (
                        <p className="mt-1">
                          <span className="font-medium text-gray-900">
                            Address:
                          </span>{" "}
                          {siteConfig.companyAddress}
                        </p>
                      )}
                      <p className="mt-3">
                        We aim to respond to all refund enquiries within 3-5
                        business days.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

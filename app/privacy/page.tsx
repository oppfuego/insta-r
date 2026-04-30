"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { siteConfig } from "@/config/site";

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: `We collect information you provide directly when creating an account and using our services:

- Account information: Name, surname, email address, phone number, date of birth, address, and encrypted password.
- Transaction data: Top-up amounts, purchase history, and order details.
- Usage data: Pages visited, features used, and interaction patterns to improve our platform.

We do not collect or store your social media passwords. All we need to deliver our services is a public username or post link.`,
  },
  {
    id: "how-we-use-your-information",
    title: "2. How We Use Your Information",
    content: `Your information is used for the following purposes:

- To provide and deliver our services, including processing orders and maintaining your account balance.
- To communicate with you about your orders, account updates, and service changes.
- To improve our platform through analytics and usage patterns.
- To prevent fraud and ensure the security of our platform.
- To comply with legal obligations when required.

We never sell your personal information to third parties for marketing purposes.`,
  },
  {
    id: "data-security",
    title: "3. Data Security",
    content: `We take the security of your data seriously and implement industry-standard measures:

- All data transmitted between your browser and our servers is encrypted using TLS/SSL.
- Passwords are hashed using bcrypt and are never stored in plain text.
- Payment information is processed through PCI-DSS compliant payment processors. We do not store your full credit card details.
- Access to user data is restricted to authorized personnel only.
- We conduct regular security audits and vulnerability assessments.`,
  },
  {
    id: "cookies-and-tracking",
    title: "4. Cookies and Tracking",
    content: `We use essential cookies to maintain your session and preferences. These cookies are necessary for the basic functioning of our platform.

We may also use analytics cookies to understand how users interact with our platform. You can disable non-essential cookies through your browser settings without affecting core functionality.

We do not use third-party advertising cookies or tracking pixels.`,
  },
  {
    id: "data-retention",
    title: "5. Data Retention",
    content: `We retain your account data for as long as your account is active. If you request account deletion, we will remove your personal data within 30 days, except where we are required to retain certain information for legal or legitimate business purposes.

Transaction records may be retained for up to 7 years for accounting and compliance purposes, but will be anonymized after account deletion.`,
  },
  {
    id: "your-rights",
    title: "6. Your Rights",
    content: `You have the following rights regarding your personal data:

- Access: You can request a copy of the personal data we hold about you.
- Correction: You can update or correct your account information at any time.
- Deletion: You can request the deletion of your account and associated data.
- Portability: You can request an export of your data in a standard format.
- Objection: You can object to certain types of data processing.

To exercise any of these rights, please contact our support team. We will respond to all requests within 30 days.`,
  },
  {
    id: "third-party-services",
    title: "7. Third-Party Services",
    content: `Our platform integrates with third-party services for payment processing and analytics. These services have their own privacy policies and data practices. We recommend reviewing their policies:

- Payment processors handle your financial data according to PCI-DSS standards.
- Analytics services receive anonymized usage data only.

We are not responsible for the privacy practices of third-party social media platforms where our services are delivered.`,
  },
  {
    id: "changes-to-this-policy",
    title: "8. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.

Your continued use of our services after any changes constitutes acceptance of the updated policy.`,
  },
  {
    id: "international-data-transfers",
    title: "9. International Data Transfers",
    content: `Your personal data is primarily stored and processed on servers located within the European Union and the United Kingdom. Where it is necessary to transfer data outside the EU/UK — for example, to third-party service providers — we ensure that appropriate safeguards are in place.

These safeguards may include Standard Contractual Clauses (SCCs) approved by the European Commission, adequacy decisions by the UK government, or other legally recognised transfer mechanisms under the UK GDPR and the EU General Data Protection Regulation.

We will never transfer your personal data to a jurisdiction that does not provide an adequate level of data protection without first implementing suitable contractual and technical safeguards.`,
  },
  {
    id: "contact-the-data-controller",
    title: "10. Contact the Data Controller",
    content: null,
  },
];

export default function PrivacyPage() {
  return (
    <section className="py-12 lg:py-20">
      <Container>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Privacy Policy</h1>
            <p className="mt-4 text-gray-500">Last updated: April 29, 2026</p>
            {siteConfig.companyLegalName && (
              <p className="mt-2 text-sm text-gray-400">
                Operated by {siteConfig.companyLegalName}
                {siteConfig.companyEmail && ` — ${siteConfig.companyEmail}`}
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
                  ) : title === "10. Contact the Data Controller" ? (
                    <div className="mt-3 text-sm leading-relaxed text-gray-500">
                      <p>
                        GrowPulse is the data controller responsible for your personal data. If you have any questions
                        about this Privacy Policy or wish to exercise your data protection rights, please contact us.
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
                        If you are not satisfied with our response, you have the right to lodge a complaint with the
                        Information Commissioner&#39;s Office (ICO) or your local data protection authority.
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

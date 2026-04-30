"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { siteConfig } from "@/config/site";

const sections = [
  {
    id: "what-are-cookies",
    title: "1. What Are Cookies",
    content: `Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and supply information to the website owners.

Cookies can be "persistent" (remaining on your device until deleted or until they expire) or "session" cookies (deleted when you close your browser). They can also be "first-party" (set by the website you are visiting) or "third-party" (set by a service used by the website, such as analytics tools).`,
  },
  {
    id: "cookies-we-use",
    title: "2. Cookies We Use",
    content: `We use the following types of cookies on our platform:

Essential Cookies — These are necessary for the website to function properly. They enable core features such as user authentication, account security, and session management. Without these cookies, the services you have requested cannot be provided. These cookies do not require your consent.

Functional Cookies — These cookies allow the website to remember choices you make (such as your preferred display currency or language) and provide enhanced, personalised features. They may also be used to provide services you have requested, such as remembering your login details.

Analytics Cookies — We may use analytics cookies (such as those provided by Google Analytics or similar services) to collect information about how visitors use our website. This data helps us improve the site's performance and user experience. These cookies collect information in an aggregated, anonymous form.

No Advertising or Tracking Cookies — We do not use cookies for advertising, behavioural targeting, or cross-site tracking purposes.`,
  },
  {
    id: "managing-cookies",
    title: "3. Managing Cookies",
    content: `You can control and manage cookies in several ways:

Browser Settings — Most web browsers allow you to manage cookie preferences through their settings. You can set your browser to refuse cookies, delete existing cookies, or alert you when a cookie is being set. Please note that disabling essential cookies may affect the functionality of our website.

- Google Chrome: Settings → Privacy and Security → Cookies and other site data
- Firefox: Settings → Privacy & Security → Cookies and Site Data
- Safari: Preferences → Privacy → Manage Website Data
- Microsoft Edge: Settings → Cookies and site permissions

Opting Out of Analytics — If we use Google Analytics, you can opt out by installing the Google Analytics Opt-out Browser Add-on, available from Google.

Please be aware that restricting cookies may impact your experience on our platform, including the inability to log in or use certain features.`,
  },
  {
    id: "data-collected",
    title: "4. Data Collected Through Cookies",
    content: `The data collected through cookies may include:

- Your session identifier (to keep you logged in)
- Your display currency preference
- Pages visited and features used on our platform
- Browser type, device type, and operating system
- Approximate geographic location (country level, via analytics)
- Referring website (how you found us)

We do not use cookies to collect personally identifiable information unless you have logged into your account, in which case session cookies are linked to your account for security purposes.`,
  },
  {
    id: "third-party-cookies",
    title: "5. Third-Party Cookies",
    content: `Our website may use services from third parties that set their own cookies. These may include:

- Payment processors (for secure transaction handling)
- Analytics providers (for website usage analysis)

We do not control third-party cookies. Please refer to the respective third party's cookie and privacy policies for more information on how they use cookies.`,
  },
  {
    id: "changes",
    title: "6. Changes to This Policy",
    content: `We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically.`,
  },
  {
    id: "contact",
    title: "7. Contact",
    content: null,
  },
];

export default function CookiePolicyPage() {
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
              Cookie Policy
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
                        If you have any questions about our use of cookies,
                        please contact us.
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

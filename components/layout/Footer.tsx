import Link from "next/link";
import { Zap } from "lucide-react";
import Container from "./Container";
import PaymentMethods from "@/components/ui/PaymentMethods";
import { siteConfig } from "@/config/site";

const mainLinks = {
  Product: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/top-up", label: "Top-Up" },
    { href: "/dashboard", label: "Dashboard" },
  ],
  Support: [
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "/terms", label: "Terms of Service" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/cookie-policy", label: "Cookie Policy" },
    { href: "/refund-policy", label: "Refund Policy" },
  ],
};

const serviceLinks = {
  Instagram: [
    { href: "/services/instagram/likes", label: "Likes" },
    { href: "/services/instagram/followers", label: "Followers" },
    { href: "/services/instagram/views", label: "Views" },
  ],
  TikTok: [
    { href: "/services/tiktok/likes", label: "Likes" },
    { href: "/services/tiktok/followers", label: "Followers" },
    { href: "/services/tiktok/views", label: "Views" },
  ],
  YouTube: [
    { href: "/services/youtube/likes", label: "Likes" },
    { href: "/services/youtube/subscribers", label: "Subscribers" },
    { href: "/services/youtube/views", label: "Views" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50/80">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600">
                <Zap size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Grow<span className="text-violet-600">Pulse</span>
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-gray-500">
              The premium platform for social media growth. Boost your presence on Instagram, TikTok, and YouTube with our reliable services.
            </p>

            <PaymentMethods variant="footer" className="mt-6" />

            {siteConfig.companyLegalName && (
              <div className="mt-6 space-y-1 text-xs text-gray-400">
                <p>{siteConfig.companyLegalName}</p>
                {siteConfig.companyNumber && <p>Company No: {siteConfig.companyNumber}</p>}
                {siteConfig.companyVat && <p>VAT: {siteConfig.companyVat}</p>}
                {siteConfig.companyAddress && <p>{siteConfig.companyAddress}</p>}
              </div>
            )}
          </div>

          {Object.entries(mainLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-sm font-semibold text-gray-900">{category}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-900">Services</h4>
            {Object.entries(serviceLinks).map(([platform, links]) => (
              <div key={platform} className="mb-3">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">{platform}</p>
                <ul className="flex flex-col gap-1.5">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {siteConfig.companyEmail && (
              <a href={`mailto:${siteConfig.companyEmail}`} className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
                {siteConfig.companyEmail}
              </a>
            )}
            {siteConfig.companyPhone && (
              <a href={`tel:${siteConfig.companyPhone}`} className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
                {siteConfig.companyPhone}
              </a>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}

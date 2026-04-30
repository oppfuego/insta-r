"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Wallet, Plus, ChevronDown, LogOut } from "lucide-react";
import Button from "@/components/ui/Button";
import { useBalance } from "@/context/BalanceContext";
import { useAuth } from "@/context/AuthContext";
import { siteConfig, SupportedCurrency } from "@/config/site";
import { InstagramIcon, TikTokIcon, YoutubeIcon } from "@/components/ui/SocialIcons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/faq", label: "FAQ" },
];

const serviceGroups = [
  {
    platform: "Instagram",
    icon: InstagramIcon,
    links: [
      { href: "/services/instagram/likes", label: "Likes" },
      { href: "/services/instagram/followers", label: "Followers" },
      { href: "/services/instagram/views", label: "Views" },
    ],
  },
  {
    platform: "TikTok",
    icon: TikTokIcon,
    links: [
      { href: "/services/tiktok/likes", label: "Likes" },
      { href: "/services/tiktok/followers", label: "Followers" },
      { href: "/services/tiktok/views", label: "Views" },
    ],
  },
  {
    platform: "YouTube",
    icon: YoutubeIcon,
    links: [
      { href: "/services/youtube/likes", label: "Likes" },
      { href: "/services/youtube/subscribers", label: "Subscribers" },
      { href: "/services/youtube/views", label: "Views" },
    ],
  },
];

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const { formattedBalance, displayCurrency, setDisplayCurrency } = useBalance();
  const { isLoggedIn, logout } = useAuth();
  const [servicesExpanded, setServicesExpanded] = useState(pathname.startsWith("/services"));

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-x-0 top-16 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-gray-200 bg-white/95 backdrop-blur-xl lg:hidden"
    >
      <nav className="flex flex-col px-4 py-4">
        {isLoggedIn && (
          <div className="mb-4 flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
            <div className="flex items-center gap-2">
              <Wallet size={16} className="text-violet-600" />
              <span className="text-sm font-semibold text-gray-900">{formattedBalance}</span>
            </div>
            <select
              value={displayCurrency}
              onChange={(e) => setDisplayCurrency(e.target.value as SupportedCurrency)}
              className="bg-transparent text-xs text-gray-500 focus:outline-none cursor-pointer"
            >
              {siteConfig.supportedCurrencies.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        )}

        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={`
              rounded-lg px-4 py-3 text-sm font-medium transition-colors
              ${pathname === link.href
                ? "bg-gray-100 text-gray-900"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }
            `}
          >
            {link.label}
          </Link>
        ))}

        {/* Services Accordion */}
        <button
          onClick={() => setServicesExpanded(!servicesExpanded)}
          className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
            pathname.startsWith("/services") ? "bg-gray-100 text-gray-900" : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
          }`}
        >
          Services
          <ChevronDown size={16} className={`transition-transform ${servicesExpanded ? "rotate-180" : ""}`} />
        </button>

        {servicesExpanded && (
          <div className="ml-2 border-l-2 border-gray-100 pl-2 mb-2">
            {serviceGroups.map(({ platform, icon: Icon, links }) => (
              <div key={platform} className="mt-2">
                <div className="flex items-center gap-2 px-4 py-1.5">
                  <Icon className="h-3.5 w-3.5 text-gray-400" />
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{platform}</span>
                </div>
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={`block rounded-lg px-4 py-2 text-sm transition-colors ${
                      pathname === link.href
                        ? "bg-violet-50 text-violet-700 font-medium"
                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 flex flex-col gap-2 border-t border-gray-200 pt-4">
          {isLoggedIn ? (
            <>
              <Link href="/top-up" onClick={onClose}>
                <Button variant="outline" fullWidth>
                  <Plus size={14} />
                  Top Up
                </Button>
              </Link>
              <Link href="/dashboard" onClick={onClose}>
                <Button variant="ghost" fullWidth>Dashboard</Button>
              </Link>
              <button
                onClick={() => { logout(); onClose(); }}
                className="flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              >
                <LogOut size={14} />
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link href="/sign-in" onClick={onClose}>
                <Button variant="ghost" fullWidth>Sign In</Button>
              </Link>
              <Link href="/sign-up" onClick={onClose}>
                <Button fullWidth>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </motion.div>
  );
}

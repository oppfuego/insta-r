"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X, Wallet, Plus, ChevronDown, LogOut, User } from "lucide-react";
import Container from "./Container";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";
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

const serviceDropdown = [
  {
    platform: "Instagram",
    icon: InstagramIcon,
    links: [
      { href: "/services/instagram/likes", label: "Instagram Likes" },
      { href: "/services/instagram/followers", label: "Instagram Followers" },
      { href: "/services/instagram/views", label: "Instagram Views" },
    ],
  },
  {
    platform: "TikTok",
    icon: TikTokIcon,
    links: [
      { href: "/services/tiktok/likes", label: "TikTok Likes" },
      { href: "/services/tiktok/followers", label: "TikTok Followers" },
      { href: "/services/tiktok/views", label: "TikTok Views" },
    ],
  },
  {
    platform: "YouTube",
    icon: YoutubeIcon,
    links: [
      { href: "/services/youtube/likes", label: "YouTube Likes" },
      { href: "/services/youtube/subscribers", label: "YouTube Subscribers" },
      { href: "/services/youtube/views", label: "YouTube Views" },
    ],
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { formattedBalance, displayCurrency, setDisplayCurrency } = useBalance();
  const { isLoggedIn, user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isServiceActive = pathname.startsWith("/services");

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/60 shadow-sm"
            : "bg-transparent"
          }
        `}
      >
        <Container>
          <nav className="flex h-16 items-center justify-between lg:h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/25 transition-shadow group-hover:shadow-violet-500/40">
                <Zap size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Grow<span className="text-violet-600">Pulse</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative rounded-lg px-4 py-2 text-sm font-medium transition-colors
                    ${pathname === link.href
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-900"
                    }
                  `}
                >
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg bg-gray-100"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}

              {/* Services Dropdown */}
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`
                    relative flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors
                    ${isServiceActive ? "text-gray-900" : "text-gray-500 hover:text-gray-900"}
                  `}
                >
                  {isServiceActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg bg-gray-100"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">Services</span>
                  <ChevronDown size={14} className={`relative z-10 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full mt-2 w-[520px] rounded-2xl border border-gray-200 bg-white p-4 shadow-xl shadow-gray-200/50"
                    >
                      <div className="grid grid-cols-3 gap-4">
                        {serviceDropdown.map(({ platform, icon: Icon, links }) => (
                          <div key={platform}>
                            <div className="flex items-center gap-2 mb-2 px-2">
                              <Icon className="h-4 w-4 text-gray-400" />
                              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{platform}</span>
                            </div>
                            <div className="flex flex-col">
                              {links.map((link) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  className={`rounded-lg px-2 py-2 text-sm transition-colors ${
                                    pathname === link.href
                                      ? "bg-violet-50 text-violet-700 font-medium"
                                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                  }`}
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Desktop Right */}
            <div className="hidden items-center gap-3 lg:flex">
              {isLoggedIn ? (
                <>
                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-1.5">
                    <Wallet size={14} className="text-violet-600" />
                    <span className="text-sm font-semibold text-gray-900">{formattedBalance}</span>
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
                  <Link href="/top-up">
                    <Button size="sm" variant="outline">
                      <Plus size={14} />
                      Top Up
                    </Button>
                  </Link>
                  <Link href="/dashboard">
                    <Button variant="ghost" size="sm">
                      <User size={14} />
                      Dashboard
                    </Button>
                  </Link>
                  <button
                    onClick={logout}
                    className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                  >
                    <LogOut size={14} />
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link href="/sign-in">
                    <Button variant="ghost" size="sm">Sign In</Button>
                  </Link>
                  <Link href="/sign-up">
                    <Button size="sm">Sign Up</Button>
                  </Link>
                </>
              )}
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors lg:hidden"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </Container>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

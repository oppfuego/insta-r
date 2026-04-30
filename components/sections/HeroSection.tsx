"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Wallet, TrendingUp, Users, Eye } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { useBalance } from "@/context/BalanceContext";
import { useAuth } from "@/context/AuthContext";
import { InstagramIcon, TikTokIcon, YoutubeIcon } from "@/components/ui/SocialIcons";

const floatingIcons = [
  { icon: InstagramIcon, x: "8%", y: "25%", delay: 0, color: "text-pink-500" },
  { icon: TikTokIcon, x: "85%", y: "15%", delay: 0.5, color: "text-cyan-500" },
  { icon: YoutubeIcon, x: "90%", y: "65%", delay: 1, color: "text-red-500" },
];

export default function HeroSection() {
  const { formattedBalance } = useBalance();
  const { isLoggedIn } = useAuth();

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-600/[0.05] via-transparent to-transparent" />

      {floatingIcons.map(({ icon: Icon, x, y, delay, color }, i) => (
        <motion.div
          key={i}
          className={`absolute hidden lg:block ${color}`}
          style={{ left: x, top: y }}
          animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 5, delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="rounded-2xl bg-white p-3 shadow-lg shadow-gray-200/50 border border-gray-100">
            <Icon className="h-6 w-6" />
          </div>
        </motion.div>
      ))}

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm text-violet-700">
              <TrendingUp size={14} />
              <span>Trusted by 50,000+ creators</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Boost your{" "}
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                social presence
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-500">
              Grow your Instagram, TikTok, and YouTube with premium likes, followers, and views.
              Simple balance system — top up and start growing instantly.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/top-up">
                <Button size="lg">
                  <Wallet size={18} />
                  Top Up Balance
                </Button>
              </Link>
              <Link href="/#services">
                <Button variant="outline" size="lg">
                  Explore Services
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { icon: Users, label: "Followers", value: "Real & Active" },
                { icon: Eye, label: "Views", value: "High Retention" },
                { icon: TrendingUp, label: "Growth", value: "Fast Delivery" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-50">
                    <Icon size={18} className="text-violet-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">{label}</p>
                    <p className="text-sm font-medium text-gray-900">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-200/40 to-indigo-200/40 blur-2xl" />

              <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-200/50">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{isLoggedIn ? "Your Balance" : "Demo Balance"}</p>
                    <p className="text-3xl font-bold text-gray-900">{isLoggedIn ? formattedBalance : "£50.00"}</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600">
                    <Wallet size={22} className="text-white" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-xl bg-gray-50 p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#833AB4] to-[#E4405F]">
                        <InstagramIcon size={14} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">IG Followers</p>
                        <p className="text-xs text-gray-400">1,000 followers</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-emerald-600">Completed</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-gray-50 p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#00f2ea] to-[#ff0050]">
                        <TikTokIcon className="h-3.5 w-3.5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">TT Views</p>
                        <p className="text-xs text-gray-400">25,000 views</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-amber-600">In Progress</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-gray-50 p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600">
                        <YoutubeIcon size={14} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">YT Likes</p>
                        <p className="text-xs text-gray-400">500 likes</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-violet-600">Processing</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserPlus, Wallet, MousePointerClick, BarChart3, ArrowRight, CheckCircle, ChevronDown } from "lucide-react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import { BrowserMockup } from "@/components/ui/Placeholder";
import { InstagramIcon, TikTokIcon, YoutubeIcon } from "@/components/ui/SocialIcons";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Your Account",
    description: "Sign up with just your name and email. No credit card required to get started. Your account is ready in seconds.",
    details: [
      "Quick email registration",
      "No credit card needed upfront",
      "Instant account activation",
      "Secure encrypted data",
    ],
  },
  {
    icon: Wallet,
    step: "02",
    title: "Top Up Your Balance",
    description: "Add funds to your account using any major payment method. Choose from quick amounts or enter a custom value. Minimum top-up is just £10.",
    details: [
      "Multiple payment methods",
      "Minimum £10 top-up",
      "Balance never expires",
      "Instant credit to account",
    ],
  },
  {
    icon: MousePointerClick,
    step: "03",
    title: "Choose Your Service",
    description: "Browse services by platform — Instagram, TikTok, or YouTube. Select likes, followers, or views, pick your package size, and confirm your order.",
    details: [
      "3 platforms supported",
      "Likes, followers & views",
      "Multiple package sizes",
      "One-click ordering",
    ],
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Track Your Orders",
    description: "Monitor every order in real-time from your dashboard. See status updates, transaction history, and your current balance — all in one place.",
    details: [
      "Real-time status tracking",
      "Full transaction history",
      "Filter by platform & status",
      "Balance overview",
    ],
  },
];

const platforms = [
  {
    name: "Instagram",
    icon: InstagramIcon,
    services: "Likes, Followers, Views",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
  },
  {
    name: "TikTok",
    icon: TikTokIcon,
    services: "Likes, Followers, Views",
    gradient: "from-[#00f2ea] to-[#ff0050]",
  },
  {
    name: "YouTube",
    icon: YoutubeIcon,
    services: "Likes, Followers, Views",
    gradient: "from-[#FF0000] to-[#CC0000]",
  },
];

const fakeOrders = [
  { id: "#ORD-2841", service: "Instagram Followers", qty: "1,000", status: "Completed", statusColor: "bg-emerald-50 text-emerald-600" },
  { id: "#ORD-2842", service: "TikTok Likes", qty: "5,000", status: "In Progress", statusColor: "bg-violet-50 text-violet-600" },
  { id: "#ORD-2843", service: "YouTube Views", qty: "10,000", status: "Pending", statusColor: "bg-amber-50 text-amber-600" },
];

const processFaqItems = [
  {
    id: "faq-process-1",
    question: "What happens after I place an order?",
    answer: "Once your order is confirmed, our system begins processing it immediately. You will see the status change to \"In Progress\" on your dashboard. Delivery starts within minutes for most services, and you can track progress in real time until completion.",
  },
  {
    id: "faq-process-2",
    question: "Is my social media account safe?",
    answer: "Absolutely. We never ask for your password or login credentials. All we need is your public username or post URL. Our delivery methods comply with each platform's usage patterns, so your account remains secure and in good standing.",
  },
  {
    id: "faq-process-3",
    question: "How long does delivery take?",
    answer: "Most orders begin delivering within 0-30 minutes of being placed. Smaller packages are often completed within a few hours, while larger orders may be spread over 24-72 hours to ensure natural-looking growth and maximum retention.",
  },
  {
    id: "faq-process-4",
    question: "What if my order is not delivered?",
    answer: "In the rare event that an order cannot be fulfilled, your balance is automatically refunded. You can also contact our support team at any time through your dashboard. We offer a full money-back guarantee for any undelivered services.",
  },
];

export default function HowItWorksPage() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  return (
    <section className="py-12 lg:py-20">
      <Container>
        {/* Hero heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              How It{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Works
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-500">
              Four simple steps from sign-up to delivery. We designed the process to be as effortless as possible.
            </p>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="mt-16 space-y-8">
          {steps.map(({ icon: Icon, step, title, description, details }, i) => (
            <ScrollReveal key={step} delay={i * 0.1}>
              <div className={`flex flex-col gap-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:p-8 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50">
                      <Icon size={22} className="text-violet-600" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-violet-600">STEP {step}</span>
                      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-gray-500">{description}</p>
                </div>

                <div className="flex-1">
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                    <ul className="flex flex-col gap-3">
                      {details.map((detail) => (
                        <li key={detail} className="flex items-center gap-3 text-sm text-gray-600">
                          <CheckCircle size={16} className="shrink-0 text-violet-600" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Visual Process Timeline — Dashboard Preview */}
        <ScrollReveal delay={0.2}>
          <div className="mt-24">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                See the{" "}
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Platform in Action
                </span>
              </h2>
              <p className="mt-4 text-gray-500">
                A clean, intuitive dashboard puts everything at your fingertips — from balance overview to real-time order tracking.
              </p>
            </div>

            <div className="mt-12">
              <BrowserMockup>
                {/* Stat cards */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="text-xs font-medium text-gray-400">Account Balance</p>
                    <p className="mt-1 text-xl font-bold text-gray-900">£84.20</p>
                    <p className="mt-1 text-xs text-emerald-500">+£50.00 last top-up</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="text-xs font-medium text-gray-400">Active Orders</p>
                    <p className="mt-1 text-xl font-bold text-gray-900">2</p>
                    <p className="mt-1 text-xs text-violet-500">Processing now</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="text-xs font-medium text-gray-400">Total Delivered</p>
                    <p className="mt-1 text-xl font-bold text-gray-900">16,000</p>
                    <p className="mt-1 text-xs text-gray-400">Across all platforms</p>
                  </div>
                </div>

                {/* Order list */}
                <div className="mt-5 space-y-2">
                  {fakeOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
                          <BarChart3 size={14} className="text-gray-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{order.service}</p>
                          <p className="text-xs text-gray-400">{order.id} &middot; {order.qty}</p>
                        </div>
                      </div>
                      <span className={`rounded-full px-3 py-1 text-xs font-medium ${order.statusColor}`}>
                        {order.status}
                      </span>
                    </div>
                  ))}
                </div>
              </BrowserMockup>
            </div>
          </div>
        </ScrollReveal>

        {/* Platform Comparison */}
        <ScrollReveal delay={0.2}>
          <div className="mt-24">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Works with All Your{" "}
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Favourite Platforms
                </span>
              </h2>
              <p className="mt-4 text-gray-500">
                Grow your presence across the biggest social networks from a single dashboard.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {platforms.map((platform, i) => {
                const Icon = platform.icon;
                return (
                  <ScrollReveal key={platform.name} delay={i * 0.1}>
                    <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${platform.gradient} p-px`}>
                      <div className="relative rounded-[15px] bg-white p-6 text-center">
                        <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${platform.gradient}`}>
                          <Icon size={28} className="text-white" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-gray-900">{platform.name}</h3>
                        <p className="mt-1 text-sm text-gray-500">{platform.services}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* FAQ Mini-Section */}
        <ScrollReveal delay={0.2}>
          <div className="mt-24">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Common{" "}
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="mt-4 text-gray-500">
                Quick answers about the ordering process, safety, and delivery.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-3xl">
              <div className="flex flex-col gap-3">
                {processFaqItems.map((item, i) => (
                  <ScrollReveal key={item.id} delay={i * 0.05}>
                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                      <button
                        onClick={() => setOpenFaqId(openFaqId === item.id ? null : item.id)}
                        className="flex w-full items-center justify-between p-5 text-left"
                      >
                        <span className="text-sm font-medium text-gray-900 pr-4">{item.question}</span>
                        <motion.div
                          animate={{ rotate: openFaqId === item.id ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="shrink-0"
                        >
                          <ChevronDown size={18} className="text-gray-400" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {openFaqId === item.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                          >
                            <div className="px-5 pb-5">
                              <p className="text-sm leading-relaxed text-gray-500">{item.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-500">Ready to get started?</p>
            <div className="mt-4 flex justify-center gap-4">
              <Link href="/sign-up">
                <Button size="lg">
                  <UserPlus size={18} />
                  Create Account
                </Button>
              </Link>
              <Link href="/top-up">
                <Button variant="outline" size="lg">
                  Top Up Balance
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Target, Shield, Users, Globe, Zap, Award } from "lucide-react";
import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { InstagramIcon, TikTokIcon, YoutubeIcon } from "@/components/ui/SocialIcons";

const values = [
  { icon: Shield, title: "Reliable Service", description: "We deliver on every order with consistent quality and transparent tracking. Your satisfaction is guaranteed." },
  { icon: Users, title: "Creator-Focused", description: "Built by creators, for creators. We understand what it takes to grow on social media and designed our platform around those needs." },
  { icon: Zap, title: "Fast Delivery", description: "Most orders begin processing within minutes. We optimize our systems for speed without compromising quality." },
  { icon: Globe, title: "Multi-Platform", description: "One account, three major platforms. Manage your Instagram, TikTok, and YouTube growth from a single dashboard." },
  { icon: Target, title: "Transparent Pricing", description: "No hidden fees, no subscriptions. Top up your balance and spend it however you want, whenever you want." },
  { icon: Award, title: "Quality First", description: "We prioritize quality engagement over quantity. Every service is designed to look natural and deliver lasting results." },
];

const stats = [
  { value: "50K+", label: "Active Creators" },
  { value: "2M+", label: "Orders Delivered" },
  { value: "99.8%", label: "Completion Rate" },
  { value: "24/7", label: "Support Available" },
];

const teamMembers = [
  {
    name: "Sarah Mitchell",
    role: "CEO & Co-Founder",
    bio: "Former social media strategist who saw the gap between expensive agencies and DIY growth tools.",
    gradient: "from-violet-300 to-indigo-300",
  },
  {
    name: "James Chen",
    role: "CTO",
    bio: "Full-stack engineer with a decade of experience building scalable platforms at high-growth startups.",
    gradient: "from-pink-300 to-rose-300",
  },
  {
    name: "Amara Okafor",
    role: "Head of Growth",
    bio: "Data-driven marketer passionate about helping creators unlock their full audience potential.",
    gradient: "from-amber-300 to-orange-300",
  },
  {
    name: "Lucas Weber",
    role: "Lead Engineer",
    bio: "Systems architect obsessed with uptime, speed, and delivering a seamless user experience.",
    gradient: "from-emerald-300 to-teal-300",
  },
];

const platforms = [
  {
    name: "Instagram",
    icon: InstagramIcon,
    gradient: "from-pink-500 via-rose-500 to-orange-500",
    metric: "15K+ Active Users",
    description:
      "Boost your followers, likes, and Reels views with targeted delivery that keeps your engagement rate healthy and your profile growing organically.",
  },
  {
    name: "TikTok",
    icon: TikTokIcon,
    gradient: "from-cyan-500 via-teal-500 to-emerald-500",
    metric: "10K+ Active Users",
    description:
      "Accelerate your reach on the fastest-growing platform. Get more views, followers, and shares to push your content onto the For You page.",
  },
  {
    name: "YouTube",
    icon: YoutubeIcon,
    gradient: "from-red-500 via-rose-500 to-pink-500",
    metric: "8K+ Active Users",
    description:
      "Grow your subscriber base and watch hours with real engagement. We help your videos surface in search and recommendations.",
  },
];

export default function AboutPage() {
  return (
    <section className="py-12 lg:py-20">
      <Container>
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              About{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                GrowPulse
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-500">
              We&apos;re on a mission to make social media growth accessible, affordable, and effortless for every creator. Whether you&apos;re just starting out or scaling your brand, GrowPulse gives you the tools to grow faster.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label }, i) => (
            <ScrollReveal key={label} delay={i * 0.1}>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
                <p className="text-3xl font-bold text-gray-900">{value}</p>
                <p className="mt-1 text-sm text-gray-500">{label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Values */}
        <ScrollReveal delay={0.2}>
          <div className="mt-20">
            <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">Our Values</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
              Everything we build is guided by these core principles.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(({ icon: Icon, title, description }, i) => (
            <ScrollReveal key={title} delay={i * 0.08}>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-gray-300 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50">
                  <Icon size={22} className="text-violet-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Our Story */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20 rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-indigo-50 p-8 text-center lg:p-12">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our Story</h2>
            <div className="mx-auto mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-gray-500">
              <p>
                GrowPulse started in 2024 when a group of social media creators realized that growing an online presence shouldn&apos;t require expensive agencies or complicated marketing tools.
              </p>
              <p>
                We built a platform that puts creators first — a simple balance-based system where you only pay for what you need, with transparent pricing and real-time order tracking. No subscriptions, no hidden fees, no complexity.
              </p>
              <p>
                Today, we serve over 50,000 active creators across Instagram, TikTok, and YouTube, helping them reach new audiences and build their brands. Our mission remains the same: make social media growth accessible to everyone.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Team Section */}
        <ScrollReveal delay={0.2}>
          <div className="mt-20">
            <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">Meet the Team</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
              The people behind GrowPulse who are dedicated to helping creators succeed.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map(({ name, role, bio, gradient }, i) => (
            <ScrollReveal key={name} delay={i * 0.1}>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all hover:border-gray-300 hover:shadow-md">
                <div
                  className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${gradient}`}
                >
                  <span className="text-2xl font-bold text-white">
                    {name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{name}</h3>
                <p className="mt-1 text-sm font-medium text-violet-600">{role}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{bio}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Platform Coverage Section */}
        <ScrollReveal delay={0.2}>
          <div className="mt-20">
            <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">Platform Coverage</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
              One dashboard, three major platforms. Here&apos;s how GrowPulse helps you dominate each one.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map(({ name, icon: Icon, gradient, metric, description }, i) => (
            <ScrollReveal key={name} delay={i * 0.1}>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-gray-300 hover:shadow-md">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${gradient}`}
                >
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{name}</h3>
                <p className="mt-1 text-sm font-semibold text-violet-600">{metric}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mission Statement Block */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20 rounded-2xl bg-gradient-to-br from-violet-100/80 via-indigo-50/60 to-purple-100/80 p-8 text-center lg:p-14">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
                Our mission is to{" "}
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  democratise
                </span>{" "}
                social media growth
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-500">
                We believe every creator — regardless of budget, location, or follower count — deserves access to the same growth tools that top influencers and brands use. GrowPulse levels the playing field so that talent and consistency, not marketing spend, determine who gets seen.
              </p>
            </motion.div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

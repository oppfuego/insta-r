"use client";

import { Wallet, Globe, Wand2, Zap, LayoutDashboard } from "lucide-react";
import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";

const benefits = [
  {
    icon: Wallet,
    title: "Flexible Balance",
    description: "Top up any amount. No subscriptions, no commitments. Your balance never expires and works across all platforms.",
  },
  {
    icon: Globe,
    title: "Multi-Platform",
    description: "One account for Instagram, TikTok, and YouTube. Manage all your social growth from a single dashboard.",
  },
  {
    icon: Wand2,
    title: "Easy to Use",
    description: "Pick a service, choose a quantity, and confirm. No complicated setup — your order starts processing immediately.",
  },
  {
    icon: Zap,
    title: "Fast Orders",
    description: "Most orders begin within minutes. Small packages complete in hours, larger ones delivered gradually for a natural look.",
  },
  {
    icon: LayoutDashboard,
    title: "Clean Dashboard",
    description: "Track every order, view transaction history, monitor your balance — all in a modern, intuitive interface.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="relative py-14 lg:py-20">
      <Container>
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                GrowPulse
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              We built the platform we wished existed — simple, fast, and transparent.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, description }, i) => (
            <ScrollReveal key={title} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-violet-200 hover:shadow-md">
                <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-violet-100/40 blur-2xl transition-all group-hover:bg-violet-100/70" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 transition-colors group-hover:bg-violet-100">
                    <Icon size={22} className="text-violet-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

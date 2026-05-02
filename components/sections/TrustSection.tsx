"use client";

import { ShieldCheck, Lock, KeyRound, Scale } from "lucide-react";
import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { BrowserMockup } from "@/components/ui/Placeholder";

const trustIndicators = [
  {
    icon: ShieldCheck,
    title: "PCI-DSS Compliant",
    description:
      "All transactions meet the highest payment-card industry security standards.",
  },
  {
    icon: Lock,
    title: "256-bit Encryption",
    description:
      "Your data is protected with bank-grade TLS encryption at every step.",
  },
  {
    icon: KeyRound,
    title: "No Password Required",
    description:
      "We never ask for your social-media passwords. Your accounts stay yours.",
  },
  {
    icon: Scale,
    title: "GDPR Compliant",
    description:
      "Full compliance with European data-protection regulations and privacy laws.",
  },
];

const platformFeatures = [
  { label: "Multi-Platform Support", value: "3 Platforms" },
  { label: "Wallet-Based Checkout", value: "Instant" },
  { label: "Order Tracking Dashboard", value: "Real-time" },
  { label: "Flexible Package Setup", value: "Custom" },
];

export default function TrustSection() {
  return (
    <section className="relative py-14 lg:py-20">
      <Container>
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              A Simple Workspace for{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Social Growth
              </span>{" "}
              Orders
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Security and reliability are at the core of everything we build.
              Your data, your money, and your social accounts are always safe
              with GrowPulse.
            </p>
          </div>
        </ScrollReveal>

        {/* Trust indicator cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustIndicators.map(({ icon: Icon, title, description }, i) => (
            <ScrollReveal key={title} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-violet-200 hover:shadow-md">
                <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-violet-100/40 blur-2xl transition-all group-hover:bg-violet-100/70" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 transition-colors group-hover:bg-violet-100">
                    <Icon size={22} className="text-violet-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Browser mockup with platform features */}
        <ScrollReveal delay={0.2}>
          <div className="mx-auto mt-16 max-w-3xl">
            <BrowserMockup>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {platformFeatures.map(({ label, value }) => (
                  <div
                    key={label}
                    className="rounded-xl bg-gradient-to-br from-violet-50 to-indigo-50 p-4 text-center"
                  >
                    <p className="text-2xl font-bold text-gray-900">{value}</p>
                    <p className="mt-1 text-xs font-medium text-gray-500">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                {[
                  {
                    icon: "💳",
                    title: "Wallet Top-Up",
                    text: "Add funds to your balance and use them across all platforms and services.",
                  },
                  {
                    icon: "📦",
                    title: "Pick a Package",
                    text: "Choose from fixed packages or create a custom order with your preferred quantity.",
                  },
                  {
                    icon: "📊",
                    title: "Track Your Orders",
                    text: "Monitor order status, delivery progress, and transaction history in real time.",
                  },
                ].map((t) => (
                  <div
                    key={t.title}
                    className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-50 text-sm">
                      {t.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-gray-900">
                        {t.title}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-gray-500">
                        {t.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </BrowserMockup>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

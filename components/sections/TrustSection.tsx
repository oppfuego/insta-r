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

const fakeStats = [
  { label: "Orders Completed", value: "1.2M+" },
  { label: "Avg. Satisfaction", value: "4.9/5" },
  { label: "Uptime", value: "99.97%" },
  { label: "Countries Served", value: "140+" },
];

export default function TrustSection() {
  return (
    <section className="relative py-14 lg:py-20">
      <Container>
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                50,000+ Creators
              </span>{" "}
              Worldwide
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

        {/* Browser mockup with testimonial stats */}
        <ScrollReveal delay={0.2}>
          <div className="mx-auto mt-16 max-w-3xl">
            <BrowserMockup>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {fakeStats.map(({ label, value }) => (
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
                    initials: "AK",
                    name: "Alex K.",
                    text: "Best growth service I have ever used. Instant delivery and great support.",
                    rating: 5,
                  },
                  {
                    initials: "MR",
                    name: "Maria R.",
                    text: "Transparent pricing, no hidden fees. My followers look completely organic.",
                    rating: 5,
                  },
                  {
                    initials: "JT",
                    name: "James T.",
                    text: "The balance system is genius. I top up once and use it across all platforms.",
                    rating: 5,
                  },
                ].map((t) => (
                  <div
                    key={t.initials}
                    className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-xs font-bold text-white">
                      {t.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-gray-900">
                          {t.name}
                        </p>
                        <div className="flex gap-0.5">
                          {Array.from({ length: t.rating }).map((_, j) => (
                            <span
                              key={j}
                              className="text-[10px] text-amber-400"
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
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

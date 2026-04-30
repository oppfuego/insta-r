"use client";

import { Check, X } from "lucide-react";
import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";

const features = [
  {
    label: "Balance System",
    ours: "Pay-as-you-go balance",
    theirs: "Recurring subscription",
  },
  {
    label: "Multi-Platform",
    ours: "Instagram, TikTok & YouTube",
    theirs: "Single platform only",
  },
  {
    label: "Transparent Pricing",
    ours: "Clear per-unit pricing",
    theirs: "Hidden fees & upsells",
  },
  {
    label: "Real-Time Tracking",
    ours: "Live order dashboard",
    theirs: "No tracking available",
  },
  {
    label: "Instant Start",
    ours: "Orders begin in minutes",
    theirs: "24-48 hour wait time",
  },
  {
    label: "No Password",
    ours: "Never asks for login",
    theirs: "Requires account access",
  },
];

export default function ComparisonSection() {
  return (
    <section className="relative py-14 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-50/50 to-transparent" />

      <Container className="relative">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                GrowPulse
              </span>{" "}
              vs Other Platforms
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              See why thousands of creators choose GrowPulse over the
              competition.
            </p>
          </div>
        </ScrollReveal>

        {/* Comparison header row */}
        <ScrollReveal delay={0.1}>
          <div className="mx-auto mt-14 max-w-3xl">
            <div className="mb-4 grid grid-cols-[1fr_1fr_1fr] gap-4 px-2 text-center text-sm font-semibold text-gray-400 sm:px-4">
              <span className="text-left text-gray-900">Feature</span>
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                GrowPulse
              </span>
              <span>Others</span>
            </div>

            {/* Feature rows */}
            <div className="space-y-3">
              {features.map(({ label, ours, theirs }, i) => (
                <ScrollReveal key={label} delay={0.1 + i * 0.06}>
                  <div className="grid grid-cols-[1fr_1fr_1fr] items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-violet-200 hover:shadow-md sm:p-5">
                    {/* Feature name */}
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {label}
                      </p>
                    </div>

                    {/* GrowPulse side */}
                    <div className="flex items-center gap-2 justify-center">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                        <Check size={14} className="text-emerald-500" />
                      </div>
                      <span className="hidden text-sm text-gray-600 sm:inline">
                        {ours}
                      </span>
                    </div>

                    {/* Other platforms side */}
                    <div className="flex items-center gap-2 justify-center">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50">
                        <X size={14} className="text-red-400" />
                      </div>
                      <span className="hidden text-sm text-gray-400 sm:inline">
                        {theirs}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

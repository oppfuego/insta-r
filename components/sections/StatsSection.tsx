"use client";

import { Layers, Sparkles, Zap, SlidersHorizontal } from "lucide-react";
import Container from "@/components/layout/Container";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import ScrollReveal from "@/components/animations/ScrollReveal";

const stats = [
  { icon: Layers, value: 3, suffix: "+", label: "Platforms", description: "Instagram, TikTok, YouTube" },
  { icon: Sparkles, value: 9, suffix: "+", label: "Services", description: "Likes, followers & views" },
  { icon: Zap, value: 5, suffix: "min", label: "Activation", description: "Fast order processing" },
  { icon: SlidersHorizontal, value: 100, suffix: "%", label: "Flexible", description: "Pay-as-you-go balance" },
];

export default function StatsSection() {
  return (
    <section className="relative py-12 lg:py-16">
      <Container>
        <ScrollReveal>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {stats.map(({ icon: Icon, value, suffix, label, description }, i) => (
              <div
                key={label}
                className="group relative rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50">
                  <Icon size={22} className="text-violet-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 lg:text-4xl">
                  <AnimatedCounter target={value} suffix={suffix} duration={1.5 + i * 0.2} />
                </div>
                <p className="mt-1 text-sm font-medium text-gray-900">{label}</p>
                <p className="mt-0.5 text-xs text-gray-400">{description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

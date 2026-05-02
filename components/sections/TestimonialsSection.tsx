"use client";

import { Rocket, Eye, Megaphone, BadgeCheck, Play, LayoutGrid } from "lucide-react";
import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";

const useCases = [
  {
    icon: Rocket,
    title: "Launching a New Profile",
    description: "Give a fresh account an initial boost so your content reaches people from day one.",
  },
  {
    icon: Eye,
    title: "Testing Content Visibility",
    description: "See how your posts perform with higher engagement before investing in larger campaigns.",
  },
  {
    icon: Megaphone,
    title: "Supporting a Campaign",
    description: "Amplify a product launch, collaboration, or seasonal push with targeted engagement.",
  },
  {
    icon: BadgeCheck,
    title: "Building Early Social Proof",
    description: "Help new pages look established so that organic visitors are more likely to follow and engage.",
  },
  {
    icon: Play,
    title: "Growing Video Reach",
    description: "Increase views on Reels, TikToks, or YouTube videos to improve algorithmic distribution.",
  },
  {
    icon: LayoutGrid,
    title: "Managing Multiple Platforms",
    description: "Use one wallet and dashboard to handle growth across Instagram, TikTok, and YouTube.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-14 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-50/50 to-transparent" />

      <Container className="relative">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Use Cases for Every{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Growth Goal
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Whether you&apos;re starting out or scaling up, here are common ways creators use GrowPulse.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map(({ icon: Icon, title, description }, i) => (
            <ScrollReveal key={title} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-violet-200 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 transition-colors group-hover:bg-violet-100">
                  <Icon size={22} className="text-violet-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">{description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

"use client";

import { Star } from "lucide-react";
import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="relative py-14 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-50/50 to-transparent" />

      <Container className="relative">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              What Creators{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Say
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Real reviews from real creators who grew their social media presence with GrowPulse.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-sm font-bold text-white">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className={j < t.rating ? "fill-amber-400 text-amber-400" : "text-gray-200"}
                    />
                  ))}
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-500">{t.text}</p>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400">{t.platform}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

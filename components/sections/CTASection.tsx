"use client";

import Link from "next/link";
import { ArrowRight, Wallet } from "lucide-react";
import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="relative py-14 lg:py-20">
      <Container>
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-violet-200">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-100/80 via-indigo-50/60 to-purple-100/80" />
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-violet-200/50 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-200/50 blur-3xl" />

            <div className="relative px-6 py-16 text-center sm:px-12 lg:py-24">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                Start growing{" "}
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  today
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
                Join thousands of creators who are already boosting their social media presence with GrowPulse.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
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
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

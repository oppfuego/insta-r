"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { faqItems } from "@/data/faq";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="relative py-14 lg:py-20" id="faq">
      <Container>
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Everything you need to know about our platform and services.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="flex flex-col gap-3">
            {faqItems.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.05}>
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpenId(openId === item.id ? null : item.id)}
                    className="flex w-full items-center justify-between p-5 text-left"
                  >
                    <span className="text-sm font-medium text-gray-900 pr-4">{item.question}</span>
                    <motion.div
                      animate={{ rotate: openId === item.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0"
                    >
                      <ChevronDown size={18} className="text-gray-400" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openId === item.id && (
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
      </Container>
    </section>
  );
}

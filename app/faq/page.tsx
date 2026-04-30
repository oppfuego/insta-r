"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { faqItems } from "@/data/faq";

const categories = Array.from(new Set(faqItems.map((item) => item.category)));

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = activeCategory
    ? faqItems.filter((item) => item.category === activeCategory)
    : faqItems;

  return (
    <section className="py-12 lg:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="mt-4 text-gray-500">
              Find answers to common questions about our platform, services, and
              policies.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory(null)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === null
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              {filtered.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className="rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-sm"
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      className="flex w-full items-center justify-between px-6 py-4 text-left"
                    >
                      <span className="pr-4 text-sm font-medium text-gray-900">
                        {item.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-gray-100 px-6 py-4">
                            <p className="text-sm leading-relaxed text-gray-500">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center">
              <MessageCircle size={32} className="mx-auto text-violet-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Still have questions?
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Our support team is here to help. Get in touch and we&apos;ll
                respond within 24 hours.
              </p>
              <Link href="/contact" className="mt-4 inline-block">
                <Button size="sm">Contact Support</Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

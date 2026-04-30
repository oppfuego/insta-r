"use client";

import {UserPlus, Wallet, MousePointerClick, BarChart3} from "lucide-react";
import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";

const steps = [
    {
        icon: UserPlus,
        title: "Create Account",
        description: "Sign up in seconds with just your email. No complex verification needed.",
        step: "01",
    },
    {
        icon: Wallet,
        title: "Top Up Balance",
        description: "Add funds to your account using any major payment method. No subscriptions.",
        step: "02",
    },
    {
        icon: MousePointerClick,
        title: "Choose Service",
        description: "Pick your platform, service type, and package. Confirm your order in one click.",
        step: "03",
    },
    {
        icon: BarChart3,
        title: "Track Orders",
        description: "Monitor your order progress in real-time from your personal dashboard.",
        step: "04",
    },
];

export default function HowItWorksSection() {
    return (
        <section className="relative py-14 lg:py-20" id="how-it-works">
            <Container>
                <ScrollReveal>
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            How It{" "}
                            <span
                                className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Works
              </span>
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-gray-500">
                            Get started in four simple steps. From sign-up to delivery, we make social growth
                            effortless.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="relative mt-14">
                    <div
                        className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-violet-300 via-violet-200 to-transparent lg:block"/>

                    <div className="grid gap-8 lg:gap-12">
                        {steps.map(({icon: Icon, title, description, step}, i) => (
                            <ScrollReveal key={step} delay={i * 0.15}>
                                <div
                                    className={`flex flex-col items-center gap-6 lg:flex-row ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                                    <div
                                        className={`flex-1 flex flex-col ${
                                            i % 2 === 1
                                                ? "lg:items-end lg:text-right"
                                                : "lg:items-start lg:text-left"
                                        }`}
                                    >
                                        <div
                                            className={`inline-flex items-center gap-3 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                                            <span className="text-xs font-bold text-violet-600">{step}</span>
                                            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                                        </div>
                                        <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-500">{description}</p>
                                    </div>

                                    <div
                                        className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-200 bg-violet-50 shadow-lg shadow-violet-100">
                                        <Icon size={24} className="text-violet-600"/>
                                    </div>

                                    <div className="flex-1"/>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

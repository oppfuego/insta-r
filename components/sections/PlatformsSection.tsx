"use client";

import { CheckCircle } from "lucide-react";
import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { platformInfo } from "@/data/services";
import { InstagramIcon, TikTokIcon, YoutubeIcon } from "@/components/ui/SocialIcons";

const platformIcons = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  youtube: YoutubeIcon,
};

const platformColors = {
  instagram: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
  tiktok: "from-[#00f2ea] to-[#ff0050]",
  youtube: "from-[#FF0000] to-[#CC0000]",
};

export default function PlatformsSection() {
  return (
    <section className="relative py-14 lg:py-20" id="platforms">
      <Container>
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Supported{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Platforms
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              Grow your presence across the biggest social media platforms with our tailored services.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {(Object.keys(platformInfo) as Array<keyof typeof platformInfo>).map((key, i) => {
            const platform = platformInfo[key];
            const Icon = platformIcons[key];

            return (
              <ScrollReveal key={key} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md">
                  <div className={`absolute top-0 right-0 h-32 w-32 rounded-full bg-gradient-to-br ${platformColors[key]} opacity-[0.04] blur-2xl transition-opacity group-hover:opacity-[0.08]`} />

                  <div className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-br ${platformColors[key]} p-3.5 shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-gray-900">{platform.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{platform.description}</p>

                  <ul className="mt-5 flex flex-col gap-2">
                    {platform.services.map((service) => (
                      <li key={service} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle size={14} className="shrink-0 text-violet-600" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

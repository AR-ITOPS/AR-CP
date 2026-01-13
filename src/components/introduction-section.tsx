"use client";

import { Tag } from "@/components/ui/tag";

export function IntroductionSection() {
  const argument =
    "merupakan perusahaan profesional di bidang industri jasa terintegrasi yang menyediakan solusi menyeluruh untuk kebutuhan transportasi perjalanan, event, dan kebutuhan bisnis. Dengan dukungan tim profesional, berpengalaman.";

  return (
    <section className="py-12 bg-white/50 backdrop-blur-sm">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4">
          <Tag>About Us</Tag>

          <h2 className="mt-8 font-semibold text-3xl md:text-5xl text-neutral-900 tracking-tight">
            ARTOUR INDONESIA
          </h2>

          <div className="mt-8 space-y-6">
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
              <span className="font-medium text-neutral-900">ARTOUR INDONESIA</span> {argument}
            </p>

            <p className="text-lg md:text-2xl font-medium text-blue-600 leading-relaxed mt-8">
              "Menghadirkan solusi layanan yang aman, nyaman, dan dapat diandalkan."
            </p>
          </div>

          <div className="mt-12 w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" />
        </div>
      </div>
    </section>
  );
}

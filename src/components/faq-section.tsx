"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "Seberapa berpengalaman perusahaan Anda?",
    answer:
      "Kami memiliki pengalaman lebih dari 10 tahun dalam industri transport provider, event management, serta pengadaan barang dan jasa, sehingga mampu menangani berbagai kebutuhan klien secara profesional dan terpercaya.",
  },
  {
    question: "Siapa yang menangani layanan dan operasional perusahaan?",
    answer:
      "Seluruh layanan kami ditangani oleh tim profesional yang memiliki keahlian terbaik di bidangnya masing-masing, berpengalaman, dan berkomitmen memberikan hasil maksimal.",
  },
  {
    question: "Bagaimana kualitas layanan pelanggan yang diberikan?",
    answer:
      "Kami menyediakan layanan pelanggan yang responsif dan solutif, dengan mengutamakan kenyamanan, kepuasan, serta pengalaman terbaik bagi setiap pelanggan.",
  },
  {
    question: "Apa keunggulan solusi yang ditawarkan perusahaan?",
    answer:
      "Kami menghadirkan solusi yang inovatif dan berkelanjutan, disesuaikan dengan kebutuhan pelanggan untuk memastikan efektivitas, efisiensi, dan nilai jangka panjang.",
  },
];

export function FAQSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section id="faqs" className="py-12">
      <div className="container flex flex-col items-center justify-center">
        <Tag>Faqs</Tag>
        <h2 className="mt-6 max-w-xl text-center font-medium text-6xl text-neutral-900">
        </h2>
        <div className="mt-12 flex max-w-3xl flex-col gap-6">
          {FAQS.map((faq, index) => (
            // biome-ignore lint/a11y/noStaticElementInteractions: ignored
            <div
              key={index}
              className="cursor-pointer rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-colors hover:bg-neutral-50"
              onClick={() => setSelectedIndex(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-lg text-neutral-900">{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={cn(
                    "feather feather-plus shrink-0 text-red-500",
                    selectedIndex === index &&
                    "rotate-45 transition duration-300",
                  )}
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
              <AnimatePresence>
                {selectedIndex === index && (
                  <motion.div
                    initial={{ height: 0, marginTop: 0 }}
                    animate={{ height: "auto", marginTop: 16 }}
                    exit={{ height: 0, marginTop: 0 }}
                    className={cn("mt-4 overflow-hidden")}
                  >
                    <p className="text-neutral-500 font-light leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

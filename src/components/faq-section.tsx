"use client";

import { AnimatePresence, motion, useInView } from "motion/react";
import { useState, useRef } from "react";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "Seberapa berpengalaman perusahaan Anda?",
    answer:
      "Berpengalaman lebih dari 10 tahun dalam industri transport provider, event management, pengadaan barang dan jasa.",
  },
  {
    question: "Apa saja layanan yang ditawarkan oleh ARTOUR INDONESIA?",
    answer:
      "ARTOUR INDONESIA menyediakan berbagai layanan terintegrasi seperti transportasi perjalanan, pengelolaan event, dan solusi kebutuhan bisnis lainnya.",
  },
  {
    question: "Bagaimana cara menghubungi ARTOUR INDONESIA?",
    answer:
      "Anda dapat menghubungi kami melalui telepon di 0822-4500-9991 atau email di artourindonesia@gmail.com.",
  },
  {
    question: "Apakah ARTOUR INDONESIA melayani event skala besar?",
    answer:
      "Ya, kami memiliki tim profesional dan berpengalaman yang siap menangani event dari berbagai skala, baik kecil maupun besar.",
  },
  {
    question: "Di mana lokasi kantor ARTOUR INDONESIA?",
    answer:
      "Kantor kami berlokasi di Green Oase Residence B15-17, Tugurejo, Kec. Tugu, Kota Semarang, Jawa Tengah 50182.",
  },
];

export function FAQSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="faqs"
      className="py-12"
    >
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
    </motion.section>
  );
}

"use client";

import Image from "next/image";
import { Tag } from "@/components/ui/tag";
import CardBg from "@/assets/card-bg.png";

export function FeaturesSection() {
  return (
    <section id="features" className="py-12">
      <div className="container flex flex-col items-center justify-center">
        <Tag>Vision, Mission & Values</Tag>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 w-full">
          {/* Vision Card */}
          <div className="group relative flex flex-col justify-start overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 hover:border-neutral-300 transition-colors shadow-sm">
            {/* Background Image */}
            <Image
              src={CardBg}
              alt="Card Background"
              fill
              className="object-cover opacity-80"
              priority
            />
            {/* Content */}
            <div className="relative z-10">
              <h3 className="font-semibold text-3xl text-neutral-900 mb-6">Vision</h3>
              <div className="flex-grow flex items-center">
                <p className="text-xl text-neutral-600 leading-relaxed font-light">
                  "Menjadi perusahaan terdepan dalam penyediaan layanan
                  transportasi dan penyelenggaraan acara di Indonesia, dengan
                  mengedepankan profesionalisme, kualitas, dan kepuasan klien."
                </p>
              </div>
            </div>
            {/* Decor */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
          </div>

          {/* Mission Card */}
          <div className="group relative flex flex-col justify-start overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 hover:border-neutral-300 transition-colors shadow-sm">
            {/* Background Image */}
            <Image
              src={CardBg}
              alt="Card Background"
              fill
              className="object-cover opacity-80"
              priority
            />
            {/* Content */}
            <div className="relative z-10">
              <h3 className="font-semibold text-3xl text-neutral-900 mb-6">Mission</h3>
              <ul className="space-y-4 text-neutral-600">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 mt-1 block h-2 w-2 rounded-full bg-indigo-500" />
                  <span>
                    Menyediakan layanan terintegrasi untuk perjalanan, event, dan
                    kebutuhan bisnis yang berkualitas.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 mt-1 block h-2 w-2 rounded-full bg-purple-500" />
                  <span>
                    Menghadirkan solusi layanan yang inovatif dengan proses yang
                    andal dan berpengalaman.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 mt-1 block h-2 w-2 rounded-full bg-pink-500" />
                  <span>
                    Membangun hubungan jangka panjang melalui komitmen pada
                    kepuasan dan kepercayaan klien.
                  </span>
                </li>
              </ul>
            </div>
            {/* Decor */}
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
          </div>

          {/* Values Card */}
          <div className="group relative flex flex-col justify-start overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 hover:border-neutral-300 transition-colors shadow-sm">
            {/* Background Image */}
            <Image
              src={CardBg}
              alt="Card Background"
              fill
              className="object-cover opacity-80"
              priority
            />
            {/* Content */}
            <div className="relative z-10">
              <h3 className="font-semibold text-3xl text-neutral-900 mb-6">Our Values</h3>
              <div className="space-y-4">
                {[
                  {
                    label: "Integrity",
                    desc: "Menjunjung kejujuran & tanggung jawab.",
                  },
                  {
                    label: "Collaboration",
                    desc: "Sinergi dalam mencapai tujuan.",
                  },
                  {
                    label: "Empowerment",
                    desc: "Pengembangan diri berkelanjutan.",
                  },
                  {
                    label: "Humility",
                    desc: "Rendah hati & terbuka pada masukan.",
                  },
                  { label: "Equality", desc: "Menghargai perbedaan & inklusif." },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="border-b border-neutral-100 pb-2 last:border-0 last:pb-0"
                  >
                    <span className="block font-bold text-neutral-900 text-sm tracking-wide">
                      {item.label}
                    </span>
                    <span className="block text-sm text-neutral-500">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

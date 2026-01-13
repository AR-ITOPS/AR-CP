"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Fragment } from "react";
import sewa from "@/assets/SEWA.png";
import eo from "@/assets/EO.png";
import mice from "@/assets/MICE.png";
import ticket from "@/assets/TICKET.png";
import barang from "@/assets/barang.png";
import tour from "@/assets/TOUR.png";
import homestay from "@/assets/HOMESTAY.png";
import sparepart from "@/assets/SPAREPAT.png";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";
import CardBg from "@/assets/card-bg.png";

const INTEGRATIONS = [
  {
    name: "Transport Provider",
    icon: sewa,
    description: "Layanan transportasi dengan jenis kendaraan premium yang terbaru dan terawat untuk memenuhi kebutuhan transportasi klien kami, didukung oleh driver profesional dan pelayanan yang ramah",
  },
  {
    name: "Event Organizer",
    icon: eo,
    description: "Melayani kebutuhan klien perencanaan dan penyelenggaraan event secara menyeluruh, mulai dari konsep, koordinasi teknis, hingga pelaksanaan di lapangan. ARTOUR Indonesia memastikan setiap event berjalan tertata, efektif, dan berkesan.",
  },
  {
    name: "MICE",
    icon: mice,
    description: "Layanan MICE profesional untuk kebutuhan bisnis dan institusi, dengan perencanaan matang, pengelolaan detail yang rapi, serta dukungan operasional yang optimal guna menunjang kesuksesan acara.",
  },
  {
    name: "Ticketing & Hotel Reservation",
    icon: ticket,
    description: "Layanan pemesanan tiket dan reservasi hotel yang mudah dan terpercaya memudahkan semua kebutuhan akomodasi klien.",
  },
  {
    name: "Procurement of Goods & Services",
    icon: barang,
    description: "Pengadaan barang dan jasa yang transparan, efisien, dan sesuai kebutuhan klien, dengan proses administrasi yang jelas dan dapat dipertanggungjawabkan.",
  },
  {
    name: "Tour & Travel",
    icon: tour,
    description: "Layanan perjalanan wisata dan bisnis dengan perencanaan yang terstruktur, fleksibel, dan disesuaikan dengan kebutuhan klien.",
  },
  {
    name: "Homestay",
    icon: homestay,
    description: "Penyediaan akomodasi homestay yang nyaman dan terawat untuk kebutuhan wisata maupun perjalanan bisnis.",
  },
  {
    name: "Sparepart",
    icon: sparepart,
    description: "Penyediaan sparepart berkualitas untuk menunjang kebutuhan operasional dengan proses pemesanan yang mudah dan terpercaya.",
  },
];

type IntegrationType = typeof INTEGRATIONS;

interface IntegrationColumnProps {
  integrations: IntegrationType;
  className?: string;
  reverseAnimation?: boolean;
}

function IntegrationColumn({
  integrations,
  className,
  reverseAnimation,
}: IntegrationColumnProps) {
  return (
    <motion.div
      initial={{ y: reverseAnimation ? "-50%" : 0 }}
      animate={{ y: reverseAnimation ? 0 : "-50%" }}
      transition={{
        duration: 40,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      }}
      className={cn("flex flex-col gap-4", className)}
    >
      {Array.from({ length: 2 }).map((_, index) => (
        <Fragment key={index}>
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm relative overflow-hidden"
            >
              {/* Background Image */}
              <Image
                src={CardBg}
                alt="Card Background"
                fill
                className="object-cover opacity-80"
              />
              {/* Content */}
              <div className="relative z-10">
                <div className="flex justify-center">
                  <Image
                    src={integration.icon}
                    alt={integration.name}
                    className="size-24"
                  />
                </div>
                <h3 className="mt-6 text-center text-3xl text-neutral-900">{integration.name}</h3>
                <p className="mt-2 text-balance text-center text-neutral-500">
                  {integration.description}
                </p>
              </div>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  );
}

export function IntegrationsSection() {
  return (
    <section className="overflow-hidden py-12 bg-white/50 backdrop-blur-sm">
      <div className="container">
        <div className="grid items-center lg:grid-cols-2 lg:gap-16">
          <section className="max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
            <Tag>Layanan Kami</Tag>
            <li className="mt-4 flex gap-3">
              <span className="flex-shrink-0 mt-1 block h-2 w-2 rounded-full bg-indigo-500" />
              <span>
                Transport Provider
              </span>
            </li>
            <li className="mt-4 flex gap-3">
              <span className="flex-shrink-0 mt-1 block h-2 w-2 rounded-full bg-indigo-500" />
              <span>
                Event Organizer
              </span>
            </li>
            <li className="mt-4 flex gap-3">
              <span className="flex-shrink-0 mt-1 block h-2 w-2 rounded-full bg-indigo-500" />
              <span>
                MICE
              </span>
            </li>
            <li className="mt-4 flex gap-3">
              <span className="flex-shrink-0 mt-1 block h-2 w-2 rounded-full bg-indigo-500" />
              <span>
                Ticketing & Hotel Reservation
              </span>
            </li>
            <li className="mt-4 flex gap-3">
              <span className="flex-shrink-0 mt-1 block h-2 w-2 rounded-full bg-indigo-500" />
              <span>
                Procurement of Goods & Services
              </span>
            </li>
            <li className="mt-4 flex gap-3">
              <span className="flex-shrink-0 mt-1 block h-2 w-2 rounded-full bg-indigo-500" />
              <span>
                Tour & Travel
              </span>
            </li>
            <li className="mt-4 flex gap-3">
              <span className="flex-shrink-0 mt-1 block h-2 w-2 rounded-full bg-indigo-500" />
              <span>
                Homestay
              </span>
            </li>
            <li className="mt-4 flex gap-3">
              <span className="flex-shrink-0 mt-1 block h-2 w-2 rounded-full bg-indigo-500" />
              <span>
                Sparepart
              </span>
            </li>
          </section>
          <section>
            <div className="mt-8 grid h-[400px] gap-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:grid-cols-2 lg:mt-0 lg:h-[800px]">
              <IntegrationColumn integrations={INTEGRATIONS} />
              <IntegrationColumn
                integrations={INTEGRATIONS.slice().reverse()}
                className="max-md:hidden"
                reverseAnimation={true}
              />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LayersLogo from "@/assets/artour-hitam.png";
import BatikBg from "@/assets/batikkk.png";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Tentang Kami" },
  { href: "#integrations", label: "Layanan" },
  { href: "#faqs", label: "FAQs" },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full py-4" style={{ zIndex: 9999 }}>
      <div className="container max-w-5xl max-md:px-4">
        {/* Main Navbar Container */}
        <div className="rounded-[27px] border bg-white relative overflow-hidden">
          {/* Batik Background Image */}
          <div
            className="absolute inset-0"
            style={{
              zIndex: 0,
              pointerEvents: 'none'
            }}
          >
            <Image
              src={BatikBg}
              alt="Batik Background"
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>

          {/* Content - Harus di depan background */}
          <div className="flex items-center justify-between px-4 py-2 md:pr-2" style={{ position: 'relative', zIndex: 1 }}>
            <Link href="/">
              <Image
                src={LayersLogo}
                alt="Artour Logo"
                width={200}
                height={50}
                className="h-9 w-fit md:h-11"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-6 font-medium lg:flex">
              {NAV_LINKS.map((link, index) => (
                <Link key={index} href={link.href}>
                  <span className="text-gray-600 text-sm transition duration-300 hover:text-gray-900">
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="h-10 w-10 cursor-pointer transition duration-300 lg:hidden flex items-center justify-center rounded-lg hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`w-6 h-6 ${isOpen ? "hidden" : "block"}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
              <X className={`w-6 h-6 ${!isOpen ? "hidden" : "block"}`} />
            </button>
          </div>
        </div>

        {/* Mobile Nav - Benar-benar terpisah dan di atas segalanya */}
        <div className="lg:hidden">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0, y: -10 }}
                animate={{ height: "auto", opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="mt-2 rounded-[27px] border bg-white shadow-lg overflow-hidden"
                style={{
                  position: 'relative',
                  zIndex: 9999,
                  pointerEvents: 'auto'
                }}
              >
                <nav className="flex flex-col py-2">
                  {NAV_LINKS.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="w-full text-center py-4 px-4 text-gray-900 font-medium hover:bg-blue-50 hover:text-blue-600 transition-all active:bg-blue-100 border-b last:border-b-0"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
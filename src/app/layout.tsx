import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ARTOUR INDONESIA",
  description: "ARTOUR INDONESIA merupakan perusahaan profesional di bidang industri jasa terintegrasi yang menyediakan solusi menyeluruh untuk kebutuhan transportasi perjalanan, event, dan kebutuhan bisnis. Dengan dukungan tim profesional, berpengalaman.",
  icons: {
    icon: "/artour-hitam.png",
  },
  openGraph: {
    type: "website",
    title: "ARTOUR INDONESIA",
    description:
      "ARTOUR INDONESIA merupakan perusahaan profesional di bidang industri jasa terintegrasi yang menyediakan solusi menyeluruh untuk kebutuhan transportasi perjalanan, event, dan kebutuhan bisnis. Dengan dukungan tim profesional, berpengalaman.",
    images: [
      {
        url: "#",
        width: 1200,
        height: 630,
        alt: "ARTOUR INDONESIA",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className} antialiased relative`}>
        {/* Global Background Video */}
        <div className="fixed inset-0 z-[-1]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/batik-view.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Glassmorphism Overlay */}
          <div className="absolute " />
        </div>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
        <WhatsAppWidget />
      </body>
    </html>
  );
}

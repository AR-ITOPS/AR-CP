"use client";

import Image from "next/image";
import { Tag } from "@/components/ui/tag";
import { Mail, MapPin, Phone, Globe, Instagram } from "lucide-react";
import CardBg from "@/assets/batikkk.png";

// Address removed from here to be moved to a dedicate section
const CONTACT_DETAILS = [
    {
        icon: Phone,
        title: "Telepon",
        value: "0822-4500-9991",
        href: "tel:082245009991",
    },
    {
        icon: Mail,
        title: "Email",
        value: "artourindonesia@gmail.com",
        href: "mailto:artourindonesia@gmail.com",
    },
    {
        icon: Globe,
        title: "Website",
        value: "www.artourindonesia.com",
        href: "https://www.artourindonesia.com",
    },
    {
        icon: Instagram,
        title: "Social Media",
        value: "@artourindonesia",
        href: "https://instagram.com/artourindonesia",
        subValues: ["Instagram", "TikTok"],
    },
];

export function ContactSection() {
    return (
        <section className="py-12">
            <div className="container flex flex-col items-center">
                <Tag>Contact Us</Tag>
                <h2 className="mt-3 text-center font-medium text-4xl md:text-5xl text-neutral-900 mb-12">
                </h2>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mb-16">
                    {CONTACT_DETAILS.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center p-6 rounded-3xl border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-300 text-center shadow-sm relative overflow-hidden"
                        >
                            {/* Background Image */}
                            <Image
                                src={CardBg}
                                alt="Card Background"
                                fill
                                className="object-cover opacity-20"
                            />
                            {/* Content */}
                            <div className="relative z-10">
                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto">
                                    <item.icon className="text-blue-500 h-5 w-5" />
                                </div>
                                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-neutral-500 text-sm leading-relaxed truncate w-full">
                                    {item.value}
                                </p>
                                {item.subValues && (
                                    <div className="flex gap-2 mt-1 text-[10px] text-neutral-400">
                                        {item.subValues.join(" • ")}
                                    </div>
                                )}
                            </div>
                        </a>
                    ))}
                </div>

                {/* Location Map Section */}
                <div className="w-full max-w-6xl rounded-3xl overflow-hidden border border-neutral-200 bg-white flex flex-col md:flex-row shadow-sm relative">
                    {/* Background Image */}
                    <Image
                        src={CardBg}
                        alt="Card Background"
                        fill
                        className="object-cover opacity-20"
                    />
                    {/* Address Text */}
                    <div className="p-8 md:p-12 md:w-1/3 flex flex-col justify-center gap-6 relative z-10">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                <MapPin className="text-blue-500 h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-900">Our Office</h3>
                        </div>
                        <div className="space-y-4">
                            <p className="text-neutral-600 text-lg leading-relaxed">
                                Green Oase Residence B15-17, <br />
                                Tugurejo, Kec. Tugu,<br />
                                Kota Semarang, Jawa Tengah 50182
                            </p>
                            <a
                                href="https://maps.google.com/?q=Green+Oase+Residence+Blok+B+15-17+Semarang"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-blue-500 hover:text-blue-600 font-medium transition-colors"
                            >
                                Open in Google Maps &rarr;
                            </a>
                        </div>
                    </div>

                    {/* Google Map Iframe */}
                    <div className="w-full md:w-2/3 h-[300px] md:h-auto min-h-[300px] relative bg-neutral-100 z-10">
                        <iframe
                            src="https://maps.google.com/maps?q=Green+Oase+Residence+Blok+B+15-17+Semarang&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0"
                            title="Office Location Map"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}


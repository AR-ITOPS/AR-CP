"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

// Placeholder data - user will update names
const ORG_DATA = [
    {
        role: "Komisaris",
        name: "SUYONO",
        image: "/images/Suyono.png",
        level: 1,
    },
    {
        role: "Direktur",
        name: "MOCHAMMAD AMIRUDDIN",
        image: "/images/Amir.png",
        level: 2,
    },
    {
        role: "MANAGER OPERASIONAL & PEMASARAN",
        name: "HALIM ACHMAD RASYID",
        image: "/images/Rasyid.png",
        level: 3,
    },
    {
        role: "MANAGER SDM",
        name: "LYA ARFIANTI",
        image: "/images/Fifi.png",
        level: 3,
    },
    {
        role: "HUMAS",
        name: "SUSILO",
        image: "/images/Susilo.png",
        level: 3,
    },
];

export function OrganizationSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    const level1 = ORG_DATA.filter(p => p.level === 1);
    const level2 = ORG_DATA.filter(p => p.level === 2);
    const level3 = ORG_DATA.filter(p => p.level === 3);

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="py-12 bg-white/30 "
        >
            <div className="container flex flex-col items-center">
                <Tag>Organization Structure</Tag>
                <h2 className="mt-6 text-center font-medium text-4xl md:text-5xl text-neutral-900 mb-16">
                </h2>

                <div className="w-full max-w-5xl flex flex-col gap-16 relative">
                    {/* Connecting Lines Layer */}
                    <div className="absolute inset-0 pointer-events-none">
                        {/* Line from L1 to L2 */}
                        <div className="absolute top-[140px] left-1/2 -translate-x-1/2 w-px h-[160px] bg-gradient-to-b from-neutral-300 to-neutral-200" />
                        {/* Line from L2 to L3 Group */}
                        <div className="absolute top-[450px] left-1/2 -translate-x-1/2 w-px h-[100px] bg-gradient-to-b from-neutral-300 to-neutral-200" />
                        {/* Horizontal Line for L3 */}
                        <div className="absolute top-[550px] left-[15%] right-[15%] md:left-1/4 md:right-1/4 h-px bg-neutral-300" />
                        {/* Vertical Lines for L3 */}
                        <div className="absolute top-[550px] left-[15%] md:left-1/4 w-px h-[30px] bg-neutral-300" />
                        <div className="absolute top-[550px] right-[15%] md:right-1/4 w-px h-[30px] bg-neutral-300" />
                        <div className="absolute top-[550px] left-1/2 -translate-x-1/2 w-px h-[30px] bg-neutral-300" />
                    </div>

                    {/* Level 1: Komisaris */}
                    <div className="flex justify-center z-10">
                        {level1.map((person, idx) => (
                            <OrgCard key={idx} person={person} />
                        ))}
                    </div>

                    {/* Level 2: CEO */}
                    <div className="flex justify-center z-10">
                        {level2.map((person, idx) => (
                            <OrgCard key={idx} person={person} />
                        ))}
                    </div>

                    {/* Level 3: Managers */}
                    <div className="grid grid-cols-3 gap-2 md:gap-16 z-10 place-items-start md:place-items-center">
                        {level3.map((person, idx) => (
                            <OrgCard key={idx} person={person} isSmallOnMobile />
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

function OrgCard({ person, isSmallOnMobile }: { person: typeof ORG_DATA[0], isSmallOnMobile?: boolean }) {
    return (
        <div className={cn("group relative flex flex-col items-center gap-4 w-full", isSmallOnMobile ? "max-w-[110px] md:max-w-none" : "")}>
            <div className="relative h-32 w-32 md:h-48 md:w-48 rounded-full shadow-2xl transition-transform duration-500 group-hover:scale-105 ">
                <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover rounded-full"
                />
            </div>
            <div className="flex flex-col items-center text-center gap-1 bg-white/80 backdrop-blur-sm border border-neutral-200 p-2 md:p-3 rounded-2xl w-full transition-colors duration-300 group-hover:border-neutral-300 hover:bg-neutral-50 shadow-sm">
                <span className="text-neutral-900 font-semibold text-sm md:text-lg tracking-wide leading-tight">{person.name}</span>
                <span className="text-[10px] md:text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 uppercase tracking-wider break-words w-full">
                    {person.role}
                </span>
            </div>
        </div>
    );
}

"use client";

import { motion } from "motion/react";
import Image from "next/image";
import ArtaLogo from "@/assets/arta.png";

export function WhatsAppWidget() {
    const handleWhatsAppClick = () => {
        const phoneNumber = "6282245009991";
        const message = "Halo Artour Indonesia, saya ingin bertanya tentang layanan Anda.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div className="fixed bottom-0 right-6 z-50">
            {/* WhatsApp Button - Just Arta Image */}
            <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsAppClick}
                className="relative"
            >
                {/* Arta Image Only - Larger Size */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full ">
                    <Image
                        src={ArtaLogo}
                        alt="Arta - Customer Service"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </motion.button>
        </div>
    );
}

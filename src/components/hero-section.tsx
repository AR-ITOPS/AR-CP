"use client";

import { Sparkle } from "lucide-react";
import { motion, useAnimate } from "motion/react";
import Image from "next/image";
import { useEffect } from "react";
import CursorYou from "@/assets/cursor-you.svg";
import DesignExample1 from "@/assets/design-example-1.png";
import DesignExample2 from "@/assets/design-example-2.png";
import { CustomButton } from "@/components/ui/custom-button";
import { Pointer } from "@/components/ui/pointer";

export function HeroSection() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ]);
    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { x: -100, y: 0 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);
    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ]);
    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
      [rightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5 }],
    ]);
  }, [leftDesignAnimate, leftDesignScope, leftPointerAnimate, leftPointerScope, rightDesignAnimate, rightDesignScope, rightPointerAnimate, rightPointerScope]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-32 pb-12 flex items-center"
      style={{ cursor: `url(${CursorYou.src}), auto` }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Kantor.png"
          alt="Office Background"
          fill
          className="object-cover"
          priority
        />
        {/* Light Overlay for contrast */}
        <div className="absolute inset-0 " />
      </div>

      <section className="container relative z-10">
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, x: -100, y: 100 }}
          drag
          dragSnapToOrigin={true}
          className="-left-32 absolute top-16 max-xl:hidden"
        >

        </motion.div>
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, x: -100, y: 100 }}
          className="absolute top-96 left-56 max-xl:hidden"
        >
        </motion.div>
        <motion.div
          ref={rightDesignScope}
          drag
          dragSnapToOrigin={true}
          initial={{ opacity: 0, x: 100, y: 100 }}
          className="-right-32 -top-16 absolute max-xl:hidden"
        >

        </motion.div>
        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, x: 275, y: 100 }}
          className="-top-4 absolute right-80 max-xl:hidden"
        >

        </motion.div>

        <div className="flex flex-col items-center justify-center text-center">


          <h1 className="max-w-4xl text-balance font-bold text-4xl tracking-tight md:text-7xl lg:text-8xl text-neutral-200 drop-shadow-sm">
            Kepercayaan Anda, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-blue-600 to-indigo-600">
              Komitmen Kami.
            </span>
          </h1>

          <p className="mt-8 text-balance text-base md:text-xl text-neutral-100 leading-relaxed font-light max-w-3xl">
            <span className="bg-black/30 px-2 py-1 rounded [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
              Dengan layanan yang penuh dedikasi, kami hadir untuk memberikan pengalaman terbaik bagi setiap event dan perjalanan anda.
            </span>
          </p>


        </div>
      </section>
    </section>
  );
}

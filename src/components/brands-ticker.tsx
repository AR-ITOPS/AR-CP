"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Fragment } from "react";
import { Tag } from "@/components/ui/tag";
import kai from "@/assets/client/kai.png";
import kaic from "@/assets/client/kaic.png";
import kaib from "@/assets/client/kaib.png";
import kais from "@/assets/client/kais.png";
import kail from "@/assets/client/kail.png";
import kaip from "@/assets/client/kaip.png";
import kcic from "@/assets/client/kcic.png";
import kiw from "@/assets/client/kiw.png";
import kri from "@/assets/client/kri.png";
import ksn from "@/assets/client/ksn.png";
import lex from "@/assets/client/lex.png";
import lrt from "@/assets/client/lrt.png";
import pln from "@/assets/client/pln.png";
import pengadilan from "@/assets/client/pengadilan.png";
import polri from "@/assets/client/polri.png";
import ptc from "@/assets/client/ptc.png";
import saw from "@/assets/client/saw.png";
import sitoy from "@/assets/client/sitoy.png";
import pengayoman from "@/assets/client/pengayoman.png";
import tol from "@/assets/client/tol.png";
import yp from "@/assets/client/yp.png";
import abipraya from "@/assets/client/abipraya.png";
import becukai from "@/assets/client/becukai.png";
import askrindo from "@/assets/client/askrindo.png";
import bpn from "@/assets/client/bpn.png";
import dprddki from "@/assets/client/dprddki.png";
import ioji from "@/assets/client/ioji.png";
import mandiri from "@/assets/client/mandiri.png";
import bj from "@/assets/client/bj.png";


const BRANDS = [
  { name: "KAI", logo: kai },
  { name: "KAIC", logo: kaic },
  { name: "KAIB", logo: kaib },
  { name: "KAIS", logo: kais },
  { name: "KAIL", logo: kail },
  { name: "KAIP", logo: kaip },
  { name: "KCIC", logo: kcic },
  { name: "KIW", logo: kiw },
  { name: "KRI", logo: kri },
  { name: "KSN", logo: ksn },
  { name: "LEX", logo: lex },
  { name: "LRT", logo: lrt },
  { name: "PLN", logo: pln },
  { name: "PENGADILAN", logo: pengadilan },
  { name: "POLRI", logo: polri },
  { name: "PTC", logo: ptc },
  { name: "SAW", logo: saw },
  { name: "SITOY", logo: sitoy },
  { name: "PENGAYOMAN", logo: pengayoman },
  { name: "TOL", logo: tol },
  { name: "YP", logo: yp },
  { name: "ABIPRAYA", logo: abipraya },
  { name: "BECUKAI", logo: becukai },
  { name: "ASKRINDO", logo: askrindo },
  { name: "BPN", logo: bpn },
  { name: "DPRDDKI", logo: dprddki },
  { name: "IOJI", logo: ioji },
  { name: "MANDIRI", logo: mandiri },
  { name: "BJ", logo: bj },
];

export function BrandsTicker() {
  return (
    <section className="overflow-x-clip py-5">
      <div className="container">
        <div className="flex flex-col items-center justify-center mb-8">
          <Tag>Client Kami</Tag>
        </div>
        <div className="mt-12 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{ x: "-50%" }}
            transition={{
              duration: 60,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
            }}
            className="flex flex-none gap-24 pr-24"
          >
            {Array.from({ length: 2 }).map((_, index) => (
              <Fragment key={index}>
                {BRANDS.map((brand) => (
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    key={brand.name}
                    className="h-20 w-auto md:h-24"
                  />
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

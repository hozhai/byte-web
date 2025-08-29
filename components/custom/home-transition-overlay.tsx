"use client";

import BlurFade from "@components/ui/blur-fade";
import { VelocityScroll } from "@components/ui/scroll-based-velocity";
import { motion } from "framer-motion";

export default function HomeTransitionOverlay() {
  return (
    <>
      <motion.div className="w-full bg-white py-10 bg-gradient-to-r from-[#11c2dd] to-[#e361a5] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent flex justify-center items-center">
        <VelocityScroll
          text="TEAM BYTE"
          className="font-sans text-6xl font-bold"
        />
      </motion.div>
    </>
  );
}

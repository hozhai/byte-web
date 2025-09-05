"use client";

import { motion } from "framer-motion";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

export default function HomeTransitionOverlay() {
  return (
    <motion.div className="w-full bg-white py-6 sm:py-8 md:py-10 bg-gradient-to-r from-[#11c2dd] to-[#e361a5] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent flex justify-center items-center overflow-hidden">
      <VelocityScroll
        text="TEAM BYTE"
        className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold"
      />
    </motion.div>
  );
}

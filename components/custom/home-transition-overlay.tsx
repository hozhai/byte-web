"use client";

import BlurFade from "@components/ui/blur-fade";
import { VelocityScroll } from "@components/ui/scroll-based-velocity";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HomeTransitionOverlay() {
  const { scrollY } = useScroll();
  const topProgress = useTransform(scrollY, [0, 500], ["85%", "0%"], {
    clamp: false,
  });
  const clipPathProgress = useTransform(
    scrollY,
    [0, 500],
    [
      "polygon(0 20%, 100% 0, 100% 100%, 0% 100%",
      "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%",
    ],
  );

  return (
    <motion.div
      className="fixed left-0 h-screen w-screen bg-slate-100 z-20 inset-x-0 pointer-events-none"
      style={{
        top: topProgress,
        clipPath: clipPathProgress,
      }}
    >
      <BlurFade
        className="h-full w-full relative bg-gradient-to-r from-[#11c2dd] to-[#e361a5] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent"
        duration={2}
      >
        <VelocityScroll
          text="TEAM BYTE"
          className="font-sans text-7xl font-bold"
        />
      </BlurFade>
    </motion.div>
  );
}

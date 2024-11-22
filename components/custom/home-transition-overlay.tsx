"use client";

import BlurFade from "@components/ui/blur-fade";
import { VelocityScroll } from "@components/ui/scroll-based-velocity";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HomeTransitionOverlay() {
  const { scrollY } = useScroll();
  const topProgress = useTransform(scrollY, [0, 500], ["85%", "0%"], {
    clamp: false,
  });

  const topProgressCover = useTransform(scrollY, [0, 600], ["100%", "50%"], {
    clamp: true,
  });
  const clipPathProgress = useTransform(
    scrollY,
    [0, 500],
    [
      "polygon(0 30%, 100% 0, 100% 70%, 0% 100%",
      "polygon(0 0%, 100% 30%, 100% 100%, 0% 70%",
    ],
  );

  return (
    <>
      <motion.div
        className="fixed left-0 h-[25vh] w-screen z-20 inset-x-0 pointer-events-none drop-shadow-2xl"
        style={{
          top: topProgress,
        }}
      >
        <motion.div
          className="h-full w-full bg-white inset-x-0"
          style={{
            clipPath: clipPathProgress,
          }}
        >
          <BlurFade
            className="h-full w-full relative bg-gradient-to-r from-[#11c2dd] to-[#e361a5] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent flex justify-center items-center"
            duration={2}
          >
            <VelocityScroll
              text="TEAM BYTE"
              className="font-sans text-6xl font-bold"
            />
          </BlurFade>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute left-0 h-screen w-screen bg-slate-50 z-10 inset-x-0 overflow-scroll"
        style={{
          top: topProgressCover,
        }}
      />
    </>
  );
}

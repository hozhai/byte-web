import { ChevronRight } from "lucide-react";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import FloatingTriangle from "@/components/custom/floating-triangle";
import RandomBlob from "@/components/custom/random-blob";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import BlurFade from "@/components/ui/blur-fade";
import BoxReveal from "@/components/ui/box-reveal";
import Particles from "@/components/ui/particles";
import SparklesText from "@/components/ui/sparkles-text";
import { ANIMATION_DELAYS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const FLOATING_TRIANGLES_CONFIG = [
  { position: [90, 400] as [number, number], rotation: 30, color: 0 },
  { position: [450, 490] as [number, number], rotation: -10, color: 1 },
] as const;

const LANDING_CONTENT = {
  announcement: "Estás interesad@ en Circuito Byte 2025?",
  title: "Somos Byte",
  subtitle: "y queremos cambiar el mundo.",
  placeholderImage: "https://placehold.co/600x600/png",
} as const;

export default function Landing() {
  return (
    <section className="relative overflow-hidden h-[70vh] lg:h-screen">
      <div className="bg-slate-50 w-full h-full flex flex-col lg:flex-row justify-center lg:justify-start items-center px-4 sm:px-8 md:px-20 pt-20 pb-10 lg:pb-0 relative">
        <div className="bg-grid-black/20 p-4 sm:p-8 md:p-20 shadow-[inset_0px_0px_90px_90px] shadow-slate-50 -mt-10 lg:-mt-20 max-w-full lg:max-w-none">
          <BoxReveal boxColor="rgba(0, 0, 0, 0.5)">
            <Link href="/circuito">
              <AnimatedGradientText className="z-10 flex items-center justify-center lg:justify-start mx-0 cursor-pointer text-sm sm:text-base">
                🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                <span
                  className={cn(
                    "inline animate-gradient bg-gradient-to-r from-[#22d3ee] via-[#f472b6] to-[#22d3ee] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-center lg:text-left"
                  )}
                >
                  {LANDING_CONTENT.announcement}
                </span>
                <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedGradientText>
            </Link>
          </BoxReveal>

          <BoxReveal boxColor="rgba(0, 0, 0, 0.5)">
            <h1 className="font-mono text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold drop-shadow-lg text-center lg:text-left">
              {LANDING_CONTENT.title.split(" ")[0]}{" "}
              <SparklesText
                text={LANDING_CONTENT.title.split(" ")[1]}
                className="inline text-3xl sm:text-4xl md:text-6xl lg:text-8xl z-30"
                colors={{ first: "cyan", second: "hotpink" }}
                sparklesCount={10}
              />
            </h1>
          </BoxReveal>

          <BoxReveal boxColor="rgba(0, 0, 0, 0.5)">
            <h2 className="font-mono text-base sm:text-lg md:text-xl lg:text-2xl font-bold -mt-2 ml-0 lg:ml-2 drop-shadow-2xl text-center lg:text-left">
              {LANDING_CONTENT.subtitle.split("mundo")[0]}
              <span className="underline">mundo</span>
              {LANDING_CONTENT.subtitle.split("mundo")[1]}
            </h2>
          </BoxReveal>
        </div>
      </div>

      {/* Hide floating triangles on mobile, show on larger screens */}
      <div className="hidden lg:block">
        {FLOATING_TRIANGLES_CONFIG.map((triangle, index) => (
          <FloatingTriangle
            key={nanoid()}
            color={triangle.color}
            position={triangle.position}
            rotation={triangle.rotation}
          />
        ))}
      </div>

      <BlurFade
        className="absolute h-48 w-48 sm:h-full sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 top-[60%] lg:top-[30%] left-1/4 lg:left-[65%] drop-shadow-2xl"
        delay={ANIMATION_DELAYS.medium}
      >
        <RandomBlob className="bg-transparent h-full w-full overflow-hidden">
          <Image
            src={LANDING_CONTENT.placeholderImage}
            alt="Imagen representativa de Byte"
            height={600}
            width={600}
            className="object-cover w-full h-full"
          />
        </RandomBlob>
      </BlurFade>

      <div
        className="bg-white w-screen h-20 absolute bottom-0 left-0 drop-shadow-lg"
        style={{
          clipPath:
            "polygon(32% 9%, 60% 16%, 100% 11%, 100% 100%, 0 100%, 0% 60%, 0 16%)",
        }}
      />

      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={80}
        color="#999"
        refresh={true}
        staticity={5}
      />
    </section>
  );
}

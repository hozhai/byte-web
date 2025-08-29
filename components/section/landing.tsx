import FloatingTriangle from "@components/custom/floating-triangle";
import RandomBlob from "@components/custom/random-blob";
import AnimatedGradientText from "@components/ui/animated-gradient-text";
import BlurFade from "@components/ui/blur-fade";
import BoxReveal from "@components/ui/box-reveal";
import Particles from "@components/ui/particles";
import SparklesText from "@components/ui/sparkles-text";
import { cn } from "@utils";
import { ChevronRight } from "lucide-react";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <section className="relative overflow-hidden h-[calc(100vh - 300px)]">
      <div className="bg-slate-50 w-full h-screen flex justify-start items-center px-20 pt-20 relative">
        <div className="bg-grid-black/20 p-20 shadow-[inset_0px_0px_90px_90px] shadow-slate-50 -mt-20">
          <BoxReveal boxColor="rgba(0, 0, 0, 0.5)">
            <Link href="/circuito">
              <AnimatedGradientText className="z-10 flex items-center justify-start mx-0 cursor-pointer">
                🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                <span
                  className={cn(
                    "inline animate-gradient bg-gradient-to-r from-[#22d3ee] via-[#f472b6] to-[#22d3ee] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent"
                  )}
                >
                  Estás interesad@ en Circuito Byte 2025?
                </span>
                <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedGradientText>
            </Link>
          </BoxReveal>
          <BoxReveal boxColor="rgba(0, 0, 0, 0.5)">
            <h1 className="font-mono text-8xl font-bold drop-shadow-lg">
              Somos{" "}
              <SparklesText
                text="Byte"
                className="inline text-8xl z-30"
                colors={{ first: "cyan", second: "hotpink" }}
                sparklesCount={10}
              />
            </h1>
          </BoxReveal>
          <BoxReveal boxColor="rgba(0, 0, 0, 0.5)">
            <h2 className="font-mono text-2xl font-bold -mt-2 ml-2 drop-shadow-2xl">
              y queremos cambiar el <span className="underline">mundo</span>.
            </h2>
          </BoxReveal>
        </div>
      </div>

      {[
        [90, 400, 30],
        [450, 490, -10],
      ].map((v, i) => (
        <FloatingTriangle
          color={i % 2}
          position={[v[0], v[1]]}
          rotation={v[2]}
          key={nanoid()}
        />
      ))}

      <BlurFade
        className="absolute h-96 w-96 top-[30%] right-[15%] drop-shadow-2xl"
        delay={0.5}
      >
        <RandomBlob className="bg-transparent h-96 w-96 overflow-hidden">
          <Image
            src="https://placehold.co/600x600/png"
            alt="Placeholder"
            height={600}
            width={600}
          />
        </RandomBlob>
      </BlurFade>

      <div
        className="bg-white w-screen h-20 absolute bottom-0 left-0 drop-shadow-lg"
        style={{
          clipPath:
            "polygon(32% 9%, 60% 16%, 100% 11%, 100% 100%, 0 100%, 0% 60%, 0 16%)",
        }}
      ></div>

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

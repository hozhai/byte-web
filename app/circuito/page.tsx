"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { TextAnimate } from "@/components/magicui/text-animate";
import Footer from "@/components/section/footer";

export default function Page() {
  return (
    <>
      <ScrollProgress className="h-2" />
      <section className="flex justify-center flex-col items-center min-h-screen px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ translateY: 0 }}
          animate={{ translateY: -80 }}
          transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}
          className="flex items-center justify-center flex-col bg-grid-black/20 shadow-[inset_0px_0px_90px_90px] shadow-white p-4 sm:p-8 lg:p-12 rounded-lg"
        >
          <h2 className="font-display text-lg sm:text-xl md:text-2xl text-center">
            <TextAnimate>Byte presenta...</TextAnimate>
          </h2>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#f472b6] text-stroke text-glow-fuchsia-400 text-center">
            <TextAnimate delay={0.5}>Circuito</TextAnimate>
          </h1>
          <h1 className="font-display text-6xl sm:text-8xl md:text-[10rem] lg:text-[15rem] text-[#22d3ee] -mt-8 sm:-mt-12 md:-mt-16 text-stroke text-glow-sky-400 text-center">
            <TextAnimate delay={0.75}>2025</TextAnimate>
          </h1>
        </motion.div>
        <motion.h2
          className="font-mono text-sm sm:text-base md:text-lg lg:text-xl text-center px-4 max-w-4xl"
          initial={{ opacity: 0, translateY: -100 }}
          animate={{ opacity: 1, translateY: -100 }}
          transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
        >
          ¿Te gustaría aprender robótica de verdad, pero sin clases lateras?
        </motion.h2>
        <motion.a
          href="#info"
          initial={{ opacity: 0, translateY: 0 }}
          animate={{ opacity: 1, translateY: -60 }}
          transition={{ delay: 2.25, duration: 1, ease: "easeInOut" }}
        >
          <RainbowButton
            className="font-display px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base"
            variant="outline"
          >
            ¡Sí!
          </RainbowButton>
        </motion.a>
      </section>
      <section
        id="info"
        className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12 sm:py-16 md:py-20"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="font-mono text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 md:mb-10">
            &gt; ¿Qué es?
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 md:mb-10">
            El <b>Circuito Byte</b> es una serie de encuentros presenciales
            donde vas a construir, probar, equivocarte (¡y aprender!), todo
            mientras haces proyectos reales y trabajas en equipo. Está pensado
            para estudiantes de 1º a 4º medio que quieran meterse al mundo de la
            electrónica y la programación desde cero, con desafíos semanales y
            un cierre épico.
            <br />
            <br />
            En el Circuito Byte les enseñarnos distintas habilidades que se
            necesitan en la robótica:{" "}
          </p>
          <ol className="text-base sm:text-lg md:text-xl space-y-2 sm:space-y-3 mb-6 sm:mb-8 md:mb-10 pl-4">
            <li>
              1. Fundamentos de la Electrónica: Cómo crear circuitos y usar
              microcontroladores.
            </li>
            <li>2. Fundamentos de la Programación</li>
            <li>3. Fundamentos del Diseño</li>
          </ol>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-12 sm:mb-16 md:mb-20">
            El Circuito finaliza con la creación de proyectos propios en grupo
            para presentar en el evento final.
          </p>

          <h2 className="font-mono text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 md:mb-10">
            &gt; ¿Cuándo es?
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-12 sm:mb-16 md:mb-20">
            Las actividades semanales serán los días 20 y 30 de octubre, 6, 13,
            20 y 27 de noviembre desde las 17 a 20 hrs.
          </p>

          <h2 className="font-mono text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 md:mb-10">
            &gt; ¿Quién puede participar?
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-12 sm:mb-16 md:mb-20">
            Si estás en enseñanza media, tienes entre 14 y 18 años y te tinca la
            robótica, estás invitado! No necesitas saber programar; solo
            necesitas tener ganas de crear y participar.
          </p>

          <div className="flex justify-center">
            <Link href="https://forms.gle/eiNX1W2N3t6Xdhtj6" target="_blank">
              <button type="button" className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#f472b6] to-[#22d3ee] rounded-lg" />
                <div className="px-6 sm:px-8 py-2 sm:py-3 bg-white rounded-[6px] relative group transition duration-200 text-black hover:bg-transparent hover:text-white text-sm sm:text-base">
                  ¡Inscribete aquí!
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

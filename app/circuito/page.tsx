"use client";

import { motion } from "motion/react";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { TextAnimate } from "@/components/magicui/text-animate";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import Footer from "@/components/section/footer";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <ScrollProgress className="h-2" />
      <section className="flex justify-center flex-col items-center items-center h-screen">
        <motion.div
          initial={{ translateY: 0 }}
          animate={{ translateY: -80 }}
          transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}
          className="flex items-center justify-center flex-col bg-grid-black/20 shadow-[inset_0px_0px_90px_90px] shadow-white ml-20"
        >
          <h2 className="font-display text-2xl">
            <TextAnimate>Byte presenta...</TextAnimate>
          </h2>
          <h1 className="font-display text-8xl text-[#f472b6] text-stroke text-glow-fuchsia-400">
            <TextAnimate delay={0.5}>Circuito</TextAnimate>
          </h1>
          <h1 className="font-display text-[15rem] text-[#22d3ee] -mt-16 text-stroke text-glow-sky-400">
            <TextAnimate delay={0.75}>2025</TextAnimate>
          </h1>
        </motion.div>
        <motion.h2
          className="font-mono text-xl"
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
          <RainbowButton className="font-display px-10 py-4" variant="outline">
            ¡Sí!
          </RainbowButton>
        </motion.a>
      </section>
      <section id="info">
        <h2 className="font-mono text-3xl ml-48">&gt; ¿Qué es?</h2>
        <p className="mx-48 mt-10 text-xl">
          El <b>Circuito Byte</b> es una serie de encuentros presenciales donde
          vas a construir, probar, equivocarte (¡y aprender!), todo mientras
          haces proyectos reales y trabajas en equipo. Está pensado para
          estudiantes de 1º a 4º medio que quieran meterse al mundo de la
          electrónica y la programación desde cero, con desafíos semanales y un
          cierre épico.
          <br />
          En el Circuito Byte les enseñarnos distintas habilidades que se
          necesitan en la robótica:{" "}
        </p>
        <ol className="mx-48 mt-10 text-xl">
          <li>
            1. Fundamentos de la Electrónica: Cómo crear circuitos y usar
            microcontroladores.
          </li>
          <li>2. Fundamentos de la Programación</li>
          <li>3. Fundamentos del Diseño</li>
        </ol>
        <p className="mx-48 mt-10 text-xl">
          El Circuito finaliza con la creación de proyectos propios en grupo
          para presentar en el evento final.
        </p>
        <h2 className="font-mono text-3xl ml-48 mt-24">&gt; ¿Cuándo es?</h2>
        <p className="mx-48 mt-10 text-xl">
          Las actividades semanales serán los días x y z a las w horas
        </p>
        <h2 className="font-mono text-3xl ml-48 mt-24">
          &gt; ¿Quién puede participar?
        </h2>
        <p className="mx-48 mt-10 text-xl">
          Si estás en enseñanza media, tienes entre 14 y 18 años y te tinca la
          robótica, estás invitado! No necesitas saber programar; solo necesitas
          tener ganas de crear y participar.
        </p>
        <div className="flex justify-center mt-20">
          <Link href="#">
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f472b6] to-[#22d3ee] rounded-lg" />
              <div className="px-8 py-2 bg-white rounded-[6px]  relative group transition duration-200 text-black hover:bg-transparent hover:text-white">
                ¡Inscribete aquí!
              </div>
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}

"use client";

import { TEAM_MEMBERS } from "@/lib/constants";
import Description from "../custom/description";
import HeroVideoDialog from "../magicui/hero-video-dialog";

const ABOUT_CONTENT = {
  title: "¿Quienes somos?",
  description: `En Byte ofrecemos talleres, proyectos guiados y eventos colaborativos
    que enseñan desde los fundamentos de la electrónica hasta la
    programación y el diseño 3D. No necesitas experiencia previa: solo
    curiosidad, ganas de aprender y muchas ganas de construir. Únete a Byte
    y sé parte de una comunidad que transforma la creatividad en impacto
    real.`,
  videoSrc:
    "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?si=-ZbRgDnlbHfPTYqe",
  thumbnailSrc: "https://placehold.co/1280x720/png",
  thumbnailAlt: "Video de presentación de Byte",
} as const;

export default function About() {
  return (
    <section className="relative bg-slate-50 shadow-xl" id="introduccion">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono font-black mb-12 sm:mb-16 md:mb-20">
          {ABOUT_CONTENT.title}
        </h2>

        <div className="max-w-6xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-12 sm:mb-16 md:mb-20 text-center px-2 sm:px-4">
            {ABOUT_CONTENT.description}
          </p>

          <div className="flex justify-center mb-12 sm:mb-16 md:mb-20 px-2">
            <div className="w-full max-w-4xl">
              <HeroVideoDialog
                className="block dark:hidden w-full"
                animationStyle="from-center"
                videoSrc={ABOUT_CONTENT.videoSrc}
                thumbnailSrc={ABOUT_CONTENT.thumbnailSrc}
                thumbnailAlt={ABOUT_CONTENT.thumbnailAlt}
              />
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {TEAM_MEMBERS.map((member) => (
              <Description
                key={member.name}
                name={member.name}
                description={member.description}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

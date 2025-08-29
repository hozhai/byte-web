"use client";

import HeroVideoDialog from "../magicui/hero-video-dialog";
import Description from "../custom/description";

export default function About() {
  return (
    <section className="relative bg-slate-50 shadow-xl" id="introduccion">
      <h2 className="text-center pt-20 text-6xl font-mono font-black">
        ¿Quienes somos?
      </h2>
      <p className="mx-96 text-xl mt-20">
        En Byte ofrecemos talleres, proyectos guiados y eventos colaborativos
        que enseñan desde los fundamentos de la electrónica hasta la
        programación y el diseño 3D. No necesitas experiencia previa: solo
        curiosidad, ganas de aprender y muchas ganas de construir. Únete a Byte
        y sé parte de una comunidad que transforma la creatividad en impacto
        real.
      </p>
      <HeroVideoDialog
        className="block dark:hidden mx-52 mt-20"
        animationStyle="from-center"
        videoSrc="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?si=-ZbRgDnlbHfPTYqe"
        thumbnailSrc="https://placehold.co/1280x720/png"
        thumbnailAlt="Dummy Video Thumbnail"
      />

      <div className="mt-20 mx-32 pb-20">
        <Description
          name="Gabriela Urzúa"
          description="Soy Gabriela Urzúa, fundadora de Byte. Me apasiona la ingeniería, la invención y todo lo que implique aprender haciendo. Participo representando a Chile en la competencia internacional de robótica FIRST Global, una experiencia que me ha permitido desarrollar mis habilidades tecnológicas y el trabajo en equipo. Byte nació porque quería construir un espacio donde podamos experimentar, equivocarnos, aprender y lograr cosas increíbles juntos. Creo en la tecnología como una herramienta para transformar ideas en soluciones, y en el trabajo en equipo como el motor que lo hace posible."
          imageUrl=""
        />
        <Description
          name="Hongmeng Zhai"
          description="Heyy, soy Hongmeng Zhai, pero todos me llaman Zhai. Soy el vice-presidente y programador de Byte — de hecho, yo soy quien programó esta página web, si hay cualquier imperfección, me lo pueden decir a mi :). Tengo 17 años, y como ya pueden haber adivinado, me encanta la programación, ambos de tipo recreativo y competitivo, la música, e ir al gimnasio. He participado en FIRST Lego League, SAAC Stem 2024 y SAAC Fine Arts 2025. Toco la guitarra, el saxofón, el violín, y el clarinete. Estoy emocionado de conocerlos!!!"
          imageUrl=""
        />
        <Description
          name="Carolina Gailey"
          description="Soy Carolina Cantoli y ocupo el puesto de tesorera en Byte. Creo que la oportunidad de aprender y cultivar las pasiones, independientemente de la posición social o económica, es un derecho humano. La robótica, en particular, es el futuro del mundo, y esta convicción fue la base de mi pasión por Byte: promover la educación accesible para todos. He participado en múltiples proyectos que impulsan estos ideales, como ser cofundadora de Facilite, una iniciativa para democratizar la educación financiera. Además, tengo experiencia en corporate finance y gestión de riesgos crediticios para empresas. Ahora, busco llevar mi pasión y experiencia a Byte para hacer de la robótica un pilar fundamental al alcance de todos los que la amen."
          imageUrl=""
        />
        <Description
          name="Niek Stoffels"
          description="Hola todos, me llamo Niek, tengo 15 años y he vivido en Chile por 4 años. Originalmente soy de Holanda pero también he vivido en Italia. Me gusta mucho el proceso de diseño y la robótica. Un proyecto en el que estoy trabajando es crear un BB-8 (robot de Star Wars) que realmente funciona. Mi español no esta muy bueno porque solo aprendi por 4 años."
          imageUrl="public/niek.jpg"
        />
        <Description
          name="Samuel Vieyra"
          description="Hola, soy Samuel o Samu. Tengo 16 años, soy chileno y argentino, pero he vivido en Chile toda mi vida. Soy un buceador con licencia de fotografía, me encanta encontrar cosas nuevas, y me apasiona la robótica mecánica, entre hacer prototipos de aviones o autitos hechos con trampas de ratón. Me uní a Byte en 2023 porque me interesó el club y pienso que puede llegar a ser algo increíble."
          imageUrl="public/sam.jpg"
        />
        <Description
          name="Emilia Graether"
          description="Soy Emilia Graether y ocupo el puesto de diseño de redes sociales. Me importan los derechos humanos y salud mental, y uso mi pasiones por escribir y robótica para apoyar estos ideales. Mi convicción por Byte viene de un lugar de pasión por la robótica y mi preocupación por otros humanos. Yo creo que podemos usar robótica para promover avances en la ayuda a los demás. He realizado proyectos que ayudan a estas ideas sin incluir la robótica, incluyendo la participación en un proyecto de terapia de perros y gatos para ayudar a los estudiantes en escuelas, el diseño de carteles de salud mental, y mucho mas. También he trabajado con robótica durante muchos años, ganando parte de una conferencia de Latin thinks con una amiga y haciendo robótica en clases. Byte es una oportunidad maravillosa para ayudar a las personas que lo necesitan."
          imageUrl=""
        />
      </div>
    </section>
  );
}

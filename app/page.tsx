import HomeTransitionOverlay from "@components/custom/home-transition-overlay";
import Landing from "@components/section/landing";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Instagram, Mail } from "lucide-react";

export default function Home() {
  return (
    <>
      <Landing />
      <ScrollProgress className="h-2" />
      <HomeTransitionOverlay />

      <section
        className="h-screen relative bg-slate-50 -mt-52 shadow-xl"
        id="introduccion"
      >
        <h2 className="text-center mt-32 pt-10 text-6xl font-mono font-black">
          ¿Quienes somos?
        </h2>
        <HeroVideoDialog
          className="block dark:hidden mt-10 px-52"
          animationStyle="from-center"
          videoSrc="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?si=-ZbRgDnlbHfPTYqe"
          thumbnailSrc="https://placehold.co/1280x720/png"
          thumbnailAlt="Dummy Video Thumbnail"
        />
      </section>
      <section id="contactanos" className="h-[170px]">
        <h2 className="mt-20 ml-20 text-3xl font-mono font-black">
          &gt; Contáctanos!
        </h2>
        <ul className="list-decoration-none ml-20 mt-5">
          <li className="flex">
            <Instagram className="mr-2" /> @byte.robotics
          </li>
          <li className="flex mt-2">
            <Mail className="mr-2" /> info@byterobotics.cl
          </li>
        </ul>
        <p className="text-center">Byte Robotics - GNU GPLv3 - 2025</p>
      </section>
    </>
  );
}

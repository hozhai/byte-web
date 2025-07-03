import HomeTransitionOverlay from "@components/custom/home-transition-overlay";
import Landing from "@components/section/landing";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { TextReveal } from "@/components/magicui/text-reveal";

export default function Home() {
    return (
        <>
            <Landing />
            <ScrollProgress className="h-2" />
            <HomeTransitionOverlay />

            <section className="h-screen relative bg-slate-50 -mt-52 shadow-xl">
                <h2 className="text-center mt-32 pt-10 text-6xl font-mono font-black">¿Quienes somos?</h2>
                <HeroVideoDialog
                    className="block dark:hidden mt-10 px-52"
                    animationStyle="from-center"
                    videoSrc="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?si=-ZbRgDnlbHfPTYqe"
                    thumbnailSrc="https://placehold.co/1280x720/png"
                    thumbnailAlt="Dummy Video Thumbnail"
                />
            </section>

            <TextReveal className="bg-slate-50 font-sans -mt-32">
                Somos un equipo unido actuando con excelencia.
            </TextReveal>

            <section>
                <h2>Redes Sociales</h2>
            </section>
        </>
    );
}

import HomeTransitionOverlay from "@components/custom/home-transition-overlay";
import Landing from "@components/section/landing";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import Footer from "@/components/section/footer";
import About from "@/components/section/about";

export default function Home() {
  return (
    <>
      <Landing />
      <ScrollProgress className="h-2" />
      <HomeTransitionOverlay />
      <About />
      <Footer />
    </>
  );
}

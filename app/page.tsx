import HomeTransitionOverlay from "@/components/custom/home-transition-overlay";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import About from "@/components/section/about";
import Footer from "@/components/section/footer";
import Landing from "@/components/section/landing";

export default function Home() {
  return (
    <main>
      <Landing />
      <ScrollProgress className="h-2" />
      <HomeTransitionOverlay />
      <About />
      <Footer />
    </main>
  );
}

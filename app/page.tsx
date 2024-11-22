import HomeTransitionOverlay from "@components/custom/home-transition-overlay";
import Landing from "@components/section/landing";

export default function Home() {
  return (
    <>
      <HomeTransitionOverlay />
      <Landing />

      <h1 className="sticky top-1/2 -translate-y-1/2 z-10 text-center font-mono text-5xl font-black">
        ¿Quién somos?
      </h1>
      <section className="h-screen bg-slate-50">a</section>
    </>
  );
}

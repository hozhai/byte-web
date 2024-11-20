import HomeTransitionOverlay from "@components/custom/home-transition-overlay";
import Landing from "@components/section/landing";

export default function Home() {
  return (
    <>
      <HomeTransitionOverlay />
      <Landing />
      <section className="h-screen bg-slate-100">
        <br />
      </section>
    </>
  );
}

"use client";

import HeroVideoDialog from "../magicui/hero-video-dialog";
import Description from "../custom/description";

export default function About() {
  return (
    <section
      className="relative bg-slate-50 -mt-52 shadow-xl"
      id="introduccion"
    >
      <h2 className="text-center mt-32 pt-24 text-6xl font-mono font-black">
        ¿Quienes somos?
      </h2>
      <p className="mx-52 text-xl mt-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        fugit distinctio explicabo aperiam illum, laudantium similique, ducimus
        incidunt alias omnis maiores adipisci nesciunt? Nemo quis id dolores
        omnis provident! Cumque.
      </p>
      <HeroVideoDialog
        className="block dark:hidden mx-52 mt-20"
        animationStyle="from-center"
        videoSrc="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?si=-ZbRgDnlbHfPTYqe"
        thumbnailSrc="https://placehold.co/1280x720/png"
        thumbnailAlt="Dummy Video Thumbnail"
      />

      <div className="flex justify-evenly items-center mt-20 pb-20 flex-wrap">
        <Description description="Lorem" imageUrl="" />
        <Description description="Lorem" imageUrl="" />
        <Description description="Lorem" imageUrl="" />
        <Description description="Lorem" imageUrl="" />
        <Description description="Lorem" imageUrl="" />
      </div>
    </section>
  );
}

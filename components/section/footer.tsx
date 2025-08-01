import { Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
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
  );
}

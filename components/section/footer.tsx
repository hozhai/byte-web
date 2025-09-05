import { Instagram, Mail } from "lucide-react";
import { CONTACT_INFO, SITE_CONFIG } from "@/lib/constants";
import { formatSocialLink } from "@/lib/helpers";

export default function Footer() {
  return (
    <footer
      id="contactanos"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-mono font-black mb-4 sm:mb-6 text-center sm:text-left">
          &gt; Contáctanos!
        </h2>

        <ul className="space-y-2 sm:space-y-3 mb-8 sm:mb-12 flex flex-col items-center sm:items-start">
          <li className="flex items-center">
            <Instagram
              className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5"
              aria-hidden="true"
            />
            <a
              href={formatSocialLink("instagram", CONTACT_INFO.instagram)}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors text-sm sm:text-base"
            >
              {CONTACT_INFO.instagram}
            </a>
          </li>
          <li className="flex items-center">
            <Mail
              className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5"
              aria-hidden="true"
            />
            <a
              href={formatSocialLink("email", CONTACT_INFO.email)}
              className="hover:text-blue-600 transition-colors text-sm sm:text-base"
            >
              {CONTACT_INFO.email}
            </a>
          </li>
        </ul>

        <p className="text-center text-xs sm:text-sm text-gray-600">
          Byte Robotics - GNU GPLv3 - {SITE_CONFIG.year}
        </p>
      </div>
    </footer>
  );
}

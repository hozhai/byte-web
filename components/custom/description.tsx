import Image from "next/image";
import type { TeamMember } from "@/lib/types";

interface DescriptionProps extends TeamMember {
  className?: string;
}

const DEFAULT_IMAGE = "https://placehold.co/256x256/png";

export default function Description({
  name,
  description,
  imageUrl,
  className,
}: DescriptionProps) {
  return (
    <div
      className={`bg-accent p-4 sm:p-6 md:p-8 lg:p-10 mt-8 sm:mt-12 md:mt-16 lg:mt-20 rounded-xl flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-12 ${
        className || ""
      }`}
    >
      <Image
        src={imageUrl || DEFAULT_IMAGE}
        className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-64 lg:w-64 rounded-3xl object-cover flex-shrink-0"
        alt={`Foto de ${name}`}
        height={256}
        width={256}
      />
      <div className="flex flex-col items-start justify-center text-center md:text-left">
        <h3 className="font-mono text-lg sm:text-xl font-bold mb-2 md:mb-3 w-full md:w-auto">
          &gt; {name}
        </h3>
        <p className="text-sm sm:text-base leading-relaxed text-justify">
          {description}
        </p>
      </div>
    </div>
  );
}

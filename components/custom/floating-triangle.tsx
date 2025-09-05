import BlurFade from "@/components/ui/blur-fade";
import { randomDelay } from "@/lib/helpers";
import type { TriangleProps } from "@/lib/types";
import { cn } from "@/lib/utils";

const TRIANGLE_COLORS = {
  0: "bg-pink-500",
  1: "bg-cyan-200",
} as const;

export default function FloatingTriangle({
  color,
  position,
  rotation,
  className,
}: TriangleProps) {
  return (
    <div
      className={cn("absolute drop-shadow-2xl", className)}
      style={{
        bottom: position[1],
        left: position[0],
      }}
    >
      <BlurFade delay={randomDelay(0.1, 0.8)}>
        <div
          className={cn(
            "h-[40rem] w-64 absolute opacity-50 hover:opacity-75 transition-opacity duration-300",
            TRIANGLE_COLORS[color as keyof typeof TRIANGLE_COLORS] ||
              TRIANGLE_COLORS[0],
          )}
          style={{
            transform: `rotate(${rotation}deg)`,
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
        />
      </BlurFade>
    </div>
  );
}

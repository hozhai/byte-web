import BlurFade from "@/components/ui/blur-fade";
import { cn } from "@utils";

/*
  Color is a number that will decide whether it's cyan or purple.
  Position is an XY tuple that dictates where the shape will end up.
  Rotation is a number that dictates the rotation of the shape.
 */
interface TriangleProps {
  color: number;
  position: number[];
  rotation: number;
  className?: string;
}

export default function FloatingTriangle(props: TriangleProps) {
  return (
    <div
      className="absolute drop-shadow-2xl"
      style={{ bottom: props.position[1], left: props.position[0] }}
    >
      <BlurFade delay={Math.trunc(Math.random() * 8 + 1) / 10}>
        <div
          className={cn(
            "h-[40rem] w-64 absolute opacity-50 hover:opacity-75 transition-opacity",
            props.color ? "bg-cyan-200" : "bg-pink-500",
          )}
          style={{
            transform: `rotate(${props.rotation}deg)`,
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
        />
      </BlurFade>
    </div>
  );
}

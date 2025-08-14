import Image from "next/image";
import RandomBlob from "./random-blob";

interface Props {
  name: string;
  description: string;
  imageUrl: string;
}

export default function Description(props: Props) {
  return (
    <div className="bg-accent p-10 mt-20 rounded-xl flex justify-center items-center space-x-12">
      <Image
        src={props.imageUrl || "https://placehold.co/256x256/png"}
        className="h-64 w-64 rounded-3xl"
        alt="Foto"
        height={256}
        width={256}
      />
      <span className="flex flex-col items-start justify-center">
        <h3 className="font-mono text-xl font-bold">&gt; {props.name}</h3>
        <p className="text-justify">{props.description}</p>
      </span>
    </div>
  );
}

import Image from "next/image";

interface Props {
  description: string;
  imageUrl: string;
}

export default function Description(props: Props) {
  return (
    <div className="w-64 bg-accent p-4 rounded-xl">
      <Image
        src={props.imageUrl || "https://placehold.co/512x512/png"}
        alt="Foto"
        height={256}
        width={256}
      />
      <hr />
      <p className="text-justify">{props.description}</p>
    </div>
  );
}

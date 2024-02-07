import Image from "next/image";

type PersonProps = {
  person:
    | "Daniel Clifford"
    | "Jonathan Walters"
    | "Jeanette Harmon"
    | "Patrick Abrams"
    | "Kira Whittle";
};

export default function Person({ person }: PersonProps) {
  const ImageSrc = {
    "Daniel Clifford": "/image-daniel.jpg",
    "Jonathan Walters": "/image-jonathan.jpg",
    "Jeanette Harmon": "/image-jeanette.jpg",
    "Patrick Abrams": "/image-patrick.jpg",
    "Kira Whittle": "/image-kira.jpg",
  };

  return (
    <div>
      <Image
        src={ImageSrc[person]}
        alt={`${person} image`}
        width={32}
        height={32}
      />
      <div>
        <h3>{person}</h3>
        <h4>Verified Graduate</h4>
      </div>
    </div>
  );
}

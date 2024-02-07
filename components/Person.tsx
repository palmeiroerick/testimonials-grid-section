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
  const imageSrc = {
    "Daniel Clifford": "/image-daniel.jpg",
    "Jonathan Walters": "/image-jonathan.jpg",
    "Jeanette Harmon": "/image-jeanette.jpg",
    "Patrick Abrams": "/image-patrick.jpg",
    "Kira Whittle": "/image-kira.jpg",
  };

  const titleColor = {
    "Daniel Clifford": "text-white",
    "Jonathan Walters": "text-white",
    "Jeanette Harmon": "text-veryDarkBlackishBlue",
    "Patrick Abrams": "text-white",
    "Kira Whittle": "text-veryDarkBlackishBlue",
  };

  const subTitleColor = {
    "Daniel Clifford": "text-lightGray",
    "Jonathan Walters": "text-lightGray",
    "Jeanette Harmon": "text-veryDarkGrayishBlue",
    "Patrick Abrams": "text-lightGray",
    "Kira Whittle": "text-veryDarkGrayishBlue",
  };

  return (
    <div className="flex items-center gap-5">
      <Image
        className="h-8 w-8 rounded-full"
        src={imageSrc[person]}
        alt={`${person} image`}
        width={32}
        height={32}
      />
      <div>
        <h3 className={`${titleColor[person]}`}>{person}</h3>
        <h4 className={`${subTitleColor[person]} text-sm`}>
          Verified Graduate
        </h4>
      </div>
    </div>
  );
}

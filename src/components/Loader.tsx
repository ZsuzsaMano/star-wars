import Image from "next/image";
import Loading from "../app/assets/Lightsaber-Progress-Bar.gif";

export const Loader = () => {
  return (
    ////https://codepen.io/andyNroses/pen/oqqNbM when I have time will rewrite with tailwind
    <div className="w-full">
      <Image
        src={Loading}
        width={500}
        height={500}
        alt="Loader"
        className="mx-auto"
      />
      <p className="text-2xs text-right">credit: andyNroses</p>
    </div>
  );
};

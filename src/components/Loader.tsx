import Image from "next/image";
import hilt from "../app/assets/lightsaber-hilt.png";

export const Loader = () => {
  return (
    <div>
      Loading...
      <div className="flex items-center">
        <Image src={hilt} width={60} height={60} alt="lightsaber hilt" />
        <div className="h-2 w-full flex items-center relative overflow-hidden  bg-[#ff0000] shadow-[7px_7px_14px_#ff0000,-7px_-7px_14px_#ff0000] rounded-r-full animate-[animate_4s_infinite]"></div>
      </div>
    </div>
  );
};

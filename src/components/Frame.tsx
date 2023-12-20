import React, { FC } from "react";
import Image from "next/image";
import placeholderPic from "../app/assets/placeholder.png";

export const Frame: FC = () => {
  return (
    <div className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] w-16 rounded-md ">
      <figure>
        <Image
          src={placeholderPic}
          width={500}
          height={500}
          alt="Placeholder for character"
          className="rounded-md"
        />
        <figcaption className="p-2">
          <p>Name</p>
          <p>species</p>
        </figcaption>
      </figure>
    </div>
  );
};

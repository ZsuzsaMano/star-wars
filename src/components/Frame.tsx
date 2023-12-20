import React, { FC } from "react";
import Image from "next/image";
import placeholderPic from "../app/assets/placeholder.png";
import { Person } from "@/types/shared.types";

/** cards used both in squad and search results */
export const Frame: FC<{ person: Person | null; isSquad: boolean }> = ({
  person,
  isSquad,
}) => {
  console.log("person", person);
  return (
    <div className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] w-36 h-56 rounded-md ">
      <figure>
        <Image
          src={person?.image || placeholderPic}
          width={500}
          height={500}
          alt="Placeholder for character"
          className="rounded-md"
        />
        <figcaption className="p-2 text-center">
          <strong>{person?.name || "add someone to your squad"}</strong>
          <p>{person?.species?.name}</p>
        </figcaption>
      </figure>
    </div>
  );
};

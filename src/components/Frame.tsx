import React, { FC } from "react";
import Image from "next/image";
import placeholderPic from "../app/assets/placeholder.png";
import { Person } from "@/types/shared.types";
import classNames from "classnames";

/** cards used both in squad and search results */
export const Frame: FC<{ person: Person | null; isSquad: boolean }> = ({
  person,
  isSquad,
}) => {
  console.log("person", person);
  return (
    <div
      className={classNames(
        "shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] w-36  rounded-md",
        isSquad ? " w-20 h-36" : "w-36 h-56"
      )}
    >
      <figure>
        <Image
          src={person?.image || placeholderPic}
          width={500}
          height={500}
          alt="Placeholder for character"
          className="rounded-md"
        />
        <figcaption className="p-2 text-center">
          <strong>{person?.name || ""}</strong>
          <p className={classNames(isSquad && "hidden")}>
            {person?.species?.name}
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

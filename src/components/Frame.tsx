import React, { FC, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import placeholderPic from "../app/assets/placeholder.png";
import { Person } from "@/types/shared.types";
import classNames from "classnames";

interface Frame {
  person: Person | null;
  isSquad: boolean;
  setSquad: Dispatch<SetStateAction<Person[] | null>>;
}

/** cards used both in squad and search results */
export const Frame: FC<Frame> = ({ person, isSquad, setSquad }) => {
  const handleSquadChange = () => {
    if (person) {
      setSquad((prevSquad) => [
        ...(prevSquad || []),
        { id: person.id, image: person.image },
      ]);
    }
  };
  return (
    <div
      className={classNames(
        "shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] w-36  rounded-md",
        isSquad ? " w-20 h-36" : "w-36 h-56"
      )}
    >
      <figure>
        <div className="rounded-md relative">
          <Image
            src={person?.image || placeholderPic}
            width={500}
            height={500}
            alt="Placeholder for character"
            className="rounded-md hover:opacity-50 active:opacity-50"
          />
          <button
            className="absolute top-1 left-4 w-10 h-10 text-5xl"
            onClick={handleSquadChange}
          >
            +
          </button>
        </div>
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

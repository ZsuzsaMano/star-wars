import React, { FC, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import placeholderPic from "../app/assets/placeholder.png";
import { PersonProps, SquadProps } from "@/types/shared.types";
import classNames from "classnames";

interface Frame extends SquadProps {
  person: PersonProps | null;
  isSquad: boolean;
}

/** cards used both in squad and search results */
export const Frame: FC<Frame> = ({ person, isSquad, setSquad, squad }) => {
  /**add to and remove from squad*/
  const handleSquadChange = () => {
    if (person && squad)
      if (isSquad) {
        /** in squad component remove*/
        setSquad(squad.filter((item) => item.id !== person.id));
      } else {
        /** in People component add characters up to 5 person */
        if (squad.length < 5)
          setSquad((prevSquad) => [...(prevSquad || []), person]);
      }
  };

  /** if person already in Squad dont show it in search results*/
  if (!isSquad && squad?.filter((item) => item.id === person?.id).length != 0)
    return null;
  if (person)
    return (
      <div
        className={classNames(
          "shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-md",
          isSquad ? "w-28" : "w-36 h-60"
        )}
      >
        <figure>
          <div className="rounded-md relative">
            <Image
              src={person.image || ""}
              width={500}
              height={500}
              alt={person.name || ""}
              className="rounded-md hover:opacity-50 active:opacity-50"
            />
            <button
              className="absolute top-1 left-4 w-10 h-10 text-5xl"
              onClick={handleSquadChange}
            >
              {isSquad ? "-" : "+"}
            </button>
          </div>
          <figcaption className="p-2 text-center">
            <strong>{person.name}</strong>
            <p className={classNames(isSquad && "hidden")}>
              {person.species?.name}
            </p>
          </figcaption>
        </figure>
      </div>
    );
};

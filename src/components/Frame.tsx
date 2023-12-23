import React, { FC } from "react";
import Image from "next/image";
import { PersonProps, SearchProps, SquadProps } from "@/types/shared.types";
import classNames from "classnames";
import { MoreInfoButton } from "./MoreInfoButton";

type Frame = SquadProps & {
  person: PersonProps | null;
  isSquad: boolean;
  filterValues?: SearchProps;
};

/** cards used both in squad and search results */
export const Frame: FC<Frame> = ({
  person,
  isSquad,
  setSquad,
  squad,
  filterValues,
}) => {
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
  /** if species already in Squad dont show it in search results*/
  if (
    !isSquad &&
    squad?.filter((item) => item.species === person?.species).length != 0
  )
    return null;
  /** filter by gender*/
  if (
    !isSquad &&
    person?.gender != filterValues?.gender &&
    filterValues?.gender != "all"
  )
    return null;
  /** filter by name*/
  if (
    filterValues &&
    !isSquad &&
    !person?.name?.toLowerCase().includes(filterValues.name.toLowerCase())
  )
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
            <p>{person.species?.name}</p>
          </figcaption>
          <MoreInfoButton personId={person.id} />
        </figure>
      </div>
    );
};

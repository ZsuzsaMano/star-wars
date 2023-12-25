import React, { FC } from "react";
import Image from "next/image";
import { PersonProps, SearchProps } from "@/types/shared.types";
import { MoreInfoButton } from "./MoreInfoButton";
import { useSquadStore } from "@/store/zustand";

interface Frame {
  key: number;
  person: PersonProps | null;
  isSquad: boolean;
  filterValues?: SearchProps;
}

/** cards used both in squad and search results */
export const Frame: FC<Frame> = ({ person, isSquad, filterValues }) => {
  const { squad, addToSquad, removeFromSquad } = useSquadStore((state) => {
    return {
      squad: state.squad,
      /** add to squad component */
      addToSquad: state.addToSquad,
      /** in squad component remove*/
      removeFromSquad: state.removeFromSquad,
    };
  });

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
      <div className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-md w-24 md:w-36 ">
        <figure>
          <div className="rounded-md relative">
            <button
              data-cy={"toggle-button " + person.id}
              onClick={
                isSquad
                  ? () => removeFromSquad(person)
                  : () => addToSquad(person)
              }
            >
              <Image
                src={person.image || ""}
                width={500}
                height={500}
                alt={person.name || ""}
                className="rounded-md hover:opacity-50 active:opacity-50"
              />
              <span className="absolute top-2 right-2 w-8 h-8 pb-1 text-xl bg-white rounded-full flex justify-center items-center leading-none">
                {isSquad ? "-" : "+"}
              </span>
            </button>
          </div>
          <figcaption className="px-1">
            <p className="text-2xs md:text-xs text-bluegray line-clamp-1 h-4">
              {person.species?.name}
            </p>
            <p
              className="text-sm md:text-base font-semibold line-clamp-2 h-12"
              data-cy="name"
            >
              {person.name}
            </p>
          </figcaption>
          <MoreInfoButton personId={person.id} />
        </figure>
      </div>
    );
};

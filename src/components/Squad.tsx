import React, { FC, Dispatch, SetStateAction } from "react";
import { Frame } from "./Frame";
import { Person } from "@/types/shared.types";

interface SquadProps {
  setSquad: Dispatch<SetStateAction<Person[] | null>>;
  squad: Person[] | null;
}

/** displaying the created squad */
export const Squad: FC<SquadProps> = ({ setSquad, squad }) => {
  return (
    <section className="w-full">
      <h2>Your Squad</h2>
      <div className="flex justify-between w-full my-2 flex-wrap gap-2">
        {squad &&
          squad.map((person) => {
            return (
              <div key={person.id}>
                <Frame person={person} isSquad={true} setSquad={setSquad} />
              </div>
            );
          })}
      </div>
    </section>
  );
};

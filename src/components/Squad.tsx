import React, { FC, Dispatch, SetStateAction } from "react";
import { Frame } from "./Frame";
import { SquadProps } from "@/types/shared.types";

/** displaying the created squad */
export const Squad: FC<SquadProps> = ({ setSquad, squad }) => {
  return (
    <section className="w-full">
      <h2>Your Squad</h2>{" "}
      <span>Add from search results 3 to 5 different species characters</span>
      <div className="flex justify-around w-full my-2 flex-wrap gap-2">
        {squad &&
          squad.map((person) => {
            return (
              <div key={person.id}>
                <Frame
                  person={person}
                  isSquad={true}
                  setSquad={setSquad}
                  squad={squad}
                />
              </div>
            );
          })}
      </div>
    </section>
  );
};

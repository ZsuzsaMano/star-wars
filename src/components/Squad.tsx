import React, { FC } from "react";
import { Frame } from "./Frame";
import { useSquadStore } from "@/store/zustand";

/** displaying the created squad */
export const Squad: FC = () => {
  const { squad } = useSquadStore();

  return (
    <section className="w-full">
      <h2>Your Squad</h2>{" "}
      <span>
        Include up to <strong> five </strong> characters of various species from
        the search results
      </span>
      <div
        data-cy="squad"
        className="flex w-full my-2 flex-wrap gap-2 md:gap-4 justify-center"
      >
        {squad &&
          squad.map((person) => {
            return <Frame key={person.id} person={person} isSquad={true} />;
          })}
      </div>
    </section>
  );
};

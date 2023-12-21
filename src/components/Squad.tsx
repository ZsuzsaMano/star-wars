import { useState, FC } from "react";
import { Frame } from "./Frame";
import { Person } from "@/types/shared.types";

/** displaying the created squad */
export const Squad: FC = () => {
  /**  state of squad */
  const [squad, setSquad] = useState<Person[] | null>([
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ]);

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

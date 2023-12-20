import { useState, FC } from "react";
import { Frame } from "./Frame";

/** displaying the created squad */
export const Squad: FC = () => {
  /**  state of squad */
  const [squad, setSquad] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);
  return (
    <section className="w-full">
      <h2>Your Squad</h2>
      <div className="flex justify-between w-full my-2 flex-wrap gap-2">
        {squad.map((person) => {
          return (
            <div key={person.id}>
              <Frame person={person} isSquad={true} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

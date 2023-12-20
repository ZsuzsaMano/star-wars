import { useState, FC } from "react";
import { Frame } from "./Frame";

export const Squad: FC = () => {
  const [squad, setSquad] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ]);
  return (
    <section className="w-full">
      <h2>Your Squad</h2>
      <div className="flex justify-between w-full my-2">
        {squad.map((person, i) => {
          return (
            <div key={person.id}>
              <Frame />
            </div>
          );
        })}
      </div>
    </section>
  );
};

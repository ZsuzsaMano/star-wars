import { Frame } from "@/components/Frame";
import { Loader } from "@/components/Loader";
import { GET_SQUADS } from "@/graphQL/queries";
import { useSquadStore } from "@/store/zustand";
import { PersonProps } from "@/types/shared.types";
import { useQuery } from "@apollo/client";
import { FC } from "react";

type SquadsProps = {
  name: string;
  characters: PersonProps[];
};

export const Profile: FC = () => {
  const state = useSquadStore();
  const user = state.user;
  const { data, error, loading } = useQuery(GET_SQUADS);
  if (loading) return <Loader />;

  if (error) return <p>Error : {error.message}</p>;

  return (
    <main className="max-w-5xl mx-auto p-4 md:flex">
      <h3>Personal Info</h3>
      <span className="text-blue mr-4 font-semibold leading-6">Email:</span>
      {user?.email}
      <div className="border border-gray-500 my-6 md:my-3"></div>
      <section>
        {data.squads.map((squad: SquadsProps) => {
          return (
            <div key={squad.name} className="mb-16">
              <h3>{squad.name}</h3>
              <ul className="flex w-full my-2 flex-wrap gap-2 md:gap-4 justify-center">
                {squad.characters.map((person: PersonProps) => {
                  return (
                    <li key={person.id}>
                      <Frame
                        key={person.id}
                        person={person}
                        isSquad={true}
                        isProfile={true}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </section>
    </main>
  );
};

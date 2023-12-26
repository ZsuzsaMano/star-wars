"use client";

import { FC } from "react";
import { useQuery } from "@apollo/client";
import { Frame } from "./Frame";
import {
  PersonProps,
  SearchProps,
  allPeopleQueryProps,
} from "@/types/shared.types";
import { GET_PEOPLE } from "@/graphQL/queries";
import { Loader } from "./Loader";

type People = {
  filterValues: SearchProps;
};

/** displaying filtered characters based on serach */
export const People: FC<People> = ({ filterValues }) => {
  /** this is what the graphQl query returns */
  const { data, error, loading } = useQuery<allPeopleQueryProps>(GET_PEOPLE);

  if (loading) return <Loader />;

  if (error) return <p>Error : {error.message}</p>;

  return (
    <section>
      <div
        className="flex flex-wrap gap-2 md:gap-4 w-full my-2 justify-center"
        data-cy="people"
      >
        {data &&
          data.allPeople.map((person: PersonProps) => {
            return (
              <Frame
                key={person.id}
                person={person}
                isSquad={false}
                filterValues={filterValues}
              />
            );
          })}
      </div>
    </section>
  );
};

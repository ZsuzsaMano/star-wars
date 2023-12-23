"use client";

import { useState, FC, useEffect, Dispatch, SetStateAction } from "react";
import { useQuery, gql } from "@apollo/client";
import { Frame } from "./Frame";
import { SearchProps, allPeopleQueryProps } from "@/types/shared.types";
import { GET_PEOPLE } from "@/graphQL/queries";

type People = {
  filterValues: SearchProps;
};

/** displaying filtered characters based on serach */
export const People: FC<People> = ({ filterValues }) => {
  /** this is what the graphQl query returns */
  const { data, error, loading } = useQuery<allPeopleQueryProps>(GET_PEOPLE);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  return (
    <section>
      <div className="flex flex-wrap gap-2 justify-around w-full my-2">
        {data &&
          data.allPeople.map((person: any) => {
            return (
              <div key={person.id}>
                <Frame
                  person={person}
                  isSquad={false}
                  filterValues={filterValues}
                />
              </div>
            );
          })}
      </div>
    </section>
  );
};

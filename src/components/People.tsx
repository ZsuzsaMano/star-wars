"use client";

import { useState, FC, useEffect, Dispatch, SetStateAction } from "react";
import { useQuery, gql } from "@apollo/client";
import { Frame } from "./Frame";
import { PersonProps, SearchProps, SquadProps } from "@/types/shared.types";

interface People extends SquadProps {
  filterValues: SearchProps;
}

/** displaying filtered characters based on serach */
export const People: FC<People> = ({ setSquad, squad, filterValues }) => {
  const [searchResults, setSearchResults] = useState([]);

  /** get characters based on search filters */
  const GET_PEOPLE = gql`
    query allPeople {
      allPeople {
        id
        name
        image
        gender
        species {
          id
          name
        }
      }
    }
  `;

  /** this is what the graphQl query returns */
  const { data, error, loading } = useQuery(GET_PEOPLE);

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
                  setSquad={setSquad}
                  squad={squad}
                  filterValues={filterValues}
                />
              </div>
            );
          })}
      </div>
    </section>
  );
};

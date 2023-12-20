"use client";

import { useState, FC, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { Frame } from "./Frame";

/** displaying filtered characters based on serach */
export const People: FC = () => {
  const [searchResults, setSearchResults] = useState([]);

  /** get characters based on search filters */
  const GET_PEOPLE = gql`
    query allPeople {
      allPeople {
        id
        name
        image
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
                <Frame person={person} isSquad={false} />
              </div>
            );
          })}
      </div>
    </section>
  );
};

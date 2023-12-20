"use client";

import { useState, FC, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { Frame } from "./Frame";

export const People: FC = () => {
  const [searchResults, setSearchResults] = useState([]);
  const GET_PEOPLE = gql`
    query allPeople {
      allPeople {
        id
        name
        species {
          id
          name
        }
      }
    }
  `;

  const { data, error, loading } = useQuery(GET_PEOPLE);
  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;
  console.log("data", data);

  return (
    <section>
      <div className="flex flex-wrap gap-2 justify-between w-full my-2">
        {data &&
          data.allPeople.map((person: any, i) => {
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

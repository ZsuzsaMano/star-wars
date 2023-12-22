import { useSearchParams } from "next/navigation";
import { gql, useQuery } from "@apollo/client";
import Image from "next/image";

export default function Person() {
  const searchParams = useSearchParams();

  const id = searchParams.get("id");

  const GET_PERSON = gql`
    query PersonQuery($personId: ID!) {
      person(id: $personId) {
        id
        birthYear
        eyeColor
        films {
          title
        }
        homeworld {
          name
        }
        mass
        image
        gender
        hairColor
        height
        name
        skinColor
        species {
          language
          name
        }
        starships {
          image
          manufacturer
          model
          name
          pilots {
            name
          }
        }
        vehicles {
          manufacturer
          name
          model
          pilots {
            name
          }
        }
      }
    }
  `;
  const { data, error, loading } = useQuery(GET_PERSON, {
    variables: { personId: id },
  });
  const person = data?.person;

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <main className="min-h-screen max-w-5xl mx-auto p-4">
      <Image
        src={person.image || ""}
        width={500}
        height={500}
        alt={person.name || ""}
        className="rounded-md hover:opacity-50 active:opacity-50"
      />
      {Object.entries(person).map(([key, val]) => {
        if (typeof val === "string" && key != "image" && key != "__typename")
          return (
            <p key={key}>
              {key} : {val}
            </p>
          );
      })}

      {person.homeword && <p>homeword: {person.homeword?.name}</p>}

      {Object.entries(person.starships).map(([key, val]) => {
        if (typeof val === "string" && key != "image" && key != "__typename")
          return (
            <p key={key}>
              {key} : {val}
            </p>
          );
      })}
      {Object.entries(person.vehicles).map(([key, val]) => {
        if (typeof val === "string" && key != "image" && key != "__typename")
          return (
            <p key={key}>
              {key} : {val}
            </p>
          );
      })}
    </main>
  );
}

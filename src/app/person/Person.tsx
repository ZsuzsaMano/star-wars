import { useSearchParams } from "next/navigation";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import { GET_PERSON } from "@/graphQL/queries";

export default function Person() {
  const searchParams = useSearchParams();

  const id = searchParams.get("id");

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

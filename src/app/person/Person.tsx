import { useSearchParams } from "next/navigation";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import { GET_PERSON } from "@/graphQL/queries";
import { PersonQueryProps } from "@/types/shared.types";
import { Loader } from "@/components/Loader";
import { useRouter } from "next/navigation";

export default function Person() {
  /** get query from URL */
  const searchParams = useSearchParams();

  /** get routing access */
  const router = useRouter();

  const id = searchParams.get("id");

  /** get the data of the person with the given id */
  const { data, error, loading } = useQuery<PersonQueryProps>(GET_PERSON, {
    variables: { personId: id },
  });
  const person = data?.person;

  if (loading) return <Loader />;

  if (error) return <p>{error.message}</p>;
  if (person)
    return (
      <main className="min-h-screen max-w-5xl mx-auto p-4">
        <button onClick={() => router.back()}>Back</button>
        <Image
          src={person.image || ""}
          width={500}
          height={500}
          alt={person.name || ""}
          className="rounded-md hover:opacity-50 active:opacity-50"
        />
        {Object.entries(person).map(([key, val]) => {
          if (
            (typeof val === "string" || typeof val === "number") &&
            key != "image" &&
            key != "__typename"
          )
            return (
              <p key={key}>
                {key} : {val}
              </p>
            );
        })}
        <button onClick={() => router.back()}>Back</button>
      </main>
    );
}

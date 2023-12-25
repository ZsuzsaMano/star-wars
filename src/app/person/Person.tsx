import { useSearchParams } from "next/navigation";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import { GET_PERSON } from "@/graphQL/queries";
import { PersonQueryProps } from "@/types/shared.types";
import { Loader } from "@/components/Loader";
import { useRouter } from "next/navigation";
import { MdArrowBackIos } from "react-icons/md";

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
      <main className="min-h-screen max-w-5xl mx-auto p-4 md:flex">
        <Image
          src={person.image || ""}
          width={500}
          height={500}
          alt={person.name || ""}
          className="rounded-md hover:opacity-50 active:opacity-50 h-56 object-cover object-top md:h-full"
        />

        <div className="py-6 md:ml-24">
          <p className="text-2xs md:text-xs text-bluegray line-clamp-1 h-4">
            {person.species?.name}
          </p>
          <h3 className="pb-4 font-bold">{person.name}</h3>
          {Object.entries(person).map(([key, val]) => {
            if (
              (typeof val === "string" || typeof val === "number") &&
              key != "image" &&
              key != "__typename"
            )
              return (
                <p key={key}>
                  <span className="text-blue w-32 inline-block font-semibold leading-6">
                    {key}:
                  </span>
                  {val}
                </p>
              );
          })}
          {person.species?.name && (
            <p>
              <span className="text-blue w-32 inline-block font-semibold leading-6">
                Species:
              </span>
              {person.species?.name}
            </p>
          )}
          <button
            onClick={() => router.back()}
            className="bg-blue text-white w-full rounded-full md:w-64 flex justify-center items-center mt-6 md:mt-12"
          >
            <MdArrowBackIos />
            <span className="ml-2 py-2">Back to Overview</span>
          </button>
        </div>
      </main>
    );
}

import { FC, FormEvent } from "react";
import { useSquadStore } from "@/store/zustand";
import { PersonProps } from "@/types/shared.types";
import { CREATE_SQUAD } from "../graphQL/mutations";
import { useMutation } from "@apollo/client";

export const SquadSubmitForm: FC = () => {
  const state = useSquadStore();
  const squad = state.squad;
  const [createSquad, { data, loading, error }] = useMutation(CREATE_SQUAD);

  const handleUserSquad = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const squadName = formData.get("squadName");
    await createSquad({
      variables: {
        name: squadName,
        characters: squad.map((person: PersonProps) => person.id),
      },
      onCompleted: (data) => {
        console.log("data", data);
      },
      onError: (e) => console.log(e.message),
    });
  };
  return (
    <form onSubmit={handleUserSquad} className="flex gap-4 w-80">
      <input
        className="p-2 text-sm outline-2 placeholder:text-gray-500 rounded-md shadow-[1px_1px_2px_1px_#a2a2ad]"
        placeholder="squad name"
        name="squadName"
        required
        type="text"
      />
      <button
        className="bg-blue text-white active:bg-emerald-600 font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
        type="submit"
      >
        Save
      </button>
    </form>
  );
};

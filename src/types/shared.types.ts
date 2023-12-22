import { Dispatch, SetStateAction } from "react";

export interface PersonProps {
  id: number;
  name?: string;
  image?: string;
  species?: SpeciesProps;
  gender?: string;
}

export interface SpeciesProps {
  id: number;
  name: string;
}

export interface SquadProps {
  setSquad: Dispatch<SetStateAction<PersonProps[] | null>>;
  squad: PersonProps[] | null;
}

export interface SearchProps {
  name: string;
  gender: "male" | "female" | "hermaphrodite" | "all";
}

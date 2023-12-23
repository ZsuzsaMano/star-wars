import { Dispatch, SetStateAction } from "react";

export type PersonProps = {
  id: number;
  name?: string;
  image?: string;
  species?: SpeciesProps;
  gender?: string;
};

export type SpeciesProps = {
  id: number;
  name: string;
};

export type SquadProps = {
  setSquad: Dispatch<SetStateAction<PersonProps[] | null>>;
  squad: PersonProps[] | null;
};

export type SearchProps = {
  name: string;
  gender: "male" | "female" | "hermaphrodite" | "all";
};

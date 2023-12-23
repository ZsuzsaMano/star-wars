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

export type allPeopleQueryProps = {
  allPeople: {
    id: number;
    name: string;
    image: string;
    gender: string;
    species: SpeciesProps;
  }[];
};

export type PersonQueryProps = {
  person: {
    id: number;
    birthYear: string;
    eyeColor: string;
    mass: number;
    image: string;
    gender: string;
    hairColor: string;
    height: number;
    name: string;
    skinColor: string;
    films: {
      title: string;
    };
    species?: {
      language: string;
      name: string;
    };
  };
};

import { Dispatch, SetStateAction } from "react";

export interface PersonProps {
  id: number;
  name?: string;
  image?: string;
  species?: SpeciesProps;
}

export interface SpeciesProps {
  id: number;
  name: string;
}

export interface SquadProps {
  setSquad: Dispatch<SetStateAction<PersonProps[] | null>>;
  squad: PersonProps[] | null;
}

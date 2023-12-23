import { PersonProps } from "@/types/shared.types";
import { create } from "zustand";

type SquadStore = {
  squad: [] | PersonProps[];
  addToSquad: (person: PersonProps) => void;
  removeFromSquad: (person: PersonProps) => void;
};

export const useSquadStore = create<SquadStore>((set) => ({
  squad: [],
  addToSquad: (person) =>
    set((state) =>
      state.squad.length < 5
        ? { squad: [...state.squad, person] }
        : { squad: state.squad }
    ),
  removeFromSquad: (person) =>
    set((state) => ({
      squad: state.squad.filter((p) => p.id !== person.id),
    })),
}));

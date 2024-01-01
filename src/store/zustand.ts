import { PersonProps } from "@/types/shared.types";
import { create } from "zustand";

type SquadStore = {
  squad: [] | PersonProps[];
  addToSquad: (person: PersonProps) => void;
  removeFromSquad: (person: PersonProps) => void;
  isLoggedIn: boolean;
  toggleIsLoggedIn: (is: boolean) => void;
  user: { email: String; id: Number } | null;
  setUser: (user: { email: String; id: Number } | null) => void;
};

export const useSquadStore = create<SquadStore>((set) => ({
  isLoggedIn: false,
  user: null,
  setUser: (user) => set((state) => ({ user: user })),
  toggleIsLoggedIn: (is) => set((state) => ({ isLoggedIn: is })),
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

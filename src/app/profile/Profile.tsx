import { useSquadStore } from "@/store/zustand";
import { FC } from "react";

export const Profile: FC = () => {
  const state = useSquadStore();
  const user = state.user;
  console.log("state", state);

  return (
    <main className="max-w-5xl mx-auto p-4 md:flex">
      <span className="text-blue mr-4 font-semibold leading-6">Email:</span>
      {user?.email}
    </main>
  );
};

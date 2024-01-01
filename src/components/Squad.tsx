import React, { FC, useEffect, useState } from "react";
import { Frame } from "./Frame";
import { useSquadStore } from "@/store/zustand";
import { AuthModal } from "./AuthModal";

/** displaying the created squad */
export const Squad: FC = () => {
  const { squad, isLoggedIn } = useSquadStore();
  const state = useSquadStore();

  useEffect(() => {
    const isToken = localStorage.getItem("token");
    if (isToken) state.toggleIsLoggedIn(true);
  }, []);

  /** the popup login modal */
  const [showModal, setShowModal] = useState(false);

  /** when clicking logout button remove token and change login state to false*/
  const onLogout = () => {
    localStorage.removeItem("token");
    state.toggleIsLoggedIn(false);
    state.setUser(null);
  };
  return (
    <section className="w-full">
      <div className="flex justify-between">
        <h2>Your Squad</h2>{" "}
        <button
          className="ml-12 shadow-[3.0px_3.0px_3.0px_rgba(0,0,0,0.18)] rounded-md px-4"
          onClick={isLoggedIn ? onLogout : () => setShowModal(true)}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
        {showModal ? (
          <AuthModal setShowModal={setShowModal} showModal={showModal} />
        ) : null}
      </div>
      <span>
        Include up to <strong> five </strong> characters of various species from
        the search results
      </span>
      <div
        data-cy="squad"
        className="flex w-full my-2 flex-wrap gap-2 md:gap-4 justify-center"
      >
        {squad &&
          squad.map((person) => {
            return <Frame key={person.id} person={person} isSquad={true} />;
          })}
      </div>
    </section>
  );
};

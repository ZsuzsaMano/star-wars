import React, { FC, useEffect, useState } from "react";
import { useSquadStore } from "@/store/zustand";
import classNames from "classnames";
import { CgProfile } from "react-icons/cg";

import { PersonProps } from "@/types/shared.types";
import { DropdownMenu } from "./DropdownMenu";
import { AuthModal } from "./AuthModal";
import { SquadSubmitForm } from "./SquadSubmitForm";
import { Frame } from "./Frame";

/** displaying the created squad */
export const Squad: FC = () => {
  const { squad, isLoggedIn } = useSquadStore();
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const state = useSquadStore();

  /** let user know the required squad size*/
  const squadSize = squad.length;
  const squadSizeMessage =
    squadSize < 3
      ? `You have to add at least ${
          3 - squadSize
        } more character(s) to your squad`
      : squadSize === 5
      ? "Your squad is complete. You can't add more characters to your squad"
      : "Include 3 to 5 characters of various species from the search results";

  useEffect(() => {
    const isToken = localStorage.getItem("token");
    if (isToken) state.toggleIsLoggedIn(true);
  }, []);

  /** the popup login modal */
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="w-full">
      <div className="flex justify-between relative">
        <h2>Your Squad</h2>{" "}
        <button
          className="ml-12 shadow-[3.0px_3.0px_3.0px_rgba(0,0,0,0.18)] rounded-md px-4"
          onClick={
            isLoggedIn
              ? () => setIsDropdown(!isDropdown)
              : () => setShowModal(true)
          }
        >
          {isLoggedIn ? <CgProfile size={28} /> : "Login"}
        </button>
        {isDropdown && isLoggedIn && (
          <DropdownMenu setIsDropdown={setIsDropdown} />
        )}
        {showModal ? (
          <AuthModal setShowModal={setShowModal} showModal={showModal} />
        ) : null}
      </div>
      <span className={classNames("text-xs", squadSize < 3 && "text-red")}>
        {squadSizeMessage}
      </span>
      <div
        data-cy="squad"
        className="flex w-full my-2 flex-wrap gap-2 md:gap-4 justify-center"
      >
        {squad &&
          squad.map((person: PersonProps) => {
            return <Frame key={person.id} person={person} isSquad={true} />;
          })}
      </div>
      {isLoggedIn && <SquadSubmitForm />}
    </section>
  );
};

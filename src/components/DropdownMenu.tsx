import client from "@/graphQL/apollo_client";
import { useSquadStore } from "@/store/zustand";
import Link from "next/link";
import { Dispatch, FC, SetStateAction } from "react";

type DropDownProps = {
  setIsDropdown: Dispatch<SetStateAction<boolean>>;
};

export const DropdownMenu: FC<DropDownProps> = ({ setIsDropdown }) => {
  const state = useSquadStore();
  /** when clicking logout button remove token and change login state to false*/
  const onLogout = () => {
    localStorage.removeItem("token");
    state.toggleIsLoggedIn(false);
    state.setUser(null);
    client.resetStore();
    setIsDropdown(false);
  };
  return (
    <div
      id="dropdown"
      className="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-28 dark:bg-gray-700 absolute top-10 right-0"
    >
      <ul
        className="py-2  text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefaultButton"
      >
        <li>
          <Link
            href={{
              pathname: "/profile",
            }}
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Profile
          </Link>
        </li>

        <li
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={onLogout}
        >
          Sign out
        </li>
      </ul>
    </div>
  );
};

import React, { FC, useState } from "react";
import { People } from "./People";
import { SearchProps } from "@/types/shared.types";

/** searchfield, gender radio button and species dropdown */
export const SearchBox: FC = () => {
  const [filterValues, setFilterValues] = useState<SearchProps>({
    name: "",
    gender: "all",
  });

  /** get the serach string*/
  const handleSearch = (term: string) => {
    setFilterValues({ ...filterValues, name: term } as SearchProps);
  };

  /** get the gender */
  const onGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValues({ ...filterValues, gender: e.target.value } as SearchProps);
  };
  return (
    <section className="w-full p-2 my-4 rounded-md border border-black">
      <div className="flex flex-wrap">
        <input
          className="p-2 text-sm w-full md:w-1/2 outline-2 placeholder:text-gray-500 rounded-md"
          placeholder="character search"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />

        <div onChange={onGenderChange} className="flex gap-4 items-center">
          <span>
            <input
              type="radio"
              value="male"
              name="gender"
              className="md:ml-4"
            />{" "}
            Male
          </span>
          <span>
            <input type="radio" value="female" name="gender" /> Female
          </span>
          <span>
            <input type="radio" value="hermaphrodite" name="gender" /> Divers
          </span>
          <span>
            <input type="radio" value="all" name="gender" /> All
          </span>
        </div>
      </div>
      <People filterValues={filterValues} />
    </section>
  );
};

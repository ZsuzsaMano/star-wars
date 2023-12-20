import React, { FC } from "react";
import { People } from "./People";

/** searchfield, gender radio button and species dropdown */
export const SearchBox: FC = () => {
  /** get the serach string*/
  const handleSearch = (term: string) => {
    console.log(term);
  };

  /** get the gender */
  const onGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
  };
  return (
    <section className="w-full p-2 my-4 rounded-md border border-black">
      <div className="flex justify-between flex-wrap">
        <input
          className="p-2 text-sm outline-2 placeholder:text-gray-500 rounded-md"
          placeholder="character search"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />

        <div onChange={onGenderChange} className="flex flex-col">
          <span>
            <input type="checkbox" value="Male" name="gender" /> Male
          </span>
          <span>
            <input type="checkbox" value="Female" name="gender" /> Female
          </span>
          <span>
            <input type="checkbox" value="Divers" name="gender" /> Divers
          </span>
        </div>
        <select name="species">
          <option value="someOption">Species 1</option>
          <option value="otherOption">Species 2</option>
        </select>
      </div>
      <People />
    </section>
  );
};

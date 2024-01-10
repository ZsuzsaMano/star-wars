import Link from "next/link";
import React, { FC } from "react";

export const Header: FC = () => {
  return (
    <header className="max-w-5xl mx-auto md:p-4 text-center">
      <Link
        href={{
          pathname: "/",
        }}
      >
        <h1>Star Wars Squad</h1>
      </Link>
      <div className="border border-gray-700 mt-2 md:my-3"></div>
    </header>
  );
};

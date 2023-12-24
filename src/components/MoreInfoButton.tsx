import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { FC } from "react";

type MoreInfoProps = {
  personId: number;
};

export const MoreInfoButton: FC<MoreInfoProps> = ({ personId }) => {
  return (
    <Link
      href={{
        pathname: "/person",
        query: {
          id: personId,
        },
      }}
    >
      <button className="bg-blue text-white w-full rounded-md">
        More info
      </button>
    </Link>
  );
};

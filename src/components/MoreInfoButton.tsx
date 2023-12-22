import { gql, useQuery } from "@apollo/client";
import Link from "next/link";
import { FC } from "react";

interface MoreInfoProps {
  personId: number;
}

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
      <button>More info</button>
    </Link>
  );
};

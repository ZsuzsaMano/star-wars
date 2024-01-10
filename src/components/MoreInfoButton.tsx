import Link from "next/link";
import { FC } from "react";
import { MdArrowForwardIos } from "react-icons/md";

type MoreInfoProps = {
  personId: number;
};

export const MoreInfoButton: FC<MoreInfoProps> = ({ personId }) => {
  return (
    <Link
      href={{
        pathname: "/characterDetails",
        query: {
          id: personId,
        },
      }}
    >
      <button className="bg-blue text-white w-full rounded-md flex justify-center items-center">
        <span className="mr-2">More info</span>
        <MdArrowForwardIos />
      </button>
    </Link>
  );
};

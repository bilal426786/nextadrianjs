import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";

interface Props {
  _id: number;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
}

const RenderTag = ({ _id, name, totalQuestions, showCount }: Props) => {
  return (
    <Link
      href={`/tags/${_id}/`}
      key={_id}
      className="flex items-center justify-between gap-2"
    >
      <Badge className="subtle-medium background-light800_dark300 text-dark400_light500 rounded-lg border-none px-4 py-2 uppercase">
        {name}
      </Badge>
      {showCount && (
        <p className="text-dark500_light700 small-medium">{totalQuestions}</p>
      )}
    </Link>
  );
};

export default RenderTag;

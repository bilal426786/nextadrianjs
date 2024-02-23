import { Input } from "@/components/ui/input";
import { LocalSearchBarProps } from "@/types";
import Image from "next/image";
import React from "react";

const LocalSearchBar = ({
  route,
  iconPosition,
  imgURL,
  placeholder,
}: LocalSearchBarProps) => {
  return (
    <div
      className={`${iconPosition === "right" ? "flex-row-reverse" : "flex-row"}  background-light800_darkgradient flex min-h-[56px] grow items-center gap-1 rounded-lg px-4 py-2`}
    >
      <Image
        src={imgURL}
        width={24}
        height={24}
        alt="search"
        className="cursor-pointer"
      />
      <Input
        type="text"
        placeholder={placeholder}
        className="paragraph-regular no-focus placeholder text-dark400_light700 background-light800_darkgradient border-none shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearchBar;

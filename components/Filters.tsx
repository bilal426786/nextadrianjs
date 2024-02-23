import React from "react";
import { MobileFilterProps } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "./ui/badge";
import Link from "next/link";

export const MobileFilter = ({
  filters,
  parentClasses,
  childClasses,
}: MobileFilterProps) => {
  return (
    <div className={`${parentClasses}`}>
      <Select>
        <SelectTrigger className="no-focus text-dark400_light700 h-[56px] w-full border-none uppercase outline-none sm:w-44">
          <SelectValue placeholder="Filter" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {filters.map((item) => (
              <SelectItem
                value={item.value}
                key={item.value}
                className={`${childClasses}`}
              >
                {item.value}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export const Filters = ({ filters }: MobileFilterProps) => {
  const active = "newest";
  return (
    <div className="mt-6 flex gap-4 max-md:hidden">
      {filters.map((items) => (
        <Link href="/" key={items.value}>
          <Badge
            className={`${active === items.value ? "primary-gradient" : " background-light800_dark300"} subtle-medium text-dark400_light700 rounded-lg border-none px-4 py-2 uppercase `}
          >
            {items.name}
          </Badge>
        </Link>
      ))}
    </div>
  );
};

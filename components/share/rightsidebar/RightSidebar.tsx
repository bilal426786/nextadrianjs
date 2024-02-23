import Link from "next/link";
import React from "react";
import Image from "next/image";
import { HotQuestion, PopularTags } from "@/constants";
import RenderTag from "../RenderTag";

const RightSidebar = () => {
  return (
    <div className="background-light900_dark200 text-dark400_light900 sticky right-0 hidden h-screen w-[352px] overflow-y-auto px-4 pt-36 xl:block">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[1.8rem]">
          {HotQuestion.map((question) => (
            <Link
              href=""
              key={question._id}
              className="flex items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="Click to explore"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h3 className="h3-bold mt-16">Popular</h3>
        <div className="flex w-full flex-col gap-[1.8rem] py-7">
          {PopularTags.map((tag) => (
            <RenderTag
              _id={tag._id}
              key={tag._id}
              name={tag.tag}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;

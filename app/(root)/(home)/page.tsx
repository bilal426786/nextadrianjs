import { Filters, MobileFilter } from "@/components/Filters";
import LocalSearchBar from "@/components/share/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filter";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse items-center justify-between gap-4 sm:flex-row">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          placeholder="Let's Find Out Locally"
          imgURL="/assets/icons/search.svg"
        />
        <MobileFilter
          filters={HomePageFilters}
          parentClasses="background-light800_darkgradient text-dark400_light700 rounded-lg max-sm:w-full md:hidden"
          childClasses="uppercase hover:background-light800_darkgradient text-dark400_light700"
        />
      </div>
      <Filters filters={HomePageFilters} />
    </>
  );
}

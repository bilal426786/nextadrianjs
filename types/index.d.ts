import { BADGE_CRITERIA } from "@/constants";

export interface LocalSearchBarProps {
  route: string;
  iconPosition?: string;
  imgURL: string;
  placeholder?: string;
}
export interface MobileFilterProps {
  filters: { name: string; value: string }[];
  parentClasses?: string;
  childClasses?: string;
}

export interface RenderTagProps {
  _id: number;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
}

export interface PopularTagsType {
  _id: number;
  tag: string;
  totalQuestions: number;
}
export interface HotQuestionsType {
  _id: number;
  title: string;
}

export interface SidebarLink {
  imgURL: string;
  route: string;
  label: string;
}
export interface Job {
  id?: string;
  employer_name?: string;
  employer_logo?: string | undefined;
  employer_website?: string;
  job_employment_type?: string;
  job_title?: string;
  job_description?: string;
  job_apply_link?: string;
  job_city?: string;
  job_state?: string;
  job_country?: string;
}
export interface Country {
  name: {
    common: string;
  };
}
export interface ParamsProps {
  params: { id: string };
}
export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}
export interface URLProps {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}
export interface BadgeCounts {
  GOLD: number;
  SILVER: number;
  BRONZE: number;
}

export type BadgeCriteriaType = keyof typeof BADGE_CRITERIA;

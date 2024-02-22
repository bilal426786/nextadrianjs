"use client";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className="flex flex-col gap-1">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && pathname.length > 1) ||
          pathname === item.route;
        return (
          <Link
            key={item.route}
            href={item.route}
            className={`${isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900"} flex items-center justify-center gap-4 bg-transparent p-4 lg:justify-start`}
          >
            <Image
              src={item.imgURL}
              width={20}
              height={20}
              alt={item.label}
              className={`${isActive ? "" : "invert-colors"}`}
            />
            <p
              className={`${isActive ? "base-bold" : "base-medium"} hidden lg:block`}
            >
              {item.label}
            </p>
          </Link>
        );
      })}
    </section>
  );
};

const LeftSidebar = () => {
  return (
    <section className="background-light900_dark200 fixed hidden h-screen w-16 overflow-y-auto px-1 pb-3 pt-28 sm:block lg:w-72 lg:px-3">
      <NavContent />
      <SignedOut>
        <div className="flex flex-col gap-3">
          <Link href="/sign-in">
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/account.svg"
                alt="Login"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient hidden lg:block">
                Log In
              </span>
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="small-medium btn-tertiary  light-border-2 text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/sign-up.svg"
                alt="Login"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="hidden lg:block">Sign Up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
};

export default LeftSidebar;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./ui/Button";

const menuHeader = [
  "Home",
  "Services",
  "Expertise",
  "Cases",
  "Pricing",
  " Company",
];

const Header = () => {
  return (
    <header className="pt-[30px]">
      <div className="l-container flex items-center justify-between ">
        <Link
          href="/"
          className="flex items-center font-semibold text-xl gap-2.5"
        >
          <Image src="/logo.svg" alt="MicPro" width={36} height={36} />
          <span>MicPro</span>
        </Link>

        <ul className="flex items-center gap-10">
          {menuHeader.map((menu) => (
            <li key={menu} className="font-medium text-base">
              <Link href="/">{menu}</Link>
            </li>
          ))}
        </ul>

        <Button className="-bg--Primary rounded-[30px] -text--White">
          Start a Project
        </Button>
      </div>
    </header>
  );
};

export default Header;

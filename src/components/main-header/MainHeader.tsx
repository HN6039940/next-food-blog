import Link from "next/link";
import React from "react";
import HomeLogo from "@/assets/logo.png";
import Image from "next/image";

const MainHeader = () => {
  return (
    <header className=" flex items-center justify-around  px-10 py-8">
      <div className=" flex items-center justify-center gap-20">
        <Link href="/" className=" inline-block">
          <Image
            src={HomeLogo}
            alt=""
            width={64}
            height={64}
            className="block rounded-full  drop-shadow-2xl"
            priority
          />
        </Link>
        <h1 className=" text-2xl font-bold tracking-wider text-slate-100">
          {" "}
          NEXT LEVEL FOOD
        </h1>
      </div>
      <nav className=" ">
        <ul className="flex items-center justify-center gap-10 text-2xl font-bold text-white opacity-90">
          <li>
            <Link href="/meals/share">Browser Media</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;

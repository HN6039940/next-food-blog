"use client";
import React, { PropsWithChildren } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = PropsWithChildren & {
  href: string;
  activateName: string;
  className?: string;
};

const NavLink = ({ href, children, className, activateName }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith("/" + activateName);
  return (
    <li
      className={`${className} ${isActive ? " text-orange-400" : ""}  transition-all duration-500  hover:text-orange-400`}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default NavLink;

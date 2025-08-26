"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  activeClassname?: string;
  href: string;
  children: React.ReactNode;
  className?: string;
};

const NavLink = ({
  activeClassname = "",
  href,
  children,
  className = "",
}: Props) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`${className} ${
        activeClassname && path === href ? activeClassname : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;

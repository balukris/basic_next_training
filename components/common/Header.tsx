import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <div className="bg-gray-500 text-white">
      <div className="flex items-center justify-between mx-auto py-4 px-4">
        <Link href="/" className="flex space-x-0.5 items-center">
          <Image
            src="/images/logo.png"
            width={30}
            height={18}
            alt="logo-img"
            priority
          />
          <h1>Blogs</h1>
        </Link>

        <nav>
          <ul className="flex space-x-2">
            <li>
              <NavLink href="/" activeClassname="text-gray-800">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink href="/blogs" activeClassname="text-gray-800">
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink href="/addBlogs" activeClassname="text-gray-800">
                Add Blogs
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

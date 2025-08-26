import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-gray-500 text-white">
      <div className="flex items-center justify-between mx-auto py-4 px-4">
        <Link href="/" className=" flex space-x-0.5 items-center">
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
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/category">Category</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

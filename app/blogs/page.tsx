import { Suspense } from "react";
import { getBlogs } from "@/lib/blogs";
import { blogType } from "@/types/blogs";
import Listloader from "./listloader";

const buttonstyle = (color: string) =>
  ` text-blue-800 hover:${color} cursor-pointer`;

async function BlogList() {
  const blogs = await getBlogs();

  return (
    <div className="bg-amber-600 w-[90%] mx-auto">
      <ul className="p-4">
        {blogs?.map((item: blogType) => (
          <li
            key={item.id}
            className=" bg-gray-900 my-2 flex justify-between p-2"
          >
            {item.title}
            <div className="flex space-x-2">
              <button className={buttonstyle("text-amber-50")}>View</button>
              <button className={buttonstyle("text-red-600")}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function List() {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to Blog List Page</h1>
      <Suspense fallback={<Listloader />}>
        <BlogList />
      </Suspense>
    </div>
  );
}

export default List;

import { getBlogbyId } from "@/lib/blogs";
import Image from "next/image";
import { notFound } from "next/navigation";

const BlogbyId = async ({ params }: { params: { slug: string } }) => {
  const blog = await getBlogbyId(parseFloat(params.slug));

  if (!blog) {
    notFound();
  }

  return (
    <div className="bg-amber-600 w-[90%] mx-auto">
      <main className=" flex flex-col justify-center items-center p-5">
        <div>
          <h1 className="text-4xl">{blog.title}</h1>
          <p>{blog.author}</p>
          <p className=" italic">{blog.date}</p>
        </div>

        <div className="relative h-[300] w-[500]">
          <Image src={blog?.image || ""} alt="image-blog-detail" fill />
        </div>
        <div>{blog.description}</div>
      </main>
    </div>
  );
};

export default BlogbyId;

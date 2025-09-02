"use server";

import { saveBlog } from "@/lib/blogs";
import { redirect } from "next/navigation";

export async function submitBlogs(formData: FormData) {
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];

  const raw = {
    title: formData.get("title") as string,
    author: formData.get("author") as string,
    description: formData.get("description") as string,
    image: formData.get("image") as File,
    date: formattedDate,
    active: "true",
  };

  await saveBlog(raw);
  redirect("/blogs");
}

"use server";
import { z } from "zod";
import { saveBlog } from "@/lib/blogs";
import { redirect } from "next/navigation";

const blogSchema = z.object({
  title: z.string().min(3, "Title is required"),
  author: z.string().min(1, "Author is required"),
  description: z.string().min(1, "Description is required"),
});

type fieldErrorType = {
  title?: string[] | undefined;
  author?: string[] | undefined;
  description?: string[] | undefined;
};

export type FormState = {
  success: boolean;
  fieldErrors?: fieldErrorType;
};

export async function submitBlogs(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
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

  const result = blogSchema.safeParse(raw);

  if (result?.success) {
    await saveBlog(raw);
    redirect("/blogs");
  } else {
    const { fieldErrors } = result.error.flatten((issue) => issue.message);
    return { success: false, fieldErrors };
  }
}

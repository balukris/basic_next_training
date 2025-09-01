import sql from "better-sqlite3";
import { blogType } from "@/types/blogs";

const db = sql("lib/blogs.db");

export const getBlogs = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const column = db.prepare("SELECT * FROM blogs").all();
  return column as blogType[];
};

export const getBlogbyId = (slug: number) => {
  const item = db.prepare("SELECT * FROM blogs WHERE id = ?").get(slug);
  return item as blogType;
};

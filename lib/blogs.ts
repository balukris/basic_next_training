import sql from "better-sqlite3";
import { blogType } from "@/types/blogs";
import fs from "node:fs";

export type submitblogType = {
  title: string;
  author: string;
  description: string;
  date: string;
  active: string;
  image?: File | null;
};

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

export const saveBlog = async (item: submitblogType) => {
  let newimageurl = "";
  if (item?.image) {
    const extension = item.image.name.split(".").pop();
    const fileName = `${item.title}-image.${extension}`;
    const stream = fs.createWriteStream(`public/images/${fileName}`);

    const bufferedImage = await item.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
      if (error) new Error("Saving Image Failed");
    });
    newimageurl = `/images/${fileName}`;
  }

  db.prepare(
    `INSERT INTO blogs
      (title, author, description, date, image, active)
      VALUES (@title, @author,
              @description, @date, @image , @active)`
  ).run({
    title: item.title,
    author: item.author,
    description: item.description,
    date: item.date,
    image: newimageurl,
    active: item.active,
  });
};

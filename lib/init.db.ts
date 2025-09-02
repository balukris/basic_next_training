const sql = require("better-sqlite3");
const db = sql("blogs.db");

const blogs = [
  {
    title: "Exploring the Future of AI",
    author: "Jane Doe",
    description:
      "A deep dive into how AI is transforming industries across the globe.",
    date: "2025-03-12",
    active: "true",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    title: "10 Tips for Healthy Remote Work",
    author: "John Smith",
    description:
      "Practical strategies to maintain productivity and mental well-being while working remotely.",
    date: "2025-01-28",
    active: "false",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    title: "Mastering JavaScript in 2025",
    author: "Emily Johnson",
    description:
      "An updated guide on modern JavaScript features and best practices.",
    date: "2025-02-15",
    active: "true",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    title: "The Rise of Sustainable Tech",
    author: "Michael Brown",
    description:
      "How technology is driving sustainability initiatives worldwide.",
    date: "2025-03-01",
    active: "true",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    title: "Travel on a Budget: 2025 Edition",
    author: "Sophia Lee",
    description: "Smart ways to see the world without breaking the bank.",
    date: "2025-02-05",
    active: "false",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
];

db.prepare(
  `CREATE TABLE IF NOT EXISTS  blogs  (   
	  id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    description TEXT NOT NULL,
    date TEXT NOT NULL,
    active TEXT NOT NULL,
    image TEXT NOT NULL
  )`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO blogs VALUES (
      null,
      @title,
      @author,
      @description,
      @date,
      @active,
      @image
      )
   `);

  for (const val of blogs) {
    stmt.run(val);
  }
}

initData();

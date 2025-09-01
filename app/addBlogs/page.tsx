import { z } from "zod";

const blogSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  author: z.string().min(2, "Author must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  image: z.any().optional(),
});

function AddBlogs() {
  async function submit(formData: FormData) {
    "use server";

    const raw = {
      title: formData.get("title"),
      author: formData.get("author"),
      description: formData.get("description"),
      image: formData.get("image") as File | null,
    };
    const parsed = blogSchema.safeParse(raw);
    console.log({ parsed });
  }

  return (
    <div className="text-center">
      <h1 className="text-3xl">Add Blogs</h1>
      <form className="space-y-4 w-[50%] mx-auto" action={submit}>
        <div>
          <label className="block text-left text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            placeholder="Enter blog title"
            className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            name="title"
          />
        </div>

        <div>
          <label className="block text-left text-sm font-medium text-gray-700">
            Author
          </label>
          <input
            type="text"
            placeholder="Enter author name"
            className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            name="author"
          />
        </div>

        <div>
          <label className="block text-left text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            placeholder="Enter blog description"
            rows={4}
            className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            name="description"
          ></textarea>
        </div>
        <div>
          <label className="block text-left text-sm font-medium text-gray-700">
            Image Picker
          </label>
          <input
            placeholder="Choose Image"
            type="file"
            accept="image/jpeg,image/png"
            className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            name="image"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddBlogs;

"use client";

import { submitBlogs, type FormState } from "@/components/addBlogs/actions";
import { useFormState } from "react-dom";
import SubmitButton from "@/components/addBlogs/blog-submit-button";

const initialState: FormState = { success: true };

function AddBlogs() {
  const [state, formAction] = useFormState(submitBlogs, initialState);

  console.log(state.fieldErrors?.author?.[0], "state");

  return (
    <div className="text-center">
      <h1 className="text-3xl">Add Blogs</h1>
      <form className="space-y-4 w-[50%] mx-auto" action={formAction}>
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
          {state.fieldErrors?.title?.[0] && (
            <small className=" text-red-600">
              {state.fieldErrors?.title?.[0]}
            </small>
          )}
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
          {state.fieldErrors?.author?.[0] && (
            <small className=" text-red-600">
              {state.fieldErrors?.author?.[0]}
            </small>
          )}
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
          {state.fieldErrors?.description?.[0] && (
            <small className=" text-red-600">
              {state.fieldErrors?.description?.[0]}
            </small>
          )}
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

        <SubmitButton />
      </form>
    </div>
  );
}

export default AddBlogs;

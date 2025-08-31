"use client";
const Error = ({ error }: { error: Error }) => {
  return (
    <div className="text-center">
      <div className="bg-amber-600 w-[90%] mx-auto h-[300px] flex items-center justify-center">
        <h1>{error?.message}</h1>
      </div>
    </div>
  );
};

export default Error;

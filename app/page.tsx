import ImageSlider from "@/components/home/ImageSlider";

export default function Home() {
  return (
    // <div className="text-center">
    //   <h1 className="text-3xl">Welcome to Home Page</h1>
    //   <p>Home Page</p>
    // </div>
    <div className="flex flex-col min-h-[90vh] mx-4 px-3">
      <h1 className="font-extrabold text-5xl">Welcome to Home Page</h1>
      <section className="flex my-8 flex-1">
        <div className="flex-1">
          <ImageSlider />
        </div>
        <div className="flex-1">
          <p>
            A place where I share thoughts, tutorials, and experiences on
            technology, creativity, and personal growth. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Tempore corrupti sunt
            exercitationem recusandae. Doloremque molestias, necessitatibus
            ratione facere nihil tempore amet autem non excepturi at repellendus
            voluptatibus nemo dolorum earum!
          </p>
        </div>
      </section>
      <section className="my-8 flex-1">
        <h1 className="font-extrabold text-3xl my-2">About</h1>
        <p>
          This blog is all about learning and sharing knowledge. Whether it’s
          coding tips, productivity hacks, or reflections on life, you’ll find
          something useful here. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Maxime accusamus ea sequi, alias reiciendis, ratione
          ducimus soluta fugiat aperiam provident totam sapiente temporibus
          voluptatibus quia quidem placeat dolor obcaecati saepe eos! Unde
          minima, earum adipisci id ut sint voluptatibus beatae.
        </p>
      </section>
    </div>
  );
}

import React from "react";
import image from "../image/homeImg3.jpg";
const Home = () => {
  return (
    <main>
      <img
        src={image}
        alt="Home"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h6 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
          I m nilabh
        </h6>
      </section>
    </main>
  );
};

export default Home;

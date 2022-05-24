import React from "react";

const MainSection = () => {
  return (
    <section className="">
      <div className="flex flex-col items-center mt-24 max-w-xs  mx-auto gap-24 md:max-w-sm lg:flex-row lg:max-w-screen-lg  lg:mt-32  lg:justify-between xl:max-w-screen-2xl xl:px-4 ">
        <div className="text-center space-y-8 lg:text-left lg:max-w-md">
          <h5 className="text-base uppercase tracking-widest font-ff-sans-cond text-light md:text-lg">
            So, you want to travel to
          </h5>
          <h1 className="text-7xl font-ff-serif uppercase text-light md:text-9xl ">
            Space
          </h1>
          <p className="text-light text-sm leading-8 px-3 tracking-wider md:text-base md:leading-8">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="">
          <a
            href="#explore"
            className="large--btn px-[1em] text-2xl md:text-3xl"
          >
            Explore
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainSection;

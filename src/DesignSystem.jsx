import React from "react";

const Numbers = () => {
  return (
    <div className="flex flex-col gap-8 items-center number-indicators">
      <a ariaSelected="true" className="" href="#1">
        1
      </a>
      <a ariaSelected="false" href="#2">
        2
      </a>
      <a ariaSelected="false" href="#3">
        3
      </a>
    </div>
  );
};
const Dots = () => {
  return (
    <div className="flex gap-8 dot-indicators justify-center">
      <button ariaSelected="true"></button>
      <button ariaSelected="false"></button>
      <button ariaSelected="false"></button>
    </div>
  );
};
const Tabs = () => {
  return (
    <div className="flex gap-8 underline-indicators">
      <button
        ariaSelected="true"
        className="uppercase pb-4 tracking-widest text-gray-400 bg-dark font-ff-sans-cond "
      >
        Moon
      </button>
      <button
        ariaSelected="false"
        className="uppercase pb-4 tracking-widest text-gray-400 bg-dark font-ff-sans-cond"
      >
        Mars
      </button>
      <button
        ariaSelected="false"
        className="uppercase pb-4 tracking-widest text-gray-400 bg-dark font-ff-sans-cond"
      >
        Europa
      </button>
    </div>
  );
};
const Navigation = () => {
  return (
    <nav className="mt-20 ">
      <ul className="underline-indicators flex gap-32 uppercase justify-center   py-1">
        <li ariaSelected="true" className="py-5 cursor-pointer ">
          <a href="#Active">
            <span className="mr-4 font-ff-sans-cond font-bold tracking-widest ">
              00
            </span>
            Active
          </a>
        </li>
        <li ariaSelected="false" className="py-5 cursor-pointer">
          <a href="#Hovred">
            <span className="mr-4 font-ff-sans-cond font-bold tracking-widest ">
              01
            </span>
            Hovred
          </a>
        </li>
        <li ariaSelected="false" className="py-5 cursor-pointer">
          <a href="#Idle">
            <span className="mr-4 font-ff-sans-cond font-bold tracking-widest ">
              02
            </span>
            Idle
          </a>
        </li>
      </ul>
    </nav>
  );
};
const Buttons = () => {
  return (
    <div className="cols-1">
      <a href="#explore" className="large--btn">
        Explore
      </a>
    </div>
  );
};
const Color = ({ addClasses = "", refs, RGBref, HSLref }) => {
  return (
    <div className="grid gap-4">
      <div
        className={`pt-12 px-4 pb-4 border border-solid border-white flex ${addClasses}`}
      >
        {refs}
      </div>
      <div className="grid gap-2">
        <p className="flex gap-6">
          <span className="text-light">RGB</span>
          <span>{RGBref}</span>
        </p>
        <p className="flex gap-6">
          <span className="text-light">HSL</span>
          <span className="text-light">{HSLref}</span>
        </p>
      </div>
    </div>
  );
};

const Colors = () => {
  return (
    <section id="colors">
      <div className=" max-w-screen-2xl px-2 mx-auto mt-32 text-white">
        <h2 className="uppercase tracking-wider text-4xl">
          <span className="font-bold text-gray-600">01</span> colors
        </h2>
        <div className="grid grid-cols-3  gap-4 mt-10">
          <Color
            refs={"#0B0D17"}
            RGBref={"11, 13, 23"}
            HSLref={"230°, 35%, 7%"}
          />

          <Color
            refs={"#D2D8F9"}
            RGBref={"210, 216, 249"}
            HSLref={"231, 76%, 90%"}
            addClasses={"bg-light text-dark"}
          />

          <Color
            refs={"#FFFFFF"}
            RGBref={"255, 255, 255"}
            HSLref={"0, 0%, 100%"}
            addClasses={"bg-white text-dark"}
          />
        </div>
      </div>
    </section>
  );
};

const Typography = () => {
  return (
    <section id="typography" className="mt-16">
      <div className="px-2 max-w-screen-2xl mx-auto text-white ">
        <h2 className="text-bold text-4xl tracking-wider uppercase">
          <span className="font-bold text-gray-600">02 </span>Typography
        </h2>
        <div className="flex  mt-10 font-ff-sans-normal">
          <div className="basis-full space-y-12">
            <div>
              <p className="text-light/60">
                Heading 1 - Bellefair Regular - 150px
              </p>
              <p className=" text-9xl font-ff-serif uppercase my-6">Earth</p>
            </div>
            <div>
              <p className="text-light/60">
                Heading 2 - Bellefair Regular - 100px
              </p>
              <p className="text-8xl font-ff-serif uppercase my-6">Venus</p>
            </div>
            <div>
              <p className="text-light/60">
                Heading 3 - Bellefair Regular - 56px
              </p>
              <p className="text-6xl font-ff-serif uppercase my-4">
                Jupiter & Saturn
              </p>
            </div>
            <div>
              <p className="text-light/60">
                Heading 4 - Bellefair Regular - 32px
              </p>
              <p className="text-3xl font-ff-serif uppercase my-2">
                Uranus, Neptune, & Pluto
              </p>
            </div>
            <div>
              <p className="text-light/60">
                Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character
                Space
              </p>
              <p className="text-2xl uppercase my-2 tracking-widest font-ff-sans-cond text-light">
                So, you want to travel to space
              </p>
            </div>
          </div>

          <div className="basis-full space-y-12">
            <div>
              <p className="text-light/60">
                Subheading 1 - Bellefair Regular - 28px
              </p>
              <p className="text-xl uppercase my-2 tracking-widest font-ff-serif text-light ">
                384,400 km
              </p>
            </div>
            <div>
              <p className="text-light/60">
                Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
                Space
              </p>
              <p className="text-sm uppercase my-2  font-ff-sans-cond text-light tracking-widest">
                Avg. Distance
              </p>
            </div>
            <div>
              <p className="text-light/60">
                Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
              </p>
              <p className="uppercase my-2  font-ff-sans-cond text-light tracking-widest">
                Europa
              </p>
            </div>
            <div>
              <p className="text-gray-600 ">Body Text</p>
              <p className=" mt-2 ">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh
                nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
                nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor
                libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
                mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit. Phasellus hendrerit.
                Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
                dapibus id, mattis vel, nisi.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Interactive = () => {
  return (
    <section id="interactive" className="mt-16">
      <div className="px-2 max-w-screen-2xl mx-auto text-white">
        <h2 className="text-bold text-4xl tracking-wider uppercase">
          <span className="font-bold text-gray-600">03 </span>Interactive
          Elements
        </h2>
        <Navigation />
        <div className="flex justify-around  min-h-[100vh] items-center">
          <Buttons />
          <div className="space-y-32">
            <Tabs />
            <Dots />
            <Numbers />
          </div>
        </div>
      </div>
    </section>
  );
};
const DesignSystem = () => {
  return (
    <main className="bg-dark min-h-screen  font-ff-sans-normal">
      <div className="flex justify-around pt-12 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <g fill="none" fillRule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
        <h1 className="  text-white text-5xl font-bold uppercase tracking-widest pt-3">
          Design System
        </h1>
      </div>

      <Colors />
      <Typography />
      <Interactive />
    </main>
  );
};

export default DesignSystem;

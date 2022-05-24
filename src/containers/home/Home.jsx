import React from "react";
import Header from "../../contents/header/Header";
import MainSection from "../../contents/home-main-section/MainSection";
const Home = () => {
  return (
    <main className="mobile__home--bg md:tablet__home--bg lg:desktop__home--bg  bg-dark min-h-screen overflow-hidden   bg-no-repeat bg-cover">
      <Header />
      <MainSection />
    </main>
  );
};

export default Home;

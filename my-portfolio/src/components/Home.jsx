import React, { useState } from "react";
import Banner from "./Banner";
import Navigation from "./Navigation";
import Skills from "./Skills";
import Projects from "./Projects";
import Contacts from "./Contacts";

const Home = () => {
  return (
    <>
      <main className="">
        <Banner></Banner>
      </main>

      <Navigation></Navigation>
    </>
  );
};

export default Home;

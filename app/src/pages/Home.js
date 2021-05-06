import React from "react";
//containers
import Hero from "../containers/Home/Hero";
import CallUs from "../containers/Home/CallUs";
import About from "../containers/Home/About";
import Phone from "../containers/Home/Phone";
import Offer from "../containers/Home/Offer";
import Sign from "../containers/Home/Sign";
import Testimonials from "../containers/Home/Testimonials";
import Contact from "../containers/Home/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <CallUs />
      <About />
      <Phone />
      <Offer />
      <Sign />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;

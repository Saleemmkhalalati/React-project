import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import GetApp from "./Get_App/GetApp";
import Testimonals from "./Testimonals/Testimonals";
import Container from "../../utilities/Container";

const landing = () => {
  return (
    <>
      <Container className={" max-[1750px]:overflow-hidden"}>
        <Hero />
        <About />
        <Services />
        <Testimonals />
        <GetApp />
      </Container>
    </>
  );
};

export default landing;

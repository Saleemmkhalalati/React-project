import React from "react";
import { motion } from "framer-motion";

import "./Hero.css";
import vector from "./Hero_images/Vector.svg";
import DocterImage from "./Hero_images/Doctor_Image.png";
import Typography from "../../../utilities/Typography";
import Button from "../../../utilities/Button";
import BackPolygon from "../../../utilities/BackPolygon";

const Hero = () => {
  const movment = {
    hiddin: {
      x: 100,
      visible: {
        x: 0,
        transition: {
          duration: 0.5,
        },
      },
    },
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      <div className="relative grid-col-6 pt-24 pb-52 px-5 sm:px-0 sm:ps-10  flex flex-col gap-6">
        <div className="flex">
          <div className="text-primary">Welcome to Med - sal</div>
          <img className="ml-2" src={vector} alt="img" />
        </div>
        <div className="absolute -start-24 top-24">
          <BackPolygon></BackPolygon>
        </div>

        <Typography component={"h1"}>
          Get The Best Health Care Services For a More Comfortable Life.
        </Typography>
        <p className="text-mySlate text-sm sm:text-md">
          Don't let illness or ill health sneak up on you. So, get our health
          services, and get your most up-to-date health information form in over
          155,000 compatible and clinically verified medical journals.
        </p>
        <div className="relative text-center sm:text-start  ">
          <Button className="Button">So, Let’s Started</Button>
          <motion.div
            variants={movment}
            inherit="hiddin"
            animate="visible"
            className="rotate absolute w-32 h-full border-solid border-[1px] -z-10 border-secondary rounded top-1 start-1 hidden sm:block "
          ></motion.div>
        </div>
      </div>
      <div className="relative grid-col-6">
        <div className="absolute top-24 start-60">
          <BackPolygon></BackPolygon>
        </div>
        <div className="relative top-32 start-44">
          <div className="absolute h-60 w-60 rounded-xl bg-gradient-to-r from-primary to-secondary ltr:rotate-45 rtl:-rotate-45"></div>
        </div>
        <div className="relative start-52  top-[7.5rem] z-10 ">
          <div className="absolute  w-64 h-64 bg-gray-100 origin-center  ltr:rotate-45 rtl:-rotate-45 rounded-xl"></div>
          <img
            className="absolute w-40 ltr:start-10 top-4 hidden md:block"
            src={DocterImage}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;

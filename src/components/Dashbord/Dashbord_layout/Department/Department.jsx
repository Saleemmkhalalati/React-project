import React from "react";
import { NavLink } from "react-router-dom";
import "./Department.css";
import Typography from "../../../utilities/Typography";

const Department = ({ path, title, descrption, className }) => {
  return (
    <NavLink
      to={path}
      className={`${
        className ? className : ""
      } Department_box   xl:w-[30%] sm:w-[70%]  w-full -400  lg:w-[18rem]   bg-white ps-6 pe-10 pt-5   rounded-md duration-150`}
    >
      <Typography component="h3" className=" mb-3">
        {title}
      </Typography>
      <Typography component="p" className=" opacity-50 !text-[15px] ">
        {descrption}
      </Typography>
    </NavLink>
  );
};

export default Department;

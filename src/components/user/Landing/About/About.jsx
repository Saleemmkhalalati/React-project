import { AboutUsContent } from "../../AboutUs/AboutUsContent";
import DocterImage from "./About_images/Intersect.png";
const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden  ">
      <div className="relative grid-cols-6 hidden lg:block mt-5 ">
        <div className="absolute hidden xl:block ltr:end-24 rtl:end-40 top-2 w-32 h-32 bg-gradient-to-b from-secondary to-primary ltr:rotate-45 rtl:-rotate-45 rounded-2xl shadow-md"></div>
        <div className="relative top-24 ltr:start-16 rtl:start-16 xl:ltr:start-36 ">
          <div className="absolute w-[228px] h-[228px] bg-gradient-to-b from-primary to-secondary rounded-2xl  ltr:rotate-45 rtl:-rotate-45"></div>
          <div className="absolute w-[220px] h-[220px] bg-white  rounded-xl ltr:rotate-45 rtl:-rotate-45 top-1 start-1"></div>
        </div>
        <div className="relative top-20 ltr:start-32 rtl:start-32 xl:ltr:start-52 ">
          <div className="absolute  w-64 h-64 bg-gray-100 origin-center  ltr:rotate-45 rtl:-rotate-45 rounded-2xl"></div>
          <img
            className="absolute w-[18rem] h-[18rem] top-1 rtl:-start-10 "
            src={DocterImage}
            alt="img"
          />
        </div>
      </div>

      <div className="grid-col-6">
        <AboutUsContent
          className={" ps-5 lg:ps-0 pe-0 lg:pe-5 pb-0 lg:pb-24"}
        />
      </div>
    </div>
  );
};

export default About;

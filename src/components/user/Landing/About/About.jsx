import { AboutUsContent } from "../../AboutUs/AboutUsContent";
import Polygon from "../../../utilities/Polygon";
import DocterImage from "./About_images/Intersect.png";
const About = () => {
  return (
    <div className="grid grid-cols-1 ltr:md:grid-cols-2 rtl:lg:grid-cols-2 pb-5 pt-5">
      <div className="relative grid-cols-6 hidden ltr:md:block rtl:lg:block  ">
        <div className="relative start-[22rem] ltr:xl:start-[27rem] hidden lg:block">
          <Polygon
            color="gradient"
            className={"absolute w-28 h-28 xl:w-32 xl:h-32 "}
          ></Polygon>
        </div>

        <div className="relative  top-24 ltr:start-0 ltr:lg:start-16 rtl:start-3 lg:rtl:start-16 xl:ltr:start-36 ">
          <Polygon color="gradient" className={"absolute w-60 h-60 "}>
            <Polygon
              color="white"
              className={"absolute w-[14.5rem] h-[14.5rem] top-1 start-1"}
            ></Polygon>
          </Polygon>
        </div>
        <div className="relative top-[5.6rem] start-10 lg:ltr:start-36 lg:rtl:start-36  xl:ltr:start-52 ">
          <Polygon color="gray" className={"absolute w-64 h-64 "}>
            <img
              className="absolute ltr:top-3 rtl:top-8 ltr:start-[3rem] rtl:start-[1.5rem]  ltr:-rotate-45 rtl:rotate-45 "
              src={DocterImage}
              alt="img"
            />
          </Polygon>
        </div>
      </div>

      <div className="grid-col-5 ">
        <AboutUsContent
          className={"rtl:ps-5 rtl:lg:ps-0 ltr:ps-5 md:ltr:ps-0 pb-0 lg:pb-5"}
        />
      </div>
    </div>
  );
};

export default About;

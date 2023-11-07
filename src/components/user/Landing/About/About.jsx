import { AboutUsContent } from "../../AboutUs/AboutUsContent";
import Polygon from "../../../utilities/Polygon";
import DocterImage from "./About_images/Intersect.png";
const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden  ">
      <div className="relative grid-cols-6 hidden lg:block mt-5 ">
        <div className="relative start-[22rem] ltr:xl:start-[27rem] ">
          <Polygon
            color="gradient"
            className={"absolute w-28 h-28 xl:w-32 xl:h-32"}
          ></Polygon>
        </div>

        <div className="relative top-24 ltr:start-16 rtl:start-16 xl:ltr:start-36 ">
          <Polygon color="gradient" className={"absolute w-60 h-60"}>
            <Polygon
              color="white"
              className={"absolute w-[14.5rem] h-[14.5rem] top-1 start-1"}
            ></Polygon>
          </Polygon>
        </div>
        <div className="relative top-[5.6rem] ltr:start-36 rtl:start-32 xl:ltr:start-52 ">
          <Polygon color="gray" className={"absolute w-64 h-64"}>
            <img
              className="absolute ltr:top-3 rtl:top-8 ltr:start-[3rem] rtl:start-[1.5rem]  ltr:-rotate-45 rtl:rotate-45 "
              src={DocterImage}
              alt="img"
            />
          </Polygon>
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

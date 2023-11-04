import doctor from "./AboutUs-Image/Intersect.svg";
import { AboutUsContent } from "./AboutUsContent";
import BackPolygon from "../../utilities/BackPolygon";
export default function AboutUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      <div className="relative grid-cols-6">
        <div className="absolute  top-24 -start-20 sm:w-96 sm:h-96 sm:-start-28">
          <BackPolygon></BackPolygon>
        </div>
        <AboutUsContent
          className={"pt-10 lg:pt-32 ps-5 md:ps-20 pb-0 sm:pb-32"}
        />
      </div>
      <div className="relative grid-cols-6 hidden md:block ">
        <div className="absolute hidden xl:block end-5 top-8 w-40 h-40 bg-gradient-to-b from-secondary to-primary ltr:rotate-45 rtl:-rotate-45 rounded-2xl shadow-md"></div>
        <div className="relative start-64  top-36 z-10 ">
          <div className="absolute  w-72 h-72 bg-gray-100 origin-center  ltr:rotate-45 rtl:-rotate-45 rounded-xl"></div>
          <img
            className="absolute w-[21rem] h-[21rem] ltr:-start-10 top-2 hidden lg:block"
            src={doctor}
            alt="img"
          />
        </div>
        <div className=" relative start-44 top-40 ">
          <div className="absolute w-[258px] h-[258px] bg-gradient-to-b from-primary to-secondary rounded-2xl  ltr:rotate-45 rtl:-rotate-45"></div>
          <div className="absolute w-[250px] h-[250px] bg-white start-[4px] top-[4px] rounded-xl ltr:rotate-45 rtl:-rotate-45"></div>
        </div>
      </div>
    </div>
  );
}

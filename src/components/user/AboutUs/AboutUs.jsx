import doctor from "./AboutUs-Image/Intersect.svg";
import { AboutUsContent } from "./AboutUsContent";
import BackPolygon from "../../utilities/BackPolygon";
import Polygon from "../../utilities/Polygon";
import Container from "../../utilities/Container";
export default function AboutUs() {
  return (
    <Container className={"  max-[1750px]:overflow-hidden"}>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative grid-cols-6">
          <div className="absolute  top-24 -start-20 sm:w-96 sm:h-96 sm:-start-28">
            <BackPolygon></BackPolygon>
          </div>
          <AboutUsContent
            className={"pt-10 lg:pt-32 ps-5 md:ps-20 pb-0 sm:pb-32"}
          />
        </div>
        <div className="relative grid-cols-6 hidden md:block  ">
          <div className="relative top-6 start-[32rem] hidden xl:block">
            <Polygon
              color="gradient"
              className={"absolute w-36 h-36 "}
            ></Polygon>
          </div>

          <div className="relative start-64  top-32 z-10 ">
            <Polygon color="gray" className={"absolute w-72 h-72"}></Polygon>
            <img
              className="absolute w-[21rem] h-[21rem] ltr:-start-10 top-2 hidden lg:block"
              src={doctor}
              alt="img"
            />
          </div>
          <div className=" relative start-44 top-[9.5rem]   ">
            <Polygon color="gradient" className={"absolute w-60 h-60"}>
              <Polygon
                color="white"
                className={"absolute w-[14.5rem] h-[14.5rem] top-1 start-1"}
              ></Polygon>
            </Polygon>
          </div>
        </div>
      </div>
    </Container>
  );
}

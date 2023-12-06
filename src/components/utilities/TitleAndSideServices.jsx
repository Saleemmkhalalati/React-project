import OurServicesTitle from "../utilities/OurServicesTitle";
import { Outlet } from "react-router-dom";
import SideServices from "./SideServices";
import Container from "./Container";
import Services from "../user/Services/Services";
export default function TitleAndSideServices() {
  return (
    <Container>
      <div className="flex  shadow-lg  ">
        <SideServices />
        <div className="xl:w-[80%] sm:w-[100%] w-[80%] h-full overflow-hidden     ">
          <OurServicesTitle />
          <div className=" h-full  max-w-full ">
            <Services />
            <Outlet />
          </div>
        </div>
      </div>
    </Container>
  );
}

import OurServicesTitle from "../../utilities/OurServicesTitle";
import { Outlet } from "react-router-dom";
import SideServices from "../../user/Services/SideServices";
import Container from "../../utilities/Container";
import { useState } from "react";
export default function TitleAndSideServices() {
  const [myCheckValue, setCheckValue] = useState([]);
  return (
    <Container className={"overflow-hidden"}>
      <div className="flex lg:justify-normal justify-center ">
        <SideServices
          myCheckValue={myCheckValue}
          setCheckValue={setCheckValue}
        />
        <div className=" ">
          <OurServicesTitle />
          <div className="">
            <Outlet myCheckValue={myCheckValue} />
          </div>
        </div>
      </div>
    </Container>
  );
}

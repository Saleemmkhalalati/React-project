import React from "react";
import { useLocation } from "react-router-dom";
import Content from "../Dashbord_layout/Content/Content";
import { useTranslation } from "react-i18next";
import Dropdown from "../../utilities/Dropdown";
import Checkbox from "../../utilities/Checkbox";
import TabsFillter from "../../utilities/TabsFillter";
import NoData from "../Dashbord_layout/NoData/NoData";
export default function DoctorServices() {
  const { t } = useTranslation("global");

  const myOptions = [
    "Dental",
    "Optics",
    "Nutritionist",
    "Home Care",
    "Plastic Surgery",
    "Radiologist",
    "Aesthetics",
  ];

  const [value, setValue] = React.useState("fruit");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [Allusers, setAllusers] = React.useState(false);
  const [Lastusers, setLastusers] = React.useState(false);

  const handleChange_allServices = () => {
    setAllusers(!Allusers);
  };
  const handleChange_lastServices = () => {
    setLastusers(!Lastusers);
  };
  return (
    <>
      <Content path={"sss"}>
        {/* // must be as a commponent  */}
        <TabsFillter>
          <span className="ps-2 pe-5 py-1 border-[1px] border-solid border-myGray-100  flex items-center  justify-start rounded-lg   text-myGray-500">
            0 record
          </span>

          <Dropdown options={myOptions} value={value} onChange={handleChange} />

          <Checkbox
            label="All services"
            value={Allusers}
            onChange={handleChange_allServices}
          />

          <Checkbox
            label="Last services"
            value={Lastusers}
            onChange={handleChange_lastServices}
          />
        </TabsFillter>

        <div className="">jjjjjjj</div>
      </Content>
      <NoData children={t("nodata")}></NoData>
    </>
  );
}

import React from "react";
import Content from "../../Dashbord_layout/Content/Content";

import Dropdown from "../../../utilities/Dropdown";
import Checkbox from "../../../utilities/Checkbox";
import TabsFillter from "../../../utilities/TabsFillter";
import { useLocation } from "react-router-dom";

const Service_Provider = () => {
  const location = useLocation();

  const options = ["docter", "hh", "ll"];

  const [value, setValue] = React.useState("fruit");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [Allusers, setAllusers] = React.useState(false);
  const [Lastusers, setLastusers] = React.useState(false);

  const handleChange_Allusers = () => {
    setAllusers(!Allusers);
  };
  const handleChange_Lastusers = () => {
    setLastusers(!Lastusers);
  };

  return (
    <Content path={`${location.pathname}`}>
      {/* // must be as a commponent  */}
      <TabsFillter>
        <span className="px-2 py-1 border-[1px] border-solid border-myGray-100 opacity-[70%]  flex items-center rounded-[5px] font-semibold text-myGray-500">
          0 record
        </span>

        <Dropdown options={options} value={value} onChange={handleChange} />

        <Checkbox
          label="All users"
          value={Allusers}
          onChange={handleChange_Allusers}
        />

        <Checkbox
          label="Last users"
          value={Lastusers}
          onChange={handleChange_Lastusers}
        />
      </TabsFillter>

      <div className=" h-[92%]">jjjjjjj</div>
    </Content>
  );
};

export default Service_Provider;

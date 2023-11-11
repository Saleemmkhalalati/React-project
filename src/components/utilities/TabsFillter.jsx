import React, { useState } from "react";
import mini_menu from "../../assets/icons/mini-menu.svg";
import Dropdown from "./Dropdown";

export default function TabsFillter({ children }) {
  // const sorts = ["Sort by name", "Sort by active", "Sort by non active"];
  const sorts = [    
  { name: "Sort by name", url: "http://example.com/1", type: "view" },
  { name: "Sort by active", url: "http://example.com/2" , type:"view" },
  { name: "Sort by non active", url: "http://example.com/3" ,type:"view" },];

  const [valueDropdown, setValueDtopdown] = useState(null);

  const handleChangeDropdown = (event) => {
    setValueDtopdown(event.target.value);
  };

  return (
    <div>
      <div className="flex justify-between flex-col-reverse sm:flex-row flex-wrap bg-slate-60  sm:p-5 p-2 gap-5 border-b-2 border-solid border-myGray-200 ">
        <div className="flex gap-5 flex-wrap w-full sm:w-[70%]">{children}</div>

        <div className="flex justify-end  gap-3  items-center   ">
          <p className="  font-normal opacity-[70%] text-[13px] ">
            Edited 27.10.2023 10:34
          </p>
         

          <Dropdown
            options={sorts}
            value={valueDropdown}
            onChange={handleChangeDropdown}
            className={""}
            icon={mini_menu}
            showSlected={false}
            ulClassname={" ltr:right-0 rtl:start-[-7rem]"}
          />
        </div>
      </div>
    </div>
  );
}
import PropTypes from "prop-types";

TabsFillter.propTypes = {
  children: PropTypes.string,
};

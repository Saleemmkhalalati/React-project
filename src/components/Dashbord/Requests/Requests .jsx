import React, { useState } from "react";
import Content from "../../Dashbord/Dashbord_layout/Content/Content";

import Dropdown from "../../utilities/Dropdown";
import Radio from "../../utilities/Radio";
import TabsFillter from "../../utilities/TabsFillter";
import arrowIcon from "../../../assets/icons/arrowDropdown.svg";
import Table from "../../Dashbord/Dashbord_layout/TableLayout";
import NoData from "../../Dashbord/Dashbord_layout/NoData/NoData";

const Requests = () => {
  const [refrech, setrefrech] = useState(false);
  const [Export, setexport] = useState(false);

  const optionsDropdown = [
    { name: "Docter", type: "view" },
    { name: "Pharmacy", type: "view" },
    { name: "Hospital", type: "view" },
    { name: "Lab", type: "view" },
    { name: "Clinic", type: "view" },
  ];
  // for radio commponenet
  const radioItems = [
    { value: "All Users", label: "All users" },
    { value: "Last Users", label: "Last users" },
  ];
  const columns = [
    "ID",
    "Business Name",
    "Email Address ",
    "Register Date",
    "Contact Number",
    " Services Type",
    "Location",
    "PDF",
    "",
  ];
  const rows = [
    {
      Business_Name: "Omer Ahmad",
      Email_Address: "Ali@gmail.com",
      Register_Date: "27.10.2023 11:34",
      Contact_Number: "+963 944 259 864",
      Services_Type: "Doctor",
      status: "Mazh",
      pdf: "pdf",
    },
    {
      Business_Name: "Omer Ahmad",
      Email_Address: "Omer@gmail.com",
      Register_Date: "27.10.2023 11:34",
      Contact_Number: "+963 944 259 864",
      Services_Type: "Lab",
      status: "Mazh",
      pdf: "pdf",
    },
    {
      Business_Name: "Omer Ahmad",
      Email_Address: "Omer@gmail.com",
      Register_Date: "27.10.2023 11:34",
      Contact_Number: "+963 944 259 864",
      Services_Type: "Doctor",
      status: "Mazh",
      pdf: "pdf",
    },
  ];

  const points = [
    { name: "Accept user", type: "Accept" },
    { name: "Reject user", type: "Reject" },
    { name: "Delete user", type: "delete" },
  ];

  const [valueDropdown, setValueDtopdown] = useState(null);
  const [valueRadio, setValueRadio] = useState(null);
  console.log(valueDropdown);
  const handleChangeDropdown = (event) => {
    setValueDtopdown(event.target.value);
  };
  const handleRefrech = () => {
    setrefrech(!refrech);
  };
  const handleExport = () => {
    setexport(!Export);
  };

  return (
    <Content
      path="Requests"
      RefrechFun={handleRefrech}
      ExportFunc={handleExport}
      refrech={refrech}
      Export={Export}
    >
      <TabsFillter>
        <span className="px-2 py-1 border-[1px] border-solid border-myGray-100 opacity-[70%]  flex items-center rounded-[5px] font-semibold text-myGray-500">
          {rows.length} record
        </span>

        <Dropdown
          options={optionsDropdown}
          value={valueDropdown}
          onChange={handleChangeDropdown}
          className="sm:w-[12rem] w-[7rem] ease-in-out  border-[1px] rounded-lg  border-myGray-100 active:border-primary focus-within:border-primary duration-150"
          icon={arrowIcon}
          showSlected={true}
          ulClassname={"w-full "}
        />

        <Radio
          name="users"
          items={radioItems}
          value={valueRadio}
          onChange={setValueRadio}
        />
      </TabsFillter>
      {rows.length >= 1 ? (
        <Table columns={columns} rows={rows} points={points} />
      ) : (
        <NoData></NoData>
      )}
    </Content>
  );
};

export default Requests;

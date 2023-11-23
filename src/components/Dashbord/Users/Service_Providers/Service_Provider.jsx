import React, { useState } from "react";
import Content from "../../Dashbord_layout/Content/Content";

import Dropdown from "../../../utilities/Dropdown";
import Radio from "../../../utilities/Radio";
import TabsFillter from "../../../utilities/TabsFillter";
import arrowIcon from "../../../../assets/icons/arrowDropdown.svg";
import Table from "../../Dashbord_layout/TableLayout";
import NoData from "../../Dashbord_layout/NoData/NoData";

const Service_Provider = () => {
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
    "Status",
    "PDF",
    " "
  ];
  const rows = [
    {
      Business_Name: "Omer Ahmad",
      Email_Address: "Omer@gmail.com",
      Register_Date: "27.10.2023 11:34",
      Contact_Number: "+963 944 259 864",
      Services_Type: "Doctor",
      status: "Active",
      pdf: "pdf",
      space:" "
    },
    {
      Business_Name: "Omer Ahmad",
      Email_Address: "Omer@gmail.com",
      Register_Date: "27.10.2023 11:34",
      Contact_Number: "+963 944 259 864",
      Services_Type: "Doctor",
      status: "Active",
      pdf: "pdf",
      space:" "


    },
    {
      Business_Name: "Omer Ahmad",
      Email_Address: "Omer@gmail.com",
      Register_Date: "27.10.2023 11:34",
      Contact_Number: "+963 944 259 864",
      Services_Type: "Doctor",
      status: "Active",
      pdf: "pdf",
      space:" "

    },
  ];

  const points = [
    { name: "Edit User", type: "edit" },
    { name: "View User", type: "viwe" },
    { name: "Delete User", type: "delete" },
  ];

  const [SeviceProvider_Dropdown, setSeviceProvider_Dropdownn] = useState(null);
  const [valueRadio, setValueRadio] = useState(null);

  const handleChangeDropdown = (selected) => {
    setSeviceProvider_Dropdownn(selected);
  };
  const handleRefrech = () => {
    setrefrech(!refrech);
  };
  const handleExport = () => {
    setexport(!Export);
  };

  return (
    <Content
      path="All Uers/Service Provider"
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
          value={SeviceProvider_Dropdown}
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

export default Service_Provider;

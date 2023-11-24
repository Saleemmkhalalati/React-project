import React, { useState } from "react";
import Content from "../../Dashbord_layout/Content/Content";

import Dropdown from "../../../utilities/Dropdown";
import Radio from "../../../utilities/Radio";
import TabsFillter from "../../../utilities/TabsFillter";
import arrowIcon from "../../../../assets/icons/arrowDropdown.svg";
import Table from "../../Dashbord_layout/TableLayout";
import NoData from "../../Dashbord_layout/NoData/NoData";


  

const Patient_Users = () => {
  const [refrech, setrefrech] = useState(false);
  const [Export, setexport] = useState(false);


  // for radio commponenet
  const radioItems = [
    { value: "All Users", label: "All users" },
    { value: "Last Users", label: "Last users" },
  ];
  const columns = [
    "ID",
    "Email Address ",
    "Register Date",
    "Status",
    
    
  ];
  const rows = [
    {
     
      Email_Address: "Omer@gmail.com",
      Register_Date: "27.10.2023 11:34",
      status: "Not Active",
    },
    {
     
      Email_Address: "Omer@gmail.com",
      Register_Date: "27.10.2023 11:34",
      status: "Active",
    },
    {
     
      Email_Address: "Omer@gmail.com",
      Register_Date: "27.10.2023 11:34",
      status: "Active",
    },
  ];

  const points = [
    { name: "Edit User", type: "edit" },
    { name: "View User", type: "viwe" },
    { name: "Delete User", type: "delete" },
  ];


 
  const [valueRadio, setValueRadio] = useState(null);

  
  const handleRefrech = () => {
    setrefrech(!refrech);
  };
  const handleExport = () => {
    setexport(!Export);
  };
  return (
    <Content
    path="All Uers/Patient Users"
    RefrechFun={handleRefrech}
    ExportFunc={handleExport}
    refrech={refrech}
    Export={Export}
    classNameChildern="bg-white"
    hasExport={true}
    hasRefrech={true}

  >

    <TabsFillter>
      <span className="px-2 py-1 border-[1px] border-solid border-myGray-100 opacity-[70%]  flex items-center rounded-[5px] font-semibold text-myGray-500">
      {rows.length} record
      </span>

     

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
  )
}

export default Patient_Users


import React, { useState } from "react";
import Content from "../../../Dashbord_layout/Content/Content";
import TabsFillter from "../../../../utilities/TabsFillter";
import Radio from "../../../../utilities/Radio";
import Table from "../../../Dashbord_layout/TableLayout";
import NoData from "../../../Dashbord_layout/NoData/NoData";

const Requests_Rejected_appointment = () => {
  // for radio commponenet
  const radioItems = [
    { value: "Active", label: " Active" },
    { value: "Not Active", label: "Not Active" },
  ];
  const columns = [
    "ID",
    "Email Address ",
    "Services Name",
    "Location ",
    "Date - To ",
    "Date  - From",
    "Status",
    "Create Request",
  ];
  const rows = [
    {
      Email_Address: "Ali@gmail.com",
      Services_Name: "27.10.2023 11:34",
      Location: "Mazh",
      DateTo: "Mazh",
      DateFrom: "Mazh",
      Status: "Mazh",
      Create_Request: "Mazh",
    },
    {
      Email_Address: "Ali@gmail.com",
      Services_Name: "27.10.2023 11:34",
      Location: "Mazh",
      DateTo: "Mazh",
      DateFrom: "Mazh",
      Status: "Mazh",
      Create_Request: "Mazh",
    },
    {
      Email_Address: "Ali@gmail.com",
      Services_Name: "27.10.2023 11:34",
      Location: "Mazh",
      DateTo: "Mazh",
      DateFrom: "Mazh",
      Status: "Mazh",
      Create_Request: "Mazh",
    },
    {
      Email_Address: "Ali@gmail.com",
      Services_Name: "27.10.2023 11:34",
      Location: "Mazh",
      DateTo: "Mazh",
      DateFrom: "Mazh",
      Status: "Mazh",
      Create_Request: "Mazh",
    },
    {
      Email_Address: "Ali@gmail.com",
      Services_Name: "27.10.2023 11:34",
      Location: "Mazh",
      DateTo: "Mazh",
      DateFrom: "Mazh",
      Status: "Mazh",
      Create_Request: "Mazh",
    },
  ];
  const sortlist = [
    { name: "Sort by Location", type: "view" },
    { name: "Sort by Date - To", type: "view" },
    { name: "DSort by  Date - Form", type: "view" },
  ];
  const points = [
    { name: "Reject Request", type: "Accept" },
    { name: "Accept Request", type: "Reject" },
    { name: "Delete Request", type: "delete" },
  ];

  const [valueRadio, setValueRadio] = useState(null);
  const [point, setPoint] = useState(null);

  const handleRefrech = () => {
    setrefrech(!refrech);
  };
  const handleExport = () => {
    setexport(!Export);
  };
  const handlepoint = (selected) => {
    setPoint({ selected });
    console.log(selected);
  };
  return (
    <div className="w-full bg-white mt-10">
      <TabsFillter sortlist={sortlist}>
        <span className="px-2 py-1 border-[1px] border-solid  border-myGray-100 opacity-[70%]  flex items-center rounded-[5px] font-semibold text-myGray-500">
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
        <Table
          columns={columns}
          rows={rows}
          points={points}
          point={point}
          handlepoint={handlepoint}
          className={"min-h-screen "}
        />
      ) : (
        <NoData></NoData>
      )}
    </div>
  );
};

export default Requests_Rejected_appointment;





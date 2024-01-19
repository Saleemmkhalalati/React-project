import TasbFillter from "../../../../utilities/TabsFillter";
import Radio from "../../../../utilities/Radio";
import Table from "../../../Dashbord_layout/TableLayout";
import { useState } from "react";

function LastRequest_services() {
  const [valueRadio, setValueRadio] = useState(null);
  const [point, setPoint] = useState(null);
  const radioItems = [
    { value: "Active", label: " Active" },
    { value: "Not Active", label: "Not Active" },
  ];
  const sortlist = [
    { name: "Sort by Location", type: "view" },
    { name: "Sort by Date - To", type: "view" },
    { name: "Sort by  Date - Form", type: "view" },
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
      status: "Active",
      Create_Request: "Mazh",
    },
    {
      Email_Address: "Ali@gmail.com",
      Services_Name: "27.10.2023 11:34",
      Location: "Mazh",
      DateTo: "Mazh",
      DateFrom: "Mazh",
      status: "Active",
      Create_Request: "Mazh",
    },
    {
      Email_Address: "Ali@gmail.com",
      Services_Name: "27.10.2023 11:34",
      Location: "Mazh",
      DateTo: "Mazh",
      DateFrom: "Mazh",
      status: "Not Active",
      Create_Request: "Mazh",
    },
    {
      Email_Address: "Ali@gmail.com",
      Services_Name: "27.10.2023 11:34",
      Location: "Mazh",
      DateTo: "Mazh",
      DateFrom: "Mazh",
      status: "disabled",
      Create_Request: "Mazh",
    },
    {
      Email_Address: "Ali@gmail.com",
      Services_Name: "27.10.2023 11:34",
      Location: "Mazh",
      DateTo: "Mazh",
      DateFrom: "Mazh",
      status: "Active",
      Create_Request: "Mazh",
    },
    {
      Email_Address: "Ali@gmail.com",
      Services_Name: "27.10.2023 11:34",
      Location: "Mazh",
      DateTo: "Mazh",
      DateFrom: "Mazh",
      status: "Active",
      Create_Request: "Not Active",
    },
  ];
  const points = [
    { name: "Reject Request", type: "Accept" },
    { name: "Accept Request", type: "Reject" },
    { name: "Delete Request", type: "delete" },
  ];
  const handlepoint = (selected) => {
    setPoint({ selected });
    console.log(selected);
  };

  return (
    <div className="bg-white">
      <TasbFillter sortlist={sortlist}>
        <span className="px-2 py-1 border-[1px] border-solid  border-myGray-100 opacity-[70%]  flex items-center rounded-[5px] font-semibold text-myGray-500">
          {rows.length} record
        </span>

        <Radio
          name="users"
          items={radioItems}
          value={valueRadio}
          onChange={setValueRadio}
        />
      </TasbFillter>
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
}

export default LastRequest_services;

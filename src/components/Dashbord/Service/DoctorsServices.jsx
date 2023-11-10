import React, { useState } from "react";

import Content from "../Dashbord_layout/Content/Content";

import Dropdown from "../../utilities/Dropdown";
import Radio from "../../utilities/Radio";
import TabsFillter from "../../utilities/TabsFillter";
import NoData from "../Dashbord_layout/NoData/NoData";
import Table from "../Dashbord_layout/TableLayout";
export default function DoctorServices() {
  const myOptions = [
    "Dental",
    "Optics",
    "Nutritionist",
    "Home Care",
    "Plastic Surgery",
    "Radiologist",
    "Aesthetics",
  ];
  const [valueDropdown, setValueDtopdown] = useState(null);
  const [valueRadio, setValueRadio] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const radioItems = [
    { value: "All Services", label: "All Services" },
    { value: "Last Services", label: "Last Services" },
  ];

  const columns = [
    "ID",
    "Name",
    "Description",
    "Location",
    "price",
    " Type",
    "Status",
    "Discount",
    " ",
  ];
  const rows = [
    [
      "Orthodontist",
      "Arrange the shape of the teeth",
      "Mazah",
      "200.000",
      "Dental",
      "Active",
      "-",
    ],
    [
      "Eye exam",
      "Normal check",
      "Mazah",
      "15.000",
      "OPtics",
      "Not Active",
      "-",
    ],

    [
      "Bridge installation",
      "Installing a dental bridge",
      "Zahera",
      "100.000",
      "Dental",
      "Disable",
      "60.000",
    ],
  ];
  const points = [
    { name: "Edit service", url: "http://example.com/1" },
    { name: "View service", url: "http://example.com/2" },
    { name: "Delete service", url: "http://example.com/3" },
  ];
  const handleRefrech = () => {
    console.log("refrech");
  };
  const handleExport = () => {
    console.log("export");
  };

  return (
    <>
      <Content
        path={" Services / Doctors Services"}
        RefrechFun={handleRefrech}
        ExportFunc={handleExport}
      >
        {/* // must be as a commponent  */}
        <TabsFillter>
          <span className="ps-2 pe-5 py-1 border-[1px] border-solid border-myGray-100  flex items-center  justify-start rounded-lg   text-myGray-500">
            0 record
          </span>

          <Dropdown
            options={myOptions}
            value={valueDropdown}
            onChange={handleChange}
          />

          <Radio
            name="Services"
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
    </>
  );
}

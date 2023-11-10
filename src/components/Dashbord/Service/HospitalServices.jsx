import React, { useState } from "react";

import Content from "../Dashbord_layout/Content/Content";

import Dropdown from "../../utilities/Dropdown";
import Checkbox from "../../utilities/Checkbox";
import TabsFillter from "../../utilities/TabsFillter";
import NoData from "../Dashbord_layout/NoData/NoData";
import Table from "../Dashbord_layout/TableLayout";
export default function HospitalServices() {
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

  const [allServices, setAllServices] = React.useState(false);
  const [LastServices, setLastServices] = React.useState(false);

  const handleChange_allServices = () => {
    setAllServices(!allServices);
  };
  const handleChange_lastServices = () => {
    setLastServices(!LastServices);
  };

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
  console.log(rows.length);

  return (
    <>
      <Content path={" Services / Doctors Services"}>
        {/* // must be as a commponent  */}
        <TabsFillter>
          <span className="ps-2 pe-5 py-1 border-[1px] border-solid border-myGray-100  flex items-center  justify-start rounded-lg   text-myGray-500">
            0 record
          </span>

          <Dropdown options={myOptions} value={value} onChange={handleChange} />

          <Checkbox
            label="All services"
            value={allServices}
            onChange={handleChange_allServices}
          />

          <Checkbox
            label="Last services"
            value={LastServices}
            onChange={handleChange_lastServices}
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

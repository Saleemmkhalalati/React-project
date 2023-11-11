import React, { useState } from "react";
import arrowIcon from "../../../assets/icons/arrowDropdown.svg";

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
  const [refrech, setrefrech] = useState(false);
  const [Export, setexport] = useState(false);
  const [valueDropdown, setValueDtopdown] = useState(null);
  const [valueRadio, setValueRadio] = useState(null);

  const handleChangeDropdown = (event) => {
    setValueDtopdown(event.target.value);
  };
  const handleRefrech = () => {
    setrefrech(!refrech);
  };
  const handleExport = () => {
    setexport(!Export);
  };

  const radioItems = [
    { value: "All Services", label: "All Services" },
    { value: "Last Services", label: "Last Services" },
  ];

  const columns = [
    { title: "ID" },
    { title: "Name" },
    { title: "Description" },
    { title: "Location" },
    { title: "price" },
    { title: "Type" },
    { title: "Status" },
    { title: "Discount" },
    { " ": " " },
  ];

  const rows = [
    {
      title: "Orthodontist",
      description: "Arrange the shape of the teeth",
      clinic: "Mazah",
      price: "200.000",
      category: "Dental",
      status: "Active",
      discount: "-",
    },
    {
      title: "Eye exam",
      description: "Normal check",
      clinic: "Mazah",
      price: "15.000",
      category: "OPtics",
      status: "Not Active",
      discount: "-",
    },
    {
      title: "Bridge installation",
      description: "Installing a dental bridge",
      clinic: "Zahera",
      price: "100.000",
      category: "Dental",
      status: "Disable",
      discount: "60.000",
    },
  ];

  const points = [
    { name: "Edit service" },
    { name: "View service" },
    { name: "Delete service" },
  ];


  return (
    <>
      <Content
        path={" Services / Doctors Services"}
        RefrechFun={handleRefrech}
        ExportFunc={handleExport}
        refrech={refrech}
        Export={Export}
      >
        {/* // must be as a commponent  */}
        <TabsFillter>
          <span className="ps-2 pe-5 py-1 border-[1px] border-solid border-myGray-100  flex items-center  justify-start rounded-lg   text-myGray-500">
            0 record
          </span>

          <Dropdown
            options={myOptions}
            value={valueDropdown}
            onChange={handleChangeDropdown}
            className="sm:w-[12rem] w-[7rem] ease-in-out  border-[1px] rounded-lg  border-myGray-100 active:border-primary focus-within:border-primary duration-150"
            icon={arrowIcon}
            showSlected={true}
            ulClassname={"w-full "}
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

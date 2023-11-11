import React, { useState } from "react";
import arrowIcon from "../../../assets/icons/arrowDropdown.svg";

import Content from "../Dashbord_layout/Content/Content";

import Dropdown from "../../utilities/Dropdown";
import Radio from "../../utilities/Radio";
import TabsFillter from "../../utilities/TabsFillter";
import NoData from "../Dashbord_layout/NoData/NoData";
import Table from "../Dashbord_layout/TableLayout";
export default function DoctorServices() {
  const [refrech, setrefrech] = useState(false);
  const [Export, setexport] = useState(false);
  const [valueRadio, setValueRadio] = useState(null);

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
    { title: "Hospital Name" },
    { title: "Status" },
    { title: "Discount" },
    { " ": " " },
  ];
  console.log();
  const rows = [
    {
      name: "X-ray imaging",
      description: "Body x-ray",
      clinic: "Mazah",
      price: "900.000",
      HospitalName: "Razi",
      status: "Active",
      discount: "880.000",
    },
    {
      name: "Ali Hamdan",
      description: "Bone algebra",
      clinic: "Mazah",
      price: "15.000",
      HospitalName: "Moussa",
      status: "Not Active",
      discount: "-",
    },
    {
      name: "MRI",
      description: "magnetic resonance",
      clinic: "Zahera",
      price: "100.000",
      HospitalName: "Rashid",
      status: "Disable",
      discount: "880.000",
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
        path={" Services / Hospital Services"}
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

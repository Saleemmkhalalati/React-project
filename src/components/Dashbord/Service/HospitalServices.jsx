import React, { useState } from "react";
import Content from "../Dashbord_layout/Content/Content";
import Radio from "../../utilities/Radio";
import TabsFillter from "../../utilities/TabsFillter";
import NoData from "../Dashbord_layout/NoData/NoData";
import Table from "../Dashbord_layout/TableLayout";
export default function HospitalServices() {
  const [refrech, setrefrech] = useState(false);
  const [Export, setexport] = useState(false);
  const [valueRadio, setValueRadio] = useState(null);
  const [point, setPoint] = useState(null);

  //for table drobdown
  const handlepoint = (selected) => {
    setPoint(selected);
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
  console.log(point);

  const columns = [
    "ID",
    "Name",
    "Description",
    "Location",
    "price",
    " Hospital Name",
    "Status",
    "Discount",
    " ",
  ];
  const rows = [
    {
      title: "X-ray imaging",
      description: "Body x-ray",
      clinic: "Mazah",
      price: "900.000",
      HospitalName: "Razi",
      status: "Active",
      discount: "880.000",
    },
    {
      title: "Broke a bone",
      description: "magnetic resonance",
      clinic: "Zahera",
      price: "150.000",
      HospitalName: "Moussa",
      status: "Not Active",
      discount: "-",
    },
    {
      title: "MRI",
      description: "Installing a dental bridge",
      clinic: "Zahera",
      price: "100.000",
      HospitalName: "Rashid",
      status: "Disable",
      discount: "800.000",
    },
    {
      title: "MRI",
      description: "Installing a dental bridge",
      clinic: "Zahera",
      price: "100.000",
      HospitalName: "Rashid",
      status: "Disable",
      discount: "800.000",
    },
    {
      title: "MRI",
      description: "Installing a dental bridge",
      clinic: "Zahera",
      price: "100.000",
      HospitalName: "Rashid",
      status: "Disable",
      discount: "800.000",
    },
    {
      title: "MRI",
      description: "Installing a dental bridge",
      clinic: "Zahera",
      price: "100.000",
      HospitalName: "Rashid",
      status: "Disable",
      discount: "800.000",
    },
    {
      title: "MRI",
      description: "Installing a dental bridge",
      clinic: "Zahera",
      price: "100.000",
      HospitalName: "Rashid",
      status: "Disable",
      discount: "800.000",
    },
    {
      title: "MRI",
      description: "Installing a dental bridge",
      clinic: "Zahera",
      price: "100.000",
      HospitalName: "Rashid",
      status: "Disable",
      discount: "800.000",
    },
    {
      title: "MRI",
      description: "Installing a dental bridge",
      clinic: "Zahera",
      price: "100.000",
      HospitalName: "Rashid",
      status: "Disable",
      discount: "800.000",
    },
    {
      title: "MRI",
      description: "Installing a dental bridge",
      clinic: "Zahera",
      price: "100.000",
      HospitalName: "Rashid",
      status: "Disable",
      discount: "800.000",
    },
    {
      title: "MRI",
      description: "Installing a dental bridge",
      clinic: "Zahera",
      price: "100.000",
      HospitalName: "Rashid",
      status: "Disable",
      discount: "800.000",
    },
    {
      title: "MRI",
      description: "Installing a dental bridge",
      clinic: "Zahera",
      price: "100.000",
      HospitalName: "Rashid",
      status: "Disable",
      discount: "800.000",
    },
    {
      title: "MRI",
      description: "Installing a dental bridge",
      clinic: "Zahera",
      price: "100.000",
      HospitalName: "Rashid",
      status: "Disable",
      discount: "800.000",
    },
    {
      title: "MRI",
      description: "Installing a dental bridge",
      clinic: "Zahera",
      price: "100.000",
      HospitalName: "Rashid",
      status: "Disable",
      discount: "800.000",
    },
    {
      title: "MRI",
      description: "Installing a dental bridge",
      clinic: "Zahera",
      price: "100.000",
      HospitalName: "Rashid",
      status: "Disable",
      discount: "800.000",
    },
    {
      title: "MRI",
      description: "Installing a dental bridge",
      clinic: "Zahera",
      price: "100.000",
      HospitalName: "Rashid",
      status: "Disable",
      discount: "800.000",
    },
  ];

  const points = [
    { name: "Edit service", type: "edit" },
    { name: "View service", type: "viwe" },
    { name: "Delete service", type: "delete" },
  ];

  return (
    <>
      <Content
        path={" Services / Hospital Services"}
        RefrechFun={handleRefrech}
        ExportFunc={handleExport}
        refrech={refrech}
        Export={Export}
        classNameChildern="bg-white min-h-screen"
        hasExport={true}
        hasRefrech={true}
      >
        {/* // must be as a commponent  */}
        <TabsFillter>
          <span className="ps-2 pe-5 py-1 border-[1px] border-solid border-myGray-100  flex items-center  justify-start rounded-lg   text-myGray-500">
            {rows.length} record
          </span>

          <Radio
            name="Services"
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
          />
        ) : (
          <NoData></NoData>
        )}
      </Content>
    </>
  );
}

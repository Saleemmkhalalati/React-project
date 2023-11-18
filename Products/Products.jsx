import React, { useState } from "react";
import Content from "../Dashbord_layout/Content/Content";

import Dropdown from "../../utilities/Dropdown";
import Radio from "../../utilities/Radio";
import TabsFillter from "../../utilities/TabsFillter";
import arrowIcon from "../../../assets/icons/arrowDropdown.svg";
import Table from "../Dashbord_layout/TableLayout";
import NoData from "../Dashbord_layout/NoData/NoData";


  

const Products= () => {
  const [refrech, setrefrech] = useState(false);
  const [Export, setexport] = useState(false);


  // for radio commponenet
  const radioItems = [
    { value: "All Users", label: "All users" },
    { value: "Last Users", label: "Last users" },
  ];
  const columns = [
    "ID",
    " Name",
    "Description",
    "Location ",
    "price",
    " Type",
    "Status",
    "Discount"
    
    
    
  ];
  const rows = [
    {
     
        Name: "Artificial foot",
        Description: "Artificial feet for people with special needs",
        Location: "Mazah",
        price: "200.000",
        Type: "Dental",
        Status: "Not Active",
        Discount: "180.000",


    },
    {
     
        Name: "Artificial foot",
        Description: "Artificial feet for people with special needs",
        Location: "Mazah",
        price: "200.000",
        Type: "Dental",
        Status: "Not Active",
        Discount: "180.000",


    },
    {
     
        Name: "Artificial foot",
        Description: "Artificial feet for people with special needs",
        Location: "Mazah",
        price: "200.000",
        Type: "Dental",
        Status: "Not Active",
        Discount: "180.000",


    },
  ];

  const points = [
    { name: "Edit service", type: "edit" },
    { name: "View service", type: "viwe" },
    { name: "Delete service", type: "delete" },
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
    path="Product"
    RefrechFun={handleRefrech}
    ExportFunc={handleExport}
    refrech={refrech}
    Export={Export}
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

export default Products

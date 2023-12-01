import React, { useState, useRef, useEffect } from "react";
import arrowIcon from "../../../assets/icons/arrowDropdown.svg";
import Content from "../Dashbord_layout/Content/Content";
import Dropdown from "../../utilities/Dropdown";
import Radio from "../../utilities/Radio";
import TabsFillter from "../../utilities/TabsFillter";
import NoData from "../Dashbord_layout/NoData/NoData";
import Table from "../Dashbord_layout/TableLayout";
import View from "../../Dashbord/Dashbord_layout/Mangment/View";
import Edit from "../../Dashbord/Dashbord_layout/Mangment/Edit"
import { service_provider_schema } from "../../utilities/Validation"
import Wrench from "../../../assets/icons/Wrench.svg"
import Business from "../../../assets/icons/Business.svg"
import Location from "../../../assets/icons/Location.svg"
import Price from  "../../../assets/icons/Price.svg"
import File from  "../../../assets/icons/File.svg"
import Type from "../../../assets/icons/Type.svg"
import Des from "../../../assets/icons/Disc.svg"
import ChangePassword from "../Dashbord_layout/Mangment/ChangePassword";


export default function DoctorServices() {
  const myOptions = [
    { name: "Dental", type: "view" },
    { name: "Optics", type: "view" },
    { name: "Nutritionist", type: "view" },
    { name: "Home Care", type: "view" },
    { name: "Plastic Surgery", type: "view" },
    { name: "Radiologist", type: "view" },
    { name: "Aesthetics", type: "view" },
  ];

  const [refrech, setrefrech] = useState(false);
  const [Export, setexport] = useState(false);
  const [valueDropdown, setValueDtopdown] = useState(null);
  const [valueRadio, setValueRadio] = useState(null);
  const [point, setPoint] = useState(null);
  const [view_user, set_View_user] = useState(false);
  const [Edit_user, set_Edit_user] = useState(false);
  const viewRef = useRef(null);
  const EditRef = useRef(null);






  const handleChangeDropdown = (selected) => {
    setValueDtopdown(selected);
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
    { name: "Edit service", type: "edit" },
    { name: "View service", type: "viwe" },
    { name: "Delete service", type: "delete" },
  ];

  const initialValues_Edit = {
    state: "Active",
    email: "Omer@gmail.com",
    password: "********",
    Phone_number: "+963 944 812 264",
    name: "Omer Ahmed",
    type: "Service Provider",

    // Add more initial values for other fields
  };
  const view_content = {
    title: "View Service",
    descrption: " Register Date in: 10/27/2023 11:34, for this service",
    inputs: [
      {
        text: "Active",
        img: Wrench
      },
      {
        text: "Orthodontist",
        img: Business
      },
      {
        text: "Arrange the shape of the teeth",
        img: File ,
      
      },
      {
        text: "Mazah",
        img: Location,
      
      },
      {
        text: "Dental",
        img: Type ,
      
      },
      {
        text: "200.000",
        img: Price 
      
      },
      {
        text: "180.000",
        img: Des 
      
      }
     
     
    ],
    button_content: "Close View User",



  }

  const Edit_content = {
    title: "Edit Service",
    descrption: " Register Date in: 10/27/2023 11:34, for this service",
    inputs: [
      {
       
        text: "Active",
        img: Wrench ,
        type: "text",
        name: "state",
        input_type: "dropdown"

      },
      {
        text: "Orthodontist",
        img: Business ,
        type: "text",
        name: "business"

      },
      {
        text: "Arrange the shape of the teeth",
        img: File ,
        type: "text",
        name: "file",

      },
      {
        text: "Mazah",
        img: Location ,
        type: "text",
        name: "location",

      },
      {
        text: "Dental",
        img: Type ,
        type: "text",
        name: "type",

      },
      {
        text: "200.000",
        img: Price ,
        type: "text",
        name: "price",

      },
      {
        text: "180.000",
        img: Des ,
        type: "text",
        name: "des",

      }

    ],
    button_content: "Change Information",



  }




  const handlepoint_table = (value) => {
    console.log(value);
    {
      value.type === "edit"
        ? set_Edit_user(!Edit_user)
        : set_View_user(!view_user);
    }
  };
  return (
    <>
      <Content
        path={" Services / Doctors Services"}
        RefrechFun={handleRefrech}
        ExportFunc={handleExport}
        refrech={refrech}
        Export={Export}
        classNameChildern="bg-white min-h-screen"
        hasExport={true}
        hasRefrech={true}
      >
     <div className=" relative">
  {view_user ? <View ref={viewRef} view_content={view_content } view_user={view_user} set_View_user={set_View_user} /> : ""}
        {Edit_user ? <Edit ref={EditRef} Edit_content={Edit_content} initialValues={initialValues_Edit} validation_schema={service_provider_schema} Edit_user={Edit_user} set_Edit_user={set_Edit_user}  /> : ""}
      
    
   { view_user ? <View ref={viewRef}  view_content={view_content}/>  : ""}
        <TabsFillter>
          <span className="ps-2 pe-5 py-1 border-[1px] border-solid border-myGray-100  flex items-center  justify-start rounded-lg   text-myGray-500">
            {rows.length} record
          </span>

            <Dropdown
              options={myOptions}
              value={valueDropdown}
              onChange={handleChangeDropdown}
              className="sm:w-[12rem] border-[1px] rounded-lg  border-myGray-100 active:border-primary focus-within:border-primary "
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
            <Table
              columns={columns}
              rows={rows}
              points={points}
              point={point}
              handlepoint={handlepoint_table}
              className={""}
            />
          ) : (
            <NoData></NoData>
          )}
        </div>
      </Content>
    </>
  );
}

import React, { useState,useRef,useEffect } from "react";
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
import {  Email, Wrench, View_Icon,Business } from "../../utilities/Icons"
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
  const [open_change_password, set_open_change_password] = useState(false)
  const viewRef = useRef(null);
  const EditRef = useRef(null);

  useEffect(() => {
    if(open_change_password){
      set_Edit_user(false)
      set_View_user(false)
    }
  }, [open_change_password,Edit_user]);


  //for table drobdown
  // const handlepoint = (selected) => {
  //   setPoint({ selected });
  //   console.log(selected);
  // };

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
  const view_content = {
    title: "View User",
    descrption: "Register Date in: 27.10.2023 11:34, for this user",
    inputs: [
      {
        text: "Active",
        img: <Wrench />
      },
      {
        text: "Orthodontist",
        img: <Business />
      },
      {
        text: "Arrange the shape of the teeth",
        img: <View_Icon />,
      
      },
      {
        text: "Mazah",
        img: <View_Icon />,
      
      },
      {
        text: "Dental",
        img: <View_Icon />,
      
      },
      {
        text: "200.000",
        img: <View_Icon />,
      
      },
      {
        text: "180.000",
        img: <View_Icon />,
      
      }
     
     
    ],
    button_content: "Close View User",



  }
  const initialValues_Edit = {
    state: 'Active',
    email: 'Omer@gmail.com',
    password: "********",
    Phone_number: "+963 944 812 264",
    name: "Omer Ahmed",
    type: "Service Provider"


    // Add more initial values for other fields
  };
  const Edit_content = {
    title: "Edit User",
    descrption: "Register Date in: 27.10.2023 11:34, for this user",
    inputs: [
      {
        text: "Active",
        img: <Wrench />,
        type: "text",
        name: "state",
        input_type: "dropdown"

      },
      {
        text: "Omer@gmail.com",
        img: <Email />,
        type: "email",
        name: "email"

      },
      {
        text: "********",
        img: <View_Icon />,
        type: "password",
        name: "password",
        des: {
          text: "If your Forget password Click ",
          click_here: " Here"
        }
      }

    ],
    button_content: "Change Information",



  }
  const handlepoint_table=(value) => {
    console.log(value)
    {value.type ==='edit' ? set_Edit_user(!Edit_user) : set_View_user(!view_user)}

  
  }
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
  {view_user ? <View ref={viewRef} view_content={view_content } view_user={view_user} set_View_user={set_View_user}  open_change_password={open_change_password} set_open_change_password={set_open_change_password}/> : ""}
        {Edit_user ? <Edit ref={EditRef} Edit_content={Edit_content} initialValues={initialValues_Edit} validation_schema={service_provider_schema} Edit_user={Edit_user} set_Edit_user={set_Edit_user} open_change_password={open_change_password} set_open_change_password={set_open_change_password} /> : ""}
        {open_change_password ? <ChangePassword open_change_password={open_change_password} set_open_change_password={set_open_change_password}  /> : ""}
    
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
            className="h-screen"
          />
        ) : (
          <NoData></NoData>
        )}
        </div>
      </Content>
    </>
  );
}

import React, { useState,useRef,useEffect } from "react";
import Content from "../../Dashbord_layout/Content/Content";

import Dropdown from "../../../utilities/Dropdown";
import Radio from "../../../utilities/Radio";
import TabsFillter from "../../../utilities/TabsFillter";
import arrowIcon from "../../../../assets/icons/arrowDropdown.svg";
import Table from "../../Dashbord_layout/TableLayout";
import NoData from "../../Dashbord_layout/NoData/NoData";
import View from "../../Dashbord_layout/Mangment/View";
import Edit from "../../Dashbord_layout/Mangment/Edit"
import { service_provider_schema } from "../../../utilities/Validation"
import {  Email, Wrench, View_Icon } from "../../../utilities/Icons"
import ChangePassword from "../../Dashbord_layout/Mangment/ChangePassword";


const Admin_Users = () => {
  const [refrech, setrefrech] = useState(false);
  const [Export, setexport] = useState(false);
  const [valueDropdown, setValueDtopdown] = useState(null);
  const [valueRadio, setValueRadio] = useState(null);
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

  const optionsDropdown =  [
    { name: "Admin",  type: "view" },
    { name: "Supper Admin", type:"view" },
   

  ];
  // for radio commponenet
  const radioItems = [
    { value: "All Users", label: "All users" },
    { value: "Last Users", label: "Last users" },
  ];
  const columns = [
    "ID",
    "Email Address ",
    "Register Date",
    "Role",
    "Status",
   
    
  ];
  const rows = [
    {
    
      Email_Address: "Omer@gmail.com",
      Register_Date: "27.10.2023 11:34",
      rol:"Admin",
      
     
      status: "Active",
   
    },
    {
      Email_Address: "Omer@gmail.com",
      Register_Date: "27.10.2023 11:34",
      rol:"Admin",
      
     
      status: "Active",
    },
    {
      Email_Address: "Omer@gmail.com",
      Register_Date: "27.10.2023 11:34",
      rol:"Admin",
      
     
      status: "Active",
    },
  ];

  const points = [
    { name: "Edit User", type: "edit" },
    { name: "View User", type: "view" },
    { name: "Delete User", type: "delete" },
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
        text: "Omer@gmail.com",
        img: <Email />
      },
      {
        text: "********",
        img: <View_Icon />,
        des: {
          text: "If your Forget password Click ",
          click_here: " Here"
        }
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




  const  handleChangeDropdown = (value) => {
    // setValueDtopdown(event.target.value);
    console.log(value);
  };
  const handleRefrech = () => {
    setrefrech(!refrech);
  };
  const handleExport = () => {
    setexport(!Export);
  };
  
  const handlepoint_table=(value) => {
    console.log(value)
    {value.type ==='edit' ? set_Edit_user(!Edit_user) : set_View_user(!view_user)}
    // لازم ارجع قيمن ل فولس بعد ما اسكر البوكس 

  
  }
  


  return (

<Content
      path="All Uers/Admin Users"
      RefrechFun={handleRefrech}
      ExportFunc={handleExport}
      refrech={refrech}
      Export={Export}
      classNameChildern="bg-white"
      hasExport={true}
      hasRefrech={true}
    >
  <div className=" relative">
  {view_user ? <View ref={viewRef} view_content={view_content } view_user={view_user} set_View_user={set_View_user}  open_change_password={open_change_password} set_open_change_password={set_open_change_password}/> : ""}
        {Edit_user ? <Edit ref={EditRef} Edit_content={Edit_content} initialValues={initialValues_Edit} validation_schema={service_provider_schema} Edit_user={Edit_user} set_Edit_user={set_Edit_user} open_change_password={open_change_password} set_open_change_password={set_open_change_password} /> : ""}
        {open_change_password ? <ChangePassword open_change_password={open_change_password} set_open_change_password={set_open_change_password}  /> : ""}
    
   { view_user ? <View ref={viewRef}  view_content={view_content}/>  : ""}
      <TabsFillter>
        <span className="px-2 py-1 border-[1px] border-solid border-myGray-100 opacity-[70%]  flex items-center rounded-[5px] font-semibold text-myGray-500">
        {rows.length} record
        </span>

        <Dropdown
          options={optionsDropdown}
          value={valueDropdown}
          onChange = {
        
            handleChangeDropdown
       
          
          }
          className="sm:w-[12rem] w-[7rem] ease-in-out  border-[1px] rounded-lg  border-myGray-100 active:border-primary focus-within:border-primary duration-150"
          icon={arrowIcon}
          showSlected={true}
          ulClassname={"w-full "}
        />

        <Radio
          name="users"
          items={radioItems}
          value={valueRadio}
          onChange={setValueRadio}
        />
      </TabsFillter>
      {rows.length >= 1 ? (
          <Table columns={columns} rows={rows} points={points} handlepoint={handlepoint_table} className="h-screen"  />
        ) : (
          <NoData></NoData>
        )}

</div>
    </Content>

  );
};

export default Admin_Users 


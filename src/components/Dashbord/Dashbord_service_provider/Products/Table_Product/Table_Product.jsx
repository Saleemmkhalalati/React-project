import Content from "../../../Dashbord_layout/Content/Content";
import Radio from "../../../../utilities/Radio";
import NoData from "../../../Dashbord_layout/NoData/NoData";
import Table from "../../../Dashbord_layout/TableLayout";
import TabsFillter from "../../../../utilities/TabsFillter";
import { useEffect, useRef, useState } from "react";
import View from "../../../Dashbord_layout/Mangment/View";
import Add_product from "../../../Dashbord_layout/Mangment/Add_product";
// 8*************
import Wrench from "../../../../../assets/icons/Wrench.svg"
import Email from "../../../../../assets/icons/Email.svg"
import View_Icon from "../../../../../assets/icons/View.svg"
import { add_product_schema } from "../../../../utilities/Validation"
export default function Table_Product() {

  const [valueRadio, setValueRadio] = useState(null);
  const [point, setPoint] = useState(null);
  const [addProduct_active,set_addProduct_active]=useState(false);
  const AddProductsRef = useRef(null);



// ******************

const initialValues_Add_Products = {
  Product_Name: 'Product Name',
  Product_Type : 'Product Type ',
  Description: "Description",
  Location: "Location",
  Price: "Price",
 


  // Add more initial values for other fields
};
const Add_Product_content = {
  title: "Add Product",
  descrption: " You can add your product from here. ",
  inputs: [
    {
      text: 'Product Name',
      img: Wrench ,
      type: "text",
      name: "Product Name",
     

    },
    {
      text:'Product Type ',
      img: Email ,
      type: "text",
      input_type: "dropdown",
      name: "Product Type"

    },
    {
      text: "Description",
      img: View_Icon ,
      type: "text",
      name: "Description",

    },

    {
      text: "Location",
      img: View_Icon ,
      type: "text",
      name: "Location",

    },
    {
      text: "Price",
      img: View_Icon ,
      type: "password",
      name: "password",
      des: {
        text: "If you would like to add discounts please click  ",
        click_here: " Here"
      }
    },

  ],
  button_content: "Add New Product",



}
// **************************8
  
const addProductFun = () => {
  set_addProduct_active(!addProduct_active)
}

  //for table drobdown
  const handlepoint = (selected) => {
    setPoint(selected);
  };

  const radioItems = [
    { value: "All Product", label: "All Product" },
    { value: "Last Product", label: "Last Product" },
  ];

  const columns = [
    "ID",
    "Name",
    "Description",
    "Location",
    "price",
    "Clinic Name",
    "Status",
    "Discount",
    " ",
  ];
  const rows = [
    {
      Email_Address: "Ali@gmail.com",
      Services_Name: "27.10.2023 11:34",
      Location: "Mazh",
      DateTo: "Mazh",
      DateFrom: "Mazh",
      Status: "Mazh",
      Create_Request: "Mazh",
    },
    {
      Email_Address: "Ali@gmail.com",
      Services_Name: "27.10.2023 11:34",
      Location: "Mazh",
      DateTo: "Mazh",
      DateFrom: "Mazh",
      Status: "Mazh",
      Create_Request: "Mazh",
    },
    {
      Email_Address: "Ali@gmail.com",
      Services_Name: "27.10.2023 11:34",
      Location: "Mazh",
      DateTo: "Mazh",
      DateFrom: "Mazh",
      Status: "Mazh",
      Create_Request: "Mazh",
    },
    {
      Email_Address: "Ali@gmail.com",
      Services_Name: "27.10.2023 11:34",
      Location: "Mazh",
      DateTo: "Mazh",
      DateFrom: "Mazh",
      Status: "Mazh",
      Create_Request: "Mazh",
    },
    {
      Email_Address: "Ali@gmail.com",
      Services_Name: "27.10.2023 11:34",
      Location: "Mazh",
      DateTo: "Mazh",
      DateFrom: "Mazh",
      Status: "Mazh",
      Create_Request: "Mazh",
    },
  ];

  const points = [
    { name: "Edit service", type: "edit" },
    { name: "View service", type: "view" },
    { name: "Delete service", type: "delete" },
  ];
  const sortlist = [    
    { name: "Sort by name",  type: "view" },
    { name: "Sort by active", type:"view" },
    { name: "Sort by non active",type:"view" },];

  return (
    <>
      <Content
        path={" Products /Table Product"}
        hasRefrech={true}
        hasAddProducts={true}
        classNameChildern="bg-white  h-screen"
        set_addProduct_active={set_addProduct_active}
        addProduct_active={addProduct_active}
        addProductFun={addProductFun}
      >
        <div className="relative">
        {addProduct_active ? ( <Add_product ref={AddProductsRef} Add_Product_content={Add_Product_content} initialValues={initialValues_Add_Products} validation_schema={add_product_schema} addProduct_active={addProduct_active} set_addProduct_active={set_addProduct_active} />)  : "" }
       
        <TabsFillter >
          <span className="ps-2 pe-5 py-1 border-[1px] border-solid border-myGray-100  flex items-center  justify-start rounded-lg   text-myGray-500">
            {rows.length} record
          </span>

          <Radio
            name="Services"
            items={radioItems}
            value={valueRadio}
            onChange={setValueRadio}
          />
        </TabsFillter > 
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
         </div>
      </Content>
    </>
  );
}





import { useState, useCallback } from "react";
//icons
import arrowIcon from "../../../../../assets/icons/Wrench.svg";
import Business from "../../../../../assets/icons/business-Dahshboard.svg";
import file from "../../../../../assets/icons/File.svg";
import priceIcon from "../../../../../assets/icons/Price.svg";
import discountIcon from "../../../../../assets/icons/Disc.svg";
import location from "../../../../../assets/icons/Location.svg";
import upload from "../../../../../assets/icons/uplode.svg";
import done from "../../../../../assets/icons/done_uplode.svg";
import product from "../../Products/Table_Product/Products_img/product.svg";
import left from "../Table_Product/Products_img/left.svg";
import right from "../Table_Product/Products_img/right.svg";

import Content from "../../../Dashbord_layout/Content/Content";
import Typography from "../../../../utilities/Typography";
import Dropdown from "../../../../utilities/Dropdown";
import Radio from "../../../../utilities/Radio";
import NoData from "../../../Dashbord_layout/NoData/NoData";
import Table from "../../../Dashbord_layout/TableLayout";
import TabsFillter from "../../../../utilities/TabsFillter";
import View from "../../../Dashbord_layout/Mangment/View";
import Add_product from "../../../Dashbord_layout/Mangment/Add_product";
import Wrench from "../../../../../assets/icons/Wrench.svg";
import Email from "../../../../../assets/icons/Email.svg";
import View_Icon from "../../../../../assets/icons/View.svg";
import { add_product_schema } from "../../../../utilities/Validation";

import { DashInput, InputFile } from "../../../../utilities/Inputs";
import { useFormik } from "formik";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";
import React, { useRef, useEffect } from "react";
import Edit from "../../../Dashbord_layout/Mangment/Edit";
import { Edit_Services_schema } from "../../../../utilities/Validation";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import * as Yup from "yup";
import Button from "../../../../utilities/Button";
import ClickOutside from "../../../../utilities/Click_Outsite";
import Discount from "../../../Dashbord_layout/Mangment/Discount";

export default function Table_Product() {
  const [addProduct_active, set_addProduct_active] = useState(false);
  
  const swiperRef = useRef(null);
  const { t } = useTranslation("global");
  const [refrech, setrefrech] = useState(false);
  const [Export, setexport] = useState(false);
  const [valueRadio, setValueRadio] = useState(null);
  const [point, setPoint] = useState({});
  const [edit, setEdit] = useState(false);
  const [view, setView] = useState(false);
  const [discount, setDiscount] = useState(false);
  const [EditDropdown, setEditDropdown] = useState(null);
  const EditRef = useRef(null);
  const viewRef = useRef(null);
  const AddProductsRef = useRef(null);

 useEffect(()=>{
  if(discount){
    setEdit(false);
    setView(false);
    set_addProduct_active(false)
  }

 },[discount,addProduct_active,edit,view])

  const initialValues_Add_Products = {
    Product_Name: "Product Name",
    Product_Type: "Product Type ",
    Description: "Description",
    Location: "Location",
    Price: "Price",

    // Add more initial values for other fields
  };
  const Add_Product_content = {
    title: t("addProuct.0"),
    descrption:  t("addProuct.1"),
    inputs: [
      {
        text: "Product Name",
        img: Wrench,
        type: "text",
        name: "Product Name",
      },
      {
        text: "Product Type ",
        img: Email,
        type: "text",
        input_type: "dropdown",
        name: "Product Type",
      },
      {
        text: "Description",
        img: View_Icon,
        type: "text",
        name: "Description",
      },

      {
        text: "Location",
        img: View_Icon,
        type: "text",
        name: "Location",
      },
      {
        text: "Price",
        img: View_Icon,
        type: "password",
        name: "password",
        des: {
          text:  t("addProuct.2"),
          click_here:  t("addProuct.3"),
        },
      },
    ],
    button_content: "Add New Product",
  };


  const addProductFun = () => {
    set_addProduct_active(!addProduct_active);
  };

  //for table drobdown

  const productSchema = Yup.object().shape({
    price: Yup.string()
      .required("Price is required")
      .test(
        "is-number",
        "Invalid price. Please enter only numbers.",
        (value) => {
          return /^\d+$/.test(value);
        }
      ),

    discountNumber: Yup.string()
      .required("Discount is required")
      .test(
        "is-discount",
        "Invalid discount. Please enter a valid number or percentage.",
        (value) => {
          return /^\d+(\%)?$/.test(value);
        }
      ),
  });

  //for drag and drob img

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
      status: "Not Active",
      Create_Request: "Now",
    },
    {
      Email_Address: "Ali@gmail.com",
      Services_Name: "27.10.2023 11:34",
      Location: "Mazh",
      DateTo: "Mazh",
      DateFrom: "Mazh",
      status: "Not Active",
      Create_Request: "Mazh",
    },
    {
      Email_Address: "Ali@gmail.com",
      Services_Name: "27.10.2023 11:34",
      Location: "Mazh",
      DateTo: "Mazh",
      DateFrom: "Mazh",
      status: "Active",
      Create_Request: "Mazh",
    },
    {
      Email_Address: "Ali@gmail.com",
      Services_Name: "27.10.2023 11:34",
      Location: "Mazh",
      DateTo: "Mazh",
      DateFrom: "Mazh",
      status: "Active",
      Create_Request: "Mazh",
    },
    {
      Email_Address: "Ali@gmail.com",
      Services_Name: "27.10.2023 11:34",
      Location: "Mazh",
      DateTo: "Mazh",
      DateFrom: "Mazh",
      status: "Disabled",
      Create_Request: "Mazh",
    },
  ];

  const points = [
    { name: "Edit Product", type: "edit" },
    { name: "View Product", type: "view" },
    { name: "Delete Product", type: "delete" },
  ];
  const sortlist = [
    { name: "Sort by name", type: "view" },
    { name: "Sort by active", type: "view" },
    { name: "Sort by non active", type: "view" },
  ];
  const optionsDropdown = [
    { name: "active", type: "" },
    { name: "Non Active", type: "" },
    { name: "Disable", type: "view" },
  ];

  const handleRefrech = () => {
    setrefrech(!refrech);
  };
  const handleExport = () => {
    setexport(!Export);
  };
  //for table drobdown
  const handlepoint = (selected) => {
    setPoint(selected);
  };
  const handleChangeDropdown = (selected) => {
    setEditDropdown(selected);
  };

  //open edit section
  const handleOpenEdit = () => {
    setEdit(true);
  };

  //open view section
  const handleOpenView = () => {
    setView(true);
  };
  // close edit section
  const handleClose = () => {
    setEdit(false);
  };
  const handleDiscount = () => {
    setDiscount(true);
    setEdit(false);
  };
  //close discount section when clic outside
  const handleEditDiscount = () => {
    setDiscount(false);
  };
  //close discount section when clic outside
  const handleCloseView = () => {
    setView(false);
  };
  //if my clic is oo edit section
  useEffect(() => {
    if (point.type === "edit") {
      handleOpenEdit();
    } else if (point.type === "view") {
      handleOpenView();
    }
  }, [point]);

  const formik = useFormik({
    initialValues: {
      price: "2000",
      discount: "1800",
      discountNumber: "%",
    },
    validationSchema: productSchema, // Use the productSchema for general details
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: false,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const price = formik.values.price;
  const discountPercentage = formik.values.discountNumber;
  // تحويل النسبة المئوية إلى قيمة عددية
  const numericDiscount = parseFloat(discountPercentage);
  // تحقق من عدم تجاوز القيمة 100
  const validDiscount = numericDiscount <= 100 ? numericDiscount : 100;
  // حساب القيمة بعد الخصم
  const priceAfterDiscount = price - (validDiscount / 100) * price;
  const Edit_content = {
    title:t("editProduct.0"),
    descrption: t("editProduct.1")+"10/27/2023 11:34,"+ t("editProduct.2"),
    inputs: [
      {
        text: "Active",
        img: Wrench,
        type: "text",
        name: "state",
        input_type: "dropdown"

      },
      {
        text: "Artificial foot",
        img: Business,
        type: "text",
        name: "name"

      },
      {
        text: "Artificial foot for people with special needs",
        img: file,
        type: "text",
        name: "description"

      },
      {
        text: "Maza",
        img: location,
        type: "text",
        name: "location"

      },
      {
        text: "2000",
        img: priceIcon,
        type: "text",
        name: "price"

      },
      {
        text: "1800",
        img: discountIcon,
        type: "text",
        name: "discount",
        des: {
          text: t("editServices.3"),
          click_here: t("editServices.4")
        }

      },
  
 
    ],
    button_content: t("editServices.5"),
 


  }


  const view_content = {
    title:t("viewProduct.0"),
    descrption: "",
    inputs: [
      {
        text: "Active",
        img: Business
      },
      {
        text: "Artificial foot",
        img: Business
      },
      {
        text: "Artificial foot for people with special needs",
        img: file
      },
      {
        text: "Maza",
        img: location
      },
      {
        text: "2000",
        img: priceIcon
      },
      {
        text: "1800",
        img: discountIcon
      },

     
     
    ],
         
          button_content:  t("viewService.3") ,



  }

  return (
    <>
         

      <Content
        path={" Products / Table Product"}
        hasRefrech={true}
        hasAddProducts={true}
        classNameChildern="bg-white  h-screen"
        set_addProduct_active={set_addProduct_active}
        addProduct_active={addProduct_active}
        addProductFun={addProductFun}
      >
        <div className="relative">
          {addProduct_active ? (
            <Add_product
              discount={discount}
              setDiscount={setDiscount}
              ref={AddProductsRef}
              Add_Product_content={Add_Product_content}
            
              validation_schema={add_product_schema}
              addProduct_active={addProduct_active}
              set_addProduct_active={set_addProduct_active}
            />
          ) : (
            ""
          )}


          {edit ? (
          <Edit   ref={EditRef} Edit_content={Edit_content}  validation_schema={Edit_Services_schema}  Edit_user={edit} set_Edit_user={setEdit} Uplode_imge={true}    other_section={discount} set_other_section={setDiscount} />
            
          ) : (
            ""
          )}



          {view ? (
            <View ref={viewRef} view_content={view_content } view_user={view} set_View_user={setView} hasSlider={true} /> 
            
          ) : (
            ""
          )}
      
      
          {discount ? (
            <Discount
              name={"discountNumber"}
              type="text"
              value={formik.values.discountNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              icon={priceIcon}
              errorMsg={
                formik.touched.discountNumber && formik.errors.discountNumber
                  ? formik.errors.discountNumber
                  : ""
              }
              price={formik.values.price}
              priceAfterDiscount={priceAfterDiscount}
            />
          ) : (
            ""
          )}
  
         
       

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
              className={"min-h-screen"}
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

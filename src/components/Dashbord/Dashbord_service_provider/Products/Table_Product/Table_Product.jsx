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
// 8*************
import Wrench from "../../../../../assets/icons/Wrench.svg";
import Email from "../../../../../assets/icons/Email.svg";
import View_Icon from "../../../../../assets/icons/View.svg";
import { add_product_schema } from "../../../../utilities/Validation";

import { DashInput, InputFile } from "../../../../utilities/Inputs";
import { useFormik } from "formik";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";
import React, { useRef, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import * as Yup from "yup";
import Button from "../../../../utilities/Button";
import ClickOutside from "../../../../utilities/Click_Outsite";

export default function Table_Product() {
  const [addProduct_active, set_addProduct_active] = useState(false);
  const AddProductsRef = useRef(null);
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

  // ******************

  const initialValues_Add_Products = {
    Product_Name: "Product Name",
    Product_Type: "Product Type ",
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
          text: "If you would like to add discounts please click  ",
          click_here: " Here",
        },
      },
    ],
    button_content: "Add New Product",
  };
  // **************************8

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

  return (
    <>
      <ClickOutside onClick={handleClose}> </ClickOutside>

      <ClickOutside onClick={handleCloseView}></ClickOutside>
      <ClickOutside onClick={handleEditDiscount}></ClickOutside>

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
              initialValues={initialValues_Add_Products}
              validation_schema={add_product_schema}
              addProduct_active={addProduct_active}
              set_addProduct_active={set_addProduct_active}
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

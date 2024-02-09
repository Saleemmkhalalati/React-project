import { useRef, useState } from "react";
//icons

import priceIcon from "../../../../../assets/icons/Price.svg";

import Content from "../../../Dashbord_layout/Content/Content";
import TabsFillter from "../../../../utilities/TabsFillter";

import Radio from "../../../../utilities/Radio";
import NoData from "../../../Dashbord_layout/NoData/NoData";
import Table from "../../../Dashbord_layout/TableLayout";

import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import React, { useEffect } from "react";

import Discount from "../../../Dashbord_layout/Mangment/Discount";
import Edit_Service_Provider from "../../../Dashbord_layout/Mangment/Edit_Service_Provider";
import View_Service_Provider from "../../../Dashbord_layout/Mangment/View_Service_Provider";
import Wrench  from "../../../../../assets/icons/Wrench.svg"
import Email from "../../../../../assets/icons/Email.svg"
import location from "../../../../../assets/icons/Location.svg"
import Business from "../../../../../assets/icons/Business.svg"
import file from "../../../../../assets/icons/File.svg"
import discountIcon from "../../../../../assets/icons/Disc.svg"
import { add_product_schema } from "../../../../utilities/Validation";
import View_Icon from "../../../../../assets/icons/View.svg";



// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import * as Yup from "yup";

import ClickOutside from "../../../../utilities/Click_Outsite";
import Edit from "../../../Dashbord_layout/Mangment/Edit";
import { Edit_Services_schema } from "../../../../utilities/Validation";
import View from "../../../Dashbord_layout/Mangment/View";
import Add_product from "../../../Dashbord_layout/Mangment/Add_product";
const productSchema = Yup.object().shape({
  price: Yup.string()
    .required("Price is required")
    .test("is-number", "Invalid price. Please enter only numbers.", (value) => {
      return /^\d+$/.test(value);
    }),

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

export default function Table_Services() {
  const { t } = useTranslation("global");
  const [refrech, setrefrech] = useState(false);
  const [Export, setexport] = useState(false);
  const [valueRadio, setValueRadio] = useState(null);
  const [point, setPoint] = useState({});
  const [edit, setEdit] = useState(false);
  const [view, setView] = useState(false);
  const [discount, setDiscount] = useState(false);
  const EditRef = useRef(null);
  const viewRef = useRef(null);
  const AddProductsRef = useRef(null);


  
  useEffect(() => {
    if(discount){
      setEdit(false)

    }
  }, [discount,edit]);

  const Add_Product_content = {
    title: "Add Services",
    descrption: "  You can add your services from here.  ",
    inputs: [
      {
        text: "Services Name",
        img: Wrench,
        type: "text",
        name: "Product Name",
      },
      {
        text: "Service Type ",
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
    button_content: "Add New Services",
  };

  const [addProduct_active, set_addProduct_active] = useState(false);
  //for drag and drob img

  console.log(addProduct_active);
  const radioItems = [
    { value: "All services", label: "All Product" },
    { value: "Last services", label: "Last Product" },
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
    { name: "Edit Services", type: "edit" },
    { name: "View Services", type: "view" },
    { name: "Delete Services", type: "delete" },
  ];
  const sortlist = [
    { name: "Sort by name", type: "view" },
    { name: "Sort by active", type: "view" },
    { name: "Sort by non active", type: "view" },
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

  const addProductFun = () => {
    set_addProduct_active(!addProduct_active);
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
    title: t("editServices.0"),
    descrption: t("editServices.1") + ": 10/27/2023 11:34 ," +t("editServices.2"),
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
    title: t("viewService.0"),
    descrption:  t("viewService.1")+ "10/27/2023 11:" + t("viewService.2"),
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
      <>
        <ClickOutside onClick={handleClose}>
        <div className=" relative">
          {edit ? (
          <Edit   ref={EditRef} Edit_content={Edit_content}  validation_schema={Edit_Services_schema}  Edit_user={edit} set_Edit_user={setEdit} Uplode_imge={true}    other_section={discount} set_other_section={setDiscount} />
            
          ) : (
            ""
          )}
           </div>
        </ClickOutside>
        <ClickOutside onClick={handleCloseView}>
          {view ? (
            <View ref={viewRef} view_content={view_content } view_user={view} set_View_user={setView} hasSlider={true} /> 
            
          ) : (
            ""
          )}
        </ClickOutside>
        <ClickOutside onClick={handleEditDiscount}>
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
        </ClickOutside>
        <>
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
        </>
      </>
      

      <Content
        path={" Products / Table Services"}
        RefrechFun={handleRefrech}
        hasAddServices={true}
        refrech={refrech}
        hasRefrech={true}
        classNameChildern="bg-white"
        addProductFun={addProductFun}
      >
        
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
      </Content>
    </>
  );
}

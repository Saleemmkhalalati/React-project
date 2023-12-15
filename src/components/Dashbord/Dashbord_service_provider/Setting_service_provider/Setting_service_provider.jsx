



//image

import upload from "../../../../assets/icons/uplode.svg";
import done from "../../../../assets/icons/done_uplode.svg";
import Person from "../../../../assets/icons/Person.svg";
import View from "../../../../assets/icons/View.svg";
import Email from "../../../../assets/icons/Email.svg";
import Phone from "../../../../assets/icons/Phone.svg"
import Business from "../../../../assets/icons/Business.svg"


//
// import { Email, Person, View_Icon } from "../../utilities/Icons";
import Request_Edit from "../../Dashbord_layout/Mangment/Request_Edit"
import Content from "../../Dashbord_layout/Content/Content";
import Typography from "../../../utilities/Typography";
import { DashInput } from "../../../utilities/Inputs";
import { InputFile } from "../../../utilities/Inputs";
import ChangePassword from "../../Dashbord_layout/Mangment/ChangePassword";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect } from "react";

import { useDropzone } from "react-dropzone";
import React, {useState, useCallback } from "react";



const validationSchema = Yup.object().shape({
  admin: Yup.string(),
  email: Yup.string().email("Invalid email address").required("Required"),
  fakePass: Yup.string(),
  name:Yup.string(),
  phone_number:Yup.string(),
  img: Yup.mixed().test(
    "isImage",
    "الرجاء اختيار ملف صورة صالح (JPG، PNG، GIF)",
    function (value) {
      if (!value) {
        return true; // لا مشكلة إذا لم يكن هناك ملف
      }

      const supportedFormats = ["image/jpeg", "image/png", "image/gif"];

      if (!supportedFormats.includes(value.type)) {
        throw new Yup.ValidationError("Invalid image", value, "img");
      }
      return true;
    }
  ),
});

import { Link } from "react-router-dom";

const Setting_service_provider = () => {
  const [request_edit,set_request_edit]=useState(false);
  const [open_change_password, set_open_change_password] = useState(false);
  const { t } = useTranslation("global");
  const adminUser = [{ role: "admin user ", email: "rawanahd23@gmail.com" }];
  const formik = useFormik({
    initialValues: {
      admin: adminUser[0].role || "",
      email: adminUser[0].email || "",
      fakePass: "********",
      name:"Rawan Ahmed",
      phone_number:"+963 944 812 264",
      img: "",
    },
    // enableReinitialize: true, // for Update Page
    validationSchema: validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: false,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });
  useEffect(() => {
    if (!formik.values.admin) {
      formik.setValues({
        ...formik.values,
        admin: adminUser[0].role,
        email: adminUser[0].email,
      });
    }
  }, [formik.values.admin, formik.values.email, adminUser]);

  const onDrop = useCallback((acceptedFiles) => {
    formik.setFieldValue("img", acceptedFiles[0]);
  }, []);

  //for drag and drob img
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <Content path={"Setting"}>
      <div className="bg-white mt-3 px-7 pb-24 flex flex-col gap-10  relative">
        {request_edit ? <Request_Edit request_edit={request_edit} set_request_edit={set_request_edit}/> :""}
        {open_change_password ? <ChangePassword open_change_password={open_change_password} set_open_change_password={set_open_change_password}  /> : ""}

        <div className="flex flex-col gap-4 pt-10">
          <Typography component={"h3"}>{t("sitting.0")}</Typography>
          <Typography component={"h5"}>{t("sitting.1")}</Typography>
        </div>
        <form
          className="flex flex-col gap-4 sm:w-3/4 text-center sm:ltr:text-left sm:rtl:text-right "
          onSubmit={formik.handleSubmit}
        >
          <DashInput
            name={"admin"}
            value={formik.values.admin}
            icon={Person}
            isDisabled={true}
          />
 
   
          <DashInput
            name={"email"}
            icon={Email}
            value={formik.values.email}
            onChange={formik.handleChange}
            errorMsg={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""
            }
            onBlur={formik.handleBlur}
            isDisabled={false}
          />
          <DashInput
            name={"fakePass"}
            value={formik.values.fakePass}
            isDisabled={true}
            icon={View}
          />
          <Typography component={"h5"}>
            {t("sitting.2")}
            <span onClick={() => {
              set_open_change_password(!open_change_password)
            }
            } className="text-secondary hover:text-success  ">
              {t("sitting.3")}
            </span>
          </Typography>
          <DashInput
            name={"fakePass"}
            value={formik.values.name}
            isDisabled={true}
            icon={Business}
          />
              <DashInput
            name={"fakePass"}
            value={formik.values.phone_number}
            isDisabled={true}
            icon={Phone}
          />


          <InputFile
            name={"img"}
            type={"file"}
            value={formik.values.img}
            onChange={(e) => formik.setFieldValue("img", e.target.files[0])}
            label={
              formik.values.img && !formik.errors.img ? (
                t("sitting.6")
              ) : (
                <Typography component={"h5"}>{t("sitting.4")}</Typography>
              )
            }
            className={
              "h-24 sm:h-48 flex flex-col-reverse items-center justify-center gap-4 "
            }
            icon={formik.values.img && !formik.errors.img ? done : upload}
            classNameIcon={"w-[3rem] "}
            id={"img"}
            errorMsg={formik.errors.img ? formik.errors.img : ""}
            hasValueTrue={formik.values.img && !formik.errors.img}
            isInvalidType={formik.errors.img ? formik.errors.img : ""}
            getRootProps={{ ...getRootProps() }}
            getInputProps={{ ...getInputProps() }}
            isDragActive={isDragActive}
          />
          <button
            onClick={() => {
              set_request_edit(!request_edit)
            }
            }
            className=" text-secondary hover:text-success text-end text-sm"
            type="submit"
          >
            {t("sitting.5")}
          </button>
        </form>
      </div>
    </Content>
  );
};

export default Setting_service_provider;


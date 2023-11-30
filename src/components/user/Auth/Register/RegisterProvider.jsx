import React from "react";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import BackPolygon from "../../../utilities/BackPolygon";
import docImg from "./RegisterImage/Intersect.svg";
import ContainerImg from "../ContainerImage/ContainerImg";
import Typography from "../../../utilities/Typography";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../utilities/Button";
import { InputFile } from "../../../utilities/Inputs";
import { Input } from "../../../utilities/Inputs";
import email from "./RegisterImage/Email.svg";
import iconShow from "../Login/logain-image/View.svg";
import eye from "../../../../assets/icons/eyepass.svg";

import phone from "./RegisterImage/Phone.svg";
import pdf from "../Register/RegisterImage/pdf.svg";
import drop from "./RegisterImage/Dropdown.png";
import { easeInOut, motion } from "framer-motion";
import bank from "./RegisterImage/Bank.svg";
import card from "./RegisterImage/Card.svg";
import code from "./RegisterImage/Code.svg";
import AuthDesign from "../AuthDesign/AuthDesign";
import * as Yup from "yup";
import { useFormik } from "formik";

const registerSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password should be of minimum 8 characters length")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])/,
      "Password should contain at least one letter and one number"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
  contactnumber: Yup.string()
    .matches(/^[0-9]+$/, "Contact number should contain only numbers")
    .min(10, "Contact number should be at least 10 characters")
    .max(15, "Contact number should be at most 15 characters")
    .required("Contact number is required"),
  buisness: Yup.string()
    .matches(/^[0-9]+$/, "Contact number should contain only numbers")
    .min(10, "Contact number should be at least 10 characters")
    .max(15, "Contact number should be at most 15 characters")
    .required("Contact number is required"),
  bank: Yup.string().required("Bank name is required "),
  ibanNumber: Yup.string()
    .matches(/^[A-Z]{2}[0-9]{2}[A-Z0-9]{1,30}$/, "Invalid IBAN format")
    .required("IBAN number is required"),
  swiftCode: Yup.string()
    .matches(
      /^[A-Za-z]{6}[A-Za-z0-9]{2}([A-Za-z0-9]{3})?$/,
      "Invalid SWIFT code format"
    )
    .required("SWIFT code is required"),
  file: Yup.mixed()
    .required("File is required")
    .test(
      "fileType",
      "Invalid file type. Only PDF files are allowed.",
      (value) => value && value.type === "application/pdf"
    ),
  serviceType: Yup.string().required("Service Type is required"),
});
const RegisterProvider = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      contactnumber: "",
      buisness: "",
      bank: "",
      ibanNumber: "",
      swiftCode: "",
      file: null,
      serviceType: "",
    },
    validationSchema: registerSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: false,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.values.serviceType);
  const { t, i18n } = useTranslation("global");
  const [userType, setUserType] = useState("patient"); // User type, defaults to "patient"
  const [showDrop, setShowDrop] = useState(false);
  const [showpass, setshowpass] = useState(false);
  const [conpass, setconwpass] = useState(false);
  const navigate = useNavigate();
  const changeUserType = () => {
    setUserType("patient");
    navigate("/register");
  };

  const handleServiceType = (event) => {
    const selectedService = event.target.textContent;
    formik.setFieldValue("serviceType", selectedService);
    setShowDrop(false);
  };

  //show password
  function ShowPassword() {
    setshowpass(!showpass);
  }
  //show conpassword
  function conPass() {
    setconwpass(!conpass);
  }

  return (
    <div
      className={`relative max-w-[1750px] mx-auto my-0 flex flex-wrap justify-between max-[1750px]:overflow-hidden`}
    >
      <div className="relative  ltr:left-0  rtl:right-0 z-[-1]">
        <div className="absolute rotate-45 w-80 h-80 top-10 sm:top-24 bg-sky-50 rounded-3xl -start-14"></div>
        <div className="absolute rotate-45 w-80 h-80 top-96 sm:top-[29rem] bg-sky-50 rounded-3xl start-28"></div>
      </div>
      <div className={`relative flex flex-1 flex-col gap-8 pt-[12%] p-[5%]`}>
        <div className="flex flex-col gap-8">
          <Typography component="h1">{t("register.headProvider")}</Typography>

          <Typography component="h4">
            {t("register.loginQuest")}
            <Link
              to="/login"
              className="ms-1 text-success hover:text-secondary border-b-solid border-b-success hover:border-secondary border-b-[1px] cursor-pointer "
            >
              {t("register.loginLink")}
            </Link>
          </Typography>
        </div>
        <form className="flex flex-col gap-8" onSubmit={formik.handleSubmit}>
          <Input
            label={t("register.inputFields.email")}
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            type="text"
            errorMsg={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : null
            }
            icon={email}
          />
          <Input
            label={t("register.inputFields.password")}
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type={showpass ? "text" : "password"}
            errorMsg={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : null
            }
            value={formik.values.password}
            icon={showpass ? eye : iconShow}
            iconOnClick={ShowPassword}
          />
          <Input
            label={t("register.inputFields.confirmPassword")}
            name="confirmPassword"
            onChange={formik.handleChange}
            type={conpass ? "text" : "password"}
            errorMsg={
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? formik.errors.confirmPassword
                : null
            }
            value={formik.values.confirmPassword}
            icon={conpass ? eye : iconShow}
            iconOnClick={conPass}
          />
          <Input
            type="text"
            label={t("register.inputFields.number")}
            name="contactnumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMsg={
              formik.touched.contactnumber && formik.errors.contactnumber
                ? formik.errors.contactnumber
                : null
            }
            icon={phone}
            value={formik.values.contactnumber}
          />
          <Input
            type="text"
            name="buisness"
            label={t("register.inputFields.buisness")}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMsg={
              formik.touched.buisness && formik.errors.buisness
                ? formik.errors.buisness
                : null
            }
            icon={phone}
            value={formik.values.buisness}
          />
          <>
            <div name="serviceType">
              <div
                className={`flex justify-between items-center custom-select bg-[#FFFFFF] w-full relative text-mySlate px-[16px] py-[8px]  border-[1px] outline-none rounded-[8px] ${
                  formik.errors.serviceType
                    ? "border-error"
                    : "border-myGray-400"
                }`}
                onClick={() => setShowDrop(!showDrop)}
              >
                <p>
                  {formik.values.serviceType === ""
                    ? t("register.inputFields.serviceType")
                    : `${formik.values.serviceType}`}
                </p>
                {formik.values.serviceType !== "" && (
                  <motion.div
                    className="place w-fit top-[-15px] text-mySlate z-[3] absolute"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, type: easeInOut }}
                  >
                    <label>{t("register.inputFields.serviceType")}</label>
                    <div className="h-[2px] w-[110%] bg-[#FFFFFF] mt-[-11px] ml-[-5%] z-[2] "></div>
                  </motion.div>
                )}
                <img src={drop} alt="dropdown" className="w-[18px] h-[18px]" />
              </div>
              {showDrop && (
                <ul className="bg-[#FFFFFF] opacity-100 flex flex-col gap-[1px] shadow-lg rounded-[8px]">
                  <li
                    className="text-[12px] text-myGray-600 px-[8px] py-[1px] cursor-pointer w-full "
                    onClick={handleServiceType}
                  >
                    {t("register.services.doctor")}
                  </li>
                  <li
                    className="text-[12px] text-myGray-600 px-[8px] py-[1px] cursor-pointer w-full"
                    onClick={handleServiceType}
                  >
                    {t("register.services.pharmacy")}
                  </li>
                  <li
                    className="text-[12px] text-myGray-600 px-[8px] py-[1px] cursor-pointer w-full "
                    onClick={handleServiceType}
                  >
                    {t("register.services.hospital")}
                  </li>
                  <li
                    className="text-[12px] text-myGray-600 px-[8px] py-[1px] cursor-pointer w-full"
                    onClick={handleServiceType}
                  >
                    {t("register.services.lab")}
                  </li>
                  <li
                    className="text-[12px] text-myGray-600 px-[8px] py-[1px] cursor-pointer w-full "
                    onClick={handleServiceType}
                  >
                    {t("register.services.clinic")}
                  </li>
                </ul>
              )}
              {formik.values.serviceType === "" && (
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, type: easeInOut }}
                  className="text-[12px] text-error"
                >
                  {formik.errors.serviceType ? formik.errors.serviceType : ""}
                </motion.div>
              )}
            </div>
          </>

          <Typography component={"h3"}>
            {t("register.inputFields.bankInfo")}
          </Typography>
          <Input
            type="text"
            name="bank"
            label={t("register.inputFields.bank")}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMsg={
              formik.touched.bank && formik.errors.bank
                ? formik.errors.bank
                : null
            }
            icon={bank}
            value={formik.values.bank}
          />
          <Input
            type="text"
            label={t("register.inputFields.iban")}
            name="ibanNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMsg={
              formik.touched.ibanNumber && formik.errors.ibanNumber
                ? formik.errors.ibanNumber
                : null
            }
            icon={card}
            value={formik.values.ibanNumber}
          />
          <Input
            type="text"
            label={t("register.inputFields.swift")}
            name="swiftCode"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMsg={
              formik.touched.swiftCode && formik.errors.swiftCode
                ? formik.errors.swiftCode
                : null
            }
            icon={code}
            value={formik.values.swiftCode}
          />
          <Typography component={"h3"}>
            {t("register.inputFields.UploadFile")}
          </Typography>
          <InputFile
            className={"flex justify-between items-center px-5 py-2"}
            label={t("register.inputFields.file")}
            id={"file"}
            name={"file"}
            value={formik.values.file}
            type={"file"}
            onChange={(e) => formik.setFieldValue("file", e.target.files[0])}
            onBlur={formik.handleBlur}
            icon={pdf}
            hasValueTrue={
              formik.values.file &&
              formik.values.file.type === "application/pdf"
            }
            isInvalidType={
              formik.values.file &&
              formik.values.file.type !== "application/pdf"
            }
            errorMsg={
              formik.touched.file && formik.errors.file
                ? formik.errors.file
                : null
            }
            classNameIcon={"w-4"}
          />

          <Button type="submit">{t("register.inputFields.submit")}</Button>
          <div
            onClick={changeUserType}
            className="text-[16px] cursor-pointer font-normal leading-[25.14px] text-center text-secondary hover:text-success"
          >
            {t("register.toggleToPatient")}
          </div>
        </form>
      </div>
      <AuthDesign
        img={docImg}
        title={t("register.action")}
        paragraph={t("ImageContainer.aboutUs")}
      />
    </div>
  );
};

export default RegisterProvider;

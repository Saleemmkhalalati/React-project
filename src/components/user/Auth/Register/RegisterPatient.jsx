import React from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import BackPolygon from "../../../utilities/BackPolygon";
import docImg from "./RegisterImage/Intersect.svg";
import ContainerImg from "../ContainerImage/ContainerImg";
import Typography from "../../../utilities/Typography";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../utilities/Button";
import { Input } from "../../../utilities/Inputs";
import email from "./RegisterImage/Email.svg";
import iconShow from "../Login/logain-image/View.svg";
import eye from "../../../../assets/icons/eyepass.svg";

import AuthDesign from "../AuthDesign/AuthDesign";
import * as Yup from "yup";
import { Formik, useFormik } from "formik";

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
});
const RegisterPatient = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: false,
    onSubmit: (values) => {
      console.log("hhhhhhhhhhhhhhhh");
    },
  });

  const { t, i18n } = useTranslation("global");
  const [userType, setUserType] = useState("patient"); // User type, defaults to "patient"

  const [showpass, setshowpass] = useState(false);
  const [conpass, setconwpass] = useState(false);
  const navigate = useNavigate();
  const changeUserType = () => {
    setUserType("provider");
    navigate("/register-provider");
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
      className={`relative max-w-[1750px] mx-auto my-0 flex flex-wrap justify-between max-[1750px]:overflow-hidden max-[1100px]:py-5`}
    >
      <div className="relative  ltr:left-0  rtl:right-0 z-[-1]">
        <div className="absolute rotate-45 w-80 h-80 top-10 sm:top-24 bg-sky-50 rounded-3xl -start-14"></div>
        <div className="absolute rotate-45 w-80 h-80 top-96 sm:top-[29rem] bg-sky-50 rounded-3xl start-28"></div>
        <div></div>
      </div>
      <div className={`relative flex flex-1 flex-col gap-8 py-[12%] p-[5%]`}>
        <div className="flex flex-col gap-8 text-center lg:text-start">
          <Typography component="h1">{t("register.headPatient")}</Typography>
          <Typography component="h4">
            {t("register.loginQuest")}
            <Link
              to="/login"
              className="ms-1 text-success hover:text-secondary border-b-solid border-b-success hover:border-secondary border-b-[1px] cursor-pointer"
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
          <Button type="submit">{t("register.inputFields.submit")}</Button>
          <div
            onClick={changeUserType}
            className="text-[16px] cursor-pointer font-normal leading-[25.14px] w-full text-center text-secondary hover:text-success"
          >
            {t("register.toggleToProvider")}
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

export default RegisterPatient;

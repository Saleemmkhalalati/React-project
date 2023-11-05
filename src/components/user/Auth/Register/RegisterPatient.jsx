import React from 'react';
import { useTranslation } from 'react-i18next'
import { useState } from "react";
import BackPolygon from "../../../utilities/BackPolygon";
import docImg from "./RegisterImage/Intersect.svg";
import ContainerImg from "../ContainerImage/ContainerImg";
import Typography from "../../../utilities/Typography";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../utilities/Button";
import { Input } from "../../../utilities/Inputs";
import email from './RegisterImage/Email.svg';
import showPass from './RegisterImage/Vector.svg'
import hidePassword from './RegisterImage/icons8-eye-26.png'
import AuthDesign from '../AuthDesign/AuthDesign';
const RegisterPatient = () => {
  const { t, i18n } = useTranslation("global");
  const [userType, setUserType] = useState("patient"); // User type, defaults to "patient"
  const [formData, setFormData] = useState({}); // Form data
  const [errors, setErrors] = useState({}); // Form data
  const [isSubmitting, setIsSubmitting] = useState(false); // Indicates if the form is submitted
  const [isValid, setIsValid] = useState(true); // Indicates if the form is Valid
  const [showPassword, setShowPassword] = useState(false); // Shows/hides password
  const [showRePass, setReShowPass] = useState(false); // Shows/hides re-entered password
  const navigate = useNavigate()
  const changeUserType = () => {
    setUserType("provider");
    navigate("/register-provider")
  };
  const handleSetErrors = (name, msgError) => {
    console.log(name);
    setErrors({
      ...errors,
      [name]: msgError,
    });
  };
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    if (event.target.value === "") {
      setIsValid(false);
      console.log(isValid)
      handleSetErrors([event.target.name], "this Field is req")
    } else {
      setIsValid(true);
      handleSetErrors([event.target.name], "")
    }
    if ((event.target.name === "repassword") && event.target.value !== formData.password) {

      setIsValid(false);
      console.log(isValid)
      handleSetErrors(["repassword"], "Passwords do not match")
    }
    else if (Object.keys(errors).length === 0) {
      setIsValid(true);
      handleSetErrors([event.target.name], "")
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    // Check if the passwords match
    if (formData.password !== formData.repassword) {
      setIsPasswordMatch(false);
      console.log("Passwords do not match");
    } else {
      const requiredFields = ["email", "password", "repassword"];
      const hasEmptyFields = requiredFields.some(
        (fieldName) => !formData[fieldName]
      );
      if (!hasEmptyFields) {
        setIsValid(true);
        sendFormDataToServer();
      } else {
        setIsValid(false);
        console.log("Some required fields are empty.");
      }
    };
  }
  const sendFormDataToServer = () => {
    console.log("Sending data to the server...");
    console.log(formData);
  };
  const handleShowPass = (event) => {
    event.target.alt === "password" ? setShowPassword(!showPassword) : event.target.alt === "repassword" ? setReShowPass(!showRePass) : null;
  };

  return (
    <div className={`relative max-w-[1750px] mx-auto my-0 flex flex-wrap justify-between max-[1750px]:overflow-hidden max-[1100px]:py-5`}>
      <div className='relative  ltr:left-0  rtl:right-0 z-[-1]'>
        <div className="absolute rotate-45 w-80 h-80 top-10 sm:top-24 bg-sky-50 rounded-3xl -start-14"></div>
        <div className="absolute rotate-45 w-80 h-80 top-96 sm:top-[29rem] bg-sky-50 rounded-3xl start-28"></div>
        <div></div>
      </div>
      <div className={`relative flex flex-1 flex-col gap-8 py-[12%] p-[5%]`}>
        <div className="flex flex-col gap-8 text-center lg:text-start">
          <Typography component="h1">
            {t("register.headPatient")}
          </Typography>
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
        <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
          <Input
            label={t("register.inputFields.email")}
            name="email"
            onChange={(e) => handleInputChange(e)}
            type="email"
            errorMsg={errors["email"] ? errors["email"] : ""}
            icon={email}
            value={formData[email]}
          />
          <Input
            label={t("register.inputFields.password")}
            name="password"
            onChange={(e) => handleInputChange(e)}
            type={showPassword ? "text" : "password"}
            errorMsg={errors["password"] ? errors["password"] : ""}
            icon={showPassword ? hidePassword : showPass}
            value={formData["password"]}
            iconOnClick={handleShowPass}
          />
          <Input
            label={t("register.inputFields.confirmPassword")}
            name="repassword"
            onChange={(e) => handleInputChange(e)}
            type={showRePass ? "text" : "password"}
            errorMsg={errors["repassword"] ? errors["repassword"] : ""}
            icon={showRePass ? hidePassword : showPass}
            value={formData["repassword"]}
            iconOnClick={handleShowPass}
          />
          <Button type="submit">
            {t("register.inputFields.submit")}
          </Button>
          <div
            onClick={changeUserType}
            className="text-[16px] cursor-pointer font-normal leading-[25.14px] w-full text-center text-secondary hover:text-success"
          >
            {t("register.toggleToProvider")}
          </div>
        </form>
      </div>
      <AuthDesign img={docImg} title={t("register.action")} paragraph={t("ImageContainer.aboutUs")} />
    </div>
  )
}

export default RegisterPatient
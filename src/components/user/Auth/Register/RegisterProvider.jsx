import React from 'react'
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
import phone from './RegisterImage/Phone.svg';
import drop from './RegisterImage/Dropdown.png';
import {easeInOut, motion} from "framer-motion"
import bank from './RegisterImage/Bank.svg';
import card from './RegisterImage/Card.svg';
import code from './RegisterImage/Code.svg';
const RegisterProvider = () => {
  const { t, i18n } = useTranslation("global");
  const [userType, setUserType] = useState("patient"); // User type, defaults to "patient"
  const [formData, setFormData] = useState({}); // Form data
  const [errors, setErrors] = useState({}); // Form data
  const [isSubmitting, setIsSubmitting] = useState(false); // Indicates if the form is submitted
  const [isValid, setIsValid] = useState(true); // Indicates if the form is Valid
  const [showPassword, setShowPassword] = useState(false); // Shows/hides password
  const [showRePass, setReShowPass] = useState(false); // Shows/hides re-entered password
  const [serviceSelected,setServiceSelected] = useState("")
  const [showDrop,setShowDrop] = useState(false)
  const navigate = useNavigate()
  const changeUserType = () => {
    setUserType("patient");
    navigate("/register")
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
      handleSetErrors([event.target.name],"this Field is req")
    }else{
      setIsValid(true);
      handleSetErrors([event.target.name],"")
    }
    if ((event.target.name === "repassword") && event.target.value !== formData.password){
      
      setIsValid(false);
      console.log(isValid)
      handleSetErrors(["repassword"],"Passwords do not match") 
    }
    else if(Object.keys(errors).length===0)
    {
      setIsValid(true);
      handleSetErrors([event.target.name],"")
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
  };}
  const sendFormDataToServer = () => {
    console.log("Sending data to the server...");
    console.log(formData);
  };
  const handleShowPass = (event) => {
    event.target.alt === "password" ? setShowPassword(!showPassword) : event.target.alt === "repassword" ? setReShowPass(!showRePass) : null;
  };
  const handleServiceType = (event) => {
    const selectedService = event.target.textContent;
    setServiceSelected(selectedService);
    setShowDrop(false)
  }
  
  return (
    <div className={`relative py-[70px] w-full flex flex-col justify-between ${i18n.language === "ar" ? "lg:flex-row-reverse" : "lg:flex-row"} items-center lg:items-start gap-11 overflow-hidden`}>
        <div className={`w-[90%] w-[50%] p-6 md:p-[70px] pr-0 flex flex-col gap-14`}>
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
              label="Email Adress"
              name="email"
              onChange={(e)=>handleInputChange(e)}
              type="email"
              errorMsg={errors["email"] ? errors["email"] : ""}
              icon={email}
              value={formData[email]}
            />
            <Input
              label="Input your Password"
              name="password"
              onChange={(e)=>handleInputChange(e)}
              type={showPassword?"text":"password"}
              errorMsg={errors["password"] ? errors["password"] : ""}
              icon={showPassword?hidePassword:showPass}
              value={formData["password"]}
              iconOnClick={handleShowPass}
            />
            <Input
              label="confirm Password"
              name="repassword"
              onChange={(e)=>handleInputChange(e)}
              type={showRePass?"text":"password"}
              errorMsg={errors["repassword"] ? errors["repassword"] : ""}
              icon={showRePass?hidePassword:showPass}
              value={formData["repassword"]}
              iconOnClick={handleShowPass}
            />
            <Input
              label="Pnone Number"
              name="number"
              onChange={(e)=>handleInputChange(e)}
              type="text"
              errorMsg={errors["number"]}
              icon={phone}
              value={formData["number"]}
            />
            <Input
              label="Buisniss Name"
              name="buisness"
              onChange={(e)=>handleInputChange(e)}
              type="text"
              errorMsg={errors["buisness"]}
              icon={phone}
              value={formData["buisness"]}
            />
              <>
                <div name="serviceType" value={serviceSelected}>
                  <div
                    className={`flex justify-between items-center custom-select bg-[#FFFFFF] w-full relative text-mySlate px-[16px] py-[8px] border-myGray-400 border-[1px] outline-none rounded-[8px] ${
                      isSubmitting && serviceSelected === ""
                        ? "border-error"
                        : "border-myGray-400"
                    }`}
                    onClick={() => setShowDrop(!showDrop)}
                  >
                    <p>
                      {serviceSelected === ""
                        ? t("register.inputFields.serviceType")
                        : `${serviceSelected}`}
                    </p>
                    {serviceSelected !== "" && (
                      <motion.div
                        className="place w-fit top-[-15px] text-mySlate z-[3] absolute"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, type: easeInOut }}
                      >
                        <label>Service Type</label>
                        <div className="h-[2px] w-[110%] bg-[#FFFFFF] mt-[-11px] ml-[-5%] z-[2] "></div>
                      </motion.div>
                    )}
                    <img
                      src={drop}
                      alt="dropdown"
                      className="w-[18px] h-[18px]"
                    />
                  </div>
                  {showDrop && (
                    <ul className="bg-[#FFFFFF] opacity-100 flex flex-col gap-[1px] shadow-lg rounded-[8px]">
                      
                        <li
                          className={`text-[12px] text-myGray-600 px-[8px] py-[1px] cursor-pointer w-full selectService ${
                            serviceSelected ==="doctor"? "select" : ""
                          }`}
                          onClick={handleServiceType}
                        >
                          doctor
                        </li>
                        <li
                          className={`text-[12px] text-myGray-600 px-[8px] py-[1px] cursor-pointer w-full selectService ${
                            serviceSelected ==="Pharmacy"? "select" : ""
                          }`}
                          onClick={handleServiceType}
                        >
                          Pharmacy
                        </li>
                        <li
                          className={`text-[12px] text-myGray-600 px-[8px] py-[1px] cursor-pointer w-full selectService ${
                            serviceSelected ==="hospital"? "select" : ""
                          }`}
                          onClick={handleServiceType}
                        >
                          hospital
                        </li>
                        <li
                          className={`text-[12px] text-myGray-600 px-[8px] py-[1px] cursor-pointer w-full selectService ${
                            serviceSelected ==="Lab"? "select" : ""
                          }`}
                          onClick={handleServiceType}
                        >
                          Lab
                        </li>
                        <li
                          className={`text-[12px] text-myGray-600 px-[8px] py-[1px] cursor-pointer w-full selectService ${
                            serviceSelected ==="clinic"? "select" : ""
                          }`}
                          onClick={handleServiceType}
                        >
                          clinic
                        </li>
                      
                    </ul>
                  )}
                  {isSubmitting && serviceSelected === "" && (
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, type: easeInOut }}
                    className="text-[12px] text-error"
                  >
                    {t("register.fieldRequier")}
                  </motion.div>
                )}
                </div>
              </>
              <Input
              label="Bank name"
              name="bank"
              onChange={(e)=>handleInputChange(e)}
              type="text"
              errorMsg={errors["bank"]}
              icon={bank}
              value={formData["bank"]}
              /> 
              <Input
              label="iban"
              name="iban"
              onChange={(e)=>handleInputChange(e)}
              type="text"
              errorMsg={errors["iban"]}
              icon={card}
              value={formData["iban"]}
              />                      
              <Input
              label="Swift Code"
              name="code"
              onChange={(e)=>handleInputChange(e)}
              type="text"
              errorMsg={errors["code"]}
              icon={code}
              value={formData["code"]}
              />    
            <Button type="submit">
              Register as a Service Provider
            </Button>
            <div
                onClick={changeUserType}
                className="text-[16px] cursor-pointer font-normal leading-[25.14px] w-full text-center text-secondary hover:text-success"
              >
                 { t("register.toggleToPatient")}
              </div>
          </form>
        </div>
      <div className="w-[90%] lg:w-[45%] shrink-0 lg:ml-auto">
        <ContainerImg docImg={docImg} action={t("register.action")} />
      </div>
      <div className="absolute z-[-100] translate-x-[-145px] translate-y-[-39px]">
          <BackPolygon />
        </div>
        <div className="absolute z-[-100] translate-x-[-30px] translate-y-[400px]">
          <BackPolygon />
        </div>
    </div>
  )
}

export default RegisterProvider
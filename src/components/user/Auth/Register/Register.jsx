import React, { useState } from 'react';
import { RegisterData } from './dataRegister';
import BackPolygon from '../BackPolygon/BackPolygon';
import docImg from "./RegisterImage/Register.svg";
import ContainerImg from '../ContainerImage/ContainerImg';
import MultiLanguage from '../../../layout/MultiLanguage';
import { useTranslation } from 'react-i18next';
import "./Register.css"
import {easeInOut, motion} from 'framer-motion'

const Register = () => {
  // State variables
  const [userType, setUserType] = useState("patient"); // User type, defaults to "patient"
  const [formData, setFormData] = useState({}); // Form data
  const [isEmpty, setIsEmpty] = useState({}); // Checks if form fields are empty
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // Indicates if the form is submitted
  const [isPasswordMatch, setIsPasswordMatch] = useState(true); // Checks if passwords match
  const [isFocus, setIsFocus] = useState({}); // Tracks input field focus
  const [showDrop, setShowDrop] = useState(false); // Shows/hides a dropdown
  const [serviceSelected, setServiceSelected] = useState(""); // Tracks selected service
  const [showBankDetails, setShowBankDetails] = useState(false); // Shows/hides bank details
  const [showPassword, setShowPassword] = useState(false); // Shows/hides password
  const [showRePass, setReShowPass] = useState(false); // Shows/hides re-entered password

  // Language translation
  const { t } = useTranslation("global");

  // Function to toggle between "patient" and "Service Provider"
  const changeUserType = () => {
    userType === "patient" ? setUserType("Service Provider") : setUserType("patient");
  };

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // Handle the selection of the service type
  const handleServiceType = (event) => {
    const selectedService = event.target.textContent;
    setServiceSelected(selectedService);
    setFormData({
      ...formData,
      serviceSelected: selectedService,
    });

    setShowDrop(false);
  };

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Check if the field is empty
    setIsEmpty({
      ...isEmpty,
      [name]: value === '' ? true : false,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);

    // Check if the passwords match
    if (formData.password !== formData.repassword) {
      setIsPasswordMatch(false);
      console.log("Passwords do not match");
    } else {
      setIsPasswordMatch(true);

      const requiredFields = ["email", "password", "repassword", "number", "business", "serviceSelected"];
      const hasEmptyFields = requiredFields.some((fieldName) => !formData[fieldName]);

      if (hasEmptyFields) {
        console.log("Some required fields are empty.");
      } else {
        sendFormDataToServer();
      }
    }
  };

  // Send form data to the server
  const sendFormDataToServer = () => {
    console.log("Sending data to the server...");
    console.log(formData);
  };

  // Handle input field focus
  const handleFocus = (event) => {
    const { name } = event.target;
    setIsFocus({
      ...isFocus,
      [name]: true,
    });
  };

  // Handle input field blur
  const handleBlur = (event) => {
    const { name } = event.target;
    setIsFocus({
      ...isFocus,
      [name]: false,
    });
  };

  // Handle show/hide password
  const handleShowPass = (event) => {
    event.target.alt === "password" ? setShowPassword(!showPassword) : event.target.alt === "repassword" ? setReShowPass(!showRePass) : null;
  };

  // Replace this function with your own implementation
  const registerData = RegisterData(showPassword, showRePass);
  const userData = userType === "patient" ? registerData.patient : registerData.provider;

  return (
    <>
      <div className={`relative py-[70px] flex justify-between flex-col ${currentLanguage === "ar" ? "lg:flex-row-reverse" : "lg:flex-row"} items-center lg:items-start gap-[45px] overflow-hidden`}>
        <div className='w-[90%] lg:w-[50%] p-[25px] md:p-[70px] pr-0 flex flex-col gap-[56px]'>
          <div className='flex flex-col gap-[32px] text-center lg:text-start'>
            <p className='text-[25px] lg:text-[39.06px] font-bold leading-[51.99px] text-primary'>{userType === "patient" ? t("register.headPatient") : t("register.headProvider")}</p>
            <div className='text-[16px] font-normal leading-[25.14px] flex justify-center lg:justify-start gap-[8px]'>
              <p className='text-mtGray-600'>{t("register.loginQuest")}</p>
              <p className='text-success hover:text-secondary border-b-solid border-b-success hover:border-secondary border-b-[1px] cursor-pointer'>{t("register.loginLink")}</p>
            </div>
          </div>
          <form className='flex flex-col gap-[32px]' onSubmit={handleSubmit}>
            {userData.map((data, index) => {
              const isFieldEmpty = isEmpty[data.name];

              return (
                <div key={index}>
                  {data.name !== 'submit' && data.name !== "serviceType" && data.name !== "bank" ? (
                    <>
                      <div className={`flex bg-[#FFFFFF] relative border-solid text-mySlate border-[1px] rounded-[8px] px-[16px] py-[8px] ${isFormSubmitted && (isFieldEmpty || isFieldEmpty === undefined) ? 'border-error' : ''} ${isFocus[data.name] ? "border-primary" : "border-myGray-400"}`}>
                        <input
                          className='w-full border-none outline-none bg-transparent placeholder:text-mySlate'
                          name={data.name}
                          type={data.name === "password" && showPassword ? "text" : data.name === "repassword" && showRePass ? "text" : data.inputType}
                          placeholder={isFocus[data.name] ? '' : data.placeHolder}
                          onChange={handleInputChange}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                        />
                        {(isFocus[data.name] || formData[data.name]) &&
                          <motion.div className='place w-fit top-[-15px] text-mySlate z-[3] absolute' initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, type: easeInOut }}>
                          <label>{data.placeHolder}</label>
                          <div className='h-[2px] w-[110%] bg-[#FFFFFF] mt-[-11px] ml-[-5%] z-[2] '></div>
                        </motion.div>}
                        <img src={data.inputIcon} alt={data.name} onClick={handleShowPass} className='w-[12px] h-[15px] m-auto cursor-pointer' />
                      </div>
                      {isFormSubmitted && (isFieldEmpty || isFieldEmpty === undefined) && <div className='text-[12px] text-error'>{t("register.fieldRequier")}</div>}
                      {!isPasswordMatch && !(isFieldEmpty || isFieldEmpty === undefined) && data.name === 'repassword' && <div className='text-[12px] text-error'>{t("register.passwordMatch")}</div>}
                    </>
                  ) : (
                    data.inputType !== "select" && data.name !== "bank" ? (
                      <input className='w-full hover:opacity-80 cursor-pointer py-[8px] text-center rounded-[6px] text-[#FFFFFF] font-normal text-[16px] leading-[25.14px] bg-linear' type={data.inputType} name={data.inputType} value={data.placeHolder} />
                    ) : (
                      data.name !== "bank" ? (
                        <>
                          <div name="serviceType" value={serviceSelected}>
                            <div className={`flex justify-between items-center custom-select flex bg-[#FFFFFF] w-full relative text-mySlate px-[16px] py-[8px] border-myGray-400 border-[1px] outline-none rounded-[8px] ${isFormSubmitted && (serviceSelected === "") ? 'border-error' : 'border-myGray-400'}`} onClick={() => setShowDrop(!showDrop)}>
                              <p >{serviceSelected === '' ? t("register.inputFields.serviceType") : `${serviceSelected}`}</p>
                              {(serviceSelected !== "") && <label className='place top-[-15px] text-mySlate absolute bg-white'>{data.placeHolder}</label>}
                              <img src={data.inputIcon} alt="dropdown" className='w-[15px] h-[15px]' />
                            </div>
                            {showDrop && (
                              <ul className='bg-[#FFFFFF] opacity-100 flex flex-col gap-[1px] shadow-lg rounded-[8px]'>
                                {data.options.map((opt, index) => (
                                  <li key={index} className={`text-[12px] text-myGray-600 px-[8px] py-[1px] cursor-pointer w-full selectService ${opt === serviceSelected ? 'select' : ''}`} onClick={handleServiceType}>
                                    {opt}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                          {isFormSubmitted && (serviceSelected === "") && <div className='text-[12px] text-error'>{t("register.fieldRequier")}</div>}
                        </>
                      ) : (
                        <div className='flex flex-col gap-[32px]'>
                          <div className='flex gap-[5px] cursor-pointer transition-500' onClick={() => setShowBankDetails(prev => !prev)}>
                            <label className='cursor-pointer'>{data.placeHolder}</label>
                            <img src={data.inputIcon} alt="bank-details" className='w-[15px] h-[15px]' />
                          </div>
                          {showBankDetails && data.details.map((inp, index) => (
                            <div key={index} className={`flex bg-[#FFFFFF] relative border-solid text-mySlate border-[1px] rounded-[8px] px-[16px] py-[8px] ${isFocus[inp.name] ? "border-primary" : "border-myGray-400"}`}>
                              <input
                                className='w-full outline-none bg-transparent placeholder:text-mySlate'
                                name={inp.name}
                                placeholder={isFocus[inp.name] ? '' : inp.placeHolder}
                                onChange={handleInputChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                              />
                              {(isFocus[inp.name] || formData[inp.name]) &&
                                <motion.div className='place w-fit top-[-15px] text-mySlate z-[3] absolute' initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, type: easeInOut }}>
                                  <label>{inp.placeHolder}</label>
                                  <div className='h-[2px] w-[110%] bg-[#FFFFFF] mt-[-11px] ml-[-5%] z-[2] '></div>
                                </motion.div>}
                              <img src={inp.inputIcon} alt={inp.inputType} />
                            </div>
                          ))}
                        </div>
                      )
                    )
                  )}
                </div>
              );
            })}
            <div onClick={changeUserType} className='text-[16px] cursor-pointer font-normal leading-[25.14px] w-full text-center text-secondary'>{userType === "patient" ? t("register.toggleToProvider") : t("register.toggleToPatient")}</div>
          </form>
        </div>
        <div className='w-[90%] lg:w-[45%] shrink-0 lg:ml-auto'>
          <ContainerImg docImg={docImg} action={t('register.action')} />
        </div>
        <div className='translate-x-[-145px] translate-y-[-39px] absolute z-[-100]'>
          <BackPolygon />
        </div>
        <div className='translate-x-[-30px] translate-y-[400px] absolute z-[-100]'>
          <BackPolygon />
        </div>
      </div>
    </>
  );
};

export default Register;

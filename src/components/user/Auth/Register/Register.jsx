// import { useState } from "react";
// import { RegisterData } from "./dataRegister";
// import BackPolygon from "../../../utilities/BackPolygon";
// import docImg from "./RegisterImage/Intersect.svg";
// import ContainerImg from "../ContainerImage/ContainerImg";
// import { useTranslation } from "react-i18next";
// import { easeInOut, motion } from "framer-motion";
// import Typography from "../../../utilities/Typography";
// import { Link } from "react-router-dom";
// import Button from "../../../utilities/Button";
// import { Input } from "../../../utilities/Inputs";
// const Register = () => {
//   // State variables
//   const [userType, setUserType] = useState("patient"); // User type, defaults to "patient"
//   const [formData, setFormData] = useState({}); // Form data
//   const [errors, setErrors] = useState({}); // Form data
//   const [isEmpty, setIsEmpty] = useState({}); // Checks if form fields are empty
//   const [isSubmitting, setIsSubmitting] = useState(false); // Indicates if the form is submitted
//   const [isValid, setIsValid] = useState(true); // Indicates if the form is Valid
//   const [isPasswordMatch, setIsPasswordMatch] = useState(true); // Checks if passwords match
//   const [isFocus, setIsFocus] = useState({}); // Tracks input field focus
//   const [showDrop, setShowDrop] = useState(false); // Shows/hides a dropdown
//   const [serviceSelected, setServiceSelected] = useState(""); // Tracks selected service
//   const [showBankDetails, setShowBankDetails] = useState(false); // Shows/hides bank details
//   const [showPassword, setShowPassword] = useState(false); // Shows/hides password
//   const [showRePass, setReShowPass] = useState(false); // Shows/hides re-entered password
//   // Language translation
//   const { t, i18n } = useTranslation("global");
//   // Function to toggle between "patient" and "Service Provider"
//   const changeUserType = () => {
//     userType === "patient"
//       ? setUserType("Service Provider")
//       : setUserType("patient");
//     setFormData({});
//     setIsEmpty({});
//     setIsFormSubmitted(false);
//   };
//   console.log(isEmpty);
//   // Handle the selection of the service type
//   const handleServiceType = (event) => {
//     const selectedService = event.target.textContent;
//     setServiceSelected(selectedService);
//     setFormData({
//       ...formData,
//       serviceSelected: selectedService,
//     });
//     setShowDrop(false);
//   };
//   const handleSetErrors = (name, msgError) => {
//     console.log(name);
//     setErrors({
//       ...errors,
//       [name]: msgError,
//     });
//   };
//   // Handle form input changes
//   const handleInputChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//     if (event.target.value === "") {
//       setIsValid(false);
//       console.log(isValid);
//       handleSetErrors([event.target.name], "this Field is req");
//       console.log("this Field is req");
//     }
//     if (
//       event.target.name === "repassword" &&
//       formData.password !== formData.repassword
//     ) {
//       setIsValid(false);
//       console.log(isValid);
//       handleSetErrors([event.target.name], "Passwords do not match");
//       console.log("Passwords do not match");
//     } else if (Object.keys(errors).length === 0) {
//       setIsValid(true);
//       console.log("vfd");
//     }

//     // // Check if the field is empty
//     // setIsEmpty({
//     //   ...isEmpty,
//     //   [event.target.name]: event.target.value === '' ? true : false,
//     // });
//   };
//   // Handle form submission
//   console.log(errors);
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setIsSubmitting(true);
//     // Check if the passwords match

//     if (formData.password !== formData.repassword) {
//       setIsPasswordMatch(false);
//       console.log("Passwords do not match");
//     } else {
//       setIsPasswordMatch(true);
//       const requiredFields =
//         userType === "Service Provider"
//           ? [
//               "email",
//               "password",
//               "repassword",
//               "number",
//               "business",
//               "serviceSelected",
//             ]
//           : ["email", "password", "repassword"];
//       const hasEmptyFields = requiredFields.some(
//         (fieldName) => !formData[fieldName]
//       );
//       if (!hasEmptyFields) {

//       const requiredFields = userType === "Service Provider" ? ["email", "password", "repassword", "number", "business", "serviceSelected"] : ["email", "password", "repassword"];
//       const hasEmptyFields = requiredFields.some((fieldName) => !formData[fieldName]);
//       if (!hasEmptyFields ) {

//         setIsValid(true);
//         sendFormDataToServer();
//       } else {
//         setIsValid(false);
//         console.log("Some required fields are empty.");
//       }
//   };
//   // Send form data to the server
//   const sendFormDataToServer = () => {
//     console.log("Sending data to the server...");
//     console.log(formData);
//   };
//   // Handle input field focus
//   const handleFocus = (event) => {
//     setIsFocus({
//       ...isFocus,
//       [event.target.name]: true,
//     });
//   };
//   // Handle input field blur
//   const handleBlur = (event) => {
//     setIsFocus({
//       ...isFocus,
//       [event.target.name]: false,
//     });
//   };
//   // Handle show/hide password
//   const handleShowPass = (event) => {
//     event.target.alt === "password"
//       ? setShowPassword(!showPassword)
//       : event.target.alt === "repassword"
//       ? setReShowPass(!showRePass)
//       : null;
//   };
//   // Replace this function with your own implementation
//   const registerData = RegisterData(showPassword, showRePass);
//   return (
//     <>
//       <div
//         className={`relative py-[70px] flex flex-col justify-between ${
//           i18n.language === "ar" ? "lg:flex-row-reverse" : "lg:flex-row"
//         } items-center lg:items-start gap-11 overflow-hidden`}
//       >
//         <div className="w-[90%] lg:w-[50%] p-6 md:p-[70px] pr-0 flex flex-col gap-14">
//           <div className="flex flex-col gap-8 text-center lg:text-start">
//             <Typography component="h1">
//               {userType === "patient"
//                 ? t("register.headPatient")
//                 : t("register.headProvider")}
//             </Typography>
//             <Typography component="h4">
//               {t("register.loginQuest")}
//               <Link
//                 to="/login"
//                 className="ms-1 text-success hover:text-secondary border-b-solid border-b-success hover:border-secondary border-b-[1px] cursor-pointer"
//               >
//                 {t("register.loginLink")}
//               </Link>
//             </Typography>
//           </div>
//           {userType === "patient" && (
//             <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
//               <Input
//                 label={"email"}
//                 name="email"
//                 onChange={handleInputChange}
//                 onBlur={handleBlur}

//                 type="email"
//                 errorMsg={errors.email ? "lrevl" : ""}

//                 type='email'
//                 errorMsg={errors.email || (!isValid && errors.email === "") ? "lrevl" : ""}

//                 icon={email}
//               />
//               {/* {registerData.patient.map((data, key) => {
//                 const isFieldEmpty = isEmpty[data.name];
//                 return (
//                   <div key={key}>
//                     <div className={`relative flex bg-white px-4 py-2 border-solid text-mySlate border-[1px] rounded-md  ${isFormSubmitted && (isFieldEmpty || isFieldEmpty === undefined) ? 'border-error ' : "border-myGray-400 focus-within:border-primary "} `}>
//                       <label
//                         htmlFor={data.name}
//                         className="relative z-[0] w-full me-1 transition-all duration-100 ease-in">
//                         <input
//                           className='peer w-full placeholder-transparent text-mySlate outline-0 focus:outline-none'
//                           placeholder="p"
//                           name={data.name}
//                           type={data.name === "password" && showPassword ? "text" : data.name === "repassword" && showRePass ? "text" : data.inputType}
//                           onChange={handleInputChange}
//                           onBlur={handleBlur}
//                         />
//                         <span className='absolute start-0 -top-[1.40rem] px-1 text-mySlate text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-mySlate peer-placeholder-shown:top-0 peer-focus:-top-[1.40rem] peer-focus:text-mySlate peer-focus:text-sm rounded-md bg-gradient-to-b from-transparent from-65% to-white to-35%'>{data.placeHolder}</span>
//                       </label>
//                       <img src={data.inputIcon} alt={data.name} onClick={handleShowPass} className='w-4 h-w-4 cursor-pointer' />
//                     </div>
//                     {isFormSubmitted && (isFieldEmpty || isFieldEmpty === undefined) && <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, type: easeInOut }} className='text-[12px] text-error'>{t("register.fieldRequier")}</motion.div>}
//                     {!isPasswordMatch && !(isFieldEmpty || isFieldEmpty === undefined) && data.name === 'repassword' && <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, type: easeInOut }} className='text-xs text-error'>{t("register.passwordMatch")}</motion.div>}
//                   </div>
//                 )
//               })} */}
//               <Button type="submit" disabled={isSubmitting || !isValid}>
//                 Register as apatient
//               </Button>
//               <div
//                 onClick={changeUserType}
//                 className="text-base cursor-pointer font-normal w-full text-center text-secondary hover:text-success"
//               >
//                 {userType === "patient"
//                   ? t("register.toggleToProvider")
//                   : t("register.toggleToPatient")}
//               </div>
//             </form>
//           )}
//           {userType === "Service Provider" && (
//             <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
//               {registerData.provider.map((data, key) => {
//                 const isFieldEmpty = isEmpty[data.name];
//                 return (
//                   <>
//                     {data.inputType !== "select" && data.name !== "bank" && (
//                       <div key={key}>
//                         <>
//                           <div
//                             key={key}
//                             className={`flex bg-white relative border-solid text-mySlate border-[1px] rounded-[8px] px-[16px] py-[8px] ${
//                               isSubmitting &&
//                               (isFieldEmpty || isFieldEmpty === undefined)
//                                 ? "border-error"
//                                 : ""
//                             } ${
//                               isFocus[data.name]
//                                 ? "border-primary"
//                                 : "border-myGray-400"
//                             }`}
//                           >
//                             <input
//                               className="w-full border-none outline-none  placeholder:text-mySlate"
//                               name={data.name}
//                               type={
//                                 data.name === "password" && showPassword
//                                   ? "text"
//                                   : data.name === "repassword" && showRePass
//                                   ? "text"
//                                   : data.inputType
//                               }
//                               placeholder={
//                                 isFocus[data.name] ? "" : data.placeHolder
//                               }
//                               onChange={handleInputChange}
//                               onFocus={handleFocus}
//                               onBlur={handleBlur}
//                             />
//                             {(isFocus[data.name] || formData[data.name]) && (
//                               <motion.div
//                                 className="w-fit top-[-15px] text-mySlate z-[3] absolute"
//                                 initial={{ opacity: 0, y: 15 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.5, type: easeInOut }}
//                               >
//                                 <label>{data.placeHolder}</label>
//                                 <div className="h-[2px] w-[110%] bg-[#FFFFFF] mt-[-11px] ml-[-5%] z-[2] "></div>
//                               </motion.div>
//                             )}
//                             <img
//                               src={data.inputIcon}
//                               alt={data.name}
//                               onClick={handleShowPass}
//                               className="w-[17px] h-[17px] m-auto cursor-pointer f"
//                             />
//                           </div>
//                           {isSubmitting &&
//                             (isFieldEmpty || isFieldEmpty === undefined) && (
//                               <motion.div
//                                 initial={{ opacity: 0, x: -100 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{ duration: 0.5, type: easeInOut }}
//                                 className="text-[12px] text-error"
//                               >
//                                 {t("register.fieldRequier")}
//                               </motion.div>
//                             )}
//                           {!isPasswordMatch &&
//                             !(isFieldEmpty || isFieldEmpty === undefined) &&
//                             data.name === "repassword" && (
//                               <motion.div
//                                 initial={{ opacity: 0, x: -100 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{ duration: 0.5, type: easeInOut }}
//                                 className="text-[12px] text-error"
//                               >
//                                 {t("register.passwordMatch")}
//                               </motion.div>
//                             )}
//                         </>
//                       </div>
//                     )}
//                     {data.inputType === "select" && (
//                       <>
//                         <div name="serviceType" value={serviceSelected}>
//                           <div
//                             className={`flex justify-between items-center custom-select bg-[#FFFFFF] w-full relative text-mySlate px-[16px] py-[8px] border-myGray-400 border-[1px] outline-none rounded-[8px] ${
//                               isSubmitting && serviceSelected === ""
//                                 ? "border-error"
//                                 : "border-myGray-400"
//                             }`}
//                             onClick={() => setShowDrop(!showDrop)}
//                           >
//                             <p>
//                               {serviceSelected === ""
//                                 ? t("register.inputFields.serviceType")
//                                 : `${serviceSelected}`}
//                             </p>
//                             {serviceSelected !== "" && (
//                               <motion.div
//                                 className="place w-fit top-[-15px] text-mySlate z-[3] absolute"
//                                 initial={{ opacity: 0, y: 15 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.5, type: easeInOut }}
//                               >
//                                 <label>{data.placeHolder}</label>
//                                 <div className="h-[2px] w-[110%] bg-[#FFFFFF] mt-[-11px] ml-[-5%] z-[2] "></div>
//                               </motion.div>
//                             )}
//                             <img
//                               src={data.inputIcon}
//                               alt="dropdown"
//                               className="w-[18px] h-[18px]"
//                             />
//                           </div>
//                           {showDrop && (
//                             <ul className="bg-[#FFFFFF] opacity-100 flex flex-col gap-[1px] shadow-lg rounded-[8px]">
//                               {data.options.map((opt, index) => (
//                                 <li
//                                   key={index}
//                                   className={`text-[12px] text-myGray-600 px-[8px] py-[1px] cursor-pointer w-full selectService ${
//                                     opt === serviceSelected ? "select" : ""
//                                   }`}
//                                   onClick={handleServiceType}
//                                 >
//                                   {opt}
//                                 </li>
//                               ))}
//                             </ul>
//                           )}
//                           {isSubmitting && serviceSelected === "" && (
//                             <motion.div
//                               initial={{ opacity: 0, x: -100 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               transition={{ duration: 0.5, type: easeInOut }}
//                               className="text-[12px] text-error"
//                             >
//                               {t("register.fieldRequier")}
//                             </motion.div>
//                           )}
//                         </div>
//                       </>
//                     )}
//                     {data.name == "bank" && (
//                       <div className="flex flex-col gap-[32px]">
//                         <div
//                           className="flex gap-[5px] cursor-pointer transition-500"
//                           onClick={() => setShowBankDetails((prev) => !prev)}
//                         >
//                           <label className="cursor-pointer">
//                             {data.placeHolder}
//                           </label>
//                           <img
//                             src={data.inputIcon}
//                             alt="bank-details"
//                             className="w-[15px] h-[15px]"
//                           />
//                         </div>
//                         {showBankDetails &&
//                           data.details.map((inp, index) => (
//                             <div
//                               key={index}
//                               className={`flex bg-[#FFFFFF] relative border-solid text-mySlate border-[1px] rounded-[8px] px-[16px] py-[8px] ${
//                                 isFocus[inp.name]
//                                   ? "border-primary"
//                                   : "border-myGray-400"
//                               }`}
//                             >
//                               <input
//                                 className="w-full outline-none bg-transparent placeholder:text-mySlate"
//                                 name={inp.name}
//                                 placeholder={
//                                   isFocus[inp.name] ? "" : inp.placeHolder
//                                 }
//                                 onChange={handleInputChange}
//                                 onFocus={handleFocus}
//                                 onBlur={handleBlur}
//                               />
//                               {(isFocus[inp.name] || formData[inp.name]) && (
//                                 <motion.div
//                                   className="place w-fit top-[-15px] text-mySlate z-[3] absolute"
//                                   initial={{ opacity: 0, y: 15 }}
//                                   animate={{ opacity: 1, y: 0 }}
//                                   transition={{
//                                     duration: 0.5,
//                                     type: easeInOut,
//                                   }}
//                                 >
//                                   <label>{inp.placeHolder}</label>
//                                   <div className="h-[2px] w-[110%] bg-[#FFFFFF] mt-[-11px] ml-[-5%] z-[2] "></div>
//                                 </motion.div>
//                               )}
//                               <img
//                                 src={inp.inputIcon}
//                                 alt={inp.inputType}
//                                 className="w-[17px] h-[17px]"
//                               />
//                             </div>
//                           ))}
//                       </div>
//                     )}
//                   </>
//                 );
//               })}
//               <Button type="submit">Register as a Sevice Provider</Button>
//               <div
//                 onClick={changeUserType}
//                 className="text-[16px] cursor-pointer font-normal leading-[25.14px] w-full text-center text-secondary hover:text-success"
//               >
//                 {userType === "patient"
//                   ? t("register.toggleToProvider")
//                   : t("register.toggleToPatient")}
//               </div>
//             </form>

//           )}

//           }

//         </div>
//         <div className="w-[90%] lg:w-[45%] shrink-0 lg:ml-auto">
//           <ContainerImg docImg={docImg} action={t("register.action")} />
//         </div>
//         <div className="absolute z-[-100] translate-x-[-145px] translate-y-[-39px]">
//           <BackPolygon />
//         </div>
//         <div className="absolute z-[-100] translate-x-[-30px] translate-y-[400px]">
//           <BackPolygon />
//         </div>
//       </div>
//     </>
//   );
// };
// export default Register;
// import email from "./RegisterImage/Email.svg";
// import phone from "./RegisterImage/Phone.svg";
// import buisness from "./RegisterImage/Business.svg";
// import drop from "./RegisterImage/Dropdown.png";
// import bank from "./RegisterImage/Bank.svg";
// import card from "./RegisterImage/Card.svg";
// import code from "./RegisterImage/Code.svg";
// import showPass from "./RegisterImage/Vector.svg";
// import hidePassword from "./RegisterImage/icons8-eye-26.png";
// import { key, keys } from "localforage";
// import { object } from "yup";

import React from 'react'

const Register = () => {
  return (
    <div>
      
    </div>
  )
}

export default Register

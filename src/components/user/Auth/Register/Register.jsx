import { useState } from 'react';
import { RegisterData } from './dataRegister';
import BackPolygon from '../../../utilities/BackPolygon';
import docImg from "./RegisterImage/Intersect.svg";
import ContainerImg from '../ContainerImage/ContainerImg';
import { useTranslation } from 'react-i18next';
import { easeInOut, motion } from 'framer-motion'
import Typography from '../../../utilities/Typography';
import { Link } from 'react-router-dom';
import Button from '../../../utilities/Button';
import { Input } from '../../../utilities/Inputs';
const Register = () => {
  // State variables
  const [userType, setUserType] = useState("patient"); // User type, defaults to "patient"
  const [formData, setFormData] = useState({}); // Form data
  const [errors, setErrors] = useState({}); // Form data
  const [isEmpty, setIsEmpty] = useState({}); // Checks if form fields are empty
  const [isSubmitting, setIsSubmitting] = useState(false); // Indicates if the form is submitted
  const [isValid, setIsValid] = useState(true); // Indicates if the form is Valid
  const [isPasswordMatch, setIsPasswordMatch] = useState(true); // Checks if passwords match
  const [isFocus, setIsFocus] = useState({}); // Tracks input field focus
  const [showDrop, setShowDrop] = useState(false); // Shows/hides a dropdown
  const [serviceSelected, setServiceSelected] = useState(""); // Tracks selected service
  const [showBankDetails, setShowBankDetails] = useState(false); // Shows/hides bank details
  const [showPassword, setShowPassword] = useState(false); // Shows/hides password
  const [showRePass, setReShowPass] = useState(false); // Shows/hides re-entered password
  // Language translation
  const { t, i18n } = useTranslation("global");
  // Function to toggle between "patient" and "Service Provider"
  const changeUserType = () => {
    userType === "patient" ? setUserType("Service Provider") : setUserType("patient");
    setFormData({})
    setErrors({})
    setIsFormSubmitted(false)
  };
  console.log(isEmpty)
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
  const handleSetErrors=(name,msgError)=>{
    console.log(name)
    setErrors({
      ...errors,
      [name]: msgError,
    });
  }
  // Handle form input changes
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    if(event.target.value === "" )
    {
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
  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    // Check if the passwords match
    if (formData.password !== formData.repassword) {
      setIsPasswordMatch(false);
      console.log("Passwords do not match");
    } else {
      setIsPasswordMatch(true);
      const requiredFields = userType === "Service Provider" ? ["email", "password", "repassword", "number", "business", "serviceSelected"] : ["email", "password", "repassword"];
      const hasEmptyFields = requiredFields.some((fieldName) => !formData[fieldName]);
      if (!hasEmptyFields ) {
        setIsValid(true);
        sendFormDataToServer();
      }
      else {
        setIsValid(false);
        console.log("Some required fields are empty.");
      }
    }
  };
  // Send form data to the server
  const sendFormDataToServer = () => {
    console.log("Sending data to the server...");
    console.log(formData);
  };
  // Handle show/hide password
  const handleShowPass = (event) => {
    event.target.name === "password" ? setShowPassword(!showPassword) : event.target.alt === "repassword" ? setReShowPass(!showRePass) : null;
  };
  // Replace this function with your own implementation
  const registerData = RegisterData(showPassword, showRePass);
  return (
    <>
      <div className={`relative py-[70px] flex flex-col justify-between ${i18n.language === "ar" ? "lg:flex-row-reverse" : "lg:flex-row"} items-center lg:items-start gap-11 overflow-hidden`}>
        <div className='w-[90%] lg:w-[50%] p-6 md:p-[70px] pr-0 flex flex-col gap-14'>
          <div className='flex flex-col gap-8 text-center lg:text-start'>
            <Typography component="h1">{userType === "patient" ? t("register.headPatient") : t("register.headProvider")}</Typography>
            <Typography component="h4" >{t("register.loginQuest")}
              <Link to="/login" className='ms-1 text-success hover:text-secondary border-b-solid border-b-success hover:border-secondary border-b-[1px] cursor-pointer'>{t("register.loginLink")}</Link>
            </Typography>
          </div>
          {userType === "patient" &&
            <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
             
              {registerData.patient.map((data, key) => {
                return (
                  <Input
                  label={data.placeHolder}
                  name={data.name}
                  onChange={(e)=>handleInputChange(e)}
                  type={showPassword?"text" : data.inputType}
                  errorMsg={errors[data.name] ? errors[data.name] : ""}
                  icon={data.inputIcon}
                  value={formData[data.name]}
                  iconOnClick={(data.name==="password" || data.name==="repassword")?handleShowPass:null}
                />
                )
              })}
              <Button type="submit" disabled={!isValid}>
                Register as apatient
              </Button>
              <div onClick={changeUserType} className='text-base cursor-pointer font-normal w-full text-center text-secondary hover:text-success'>{userType === "patient" ? t("register.toggleToProvider") : t("register.toggleToPatient")}</div>
            </form>
          }
          {userType === "Service Provider" &&
            <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
              {registerData.provider.map((data, key) => {
                return (
                  <>
                    {(data.inputType !== "select" && data.name !== "bank") &&
                        <Input
                        label={data.placeHolder}
                        name={data.name}
                        onChange={(e)=>handleInputChange(e)}
                        type={data.inputType}
                        errorMsg={errors[data.name] ? errors[data.name] : ""}
                        icon={data.inputIcon}
                        value={formData[data.name]}
                      />}
                    {data.inputType === "select" &&
                      <>
                        <div name="serviceType" value={serviceSelected}>
                          <div className={`flex justify-between items-center custom-select bg-[#FFFFFF] w-full relative text-mySlate px-[16px] py-[8px] border-myGray-400 border-[1px] outline-none rounded-[8px] ${isSubmitting && (serviceSelected === "") ? 'border-error' : 'border-myGray-400'}`} onClick={() => setShowDrop(!showDrop)}>
                            <p >{serviceSelected === '' ? t("register.inputFields.serviceType") : `${serviceSelected}`}</p>
                            {(serviceSelected !== "") &&
                              <motion.div className='place w-fit top-[-15px] text-mySlate z-[3] absolute' initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, type: easeInOut }}>
                                <label>{data.placeHolder}</label>
                                <div className='h-[2px] w-[110%] bg-[#FFFFFF] mt-[-11px] ml-[-5%] z-[2] '></div>
                              </motion.div>}
                            <img src={data.inputIcon} alt="dropdown" className='w-[18px] h-[18px]' />
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
                          {isSubmitting && (serviceSelected === "") && <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, type: easeInOut }} className='text-[12px] text-error'>{t("register.fieldRequier")}</motion.div>}
                        </div>
                      </>}
                    {data.name == "bank" &&
                      <div className='flex flex-col gap-[32px]'>
                        <div className='flex gap-[5px] cursor-pointer transition-500' onClick={() => setShowBankDetails(prev => !prev)}>
                          <label className='cursor-pointer'>{data.placeHolder}</label>
                          <img src={data.inputIcon} alt="bank-details" className='w-[15px] h-[15px]' />
                        </div>
                        {showBankDetails && data.details.map((inp, index) => (
                            <Input
                            label={inp.placeHolder}
                            name={inp.name}
                            onChange={(e)=>handleInputChange(e)}
                            type={inp.inputType}
                            icon={inp.inputIcon}
                            value={formData[inp.name]}
                          />
                        ))}
                      </div>
                    }
                  </>
                )
              })}
              <Button type="submit">
                Register as a Sevice Provider
              </Button>
              <div onClick={changeUserType} className='text-[16px] cursor-pointer font-normal leading-[25.14px] w-full text-center text-secondary hover:text-success'>{userType === "patient" ? t("register.toggleToProvider") : t("register.toggleToPatient")}</div>
            </form>

          }
        </div>
        <div className='w-[90%] lg:w-[45%] shrink-0 lg:ml-auto'>
          <ContainerImg docImg={docImg} action={t('register.action')} />
        </div>
        <div className='absolute z-[-100] translate-x-[-145px] translate-y-[-39px]'>
          <BackPolygon />
        </div>
        <div className='absolute z-[-100] translate-x-[-30px] translate-y-[400px]'>
          <BackPolygon />
        </div>

      </div>
    </>
  );
};
export default Register;

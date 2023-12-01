import * as Yup from "yup";


export const service_provider_schema = Yup.object().shape({
  "inputs[1]": Yup.string().email("Invalid Email").required("Email is required"),
  "inputs[2]":Yup.string()
      .min(8, "Password Should be of minimum 8 characters length")
      .required("Password is required"),
  "inputs[3]": Yup.number().min(8,"Phone number shoud be longest").max(12,"hone number shoud be shortest")
 } );


 export const Change_password_schema = Yup.object().shape({

  "NewPassword":Yup.string()
      .min(8, "Change your Password, If your Forget password Click Here")
      .required("Password is required"),

 } );
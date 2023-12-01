import React, { useState } from "react";
import { useFormik } from "formik";

import Typography from "../../../utilities/Typography";
import Button from "../../../utilities/Button";
import { View_Icon } from "../../../utilities/Icons"
import { Change_password_schema } from "../../../utilities/Validation"
import ClickOutside from "../../../utilities/Click_Outsite"
import { DashInput } from "../../../utilities/Inputs"


const ChangePassword = React.forwardRef(({ open_change_password, set_open_change_password }, ref) => {
  const [showpass, setshowpass] = useState(false);
  const [showNewpass, setshowNewpass] = useState(false);
  const [showConfirm_Password, setConfirm_Password] = useState(false);





  const formik = useFormik({
    initialValues: {
      NewPassword: "",
    },
    validationSchema: Change_password_schema,
    validateOnBlur: true,
    validateOnChange: false,
    validateOnMount: false,
    onSubmit: values => {
      set_open_change_password(!ChangePassword)
      alert(JSON.stringify(values, null, 2));
    },
  });


  const toggle_Change_password_box = () => {
    set_open_change_password(!open_change_password)
  }


  return (
    <div className=''>
      <ClickOutside
        onClick={toggle_Change_password_box}
      >

        {/* If you click here inside this Nothing happens. */}
        {
          open_change_password && (
            <div ref={ref} className="flex flex-col gap-3 absolute right-0 bg-white min-w-[40%] min-h-full px-5 py-3 rounded-md shadow-md z-50">

              <Typography component={"h3"} >
                Change Password
              </Typography>
              <Typography component={"h4"}>
                Change your Password, If your Forget password Click Here
              </Typography>
              {/* inputs */}



              <form onSubmit={formik.handleSubmit} className="relative space-y-5 ">
                <div className=" w-full ">
                  <DashInput
                    type={`${showpass ? "text" : "password"}`}
                    name="password"
                    // value should be from back end 
                    value={formik.values}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id={"password"}
                    // placeholder={"Current Password "}
                    icon={<View_Icon />}
                    errorMsg=""
                    className={`placeholder:text-mySlate placeholder:focus:opacity-0`}
                  // className={` py-[6px] px-[16px] w-full border-[1px]  focus-within:border-primary placeholder:text-mySlate  rounded-md transition-all duration-100 ease-in-out      rounded-s-md outline-0 placeholder:focus:opacity-0`}
                  />



                </div>


                <div className=" w-full">
                  <DashInput
                    type={`${showNewpass ? "text" : "password"}`}
                    name="NewPassword"
                    value={formik.values.NewPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id={"New_Password"}
                    // placeholder={"New Password "}
                    icon={<View_Icon />}
                    errorMsg={
                      formik.errors.NewPassword && formik.touched.NewPassword
                        ? formik.errors.NewPassword
                        : ""
                    }
                    className={`placeholder:text-mySlate placeholder:focus:opacity-0`}
                  // className={`${formik.errors.NewPassword && formik.touched.NewPassword && ("border-error")} py-[6px] px-[16px] w-full border-[1px]  focus-within:border-primary placeholder:text-mySlate  rounded-md transition-all duration-100 ease-in-out      rounded-s-md outline-0 placeholder:focus:opacity-0`}
                  />


                </div>
                {/* {formik.errors.NewPassword && formik.touched.NewPassword && (
                <div className="text-xs text-error">{formik.errors.NewPassword}</div>
              )} */}
                <div className="w-fu  ">
                  <DashInput
                    type={`${showConfirm_Password ? "text" : "password"}`}
                    name="Confirm_Password"
                    //  value={input.value}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id="Confirm_Password"
                    // placeholder={"Confirm Password "}
                    icon={<View_Icon />}
                    errorMsg=""
                    className={`placeholder:text-mySlate placeholder:focus:opacity-0`}

                  />


                </div>


                <Button type="submit" fullWidth>
                  Change Password
                </Button>


              </form>
            </div>
          )
        }

      </ClickOutside>








    </div>


  );
});
import PropTypes from "prop-types";

ChangePassword.propTypes = {
  open_change_password: PropTypes.bool,
  set_open_change_password: PropTypes.func,
};
export default ChangePassword


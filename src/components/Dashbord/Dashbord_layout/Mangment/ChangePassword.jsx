import React, { useState } from "react";
import { useFormik } from "formik";

import Typography from "../../../utilities/Typography";
import Button from "../../../utilities/Button";
import { View_Icon } from "../../../utilities/Icons"
import { Change_password_schema } from "../../../utilities/Validation"
import ClickOutside from "../../../utilities/Click_Outsite"
import { DashInput } from "../../../utilities/Inputs"
import eye from "../../../../assets/icons/eyepass.svg"
import iconShow from "../../../../assets/icons/View.svg"



const ChangePassword = React.forwardRef(({ open_change_password, set_open_change_password }, ref) => {
  const [showpass, setshowpass] = useState(false);
  // const [showNewpass, setshowNewpass] = useState(false);
  // const [showConfirmpass, setshowConfirmpass] = useState(false);

  const [showNewpass, setshowNewpass] = useState(false);
  const [showConfirm_Password, setConfirm_Password] = useState(false);


  //show password
  function ShowPassword() {
    setshowpass(!showpass);
  }
  let initial = {
    password: "current password",
    NewPassword: "New Password",
    Confirm_Password: "Confirm Password",
  }

  const formik = useFormik({
    initialValues: {
      NewPassword: initial.NewPassword,
      password: initial.password,
      Confirm_Password: initial.Confirm_Password

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
            <div ref={ref} className="flex flex-col gap-3 absolute ltr:right-0 rtl:left-0 bg-white min-w-[40%] min-h-full px-5 py-3 rounded-md shadow-md z-50">

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
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id={"password"}


                    icon={showpass ? eye : iconShow}
                    iconOnClick={()=>{setshowpass(!showpass)}}
                    errorMsg=""
                    className={`placeholder:text-mySlate placeholder:focus:opacity-0`}

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
                    icon={showNewpass ? eye : iconShow}
                    iconOnClick={() => { setshowNewpass(!showNewpass) }}

                    errorMsg={
                      formik.errors.NewPassword && formik.touched.NewPassword
                        ? formik.errors.NewPassword
                        : ""
                    }
                    className={`placeholder:text-mySlate placeholder:focus:opacity-0`}

                  />


                </div>

                <div className="w-fu  ">
                  <DashInput
                    type={`${showConfirm_Password ? "text" : "password"}`}
                    name="Confirm_Password"
                    value={formik.values.Confirm_Password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id="Confirm_Password"
                    icon={showConfirm_Password ? eye : iconShow}
                    iconOnClick={() => { setConfirm_Password(!showConfirm_Password) }}
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


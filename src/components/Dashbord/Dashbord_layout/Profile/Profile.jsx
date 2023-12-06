import camera from "./PeofileImages/Camera.svg";

import { DashInput } from "../../../utilities/Inputs";

import Typography from "../../../utilities/Typography";

import Person from "../../../../assets/icons/Person.svg";
import View from "../../../../assets/icons/View.svg";
import Email from "../../../../assets/icons/Email.svg";

import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import React from "react";
import ClickOutside from "../../../utilities/Click_Outsite";
const validationSchema = Yup.object().shape({
  admin: Yup.string(),
  email: Yup.string().email("Invalid email address").required("Required"),
  fakePass: Yup.string(),
  img: Yup.mixed()
    .nullable()
    .test((value) => !value || (value && value.type.startsWith("image/"))),
});
const Profile = React.forwardRef(
  ({ email, image, role, handleProfile }, ref) => {
    const { t } = useTranslation("global");
    const adminUser = [{ role: "admin user ", email: "rawanahd23@gmail.com" }];
    const formik = useFormik({
      initialValues: {
        admin: adminUser[0].role || "",
        email: adminUser[0].email || "",
        fakePass: "********",
        img: "",
      },
      // enableReinitialize: true, // for Update Page
      validationSchema: validationSchema,
      validateOnBlur: true,
      validateOnChange: true,
      validateOnMount: false,
      onSubmit: (values) => {
        console.log("Form submitted with values:", values.img.type);
      },
    });
    useEffect(() => {
      if (!formik.values.admin) {
        formik.setValues({
          ...formik.values,
          admin: adminUser[0].role,
          email: adminUser[0].email,
        });
      }
    }, [formik.values.admin, formik.values.email, adminUser]);

    return (
      <ClickOutside onClick={handleProfile} exceptionRef={ref}>
        <div
          ref={ref}
          className="absolute top-24 end-2 sm:end-7 w-[15rem] sm:w-[24rem] bg-white p-5 z-20 rounded"
        >
          <div className=" flex flex-col gap-6">
            <div className=" relative flex items-center justify-center flex-col gap-2">
              <div className="relative ">
                <img className="w-20 sm:w-32" src={image} alt={""} />
                <img
                  className="absolute bottom-3 ltr:start-24 rtl:end-0 "
                  src={camera}
                  alt=""
                />
              </div>
              <div>
                <Typography className={"text-xs sm:text-lg"} component={"p"}>
                  {email}
                </Typography>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <DashInput
                name={"admin"}
                value={formik.values.admin}
                icon={Person}
                isDisabled={true}
              />
              <DashInput
                name={"email"}
                icon={Email}
                value={formik.values.email}
                isDisabled={true}
              />
              <DashInput
                name={"fakePass"}
                value={formik.values.fakePass}
                isDisabled={true}
                icon={View}
              />
            </div>
          </div>
          <Link>
            <Typography
              className={"ltr:text-end rtl:text-start pt-2 text-sm sm:text-lg"}
              component={"secondary-text"}
            >
              {t("profile")}
            </Typography>
          </Link>
        </div>
      </ClickOutside>
    );
  }
);
export default Profile;

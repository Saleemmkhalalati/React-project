//image
import email from "../../../assets/icons/Email.svg";
import Person from "../../../assets/icons/Vector.svg";
import pass from "../../../assets/icons/View.svg";
import upload from "./Sitting_image/Vector.svg";
import done from "./Sitting_image/icons8-ok.svg";
// import { Person } from "../../utilities/Icons";
//
import Content from "../Dashbord_layout/Content/Content";
import Typography from "../../utilities/Typography";
import { DashInput } from "../../utilities/Inputs";
import { InputFile } from "../../utilities/Inputs";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect } from "react";
const validationSchema = Yup.object().shape({
  admin: Yup.string(),
  email: Yup.string().email("Invalid email address").required("Required"),
  fakePass: Yup.string(),
  img: Yup.mixed()
    .nullable()
    .test((value) => !value || (value && value.type.startsWith("image/"))),
});

import { Link } from "react-router-dom";

const Settings = () => {
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
    <Content path={"Setting"}>
      <div className="bg-white mt-3 px-7 pb-24 flex flex-col gap-10 ">
        <div className="flex flex-col gap-4 pt-10">
          <Typography component={"h3"}>{t("sitting.0")}</Typography>
          <Typography component={"h5"}>{t("sitting.1")}</Typography>
        </div>
        <form
          className="flex flex-col gap-4 sm:w-3/4 text-center sm:ltr:text-left sm:rtl:text-right "
          onSubmit={formik.handleSubmit}
        >
          <DashInput
            name={"admin"}
            value={formik.values.admin}
            icon={Person}
            isDisabled={true}
          />
          <DashInput
            name={"email"}
            icon={email}
            value={formik.values.email}
            onChange={formik.handleChange}
            errorMsg={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""
            }
            onBlur={formik.handleBlur}
            isDisabled={false}
          />
          <DashInput
            name={"fakePass"}
            value={formik.values.fakePass}
            isDisabled={true}
            icon={pass}
          />
          <Typography component={"h5"}>
            {t("sitting.2")}
            <Link to={""} className="text-secondary hover:text-success  ">
              {t("sitting.3")}
            </Link>
          </Typography>

          <InputFile
            name={"img"}
            type={"file"}
            value={formik.values.img}
            onChange={(e) => formik.setFieldValue("img", e.target.files[0])}
            label={
              typeof formik.values.img.type === "string" &&
              formik.values.img.type.startsWith("image/") ? (
                t("sitting.6")
              ) : (
                <Typography component={"h5"}>{t("sitting.4")}</Typography>
              )
            }
            className={
              "h-24 sm:h-48 flex flex-col-reverse items-center justify-center gap-4 "
            }
            icon={
              typeof formik.values.img.type === "string" &&
              formik.values.img.type.startsWith("image/")
                ? done
                : upload
            }
            classNameIcon={"w-[3rem]"}
            id={"img"}
            errorMsg={formik.errors.img ? formik.errors.img : ""}
            hasValueTrue={
              typeof formik.values.img.type === "string" &&
              formik.values.img.type.startsWith("image/")
            }
          />
          <button
            className=" text-secondary hover:text-success text-end text-sm"
            type="submit"
          >
            {t("sitting.5")}
          </button>
        </form>
      </div>
    </Content>
  );
};

export default Settings;

import "./Login.css";
import loginImage from "../Login/logain-image/Intersect.svg";
import emailIcon from "../../../../assets/icons/Email.svg";
import view from "../../../../assets/icons/View.svg";
import eye from "../../../../assets/icons/eyepass.svg";
import * as Yup from "yup";
import { Formik, useFormik } from "formik";
import { Link } from "react-router-dom";
import { useState } from "react";
import AuthDesign from "../AuthDesign/AuthDesign";
import Typography from "../../../utilities/Typography";
import { Input } from "../../../utilities/Inputs";
import Button from "../../../utilities/Button";
import { useTranslation } from "react-i18next";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password Should be of minimum 8 characters length")
    .required("Password is required"),
});
export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: false,
    onSubmit: (values) => {
      formik.handleReset();
    },
  });
  const { t } = useTranslation("global");

  const [showpass, setshowpass] = useState(false);

  //show password
  function ShowPassword() {
    setshowpass(!showpass);
  }

  return (
    <div className="max-w-[1750px] mx-auto my-0 h-screen max-[1100px]:overflow-y-auto max-[1750px]:overflow-hidden">
      <div className="relative  ltr:left-0  rtl:right-0 z-[-1]">
        <div className="absolute rotate-45 w-80 h-80 top-10 sm:top-24 bg-sky-50 rounded-3xl -start-14"></div>
        <div className="absolute rotate-45 w-80 h-80 top-96 sm:top-[29rem] bg-sky-50 rounded-3xl start-28"></div>
        <div></div>
      </div>
      <div className="max-w-[1750px] mx-auto my-0 flex justify-between flex-wrap">
        <div className="relative flex flex-1 flex-col gap-8 py-[12%] p-[5%]">
          <Typography component={"h1"}>{t("login.title")}</Typography>
          <div className="min-w-[300px] ">
            <Typography component={"h4"}>
              {t("login.p")}
              <Link
                className="text-success text-xs md:text-base border-b-[1px] border-success hover:text-secondary hover:border-secondary"
                to={"/register"}
              >
                {t("login.create")}
              </Link>
            </Typography>
          </div>
          <form onSubmit={formik.handleSubmit} className="relative space-y-5 ">
            <div>
              <Input
                type="text"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                label={t("login.inputFields.email")}
                icon={emailIcon}
                errorMsg={
                  formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : null
                }
              />
            </div>
            <div>
              <Input
                type={showpass ? "text" : "password"}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                label={t("login.inputFields.password")}
                icon={showpass ? eye : view}
                iconOnClick={ShowPassword}
                errorMsg={
                  formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : null
                }
              />

              <div className="text-end mb-[-5px]">
                <Link
                  className="text-sm texe-mySlate hover:text-secondary transition hover:animate-bounce"
                  to={"/forget-password"}
                >
                  {t("login.forget")}
                </Link>
              </div>
            </div>
            <Button type="submit" disabled={!formik.isValid} fullWidth>
              {t("login.button")}
            </Button>
          </form>
        </div>
        <AuthDesign
          img={loginImage}
          title={t("login.TitleImg")}
          paragraph={t("login.resetPar")}
        />
      </div>
    </div>
  );
}

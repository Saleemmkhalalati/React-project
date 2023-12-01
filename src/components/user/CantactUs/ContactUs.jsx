import { useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Button from "../../utilities/Button";
import { FInput, Textarea } from "../../utilities/Inputs";
import Typography from "../../utilities/Typography";
import { useTranslation } from "react-i18next";
import Polygon from "../../utilities/Polygon";
import Container from "../../utilities/Container";
// assets
import characterImage from "./img/Intersect.svg";
import personIcon from "../../../assets/icons/Person.svg";
import emailIcon from "../../../assets/icons/Email.svg";
const validationSchema = Yup.object().shape({
  fullname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  msg: Yup.string().required("Required"),
});
export default function ContactUs() {
  const { t } = useTranslation("global");
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      msg: "",
    },
    // enableReinitialize: true, // for Update Page
    validationSchema: validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: false,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
      formik.handleReset();
    },
  });
  useEffect(() => {
    console.log(formik);
  }, [formik]);
  return (
    <Container className={"  max-[1750px]:overflow-hidden"}>
      <div className="p-5 min-h-[100vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
          <div className="hidden lg:block lg:grid-cols-7 lg:mt-72 xl:mt-80">
            <div className="relative -start-7 -top-40">
              <Polygon
                color="gradient"
                className={"absolute w-[22rem] h-[22rem]"}
              >
                <Polygon
                  color="white"
                  className={"absolute w-[21.5rem] h-[21.5rem] top-1 start-1"}
                ></Polygon>
              </Polygon>
            </div>
            <div className="relative start-20 -top-36 xl:-top-44">
              <Polygon
                color="gray"
                className={"absolute xl:w-96 xl:h-96 lg:w-80 lg:h-80 "}
              >
                <img
                  src={characterImage}
                  alt="img"
                  className="absolute z-10 w-[400px] h-[400px]ltr:top-9 ltr:start-16  rtl:start-3 rtl:top-10 ltr:-rotate-45 rtl:rotate-45"
                />
              </Polygon>
            </div>
          </div>
          <div className="lg:grid-cols-7">
            <div className="relative">
              <div className="absolute end-0 top-8 w-[400px] h-[400px] origin-center rounded-2xl ltr:rotate-45 rtl:-rotate-45 bg-primary opacity-5"></div>
              <div className="mt-8 flex flex-col gap-y-11 w-full sm:pe-20 lg:pe-10 xl:pe-20">
                <Typography component={"h1"}>{t("contact.0")}</Typography>
                <Typography component={"p"}>{t("contact.1")}</Typography>
                <form
                  onSubmit={formik.handleSubmit}
                  className="flex flex-col gap-y-9"
                >
                  <FInput
                    icon={personIcon}
                    type="text"
                    label={t("contact.2")}
                    name={"fullname"}
                    value={formik.values.fullname}
                    errorMsg={
                      formik.errors.fullname && formik.touched.fullname
                        ? formik.errors.fullname
                        : ""
                    }
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  <FInput
                    icon={emailIcon}
                    type="email"
                    label={t("contact.3")}
                    name={"email"}
                    value={formik.values.email}
                    errorMsg={
                      formik.errors.email && formik.touched.email
                        ? formik.errors.email
                        : ""
                    }
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  <Textarea
                    rows={7}
                    label={t("contact.4")}
                    name={"msg"}
                    value={formik.values.msg}
                    errorMsg={formik.touched.msg ? formik.errors.msg : ""}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  <Button
                    type="submit"
                    disabled={formik.isSubmitting || !formik.isValid}
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

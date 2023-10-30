import { useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Button from "../../utilities/Button";
import { FInput, Textarea } from "../../utilities/Inputs";
import Typography from "../../utilities/Typography";
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
    <div className="p-5 min-h-[100vh] overflow-x-clip">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
        <div className="hidden lg:block lg:grid-cols-7 lg:mt-72 xl:mt-80">
          <div className="relative start-16 origin-center ltr:rotate-45 rtl:-rotate-45">
            <div className="absolute w-[20.3rem] h-[20.3rem] rounded-2xl bg-gradient-to-r from-primary to-secondary">
              <div className="absolute z-10 w-80 h-80 rounded-2xl top-[2px] start-[2px] bg-white"></div>
            </div>
          </div>
          <div className="relative lg:start-40 xl:start-48 -top-8 origin-center ltr:rotate-45 rtl:-rotate-45">
            <div className="absolute w-[400px] h-[400px] rounded-2xl bg-myGray-100 shadow-md overflow-hidden">
              <img
                src={characterImage}
                alt="img"
                className="absolute z-10 w-[400px] h-[400px] ltr:-rotate-45 rtl:rotate-45 ltr:top-9 ltr:start-16 rtl:top-16 rtl:start-9"
              />
            </div>
          </div>
        </div>
        <div className="lg:grid-cols-7">
          <div className="relative">
            <div className="absolute end-0 top-8 w-[400px] h-[400px] origin-center rounded-2xl ltr:rotate-45 rtl:-rotate-45 bg-primary opacity-5"></div>
            <div className="mt-8 flex flex-col gap-y-11 w-full sm:pe-20 lg:pe-10 xl:pe-20">
              <Typography component={"h1"}>Contact US</Typography>
              <Typography component={"p"}>
                Feel Free to contact us, If you need some help.
              </Typography>
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-y-9"
              >
                <FInput
                  icon={personIcon}
                  type="text"
                  label="Full Name"
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
                  label="Email Address"
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
                  label="Message"
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
  );
}

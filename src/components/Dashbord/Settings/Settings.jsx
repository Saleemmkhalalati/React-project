import Content from "../Dashbord_layout/Content/Content";
import Typography from "../../utilities/Typography";
import { DashInput } from "../../utilities/Inputs";
import * as Yup from "yup";
import { useFormik } from "formik";
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
});
//image
import email from "../../../assets/icons/Email.svg";
import { useEffect } from "react";

const Settings = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
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
    if (formik.values.email) return;
    formik.setFieldValue("email", "rawanahd23@gmail.com");
    console.log(formik);
  }, [formik]);
  return (
    <Content path={"Setting"}>
      <div className="bg-white px-7">
        <div className="flex flex-col gap-4 pt-10">
          <Typography component={"h3"}>Personal Information</Typography>
          <Typography component={"h5"}>
            Update your photo and personal information here
          </Typography>
        </div>
        <DashInput
          name={"email"}
          icon={email}
          value={formik.values.email}
          onChange={formik.handleChange}
          errorMsg={
            formik.errors.email && formik.touched.email
              ? formik.errors.email
              : ""
          }
          onBlur={formik.handleBlur}
        />
        {/* <Button type="submit" disabled={formik.isSubmitting || !formik.isValid}>
          Send Message
        </Button> */}
      </div>
    </Content>
  );
};

export default Settings;

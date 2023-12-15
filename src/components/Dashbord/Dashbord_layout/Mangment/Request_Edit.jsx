
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Typography from "../../../utilities/Typography";
import Button from "../../../utilities/Button";
import ClickOutside from "../../../utilities/Click_Outsite";
import { Textarea } from "../../../utilities/Inputs"
import { Formik,useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
const validationSchema = Yup.object().shape({
    message: Yup.string().required("Required"),
  });


const Request_Edit = React.forwardRef(({ request_edit, set_request_edit }, ref) => {
    const { t } = useTranslation("global");
    const formik = useFormik({
        initialValues: {
          message: "",
    
        },
        // enableReinitialize: true, // for Update Page
        validationSchema: validationSchema,
        validateOnBlur: true,
        validateOnChange: true,
        validateOnMount: false,
        onSubmit: (values) => {
          console.log("Form submitted with values:", values);
        },
      });
      useEffect(() => {
        console.log(formik);
      }, [formik]);

  const toggle_Request_edit = () => {
    set_request_edit(!request_edit)
  }
  return (
    <div className=''>
      <ClickOutside
        onClick={toggle_Request_edit}
       
      >
        {request_edit && (
            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5 absolute ltr:right-0 rtl:left-0 bg-white w-[40%] px-5 py-3 rounded-md shadow-md z-50 min-h-full">
            <Typography component = "h3" className="mt-5">{t("request_edit.0")}  </Typography>
            <Typography component="h5" className="opacity-[50%]">{t("request_edit.1")} </Typography>
            <Typography component="h5" className="opacity-[80%] text-black"> <p className="text-primary opacity-[80%]">{t("request_edit.2")}</p>{t("request_edit.3")} </Typography>
            <Typography component="h5" className="opacity-[80%] text-black"> <p className="text-primary opacity-[80%]">{t("request_edit.4")}</p> {t("request_edit.5")}</Typography>
            <Textarea
                    rows={7}
                    name={"msg"}
                    value={formik.values.msg}
                    errorMsg={formik.touched.msg ? formik.errors.msg : ""}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />

            <Button type="submit" fullWidth>
            {t("request_edit.6")} 
            </Button>
          </form>
        )}

      </ClickOutside>

    </div>
  );
});

Request_Edit.propTypes = {
  view_content: PropTypes.object.isRequired,
  view_user: PropTypes.bool,
  set_View_user: PropTypes.func,
  open_change_password: PropTypes.bool,
  set_open_change_password: PropTypes.func,
};
export default Request_Edit




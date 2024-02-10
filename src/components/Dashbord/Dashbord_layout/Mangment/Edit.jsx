import React, { useCallback, useState } from "react";
import { useFormik } from "formik";
import Typography from "../../../utilities/Typography";
import Button from "../../../utilities/Button";
import { DashInput, InputFile } from "../../../utilities/Inputs";
import eye from "../../../../assets/icons/eyepass.svg";
import iconShow from "../../../../assets/icons/View.svg";
import { useTranslation } from "react-i18next";
import { useDropzone } from "react-dropzone";
import * as Yup from "yup";
import upload from "../../../../assets/icons/uplode.svg";
import done from "../../../../assets/icons/done_uplode.svg";

const Edit = React.forwardRef(
  (
    {
      Edit_content,
      validation_schema,
      Edit_user,
      set_Edit_user,
      other_section,
      set_other_section,
      open_change_password,
      set_open_change_password,
      Uplode_imge
    },
    ref
  ) => {
    const onDrop = useCallback((acceptedFiles) => {
      formik.setFieldValue("img", acceptedFiles[0]);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
    });
    const [showpass, setshowpass] = useState(false);
    const [EditDropdown, setEditDropdown] = useState(null);
  const { t } = useTranslation("global");

    const formik = useFormik({
      initialValues: {
        inputs: [""],
      },
      validationSchema: validation_schema,
      validateOnBlur: true,
      validateOnChange: false,
      validateOnMount: false,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    console.log(formik.values.inputs[0]);
    const optionsDropdown = [
      { name: "active", type: "" },
      { name: "Non Active", type: "" },
      { name: "Disable", type: "view" },
    ];
    const handleInputChange = (index, event) => {
      const { name, value } = event.target;
      formik.setFieldValue(`inputs[${index}]`, value);
    };
    const hangdleInputBluer = (index, event) => {
      formik.setFieldTouched(`inputs[${index}]`, true);
    };
    //show password
    function ShowPassword() {
      setshowpass(!showpass);
    }
    const getInputClassName = (index) => {
      return formik.touched.inputs?.[index] && formik.errors.inputs?.[index]
        ? "border-error"
        : "border-myGray-400";
    };
    const handleChangeDropdown = (selected) => {
      setEditDropdown(selected);
    };
    const toggle_Edit_user = () => {
      set_Edit_user(!Edit_user);
    };
    return (
      <div className="">
        <ClickOutside onClick={toggle_Edit_user}>
          {Edit_user && (
            <div
              ref={ref}
              className=" flex flex-col gap-3 absolute ltr:right-0 rtl:left-0 bg-white min-w-[45%] px-7 py-10 rounded-md shadow-md z-50 min-h-full"
            >
              <Typography component={"h3"}>{Edit_content.title}</Typography>
              <Typography component={"h5"} className="mb-8">
                {Edit_content.descrption}
              </Typography>
              {/* inputs */}

              <form
                onSubmit={formik.handleSubmit}
                className="relative space-y-5 "
              >
                {Edit_content.inputs.map((input, index) => {
                  return (
                    <>
                      <div
                        className="flex justify-between items-center "
                        key={index}
                      >
                        {input.input_type === "dropdown" ? (
                          <div className="w-full flex items-center justify-between   ease-in-out  border-[1px] rounded-md text-mySlate  border-myGray-400">
                            <Dropdown
                              options={optionsDropdown}
                              value={EditDropdown}
                              onChange={handleChangeDropdown}
                              // onBlur={formik.handleBlur("dropdownValue")}
                              className=" active:border-primary focus-within:border-primary duration-150 w-full"
                              // icon={arrowIcon}
                              showSlected={true}
                              ulClassname={"w-full "}
                            />
                            <img src={input.img} className="relative end-4" />
                          </div>
                        ) : (
                          <div className=" w-full" key={index}>
                            <DashInput
                              type={input.type}
                              name={`inputs[${index}]`}
                              onChange={(event) =>
                                handleInputChange(index, event)
                              }
                              onBlur={(event) =>
                                hangdleInputBluer(index, event)
                              }
                              autoComplete="off"
                              id={input.name}
                              placeholder={input.text}
                              icon={
                                input.type === "password"
                                  ? showpass
                                    ? eye
                                    : iconShow
                                  : input.img
                              }
                              iconOnClick={ShowPassword}
                              isDisabled={false}
                              errorMsg={
                                formik.errors.inputs &&
                                formik.errors.inputs[index] &&
                                formik.touched.inputs[index]
                                  ? formik.errors.inputs[index]
                                  : ""
                              }
                              className={`placeholder:text-mySlate placeholder:focus:opacity-0`}
                            />
                          </div>
                        )}
                      </div>

                      {input.des && (
                        <Typography component={"h5"}>
                          {input.des.text}{" "}
                          <span
                            className="cursor-pointer text-primary hover:text-success"
                            onClick={() => {
                              set_other_section(!other_section);
                            }}
                          >
                            {input.des.click_here}
                          </span>
                        </Typography>
                      )}
                    </>
                  );
                })}

                {Edit_content.other && (
                  <div className="flex items-center gap-2">
                    <img src={Edit_content.other.img} alt="" />
                    <Typography className={"!text-error cursor-pointer"}>
                      {Edit_content.other.des}
                    </Typography>
                  </div>
                )}
                {
                  Uplode_imge && (

          








                    <InputFile
                    name={"img"}
                    type={"file"}
                    value={formik.values.img}
                    onChange={(e) => formik.setFieldValue("img", e.target.files[0])}
                    label={
                      formik.values.img && !formik.errors.img ? (
                        t("sitting.6")
                      ) : (
                        <Typography component={"h5"}>{t("sitting.4")}</Typography>
                      )
                    }
                    className={
                      "h-28  flex flex-col-reverse items-center justify-center gap-4 "
                    }
                    icon={formik.values.img && !formik.errors.img ? done : upload}
                    classNameIcon={"w-[3rem] "}
                    id={"img"}
                    errorMsg={formik.errors.img ? formik.errors.img : ""}
                    hasValueTrue={formik.values.img && !formik.errors.img}
                    isInvalidType={formik.errors.img ? formik.errors.img : ""}
                    getRootProps={{ ...getRootProps() }}
                    getInputProps={{ ...getInputProps() }}
                    isDragActive={isDragActive}
                  />
                  )
                }

                <Button type="submit" fullWidth>
                  {Edit_content.button_content}
                </Button>
              </form>
            </div>
          )}

          {/* If you click here inside this Nothing happens. */}
        </ClickOutside>
      </div>
    );
  }
);
import PropTypes from "prop-types";
import Dropdown from "../../../utilities/Dropdown";
import ClickOutside from "../../../utilities/Click_Outsite";

Edit.propTypes = {
  Edit_content: PropTypes.object.isRequired,
  validation_schema: PropTypes.any,
  Edit_user: PropTypes.bool,
  set_Edit_user: PropTypes.func,
  open_change_password: PropTypes.bool,
  set_open_change_password: PropTypes.func,
  Uplode_imge:PropTypes.bool
};
export default Edit;

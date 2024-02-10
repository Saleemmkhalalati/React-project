import React, { useState, useCallback } from "react";
import { useFormik } from "formik";
import Typography from "../../../utilities/Typography";
import Button from "../../../utilities/Button";
import { DashInput, InputFile } from "../../../utilities/Inputs";
import eye from "../../../../assets/icons/eyepass.svg";
import iconShow from "../../../../assets/icons/View.svg";
import { useDropzone } from "react-dropzone";
import * as Yup from "yup";
import upload from "../../../../assets/icons/uplode.svg";
import done from "../../../../assets/icons/done_uplode.svg";

const Add_product = React.forwardRef(
  (
    {
      Add_Product_content,
      validation_schema,
      addProduct_active,
      set_addProduct_active,
      discount = { discount },
      setDiscount = { setDiscount },
    },
    ref
  ) => {
    const [addProductDropdown, setaddProductDropdown] = useState(null);
    const onDrop = useCallback((acceptedFiles) => {
      formik.setFieldValue("img", acceptedFiles[0]);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
    });
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

    const optionsDropdown = [
      { name: "Medical Treatment", type: "" },
      { name: "Orthodontics", type: "" },
      { name: "Dental Repair", type: "view" },
    ];
    const handleInputChange = (index, event) => {
      const { name, value } = event.target;
      formik.setFieldValue(`inputs[${index}]`, value);
    };
    const hangdleInputBluer = (index, event) => {
      formik.setFieldTouched(`inputs[${index}]`, true);
    };

    const handleChangeDropdown = (selected) => {
      setaddProductDropdown(selected);
    };
    const toggle_Add_Products = () => {
      set_addProduct_active(!addProduct_active);
    };
    return (
      <div className="">
        <ClickOutside onClick={toggle_Add_Products}>
          {addProduct_active && (
            <div
              ref={ref}
              className="w-[17rem] sm:w-[22rem] md:w-[36rem] pb-5 rounded px-5 py-5 md:px-8 flex flex-col gap-3 absolute ltr:right-0 rtl:left-0 bg-white min-w-[45%]  shadow-md z-50 min-h-full"
            >
              <Typography component={"h3"}>
                {Add_Product_content.title}
              </Typography>
              <Typography component={"h5"} className="mb-5">
                {Add_Product_content.descrption}
              </Typography>
              {/* inputs */}

              <form
                onSubmit={formik.handleSubmit}
                className="relative space-y-5 "
              >
                {Add_Product_content.inputs.map((input, index) => {
                  return (
                    <>
                      <div
                        className="flex justify-between items-center "
                        key={index}
                      >
                        {input.input_type === "dropdown" ? (
                          <div className="w-full flex items-center justify-between   h-[2.3rem] ease-in-out  border-[1px] rounded-md text-mySlate  border-myGray-400">
                            <span className=" ps-2 absolute h-[2rem]">
                              {input.text}
                            </span>

                            <Dropdown
                              options={optionsDropdown}
                              value={addProductDropdown}
                              onChange={handleChangeDropdown}
                              // onBlur={formik.handleBlur("dropdownValue")}
                              className=" active:border-primary focus-within:border-primary duration-150 w-full"
                              // icon={arrowIcon}
                              showSlected={false}
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
                              icon={input.img}
                              // icon={input.type === "password" ? (showpass ? eye : iconShow) : input.img}
                              // iconOnClick={ShowPassword}
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
                              setDiscount(!discount);
                              console.log("jj")
                            }}
                          >
                            {input.des.click_here}
                          </span>
                        </Typography>
                      )}
                    </>
                  );
                })}

                {Add_Product_content.other && (
                  <div className="flex items-center gap-2">
                    <img src={Add_Product_content.other.img} alt="" />
                    <Typography className={"!text-error cursor-pointer"}>
                      {Add_Product_content.other.des}
                    </Typography>
                  </div>
                )}

                <InputFile
                  name={"img"}
                  type={"file"}
                  value={formik.values.img}
                  onChange={(e) =>
                    formik.setFieldValue("img", e.target.files[0])
                  }
                  label={
                    formik.values.img && !formik.errors.img ? (
                      "Click to upload two photos product or drag"
                    ) : (
                      <Typography component={"h5"}>
                        Click to upload two photos product or drag
                      </Typography>
                    )
                  }
                  className={
                    "h-24 sm:h-48 flex flex-col-reverse items-center justify-center gap-4 "
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

                <Button type="submit" fullWidth>
                  {Add_Product_content.button_content}
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

Add_product.propTypes = {
  Add_Product_content: PropTypes.object.isRequired,
  validation_schema: PropTypes.any,
  Edit_user: PropTypes.bool,
  set_Edit_user: PropTypes.fun,
};
export default Add_product;

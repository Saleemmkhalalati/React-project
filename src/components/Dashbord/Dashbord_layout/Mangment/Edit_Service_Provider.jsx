import { DashInput, InputFile } from "../../../utilities/Inputs";
import { useFormik } from "formik";
import { useDropzone } from "react-dropzone";
import { useTranslation } from "react-i18next";
import React, { useState, useCallback } from "react";
import Typography from "../../../utilities/Typography";
import Dropdown from "../../../utilities/Dropdown";
import arrowIcon from "../../../../assets/icons/Wrench.svg";
import Business from "../../../../assets/icons/business-Dahshboard.svg";
import file from "../../../../assets/icons/File.svg";
import priceIcon from "../../../../assets/icons/Price.svg";
import discountIcon from "../../../../assets/icons/Disc.svg";
import location from "../../../../assets/icons/Location.svg";
import upload from "../../../../assets/icons/uplode.svg";
import done from "../../../../assets/icons/done_uplode.svg";
import * as Yup from "yup";
import Button from "../../../utilities/Button";

const productSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  location: Yup.string().required("Location is required"),
  price: Yup.string()
    .required("Price is required")
    .test("is-number", "Invalid price. Please enter only numbers.", (value) => {
      return /^\d+$/.test(value);
    }),
  img: Yup.mixed().test(
    "isImage",
    "Please select a valid image file (JPG, PNG, GIF)",
    function (value) {
      if (!value) {
        return true;
      }

      const supportedFormats = ["image/jpeg", "image/png", "image/gif"];

      if (!supportedFormats.includes(value.type)) {
        throw new Yup.ValidationError("Invalid image", value, "img");
      }
      return true;
    }
  ),
});
const handleChangeDropdown = (selected) => {
  setEditDropdown(selected);
};
const optionsDropdown = [
  { name: "active", type: "" },
  { name: "Non Active", type: "" },
  { name: "Disable", type: "view" },
];

function Edit_Service_Provider({ handleDiscount }) {
  const [EditDropdown, setEditDropdown] = useState(null);
  const { t } = useTranslation("global");
  const formik = useFormik({
    initialValues: {
      name: "Artificial foot",
      description: "Artificial foot for people with special needs",
      location: "Maza",
      price: "2000",
      discount: "1800",
      img: "",
    },
    validationSchema: productSchema,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: false,
    onSubmit: (values) => {
      console.log("from edit" + values);
    },
  });
  const onDrop = useCallback((acceptedFiles) => {
    formik.setFieldValue("img", acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="w-[17rem] sm:w-[22rem] md:w-[36rem] pb-5 bg-white absolute top-32 end-0 sm:end-5 rounded shadow z-20 px-4 md:px-8 ">
        <div className="py-5 md:py-10 flex flex-col gap-3">
          <Typography component={"h3"}> {t("editServices.0")}</Typography>
          <Typography component={"h5"}>
            {t("editServices.1")}: 10/27/2023 11:34, {t("editServices.2")}
          </Typography>
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          <div className="w-full flex items-center justify-between ease-in-out border-[1px] rounded-md text-mySlate border-myGray-400">
            <Dropdown
              options={optionsDropdown}
              value={EditDropdown}
              onChange={handleChangeDropdown}
              className="active:border-primary focus-within:border-primary duration-150 w-full"
              icon={arrowIcon}
              showSlected={true}
              ulClassname={"w-full "}
            />
          </div>
          <DashInput
            name={"name"}
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            icon={Business}
            errorMsg={
              formik.touched.name && formik.errors.name
                ? formik.errors.name
                : ""
            }
          />
          <DashInput
            name={"description"}
            type="text"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            icon={file}
            errorMsg={
              formik.touched.description && formik.errors.description
                ? formik.errors.description
                : ""
            }
          />
          <DashInput
            name={"location"}
            type="text"
            value={formik.values.location}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            icon={location}
            errorMsg={
              formik.touched.location && formik.errors.location
                ? formik.errors.location
                : ""
            }
          />
          <DashInput
            name={"price"}
            type="text"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            icon={priceIcon}
            errorMsg={
              formik.touched.price && formik.errors.price
                ? formik.errors.price
                : ""
            }
          />
          <div className="flex flex-col gap-1">
            <DashInput
              name={"discount"}
              type="text"
              value={formik.values.discount}
              icon={discountIcon}
              isDisabled={true}
              errorMsg={
                formik.touched.discount && formik.errors.discount
                  ? formik.errors.discount
                  : ""
              }
            />

            <Typography className={"flex gap-1"} component={"h5"}>
              {t("editServices.3")}
              <p
                onClick={handleDiscount}
                className="text-secondary hover:text-success cursor-pointer"
              >
                {t("editServices.4")}
              </p>
            </Typography>
          </div>
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
          <Button fullWidth={true} type="submit">
            {t("editServices.5")}
          </Button>
        </div>
      </div>
    </form>
  );
}

export default Edit_Service_Provider;

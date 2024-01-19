import { DashInput } from "../../../utilities/Inputs";
import { useFormik } from "formik";

import { useTranslation } from "react-i18next";
import React, { useEffect, useRef, useState } from "react";
import Typography from "../../../utilities/Typography";

import Business from "../../../../assets/icons/business-Dahshboard.svg";
import file from "../../../../assets/icons/File.svg";
import priceIcon from "../../../../assets/icons/Price.svg";
import discountIcon from "../../../../assets/icons/Disc.svg";
import location from "../../../../assets/icons/Location.svg";

import Button from "../../../utilities/Button";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import product from "../../Dashbord_service_provider/Services/Table_Services/Services_img/product.svg";
import left from "../../Dashbord_service_provider/Services/Table_Services/Services_img/left.svg";
import right from "../../Dashbord_service_provider/Services/Table_Services/Services_img/right.svg";
import rightActive from "../../Dashbord_service_provider/Services/Table_Services/Services_img/right active.svg";

function View_Service_Provider({ handleCloseView }) {
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
  });
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);
  const [isPrevButtonDisabled, setIsPrevButtonDisabled] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    swiperInstance.on("slideChange", () => {
      const nextButton = document.querySelector(".custom-next-button");
      const prevButton = document.querySelector(".custom-prev-button");

      if (nextButton.classList.contains("swiper-button-disabled")) {
        setIsNextButtonDisabled(true);
      } else {
        setIsNextButtonDisabled(false);
      }

      if (prevButton.classList.contains("swiper-button-disabled")) {
        setIsPrevButtonDisabled(true);
      } else {
        setIsPrevButtonDisabled(false);
      }
    });
  }, []);

  return (
    <div className="w-[17rem] sm:w-[22rem] md:w-[36rem] pb-5 bg-white absolute top-32 end-0 sm:end-5 rounded shadow z-20 px-4 md:px-8 ">
      <div className="py-5 md:py-10 flex flex-col gap-3">
        <Typography component={"h3"}>{t("viewService.0")}</Typography>
        <Typography component={"h5"}>
          {t("viewService.1")} 10/27/2023 11:34
          {t("viewService.2")}
        </Typography>
      </div>
      <>
        <Swiper
          navigation={{
            nextEl: ".custom-next-button",
            prevEl: ".custom-prev-button",
          }}
          modules={[Navigation]}
          className="py-5"
          ref={swiperRef}
        >
          <SwiperSlide className="flex items-center justify-center ">
            <img src={product} alt="img" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center">
            <img src={product} alt="img" />
          </SwiperSlide>

          <div className="custom-next-button custom-next-button-right absolute start-20 z-50 top-[50%] -translate-y-[50%] ">
            <img
              className="w-10 h-10 cursor-pointer rtl:rotate-180"
              src={left}
              alt=""
            />
            {isNextButtonDisabled && (
              // You can render something specific when the next button is disabled
              <p>Next button is disabled!</p>
            )}
          </div>

          <div className="custom-prev-button custom-next-button-left absolute end-20 z-50 top-[50%] -translate-y-[50%]">
            {isPrevButtonDisabled ? (
              <img
                className="w-10 h-10 cursor-pointer rtl:rotate-180 "
                src={right}
                alt="#"
              />
            ) : (
              <img
                className="w-10 h-10 cursor-pointer rtl:rotate-180 "
                src={rightActive}
                alt="#"
              />
            )}
          </div>
        </Swiper>
      </>
      <div className="flex flex-col gap-2 md:gap-3">
        <DashInput
          name={"status"}
          type={"text"}
          value={"active"}
          icon={Business}
          isDisabled={true}
        />

        <DashInput
          name={"name"}
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          icon={Business}
          isDisabled={true}
        />
        <DashInput
          name={"description"}
          type="text"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          icon={file}
          isDisabled={true}
        />
        <DashInput
          name={"location"}
          type="text"
          value={formik.values.location}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          icon={location}
          isDisabled={true}
        />
        <DashInput
          name={"price"}
          type="text"
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          icon={priceIcon}
          isDisabled={true}
        />
        <DashInput
          name={"discount"}
          type="text"
          value={formik.values.discount}
          icon={discountIcon}
          isDisabled={true}
        />
        <Button fullWidth={true} onClick={handleCloseView} type="submit">
          {t("viewService.3")}
        </Button>
      </div>
    </div>
  );
}

export default View_Service_Provider;

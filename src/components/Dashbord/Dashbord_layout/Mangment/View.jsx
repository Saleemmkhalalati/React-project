
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Typography from "../../../utilities/Typography";
import Button from "../../../utilities/Button";
import ClickOutside from "../../../utilities/Click_Outsite";
import { DashInput } from "../../../utilities/Inputs"
import { Formik } from "formik";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import product from "../../Dashbord_service_provider/Services/Table_Services/Services_img/product.svg";
import left from "../../Dashbord_service_provider/Services/Table_Services/Services_img/left.svg";
import right from "../../Dashbord_service_provider/Services/Table_Services/Services_img/right.svg";
import rightActive from "../../Dashbord_service_provider/Services/Table_Services/Services_img/right active.svg";
import ArrowDropdown from "../../../../assets/icons/Arrow Dropdown.svg"

const View = React.forwardRef(({ view_content, view_user, set_View_user, open_change_password, set_open_change_password,hasSlider }, ref) => {
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);
  const [isPrevButtonDisabled, setIsPrevButtonDisabled] = useState(false);
  const swiperRef = useRef(null);
  const toggle_View_user = () => {
    set_View_user(!view_user)
  }
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
    <div className=''>
      <ClickOutside
        onClick={toggle_View_user}
       
      >
        {view_user && (
          <div  className="flex flex-col gap-3 absolute ltr:right-0 rtl:left-0  bg-white w-[ w-[17rem] sm:w-[22rem] md:w-[36rem] px-5 pt-7 rounded-md shadow-md z-50 min-h-full">

            <Typography component={"h3"} >
              {view_content.title}
            </Typography>
            <Typography component={"h4"}>
              {view_content.descrption}
            </Typography>
            {
                      hasSlider && (
                        <div>
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
          {isNextButtonDisabled ?
          
          (    <img
              className="w-10 h-10 cursor-pointer rtl:rotate-180 "
              src={left}
              alt=""
            />) :  
            
            (   <img
              className="w-10 h-10 cursor-pointer rtl:rotate-180 "
              src={ArrowDropdown}
              alt="#"
            />) } 
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
        </div>

                      )
             }
            {view_content.inputs.map((input) => {
              return (
                <>
                  <div className="w-full">
                   
                    <DashInput
                      id={input.text}
                      icon={input.img}
                      isDisabled={true}
                      // value={input.text}

                      placeholder={input.text}
                      errorMsg=""
                      className={`placeholder:text-mySlate  w-full`}

                    />

                  </div>

                  {input.des && (<Typography component={"h4"}>{input.des.text} <span className="cursor-pointer text-primary hover:text-success" onClick={() => { set_open_change_password(!open_change_password) }}>{input.des.click_here}</span></Typography>)}
                </>
              )
            }
            )}
            {view_content.other && (
              <div className="flex items-center gap-2">
                {view_content.other.img}
                <Typography className={"!text-error cursor-pointer"}>{view_content.other.des}</Typography>
              </div>
            )}

            <Button type="submit" fullWidth>
              {view_content.button_content}
            </Button>
          </div>
        )}

      </ClickOutside>

    </div>
  );
});

View.propTypes = {
  view_content: PropTypes.object.isRequired,
  view_user: PropTypes.bool,
  set_View_user: PropTypes.func,
  open_change_password: PropTypes.bool,
  set_open_change_password: PropTypes.func,
};
export default View




import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import BackPolygon from "../../../utilities/BackPolygon";
import Polygon from "../../../utilities/Polygon";
import Typography from "../../../utilities/Typography";
import testmonal_2 from "./Testimonals_images/Testaimonals _1.png";
import testmonal_3 from "./Testimonals_images/Testaimonals_2.png";
import testmonal_4 from "./Testimonals_images/Testaimonals_3.png";
import testmonal_1 from "./Testimonals_images/Testaimonals_4.png";

const Testimonals = () => {
  const [pactive, setpactive] = useState(1);
  const { t } = useTranslation("global");

  const showInfo = (devId) => {
    setpactive(devId);
  };
  return (
    <section
      className={`testimonals_section   relative sm:px-16 px-6 sm:py-14  `}
    >
      <div className="flex flex-col xl:flex-row    justify-between items-center  py-10 gap-5 h-full ">
        {/* testimonals images */}
        <div className="testimonals_images flex  items-center justify-around relative   h-[30rem] xl:w-[50%] sm:w-full">
          {/* 2 + 4 */}
          <div
            className={`flex  row-image  absolute sm:gap-24  gap-[3rem] items-center  cursor-pointer  `}
          >
            {/* t4 */}
            <div
              onClick={() => {
                showInfo(4);
              }}
              className={`relative sm:w-[13rem] sm:h-[13rem] w-[7rem] h-[7rem]  ${
                pactive !== 4 ? "  " : " scale-110 z-50"
              }`}
            >
              <Polygon
                color={"gradient"}
                className={"w-full h-full  top-0 p-1 z-10"}
              >
                <Polygon
                  color={"gray"}
                  className={
                    "w-[100%] h-[100%] ltr:rotate-[90deg] rtl:rotate-180 rtl:-rotate-45 overflow-hidden z-50"
                  }
                >
                  <img
                    src={`${testmonal_4}`}
                    alt=""
                    className={` w-[100%] h-full rotate-[-130deg] absolute top-[-15%] lg:left-[10%]  `}
                  />
                  <Polygon
                    color={"gradient"}
                    className={`w-[100%] h-[100%] ltr:rotate-[90deg] rtl:rotate-90 overflow-hidden opacity-[25%] ${
                      pactive !== 4 ? "  " : "!opacity-[75%]"
                    }`}
                  >
                    <p className=" z-20 text-white rotate-[138deg] w-full text-center  font-bold leading-9   md:w-[60%] absolute lg:left-0 lg:-bottom-[-70%] md:left-[-8%]   md:bottom-[70%]  bottom-[50%]  md:text-[16px] text-[14px]">
                      Eleanor Pena
                    </p>
                  </Polygon>
                </Polygon>
              </Polygon>
            </div>
            {/* t2 */}

            <div
              onClick={() => {
                showInfo(2);
              }}
              className={`relative sm:w-[13rem] sm:h-[13rem] w-[7rem] h-[7rem] ${
                pactive !== 2 ? "z-10" : " scale-110 z-50"
              } `}
            >
              <Polygon
                color={"gradient"}
                className={"w-full h-full  top-0 p-1 z-10"}
              >
                <Polygon
                  color={"gray"}
                  className={
                    "w-[100%] h-[100%] ltr:rotate-[90deg] rtl:rotate-180 overflow-hidden"
                  }
                >
                  <img
                    src={`${testmonal_2}`}
                    alt=""
                    className={` w-[100%] h-full rotate-[-130deg] absolute top-[-15%] lg:left-[10%]     `}
                  />
                  <Polygon
                    color={"gradient"}
                    className={`w-[100%] h-[100%] ltr:rotate-[90deg]  rtl:rotate-90 overflow-hidden opacity-[25%] ${
                      pactive !== 2 ? " z-10" : "!opacity-[75%]"
                    }`}
                  >
                    <p className=" z-20 text-white rotate-[138deg] w-full text-center  font-bold leading-9  text-[14px] md:w-[60%] absolute lg:left-0 lg:-bottom-[-60%] md:left-[20%]  red   left-[-15%] bottom-[50%] md:text-[16px]">
                      Jackie Prankline
                    </p>
                  </Polygon>
                </Polygon>
              </Polygon>
            </div>
          </div>
          {/* 1 +3 */}
          <div
            className={`flex col-iamge      rotate-[90deg] sm:gap-24 gap-[3rem] absolute sm:start-[8%]  md:start-[20%] lg:start-[27%]   xl:start-[13%]    cursor-pointer   rtl:translate-x-[-2px] rtl:md:translate-x-[-10px] rtl:md:gap-24`}
          >
            {/* t1 */}

            <div
              onClick={() => {
                showInfo(1);
              }}
              className={`relative sm:w-[13rem] sm:h-[13rem] w-[7rem] h-[7rem]  ${
                pactive !== 1 ? "z-10" : " scale-110 z-50"
              }`}
            >
              <Polygon
                color={"gradient"}
                className={"w-full h-full  top-0 p-1 z-10"}
              >
                <Polygon
                  color={"gray"}
                  className={
                    "w-[100%] h-[100%] ltr:rotate-[90deg] rtl:rotate-180 overflow-hidden z-50"
                  }
                >
                  <img
                    src={`${testmonal_1}`}
                    alt=""
                    className={` w-[100%] h-full rotate-[130deg] absolute top-[-15%] lg:right-[10%]     `}
                  />
                  <Polygon
                    color={"gradient"}
                    className={`w-[100%] h-[100%] ltr:rotate-[90deg]  rtl:rotate-90 overflow-hidden opacity-[25%] ${
                      pactive !== 1 ? "  " : "!opacity-[75%] z-50"
                    }`}
                  >
                    <p className=" z-20 text-white rotate-[45deg] w-full text-center  font-bold   text-[12px] md:w-[70%] absolute lg:left-[-6%] lg:-bottom-[-19%] md:left-[2%] md:bottom-[20%] sm:bottom-[30%] sm:start-[10%] sm:w-[70%] bottom-[15%] right-3 rtl:lg:bottom-10 rtl:lg:start-20 sm:text-[16px]">
                      One of the pioneers of the site
                    </p>
                    <span className="rotate-[45deg]  absolute z-20 font-[700] sm:text-[20px] lg:bottom-[35%] lg:right-[5%] text-[12px] right-[-20%] bottom-[50%] md:right-[-2px]    md:bottom-20  text-center  w-full">
                      Vanessa Bond
                    </span>
                  </Polygon>
                </Polygon>
              </Polygon>
            </div>

            {/* t3 */}
            <div
              onClick={() => {
                showInfo(3);
              }}
              className={`relative sm:w-[13rem] sm:h-[13rem] w-[7rem] h-[7rem] ${
                pactive !== 3 ? "z-10" : " scale-110 z-50"
              }`}
            >
              <Polygon
                color={"gradient"}
                className={"w-full h-full  top-0 p-1 z-50"}
              >
                <Polygon
                  color={"gray"}
                  className={
                    "w-[100%] h-[100%] ltr:rotate-[90deg] rtl:rotate-180 overflow-hidden z-50"
                  }
                >
                  <img
                    src={`${testmonal_3}`}
                    alt=""
                    className={` w-[100%] h-full rotate-[140deg] absolute top-[-15%] lg:right-[10%]   `}
                  />
                  <Polygon
                    color={"gradient"}
                    className={`w-[100%] h-[100%] ltr:rotate-[90deg]  rtl:rotate-90 overflow-hidden opacity-[25%] ${
                      pactive !== 3 ? "  " : "!opacity-[75%]"
                    }`}
                  >
                    <p className=" z-20 text-white rotate-[45deg] w-full text-center  font-bold   text-[16px] md:w-[70%] absolute lg:left-[-5%] lg:-bottom-[-20%] md:left-[0%]    left-1 bottom-10 md:text-[16px]">
                      Jhon Brown{" "}
                    </p>
                  </Polygon>
                </Polygon>
              </Polygon>
            </div>
          </div>
        </div>

        {/* testimonals content */}
        <div className="testimonals_content md:mt-20 mt-0 w-full flex flex-col lg:text-left text-center  lg:w-[40%] sm:mt-16   ">
          <Typography component={"h1"} className="mb-5">
            {t("testimonals.main_title")}
          </Typography>

          <Typography
            component={"p"}
            id="testimonal1"
            className={`${pactive === 1 ? "block" : "hidden"} testmonal   `}
          >
            {" "}
            {t("testimonals.testimonal")}
          </Typography>
          <Typography
            component={"p"}
            id="testimonal2"
            className={` ${pactive === 2 ? "block" : "hidden"} testmonal   `}
          >
            {t("testimonals.testimonal")}
          </Typography>
          <Typography
            component={"p"}
            id="testimonal3"
            className={` ${pactive === 3 ? "block" : "hidden"} testmonal   `}
          >
            {t("testimonals.testimonal")}
          </Typography>
          <Typography
            component={"p"}
            id="testimonal4"
            className={`${pactive === 4 ? "block" : "hidden"} testmonal  } `}
          >
            {t("testimonals.testimonal")}
          </Typography>
          <span className=" text-right text-[#FAA209] font-bold text-[16px] mt-5">
            Vanessa Bond
          </span>
        </div>
      </div>

      <Polygon
        color={"primary"}
        className={" lg:end-[-2%] lg:top-[30%] hidden xl:block"}
      />
    </section>
  );
};

export default Testimonals;


import { React, useState } from "react";
import { styles } from "../Stayles";
import { useTranslation } from "react-i18next";
import Dental from "./Services_images/Dental.svg";
import Neurology from "./Services_images/Neurology.svg";
import serviceImage from "./Services_images/Doctor_services.png";
import BackPolygon from "../../../utilities/BackPolygon";
import Typography from "../../../utilities/Typography";
import Polygon from "../../../utilities/Polygon";

const Services = () => {
  const { t } = useTranslation("global");
  const [active, setactive] = useState(0);

  return (
    <section
      className={`services_section relative  sm:px-16 px-6 sm:py-16 py-10   `}
    >
      <div className="absolute   left-[-100px]  lg:top-[20%] md:top-[60%] md:right-[60%] top-[20%] rtl:lg:right-[-50px]  hidden xl:block">
        <BackPolygon />
      </div>
      {/* services content + services image */}
      <div
        className={`flex flex-col lg:flex-row justify-between sm:px-16 px-6 sm:py-16 py-16 text-left  items-center  lg:h-[26rem] md:h-[30rem] h-[35rem]  gap-10`}
      >
        <div className="services_content lg:w-[30%] rtl:text-right ">
          <Typography component={"h1"} className={`mb-5`}>
            {t("Services.main-title")}
          </Typography>
          <Typography component={"p"}>{t("Services.discrption")}</Typography>
        </div>

        <div className="services_images  relative h-full lg:w-[60%] w-full  flex  flex-col xl:flex-row md:items-center flex-wrap   lg:gap-7 md:gap-[3rem] sm:gap-[2rem] sm:mt-5 gap-[-10rem]">
          {/* service 1 */}
          <div
            onClick={() => {
              setactive(1);
              console.log(active);
            }}
            className={`relative xl:top-[-40%] xl:start-0 lg:top-[20%] lg:start-[-50%] md:top-[25%] md:start-[-50%] sm:top-[10%] sm:start-0 cursor-pointer ${
              active !== 1 ? "" : ""
            }`}
          >
            <Polygon
              color={"gradient"}
              className={
                "xl:w-[14rem] xl:h-[14rem] lg:w-[12rem] lg:h-[12rem] md:w-[12rem] md:h-[12rem] sm:w-[10rem] sm:h-[10rem] w-[8rem] h-[8rem] "
              }
            >
              <Polygon
                color={"gray"}
                className={
                  "absolute xl:w-[13.5rem] xl:h-[13.5rem] lg:w-[11.5rem] md:w-[11.5rem] md:h-[11.5rem] sm:w-[9.5rem] sm:h-[9.5rem] w-[7.6rem] h-[7.6rem] top-[2%] start-[2%] ltr:rotate-90 rtl:rotate-180"
                }
              >
                <img
                  src={Dental}
                  alt=""
                  className="  z-10 w-[70px] h-[80px]    lg:w-[100px] lg:h-[100px] rotate-[-135deg]  flex items-center justify-center absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] "
                />
                <Typography
                  component={"gradient-text"}
                  className=" lg:text-[20px] font-bold absolute sm:top-[20%] sm:start-[60%] top-4 start-16  translate-x-[50% rotate-[-135deg]  text-[14px] rtl:sm:top-[20%] rtl:sm:start-[20%]  rtl:top-[13%] rtl:start-[2%] "
                >
                  {t("Services.services.0")}
                </Typography>
              </Polygon>
              <Polygon
                color={"gradient"}
                className={`w-[100%] h-[100%] ltr:rotate-[90deg] rtl:rotate-0 overflow-hidden  opacity-[1%] ${
                  active !== 1 ? "" : "visible !opacity-[25%] "
                }`}
              />
            </Polygon>
          </div>

          <div
            onClick={() => {
              setactive(2);
            }}
            className="relative bg-gray-300 xl:top-[-40%]  xl:start-[30%] lg:top-[10%] lg:start-[-14%] md:top-[2%] md:start-[-20%] sm:top-[0%] sm:start-[40%] start-[50%] cursor-pointer"
          >
            <Polygon
              color={"gradient"}
              className={
                "xl:w-[14rem] xl:h-[14rem] lg:w-[12rem] lg:h-[12rem] md:w-[12rem] md:h-[12rem] sm:w-[10rem] sm:h-[10rem] w-[8rem] h-[8rem]"
              }
            >
              <Polygon
                color={"gray"}
                className={
                  "absolute xl:w-[13.5rem] xl:h-[13.5rem] lg:w-[11.5rem]  md:w-[11.5rem] md:h-[11.5rem] sm:w-[9.5rem] sm:h-[9.5rem] w-[7.6rem] h-[7.6rem] top-[2%] start-[2%] ltr:rotate-90 rtl:rotate-180"
                }
              >
                <img
                  src={Neurology}
                  alt=""
                  className="  z-10 w-[70px] h-[80px]    lg:w-[100px] lg:h-[100px] rotate-[-135deg]  flex items-center justify-center absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] "
                />
                <Typography
                  component={"gradient-text"}
                  className=" sm:text-[20px] font-bold absolute sm:top-[20%] sm:start-[50%] start-[30%] top-[10%]  translate-x-[50% rotate-[-135deg] rtl:sm:top-[20%] rtl:sm:start-[20%]  rtl:top-[10%] rtl:start-[-5%] text-[12px]"
                >
                  {t("Services.services.1")}
                </Typography>
              </Polygon>
              <Polygon
                color={"gradient"}
                className={`w-[100%] h-[100%] ltr:rotate-[90deg] rtl:rotate-0 overflow-hidden  opacity-[1%] ${
                  active !== 2 ? "" : "visible !opacity-[25%] "
                }`}
              />
            </Polygon>
          </div>

          <div
            onClick={() => {
              setactive(3);
            }}
            className={`relative bg-gray-300 xl:top-[-40%]   xl:start-[60%] lg:top-[2%] lg:start-[20%] md:top-[-20%] md:start-[10%] sm:top-[-10%] sm:start-[80%] top-[60%]  cursor-pointer ${
              active !== 3
                ? ""
                : "border-solid border-spacing-28 border-indigo-600"
            } `}
          >
            <Polygon
              color={"gradient"}
              className={
                "xl:w-[14rem] xl:h-[14rem] lg:w-[12rem] lg:h-[12rem] md:w-[12rem] md:h-[12rem] sm:w-[10rem] sm:h-[10rem] w-[8rem] h-[8rem] overflow-hidden "
              }
            >
              <Polygon
                color={"gray"}
                className={
                  "absolute xl:w-[13.8rem] xl:h-[13.8rem] lg:w-[11.5rem]  md:w-[11.5rem] md:h-[11.5rem] sm:w-[9.5rem] sm:h-[9.5rem] w-[7.8rem] h-[7.8rem] top-[2%] start-[2%] ltr:rotate-90 rtl:rotate-180"
                }
              >
                <img
                  src={serviceImage}
                  alt=""
                  className="  z-10    w-full h-full rotate-[-130deg]  flex items-center justify-center absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] "
                />
                <Polygon
                  color={"gradient"}
                  className={`w-[101%] h-[101%] ltr:rotate-[90deg] rtl:rotate-0 overflow-hidden opacity-[75%] z-20`}
                >
                  <Typography
                    component={"p"}
                    className="text-white z-30 font-extrabold rotate-[135deg] md:text-[16px] lg:text-[20px]  absolute sm:top-16  top-10  rtl:rotate-[-135deg]"
                  >
                    {t("Services.services.2")}
                  </Typography>
                </Polygon>
              </Polygon>
            </Polygon>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

import BackPolygon from "../../utilities/BackPolygon";
import menu from "../../../assets/icons/menu.svg";
import Typography from "../../utilities/Typography";
import { Link } from "react-router-dom";
import "./Services.css";
import Click_Outsite from "../../utilities/Click_Outsite";
import { useTranslation } from "react-i18next";

import { useServices } from "../../../context/Context";
import { useContext, useRef, useState } from "react";

export default function SideServices() {
  const { t } = useTranslation("global");
  const [side, setSide] = useState(true);
  const [clickec, setClicked] = useState(false);

  const ref = useRef(null);
  const handleSide = () => {
    setSide(!side);
    setClicked(true);
  };

  const services = [
    {
      Category_id: 1,
      Category_name: "Doctor Services",
      Service_count: "200",
    },
    {
      Category_id: 2,
      Category_name: "Hospital Services",
      Service_count: "100",
    },
    {
      Category_id: 3,
      Category_name: "Lad Services",
      Service_count: "250",
    },
    {
      Category_id: 4,
      Category_name: "Clinic Services",
      Service_count: "100",
    },
    {
      Category_id: 5,
      Category_name: "Pharmacy Services",
      Service_count: "300",
    },
    {
      Category_id: 6,
      Category_name: "Medical Devices ",
      Service_count: "290",
    },
    {
      Category_id: 7,
      Category_name: "Cosmetic Ointments ",
      Service_count: "120",
    },
  ];
  const rate = [
    { name: "Five Stars", rate: "5" },
    { name: "Four Stars", rate: "4" },
    { name: "Three Stars", rate: "3" },
    { name: "Two Stars", rate: "2" },
    { name: "One Stars", rate: "1" },
  ];
  const location = [
    { title: "Closer to you", count: "200" },
    { title: "Farther from you", count: "350" },
  ];
  const [Minvalue, setMinvalue] = useState(0);
  const [Maxvalue, setMaxvalue] = useState(2000);
  const rangeMin = 0;
  const rangeMax = 2000;

  const handleMinChange = (event) => {
    const value = parseInt(event.target.value);
    setMinvalue(value);
  };

  const handleMaxChange = (event) => {
    const value = parseInt(event.target.value);
    setMaxvalue(value);
  };

  const [myCheckValue, setCheckValue] = useState([]);
  const handleServicesType = (checkValue) => {
    const finalCheckValue = checkValue.target.name;
    const isItemChecked = myCheckValue.includes(finalCheckValue);

    if (isItemChecked) {
      const updatedCheckValue = myCheckValue.filter(
        (item) => item !== finalCheckValue
      );
      setCheckValue(updatedCheckValue);
    } else {
      setCheckValue([...myCheckValue, { finalCheckValue, Minvalue, Maxvalue }]);
    }
  };
  const handleRate = (rate) => {
    const finalRate = rate.target.name;
    const rateIsChecked = myCheckValue.includes(finalRate);

    if (rateIsChecked) {
      const updatedCheckValue = myCheckValue.filter(
        (item) => item !== finalRate
      );
      setCheckValue(updatedCheckValue);
    } else {
      setCheckValue([...myCheckValue, finalRate]);
    }
  };

  //store custum services in usestate
  const { setcustomServices } = useContext(useServices);
  setcustomServices(myCheckValue);

  const rangeBackgroundStyle = {
    insetInlineStart: `${
      ((Minvalue - rangeMin) / (rangeMax - rangeMin)) * 100
    }%`,
    width: `${((Maxvalue - Minvalue) / (rangeMax - rangeMin)) * 100}%`,
  };
  return (
    <Click_Outsite exceptionRef={ref} onClick={handleSide}>
      <div
        ref={ref}
        className="absolute md:relative start-1  w-[12rem] md:w-[25%] z-50 "
      >
        <div className="cursor-pointer block md:hidden px-4">
          <img className="w-7 " onClick={handleSide} src={menu} alt="" />
        </div>
        <div
          className={`  md:block  ${side && clickec ? "block" : "hidden"}  `}
        >
          <div className="flex flex-col gap-6 md:gap-12 xl:w-[21rem] lg:w-[18rem]  relative z-50 pt-5 md:py-20 lg:pt-60 lg:pb-12 px-1 xl:px-20 bg-myGray-200 md:bg-transparent shadow md:shadow-transparent rounded md:rounded-none lg:before:absolute lg:before-content[''] md:before:w-[1px] lg:before:h-full lg:before:bg-myGray-100 lg:before:-end-4 lg:after:absolute lg:after-content-[''] after:w-[0.4rem] after:h-[0.4rem] lg:after:bg-myGray-100 lg:after:rounded-full lg:after:-end-[1.13rem] ">
            <div className="flex flex-col gap-2 md:gap-5 ">
              <Typography className={"text-xl pb-3"} component={"h1"}>
                {t("services.0")}
              </Typography>
              {services.map((service, index) => (
                <div
                  className="flex justify-between items-end  gap-2 md:gap-16 md:min-w-[15rem]"
                  key={index}
                >
                  <div className="flex items-center gap-2">
                    <input
                      onClick={handleServicesType}
                      name={service.Category_name}
                      type="checkbox"
                      id={service.Category_name}
                      className="appearance-none border border-myGray-500 rounded w-3 h-3 md:w-4 md:h-4 checked:bg-primary checked:border-transparent cursor-pointer "
                    />
                    <label
                      className="cursor-pointer text-xs md:text-sm "
                      htmlFor={service.Category_name}
                    >
                      {service.Category_name}
                    </label>
                  </div>
                  <span className="text-xs md:text-sm pe-2 md:pe-0">
                    {service.Service_count}
                  </span>
                </div>
              ))}
            </div>
            <div
              className="hidden lg:block relative lg:before:absolute lg:before:content-[''] md:before:w-[100%] xl:before:w-[19rem] lg:before:h-[1px] before:bg-myGray-100 md:before:-end-5 xl:before:-end-24
          lg:after:absolute lg:after:content-[''] after:w-[0.4rem] after:h-[0.4rem] after:bg-myGray-100 after:-end-5 md:after:start-4 xl:after:-start-8 md:after:-top-[2px] md:after:rounded-full  "
            ></div>
            <div className="flex sm:min-w-[10rem]  flex-col gap-2 md:gap-5  ">
              <Typography className={"text-xl pb-3"} component={"h1"}>
                {t("services.1")}
              </Typography>
              {location.map((loc, LocIndex) => (
                <div className="flex justify-between items-end  gap-2 md:gap-16 md:min-w-[15rem]">
                  <div key={LocIndex} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={loc.title}
                      className="appearance-none border border-myGray-500 rounded w-3 h-3 md:w-4 md:h-4  checked:bg-primary checked:border-transparent cursor-pointer "
                    />
                    <label
                      className="cursor-pointer text-xs md:text-sm "
                      htmlFor={loc.title}
                    >
                      {loc.title}
                    </label>
                  </div>
                  <span className="text-xs md:text-sm pe-2 md:pe-0">
                    {loc.count}
                  </span>
                </div>
              ))}
              <Link to={"/services/map"}>
                <Typography
                  className={"text-start text-xs md:text-sm"}
                  component={"secondary-text"}
                >
                  {t("services.2")}
                </Typography>
              </Link>
            </div>
            <div
              className="hidden lg:block relative lg:before:absolute lg:before:content-[''] md:before:w-[100%] xl:before:w-[19rem] lg:before:h-[1px] before:bg-myGray-100 md:before:-end-5 xl:before:-end-24
          lg:after:absolute lg:after:content-[''] after:w-[0.4rem] after:h-[0.4rem] after:bg-myGray-100 md:after:-end-5 md:after:start-4 xl:after:-start-8 md:after:-top-[2px] md:after:rounded-full  "
            ></div>
            <div className="absolute -start-32 top-[52rem] -z-50">
              <BackPolygon />
            </div>
            <div>
              <Typography className={"text-xl pb-3"} component={"h1"}>
                {t("services.3")}
              </Typography>
              <div className="relative">
                <div className="h-[4px] bg-myGray-400 w-32 md:w-[15rem] rounded relative">
                  <div
                    className="h-[4px] bg-gradient-to-b from-primary to-secondary rounded absolute"
                    style={rangeBackgroundStyle}
                  ></div>
                </div>
                <div className="myrange relative">
                  <input
                    className="range absolute -top-[4.5px] h-[5px] md:w-[15rem] appearance-none bg-transparent pointer-events-none"
                    type="range"
                    min={rangeMin}
                    max={rangeMax}
                    value={Minvalue}
                    onChange={handleMinChange}
                  />
                  <input
                    className="range absolute -top-[4.5px] h-[5px] md:w-[15rem] appearance-none bg-transparent pointer-events-none"
                    type="range"
                    min={rangeMin}
                    max={rangeMax}
                    value={Maxvalue}
                    onChange={handleMaxChange}
                  />
                </div>
                <div className="flex gap-8 md:gap-32 ">
                  <div className="flex pt-3">
                    <span>$</span>
                    <input
                      className="outline-none appearance-none w-14 bg-transparent"
                      type="number"
                      value={Minvalue}
                      onChange={handleMinChange}
                      disabled
                    />
                  </div>

                  <div>
                    <div className="flex pt-3">
                      <span>$</span>
                      <input
                        className="outline-none appearance-non w-14 bg-transparent"
                        type="number"
                        value={Maxvalue}
                        onChange={handleMaxChange}
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hidden lg:block relative lg:before:absolute lg:before:content-[''] md:before:w-[100%] xl:before:w-[19rem] lg:before:h-[1px] before:bg-myGray-100 md:before:-end-5 xl:before:-end-24
          lg:after:absolute lg:after:content-[''] after:w-[0.4rem] after:h-[0.4rem] after:bg-myGray-100 md:after:-end-5 md:after:start-4 xl:after:-start-8 md:after:-top-[2px] md:after:rounded-full  "
            ></div>
            <div className="flex flex-col sm:min-w-[10rem] gap-2 md:gap-5  ">
              <Typography className={"text-xl pb-3"} component={"h1"}>
                {t("services.4")}
              </Typography>
              {rate.map((rateEle, rateiIndex) => (
                <div className="flex justify-between items-end  gap-2 md:gap-16 md:min-w-[15rem]">
                  <div key={rateiIndex} className="flex items-center gap-2">
                    <input
                      onClick={handleRate}
                      name={rateEle.rate}
                      type="checkbox"
                      id={rateEle.name}
                      className="appearance-none border border-myGray-500 rounded w-3 h-3 md:w-4 md:h-4  checked:bg-primary checked:border-transparent cursor-pointer "
                    />
                    <label
                      className="cursor-pointer text-xs md:text-sm "
                      htmlFor={rateEle.name}
                    >
                      {rateEle.name}
                    </label>
                  </div>
                  <span className="text-xs md:text-sm pe-2 md:pe-0">
                    {rateEle.rate}
                  </span>
                </div>
              ))}
              <Link to={""}>
                {" "}
                <Typography
                  className={"text-start text-xs md:text-sm"}
                  component={"secondary-text"}
                >
                  {t("services.5")}
                </Typography>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Click_Outsite>
  );
}

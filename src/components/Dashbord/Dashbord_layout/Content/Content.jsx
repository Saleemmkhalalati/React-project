import { useState } from "react";

import Refrech from "../../../../assets/icons/Refrech.svg";
import Export_img from "../../../../assets/icons/Export.svg";

const Content = ({
  children,
  path,
  RefrechFun,
  ExportFunc,
  refrech,
  Export,
}) => {
  const [Remostartactive, setRemostartActive] = useState(false);

  return (
    <div className="px-1 ltr:sm:px-5 rtl:sm:px-5 py-4 flex flex-col justify-between   ">
      <div className="flex justify-between  flex-wrap gap-2">
        <p className="text-[16px] font-normal text-myGray-600">
          <span className="text-secondary">Dashboard /</span> {path}
        </p>
        <div className="flex items-center gap-4 cursor-pointer mb-4">
          <div className="flex gap-1 " onClick={RefrechFun}>
            <img
              src={Refrech}
              alt=""
              className={`${refrech ? "hidden" : "inline-block"}`}
            />{" "}
            <img
              src={Export_img}
              alt=""
              className={`${refrech ? "inline-block" : "hidden"}`}
            />
            <span
              className={`font-normal text-[13px] leading-[20px] text-myGray-500 hover:text-primary ${
                refrech ? "text-primary" : ""
              }`}
            >
              Refresh
            </span>
          </div>
          <div className="flex gap-1 " onClick={ExportFunc}>
            <img
              src={Export_img}
              alt=""
              className={`${refrech ? "hidden" : "inline-block"}`}
            />
            <img
              src=""
              alt=""
              className={`${Export ? "inline-block" : "hidden"}`}
            />
            <span
              className={`font-normal text-[13px] leading-[20px] text-myGray-500 hover:text-primary ${
                Export ? "text-primary" : ""
              }`}
            >
              Export Table
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white ">{children}</div>
      <p className="">
        Copyright @ 2023, All Right Resaved By{" "}
        <span
          className={`text-primary hover:text-success cursor-pointer ${
            Remostartactive ? "text-success" : ""
          }`}
          onClick={() => {
            setRemostartActive(!Remostartactive);
          }}
        >
          Remostart
        </span>{" "}
      </p>
    </div>
  );
};

export default Content;

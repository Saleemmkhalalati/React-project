import camera from "./PeofileImages/Camera.svg";

import avater from "./PeofileImages/Avtar.svg";

import user from "../../../../assets/icons/Vector.svg";
import emailIcon from "../../../../assets/icons/Email.svg";
import Typography from "../../../utilities/Typography";
import view from "../../../../assets/icons/View.svg";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import React from "react";

const Profile = React.forwardRef(({ email, image, role }, ref) => {
  const { t } = useTranslation("global");

  return (
    <div
      ref={ref}
      className="absolute top-24 end-2 sm:end-7 w-[15rem] sm:w-[24rem] bg-white p-5 z-20 rounded"
    >
      <div className=" flex flex-col gap-6">
        <div className=" relative flex items-center justify-center flex-col gap-2">
          <div className="relative ">
            <img className="w-20 sm:w-32" src={image} alt={""} />
            <img
              className="absolute bottom-3 ltr:start-24 rtl:end-0 "
              src={camera}
              alt=""
            />
          </div>
          <div>
            <Typography className={"text-xs sm:text-lg"} component={"p"}>
              {email}
            </Typography>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center border-2 border-myGray-100 py-1 sm:py-2 rounded-md">
            <Typography
              className={"ps-1 sm:ps-3 text-xs sm:text-sm"}
              component={"h4"}
            >
              {role}
            </Typography>
            <img className="pe-3 w-5 sm:w-6" src={user} alt="" />
          </div>
          <div className="flex justify-between items-center border-2  border-myGray-100 py-1 sm:py-2 rounded-md">
            <Typography
              className={"ps-1 sm:ps-3 text-xs sm:text-sm"}
              component={"h4"}
            >
              {email}
            </Typography>
            <img className="pe-3 w-5 sm:w-6" src={emailIcon} alt="img" />
          </div>
          <div className="flex justify-between items-center border-2 border-myGray-100 py-1 sm:py-2 rounded-md">
            <Typography
              className={"ps-1 sm:ps-3 text-xs sm:text-sm"}
              component={"h4"}
            >
              ********
            </Typography>
            <img className="pe-3 w-5 sm:w-6" src={view} alt="" />
          </div>
        </div>
      </div>
      <Link>
        <Typography
          className={"ltr:text-end rtl:text-start pt-2 text-sm sm:text-lg"}
          component={"secondary-text"}
        >
          {t("profile")}
        </Typography>
      </Link>
    </div>
  );
});
export default Profile;

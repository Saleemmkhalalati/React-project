import React, { useEffect, useRef, useState } from "react";
import searchIcon from "./NavBar_Dashbord_images/Search.svg";
import Avtar from "./NavBar_Dashbord_images/Avtar.png";
import Notification from "./NavBar_Dashbord_images/Notification.svg";
import Setting from "./NavBar_Dashbord_images/Setting.svg";
import MultiLangDropdown from "../../../utilities/MultiLangDropdown";
import Profile from "../Profile/Profile";
import userImage from "../Profile/PeofileImages/Avtar.svg";
import Notifications from "../Notifications/Notifications";
import { useTranslation } from "react-i18next";
import Dropdown from "../../../utilities/Dropdown";
import { useNavigate } from "react-router-dom";
import Click_Outsite from "../../../utilities/Click_Outsite";

const NavBarDashbord = () => {
  const { t } = useTranslation("global");
  const [profile, setProfile] = useState(false);
  const [viewNot, setViewNot] = useState(false);
  const profileRef = useRef(null);
  const notifiRef = useRef(null);

  const [point, setPoint] = useState(null);
  const navigate = useNavigate();

  const adminInfo = [
    {
      image: userImage,
      email: "rawanahd23@gmail.com",
      role: "admin user",
      reole: "admin user",
    },
  ];
  const handleProfile = () => {
    setProfile(!profile);
  };

  const toggleViewNot = () => {
    setViewNot(!viewNot);
  };

  const points = [
    { name: "Go to Settings", type: "sittings" },
    { name: "Contact us", type: "contact" },
  ];
  const handlepoint_table = (value) => {
    console.log(value);
    {
      value.type === "sittings"
        ? navigate("settings")
        : value.type === "contact"
        ? window.open(
            "https://mail.google.com/mail/u/0/#inbox?compose=new",
            "_blank"
          )
        : "";
    }
  };
  const handlepoint = (selected) => {
    setPoint(selected);
  };

  return (
    <div className="py-5 px-10 bg-white  flex  md:justify-between justify-end   w-full ">
      {/* input serch  */}
      <div className="relative w-1/2 hidden md:block ">
        <input
          id="search"
          placeholder="Search ..."
          className=" py-[6px] px-[16px] w-full border-[1px] red border-myGray-400 focus-within:border-primary  rounded-md transition-all duration-100 ease-in-out    bg-myGray-200  rounded-s-md outline-0 placeholder:focus:opacity-0"
        />

        <img
          src={searchIcon}
          width={12}
          height={12}
          alt="icon"
          className="absolute right-4 top-3  rtl:right-[96%]"
        />
      </div>
      {/* icon +profile photo  */}

      <div className="flex justify-between items-center gap-4 ">
        <div className=" relative p-2 ">
          <div>
            <img
              onClick={toggleViewNot}
              src={Notification}
              alt="img"
              className="w-5 h-5 cursor-pointer"
            />
            <div className="w-2 h-2 absolute bg-red-600 rounded-full top-0 right-1"></div>
            {viewNot ? (
              <Notifications
                ref={notifiRef}
                handleNotification={toggleViewNot}
              />
            ) : (
              ""
            )}
          </div>
        </div>

        <Dropdown
          className={"text-xl text-myGray-600 text-start p-0 "}
          options={points}
          value={point}
          onChange={handlepoint_table}
          icon={Setting}
          classNameIcon={"w-4"}
          showSlected={false}
          ulClassname={" ltr:-start-20 -top-0 rtl:start-[-7rem]"}
        />
        <MultiLangDropdown />

        <div>
          <img
            className="cursor-pointer"
            onClick={handleProfile}
            src={Avtar}
            alt=""
          />
          {profile ? (
            <Profile
              ref={profileRef}
              handleProfile={handleProfile}
              email={adminInfo[0].email}
              image={adminInfo[0].image}
              role={adminInfo[0].role}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBarDashbord;

import { useState } from "react";
import Logo from "../../../utilities/Logo";

import { Link, NavLink } from "react-router-dom";
import "./SideBardashbord.css";
import { useTranslation } from "react-i18next";

import vector from "./SideBar_Dashbord_images/Vector.svg";

import person from "./SideBar_Dashbord_images/Person.svg";
import Person_white from "./SideBar_Dashbord_images/Person_white.svg";

import Arrow_Dropdown from "./SideBar_Dashbord_images/Arrow Dropdown.svg";
import Services from "./SideBar_Dashbord_images/Services.svg";
import person_pluse from "./SideBar_Dashbord_images/Person_Plus.svg";
import Graph from "./SideBar_Dashbord_images/Graph.svg";
import Notification from "./SideBar_Dashbord_images/Notification.svg";
import setting from "./SideBar_Dashbord_images/Setting.svg";
import logout from "./SideBar_Dashbord_images/Logout.svg";
import logo from "../../../../assets/icons/Logo.svg";

const SideBardashbord = () => {
  const { t } = useTranslation("global");

  const Menus = [
    {
      main_title: t("sideBar_Dashbord.dashboard_menu.0"),
      Data: [
        {
          title: t("sideBar_Dashbord.about_users_menu.0"),
          src: "/dashboard/users",
          icon: person,
          white_icon: Arrow_Dropdown,
          subMenus: [
            {
              title: t("sideBar_Dashbord.all_users_menu.0"),
              src: "service_Providers",

              cName: "sub-nav",
            },
            {
              title: t("sideBar_Dashbord.all_users_menu.1"),
              src: "patient_Users",

              cName: "sub-nav",
            },
            {
              title: t("sideBar_Dashbord.all_users_menu.2"),
              src: "Admin_Users",

              cName: "sub-nav",
            },
          ],
        },

        {
          title: t("sideBar_Dashbord.about_users_menu.1"),
          src: "/dashboard/services",
          icon: Services,
          white_icon: Arrow_Dropdown,

          subMenus: [
            {
              title: t("sideBar_Dashbord.Services.0"),
              src: "Doctors_Services",

              cName: "sub-nav",
            },
            {
              title: t("sideBar_Dashbord.Services.1"),
              src: "",

              cName: "sub-nav",
            },
            {
              title: t("sideBar_Dashbord.Services.2"),
              src: "",
            },
            {
              title: t("sideBar_Dashbord.Services.3"),
              src: "",
            },
            {
              title: t("sideBar_Dashbord.Services.4"),
              src: "",
            },
          ],
        },
        {
          title: t("sideBar_Dashbord.about_users_menu.2"),
          src: "/dashboard/requests",
          icon: person_pluse,
          white_icon: Arrow_Dropdown,
        },
        {
          title: t("sideBar_Dashbord.about_users_menu.3"),
          src: "/dashboard/report",
          gap: true,
          icon: Graph,
          white_icon: Arrow_Dropdown,
        },
        {
          title: t("sideBar_Dashbord.about_users_menu.4"),
          src: "/dashboard/notifications",
          icon: Notification,
          white_icon: Arrow_Dropdown,
        },
      ],
    },
    {
      main_title: t("sideBar_Dashbord.dashboard_menu.1"),
      Data: [
        {
          title: t("sideBar_Dashbord.about_dashboard_menu.0"),
          src: "/dashboard/settings",
          icon: setting,
          white_icon: Arrow_Dropdown,
        },

        {
          title: t("sideBar_Dashbord.about_dashboard_menu.1"),
          src: "/dashboard/signOut",
          icon: logout,
          white_icon: Arrow_Dropdown,
        },
      ],
    },
  ];
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [menueClicked, setMenueClicked] = useState(false);
  const toggleSidebar = () => {
    setOpen(!open);
  };
  const handleMenueClick = (white_icon) => {
    console.log(white_icon);
    setMenueClicked(true);
    const allMenue = document.querySelectorAll(".menue_li");
    const allspanMenue = document.querySelectorAll(".menue_li span");

    allMenue.forEach((item) => {
      item.addEventListener("click", () => {
        allMenue.forEach((li) => li.classList.remove("menue_active"));

        item.classList.add("menue_active");
      });
    });
    document.querySelector(".menue_active .icon-menue").style.src = white_icon;
  };

  return (
    <div className=" sidebar_dashboard h-full  flex justify-center flex-wrap  py-5     px-10 w-[20%]  ">
      <div
        className={` ${
          open ? "w-48 px-2 " : "w-0 "
        } lg:w-72     relative duration-500 flex flex-col gap-8  items-start  `}
      >
        {/* logo */}
        <div className=" justify-center  hidden lg:flex ">
          <Logo className="" />
        </div>
        <img src={logo} alt="" className="w-10 h-10 lg:hidden" />

        {/* Dashbord  */}
        <div className="flex grident  px-5 py-2 items-center gap-5  rounded-[8px] w-full ">
          <img src={vector} alt="" className="" />
          <p className="text-white hidden lg:block">
            {t("sideBar_Dashbord.main_title.0")}
          </p>
        </div>

        {Menus.map((Menu, index) => {
          return (
            <div className=" w-full  " key={index}>
              <p className="text-[16px] font-normal text-myGray-500 mb-4 hidden lg:block">
                {Menu.main_title}
              </p>
              <span className="w-6 h-5 inline-block border-b-2 border-myGray-100 lg:hidden "></span>
              <ul className="   w-full">
                {Menu.Data.map((data, index) => (
                  <>
                    <li
                      key={index}
                      className={`flex menue_li  hover:text-whitezrounded-md  cursor-pointer mb-5 rounded-md text-sm items-center gap-x-5 
          ${data.gap ? "mt-9" : "mt-2"}  `}
                      onClick={() => {
                        handleMenueClick(data.white_icon);
                      }}
                    >
                      <NavLink
                        to={`${data.src}`}
                        className="flex justify-between gap-5   p-2 w-full h-full "
                      >
                        <img
                          src={data.icon}
                          alt=""
                          className={`w-5 h-5 icon-menue bg-no-repeat bg-cover bg-center  `}
                        ></img>

                        <span className="flex-1 hidden  lg:inline-block">
                          {data.title}
                        </span>
                        {data.subMenus && (
                          <img
                            src={Arrow_Dropdown}
                            onClick={(e) => {
                              setSubMenuOpen(!subMenuOpen);
                            }}
                            className={`${
                              subMenuOpen && "rotate-90 "
                            } hidden lg:inline-block   `}
                          />
                        )}
                      </NavLink>
                    </li>
                    {/* {console.log(data)} */}
                    {data.subMenus && subMenuOpen && open && (
                      <ul className=" hidden lg:block">
                        {data.subMenus.map((subMenuItem, idx) => (
                          <li
                            key={idx}
                            className="  flex px-5 cursor-pointer    text-center text-[15px] text-myGray-600 py-5 hover:text-primary duration-75"
                          >
                            <NavLink
                              to={`${data.src}/${subMenuItem.src}`}
                              className="flex justify-between gap-5 lg:block"
                            >
                              {subMenuItem.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                    {/*  submenues in md and sm screen  */}
                    {/* {data.subMenus && (
                      <ul className="  block lg:hidden">
                        {data.subMenus.map((subMenuItem, idx) => (
                          <li
                            key={idx}
                            className="  flex px-5 cursor-pointer   text-center text-[15px] text-myGray-600 py-5 hover:text-primary duration-75"
                          >
                            <NavLink
                              to={`${data.src}/${subMenuItem.src}`}
                              className="flex justify-between gap-5 lg:block"
                            >
                              *
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )} */}
                  </>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <p className="text-myGray-500 text-[12px] hidden lg:block">
        We hope that our website will be useful to you and we are happy for you
        to <span>contact us</span>.
      </p>
    </div>
  );
};

export default SideBardashbord;

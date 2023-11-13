import { useState } from "react";
import Logo from "../../../utilities/Logo";

import { Link, NavLink } from "react-router-dom";
import "./SideBardashbord.css";
import { useTranslation } from "react-i18next";

import vector from "./SideBar_Dashbord_images/Vector.svg";

import person from "./SideBar_Dashbord_images/Person.svg";

import Arrow_Dropdown from "./SideBar_Dashbord_images/Arrow Dropdown.svg";
import Services from "./SideBar_Dashbord_images/Services.svg";
import person_pluse from "./SideBar_Dashbord_images/Person_Plus.svg";
import Graph from "./SideBar_Dashbord_images/Graph.svg";
import Notification from "./SideBar_Dashbord_images/Notification.svg";
import setting from "./SideBar_Dashbord_images/Setting.svg";
import logout from "./SideBar_Dashbord_images/Logout.svg";
import logo from "../../../../assets/icons/Logo.svg";
import { arrowDropdown } from "../../../utilities/Icons";
import Dashboard from "../../Dashboard/Dashboard";

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
          d_icon:
            "M4.5 4.5C5.04701 4.5 5.57161 4.2827 5.95841 3.89591C6.3452 3.50911 6.5625 2.98451 6.5625 2.4375C6.5625 1.89049 6.3452 1.36589 5.95841 0.979092C5.57161 0.592299 5.04701 0.375 4.5 0.375C3.95299 0.375 3.42839 0.592299 3.04159 0.979092C2.6548 1.36589 2.4375 1.89049 2.4375 2.4375C2.4375 2.98451 2.6548 3.50911 3.04159 3.89591C3.42839 4.2827 3.95299 4.5 4.5 4.5ZM5.875 2.4375C5.875 2.80217 5.73013 3.15191 5.47227 3.40977C5.21441 3.66763 4.86467 3.8125 4.5 3.8125C4.13533 3.8125 3.78559 3.66763 3.52773 3.40977C3.26987 3.15191 3.125 2.80217 3.125 2.4375C3.125 2.07283 3.26987 1.72309 3.52773 1.46523C3.78559 1.20737 4.13533 1.0625 4.5 1.0625C4.86467 1.0625 5.21441 1.20737 5.47227 1.46523C5.73013 1.72309 5.875 2.07283 5.875 2.4375ZM8.625 7.9375C8.625 8.625 7.9375 8.625 7.9375 8.625H1.0625C1.0625 8.625 0.375 8.625 0.375 7.9375C0.375 7.25 1.0625 5.1875 4.5 5.1875C7.9375 5.1875 8.625 7.25 8.625 7.9375ZM7.9375 7.93475C7.93681 7.76562 7.83162 7.25688 7.3655 6.79075C6.91725 6.3425 6.07369 5.875 4.5 5.875C2.92563 5.875 2.08275 6.3425 1.6345 6.79075C1.16838 7.25688 1.06388 7.76562 1.0625 7.93475H7.9375Z",
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
          d_icon:
            "m288 144a110.94 110.94 0 0 0 -31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1 -56 56 55.4 55.4 0 0 1 -27-7.24 111.71 111.71 0 1 0 107-80.76zm284.52 97.4c-54.23-105.81-161.59-177.4-284.52-177.4s-230.32 71.64-284.52 177.41a32.35 32.35 0 0 0 0 29.19c54.23 105.81 161.59 177.4 284.52 177.4s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zm-284.52 158.6c-98.65 0-189.09-55-237.93-144 48.84-89 139.27-144 237.93-144s189.09 55 237.93 144c-48.83 89-139.27 144-237.93 144z",

          subMenus: [
            {
              title: t("sideBar_Dashbord.Services.0"),
              src: "Doctors_Services",

              cName: "sub-nav",
            },
            {
              title: t("sideBar_Dashbord.Services.1"),
              src: "Hospital_Services",

              cName: "sub-nav",
            },
            {
              title: t("sideBar_Dashbord.Services.2"),
              src: "Pharmacy_Services",
            },
            {
              title: t("sideBar_Dashbord.Services.3"),
              src: "Clinic_Services",
            },
            {
              title: t("sideBar_Dashbord.Services.4"),
              src: "Lab_Services",
            },
          ],
        },
        {
          title: t("sideBar_Dashbord.about_users_menu.2"),
          src: "/dashboard/requests",
          icon: person_pluse,
          d_icon:
            "M4.5 4.5C5.04701 4.5 5.57161 4.2827 5.95841 3.89591C6.3452 3.50911 6.5625 2.98451 6.5625 2.4375C6.5625 1.89049 6.3452 1.36589 5.95841 0.979092C5.57161 0.592299 5.04701 0.375 4.5 0.375C3.95299 0.375 3.42839 0.592299 3.04159 0.979092C2.6548 1.36589 2.4375 1.89049 2.4375 2.4375C2.4375 2.98451 2.6548 3.50911 3.04159 3.89591C3.42839 4.2827 3.95299 4.5 4.5 4.5ZM5.875 2.4375C5.875 2.80217 5.73013 3.15191 5.47227 3.40977C5.21441 3.66763 4.86467 3.8125 4.5 3.8125C4.13533 3.8125 3.78559 3.66763 3.52773 3.40977C3.26987 3.15191 3.125 2.80217 3.125 2.4375C3.125 2.07283 3.26987 1.72309 3.52773 1.46523C3.78559 1.20737 4.13533 1.0625 4.5 1.0625C4.86467 1.0625 5.21441 1.20737 5.47227 1.46523C5.73013 1.72309 5.875 2.07283 5.875 2.4375ZM8.625 7.9375C8.625 8.625 7.9375 8.625 7.9375 8.625H1.0625C1.0625 8.625 0.375 8.625 0.375 7.9375C0.375 7.25 1.0625 5.1875 4.5 5.1875C7.9375 5.1875 8.625 7.25 8.625 7.9375ZM7.9375 7.93475C7.93681 7.76562 7.83162 7.25688 7.3655 6.79075C6.91725 6.3425 6.07369 5.875 4.5 5.875C2.92563 5.875 2.08275 6.3425 1.6345 6.79075C1.16838 7.25688 1.06388 7.76562 1.0625 7.93475H7.9375Z",
        },
        {
          title: t("sideBar_Dashbord.about_users_menu.3"),
          src: "/dashboard/report",
          gap: true,
          icon: Graph,
          d_icon:
            "M4.5 4.5C5.04701 4.5 5.57161 4.2827 5.95841 3.89591C6.3452 3.50911 6.5625 2.98451 6.5625 2.4375C6.5625 1.89049 6.3452 1.36589 5.95841 0.979092C5.57161 0.592299 5.04701 0.375 4.5 0.375C3.95299 0.375 3.42839 0.592299 3.04159 0.979092C2.6548 1.36589 2.4375 1.89049 2.4375 2.4375C2.4375 2.98451 2.6548 3.50911 3.04159 3.89591C3.42839 4.2827 3.95299 4.5 4.5 4.5ZM5.875 2.4375C5.875 2.80217 5.73013 3.15191 5.47227 3.40977C5.21441 3.66763 4.86467 3.8125 4.5 3.8125C4.13533 3.8125 3.78559 3.66763 3.52773 3.40977C3.26987 3.15191 3.125 2.80217 3.125 2.4375C3.125 2.07283 3.26987 1.72309 3.52773 1.46523C3.78559 1.20737 4.13533 1.0625 4.5 1.0625C4.86467 1.0625 5.21441 1.20737 5.47227 1.46523C5.73013 1.72309 5.875 2.07283 5.875 2.4375ZM8.625 7.9375C8.625 8.625 7.9375 8.625 7.9375 8.625H1.0625C1.0625 8.625 0.375 8.625 0.375 7.9375C0.375 7.25 1.0625 5.1875 4.5 5.1875C7.9375 5.1875 8.625 7.25 8.625 7.9375ZM7.9375 7.93475C7.93681 7.76562 7.83162 7.25688 7.3655 6.79075C6.91725 6.3425 6.07369 5.875 4.5 5.875C2.92563 5.875 2.08275 6.3425 1.6345 6.79075C1.16838 7.25688 1.06388 7.76562 1.0625 7.93475H7.9375Z",
        },
        {
          title: t("sideBar_Dashbord.about_users_menu.4"),
          src: "/dashboard/products",
          icon: Notification,
          d_icon:
            "M4.5 4.5C5.04701 4.5 5.57161 4.2827 5.95841 3.89591C6.3452 3.50911 6.5625 2.98451 6.5625 2.4375C6.5625 1.89049 6.3452 1.36589 5.95841 0.979092C5.57161 0.592299 5.04701 0.375 4.5 0.375C3.95299 0.375 3.42839 0.592299 3.04159 0.979092C2.6548 1.36589 2.4375 1.89049 2.4375 2.4375C2.4375 2.98451 2.6548 3.50911 3.04159 3.89591C3.42839 4.2827 3.95299 4.5 4.5 4.5ZM5.875 2.4375C5.875 2.80217 5.73013 3.15191 5.47227 3.40977C5.21441 3.66763 4.86467 3.8125 4.5 3.8125C4.13533 3.8125 3.78559 3.66763 3.52773 3.40977C3.26987 3.15191 3.125 2.80217 3.125 2.4375C3.125 2.07283 3.26987 1.72309 3.52773 1.46523C3.78559 1.20737 4.13533 1.0625 4.5 1.0625C4.86467 1.0625 5.21441 1.20737 5.47227 1.46523C5.73013 1.72309 5.875 2.07283 5.875 2.4375ZM8.625 7.9375C8.625 8.625 7.9375 8.625 7.9375 8.625H1.0625C1.0625 8.625 0.375 8.625 0.375 7.9375C0.375 7.25 1.0625 5.1875 4.5 5.1875C7.9375 5.1875 8.625 7.25 8.625 7.9375ZM7.9375 7.93475C7.93681 7.76562 7.83162 7.25688 7.3655 6.79075C6.91725 6.3425 6.07369 5.875 4.5 5.875C2.92563 5.875 2.08275 6.3425 1.6345 6.79075C1.16838 7.25688 1.06388 7.76562 1.0625 7.93475H7.9375Z",
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
          d_icon:
            "M4.5 4.5C5.04701 4.5 5.57161 4.2827 5.95841 3.89591C6.3452 3.50911 6.5625 2.98451 6.5625 2.4375C6.5625 1.89049 6.3452 1.36589 5.95841 0.979092C5.57161 0.592299 5.04701 0.375 4.5 0.375C3.95299 0.375 3.42839 0.592299 3.04159 0.979092C2.6548 1.36589 2.4375 1.89049 2.4375 2.4375C2.4375 2.98451 2.6548 3.50911 3.04159 3.89591C3.42839 4.2827 3.95299 4.5 4.5 4.5ZM5.875 2.4375C5.875 2.80217 5.73013 3.15191 5.47227 3.40977C5.21441 3.66763 4.86467 3.8125 4.5 3.8125C4.13533 3.8125 3.78559 3.66763 3.52773 3.40977C3.26987 3.15191 3.125 2.80217 3.125 2.4375C3.125 2.07283 3.26987 1.72309 3.52773 1.46523C3.78559 1.20737 4.13533 1.0625 4.5 1.0625C4.86467 1.0625 5.21441 1.20737 5.47227 1.46523C5.73013 1.72309 5.875 2.07283 5.875 2.4375ZM8.625 7.9375C8.625 8.625 7.9375 8.625 7.9375 8.625H1.0625C1.0625 8.625 0.375 8.625 0.375 7.9375C0.375 7.25 1.0625 5.1875 4.5 5.1875C7.9375 5.1875 8.625 7.25 8.625 7.9375ZM7.9375 7.93475C7.93681 7.76562 7.83162 7.25688 7.3655 6.79075C6.91725 6.3425 6.07369 5.875 4.5 5.875C2.92563 5.875 2.08275 6.3425 1.6345 6.79075C1.16838 7.25688 1.06388 7.76562 1.0625 7.93475H7.9375Z",
        },

        {
          title: t("sideBar_Dashbord.about_dashboard_menu.1"),
          src: "/dashboard/signOut",
          icon: logout,
          d_icon:
            "M4.5 4.5C5.04701 4.5 5.57161 4.2827 5.95841 3.89591C6.3452 3.50911 6.5625 2.98451 6.5625 2.4375C6.5625 1.89049 6.3452 1.36589 5.95841 0.979092C5.57161 0.592299 5.04701 0.375 4.5 0.375C3.95299 0.375 3.42839 0.592299 3.04159 0.979092C2.6548 1.36589 2.4375 1.89049 2.4375 2.4375C2.4375 2.98451 2.6548 3.50911 3.04159 3.89591C3.42839 4.2827 3.95299 4.5 4.5 4.5ZM5.875 2.4375C5.875 2.80217 5.73013 3.15191 5.47227 3.40977C5.21441 3.66763 4.86467 3.8125 4.5 3.8125C4.13533 3.8125 3.78559 3.66763 3.52773 3.40977C3.26987 3.15191 3.125 2.80217 3.125 2.4375C3.125 2.07283 3.26987 1.72309 3.52773 1.46523C3.78559 1.20737 4.13533 1.0625 4.5 1.0625C4.86467 1.0625 5.21441 1.20737 5.47227 1.46523C5.73013 1.72309 5.875 2.07283 5.875 2.4375ZM8.625 7.9375C8.625 8.625 7.9375 8.625 7.9375 8.625H1.0625C1.0625 8.625 0.375 8.625 0.375 7.9375C0.375 7.25 1.0625 5.1875 4.5 5.1875C7.9375 5.1875 8.625 7.25 8.625 7.9375ZM7.9375 7.93475C7.93681 7.76562 7.83162 7.25688 7.3655 6.79075C6.91725 6.3425 6.07369 5.875 4.5 5.875C2.92563 5.875 2.08275 6.3425 1.6345 6.79075C1.16838 7.25688 1.06388 7.76562 1.0625 7.93475H7.9375Z",
        },
      ],
    },
  ];
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [subMenuType, setSubMenuType] = useState("");

  const [menueClicked, setMenueClicked] = useState(false);
  const toggleSidebar = () => {
    setOpen(!open);
  };

  const handleMenueClick = (white_icon, black_icon) => {
    console.log(black_icon);
    setMenueClicked(true);
    const allMenue = document.querySelectorAll(".menue_li");
    const alliconMenue = document.querySelectorAll(".menue_li .icon-menue");
    allMenue.forEach((item) => {
      item.addEventListener("click", () => {
        allMenue.forEach((li) => li.classList.remove("menue_active"));

        item.classList.add("menue_active");

        alliconMenue.forEach((icon) => {
          icon.classList.remove("white_active");
        });
        document.querySelector(".menue_active  .white_active").src = white_icon;
      });
    });
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
        <div className="flex grident  px-5 py-2 items-center gap-5 bg-gradient-to-r from-primary to-secondary rounded-[8px] w-full ">
          <img src={vector} alt="" className="" />
          <p className="text-white hidden lg:block">
            <Link to={"profile"}>{t("sideBar_Dashbord.main_title.0")}</Link>
          </p>
        </div>

        {Menus.map((Menu, index) => {
          // Menue has main title and Data
          return (
            <div className=" w-full  " key={index}>
              <p className="text-[16px] font-normal text-myGray-500 mb-4 hidden lg:block">
                {Menu.main_title}
              </p>
              <span className="w-6 h-5 inline-block border-b-2 border-myGray-100 lg:hidden "></span>
              <ul className="   w-full ">
                {/* data has title src and sub menus */}
                {Menu.Data.map((data, index) => (
                  <>
                    <li
                      key={index}
                      className={`flex menue_li  hover:text-whitezrounded-md  cursor-pointer mb-5 rounded-md text-sm items-center gap-x-5 
                      ${data.gap ? "mt-9" : "mt-2"}  `}
                      onClick={() => {
                        handleMenueClick(data.white_icon, data.icon);
                      }}
                    >
                      <NavLink
                        to={`${data.src}`}
                        className="flex justify-between gap-5   p-2 w-full h-full "
                      >
                        <svg
                          viewBox="0 0 9 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[2rem] h-[1rem]"
                        >
                          <path
                            opacity="0.7"
                            d={`${data.d_icon}`}
                            fill="#000"
                          />
                        </svg>
                        {/* <img
                          src={data.icon}
                          alt=""
                          className={`w-5 h-5 icon-menue bg-no-repeat bg-cover bg-center  `}
                        ></img> */}

                        <span className="flex-1 hidden  lg:inline-block">
                          {data.title}
                        </span>
                        {data.subMenus && (
                          <img
                            src={Arrow_Dropdown}
                            onClick={(e) => {
                              setSubMenuOpen(!subMenuOpen);
                              setSubMenuType(data.title);
                              console.log(subMenuOpen);
                            }}
                            className={`${
                              subMenuOpen && "rotate-90 "
                            } hidden lg:inline-block   `}
                          />
                        )}
                      </NavLink>
                    </li>

                    {data.subMenus &&
                      subMenuType === data.title &&
                      subMenuOpen &&
                      open && (
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

      <p className="relative text-myGray-500 text-[14px] rounded-md hidden lg:block bg-myGray-200 px-4 py-5 font-semibold leading-[18px]">
        We hope that our website will be useful to you and we are happy for you
        to <span className="text-success cursor-pointer">contact us</span>.
      </p>
    </div>
  );
};

export default SideBardashbord;

import { useState } from "react";
import Logo from "../../../utilities/Logo";

import {  NavLink } from "react-router-dom";
import "./SideBardashbord.css";
import { useTranslation } from "react-i18next";

import vector from "./SideBar_Dashbord_images/Vector.svg";

import {
  Log_Out,
  Person_pluse,
  Settings,
  Graph,
  Notification,
  Person,
} from "../../../utilities/Icons";
import Arrow_Dropdown from "./SideBar_Dashbord_images/Arrow Dropdown.svg";
import logo from "../../../../assets/icons/Logo.svg";
import { Services } from "../../../utilities/Icons";

const SideBardashbord = () => {
  const { t } = useTranslation("global");
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [subMenuType, setSubMenuType] = useState("");

  const [menueClicked, setMenueClicked] = useState("");

  const Menus = [
    {
      main_title: t("sideBar_Dashbord.dashboard_menu.0"),
      Data: [
        {
          title: t("sideBar_Dashbord.about_users_menu.0"),
          src: "/dashboard/users",
          icon: <Person stoke="white" name_menue={menueClicked} />,
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
          icon: <Services stoke="white" name_menue={menueClicked} />,

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
          icon: <Person_pluse stoke="white" name_menue={menueClicked} />,
        },
        {
          title: t("sideBar_Dashbord.about_users_menu.3"),
          src: "/dashboard/report",
          gap: true,
          icon: <Graph stoke="white" name_menue={menueClicked} />,

       
        },
        {
          title: t("sideBar_Dashbord.about_users_menu.4"),
          src: "/dashboard/products",
          icon: <Notification stoke="white" name_menue={menueClicked} />,

         
        },
      ],
    },
    {
      main_title: t("sideBar_Dashbord.dashboard_menu.1"),
      Data: [
        {
          title: t("sideBar_Dashbord.about_dashboard_menu.0"),
          src: "/dashboard/settings",
          icon: <Settings stoke="white" name_menue={menueClicked} />,

 
        },

        {
          title: t("sideBar_Dashbord.about_dashboard_menu.1"),
          src: "/dashboard/signOut",
          icon: <Log_Out stoke="white" name_menue={menueClicked} />,

      
        },
      ],
    },
  ];
  const toggleSidebar = () => {
    setOpen(!open);
  };

  const handleMenueClick = (name_menue) => {
    setMenueClicked(name_menue);
    const allMenue = document.querySelectorAll(".menue_li");
    allMenue.forEach((item) => {
      item.addEventListener("click", () => {
        allMenue.forEach((li) => li.classList.remove("menue_active"));

        item.classList.add("menue_active");
      });
    });
  };

  return (
    <div className=" sidebar_dashboard  flex justify-center flex-wrap  py-5  shadow-lg    px-10 w-[20%]  ">
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
            {t("sideBar_Dashbord.main_title.0")}
          </p>
        </div>

        {Menus.map((Menu, index) => {
          // Menue has main title and Data
          return (
            <div className=" w-full  " key={index}>
              <p className="text-[16px] font-normal text-myGray-500 mb-3 hidden lg:block">
                {Menu.main_title}
              </p>
              <span className="w-6 h-5 inline-block border-b-2 border-myGray-100 lg:hidden "></span>
              <ul className="   w-full ">
                {/* data has title src and sub menus */}
                {Menu.Data.map((data, index) => (
                  <>
                    <li
                      key={index}
                      className={`flex menue_li  hover:text-whitezrounded-md  cursor-pointer mb-4 rounded-md text-sm items-center gap-x-5 
                      ${data.gap ? "mt-9" : "mt-2"}  `}
                      onClick={() => {
                        handleMenueClick(data.title);
                      }}
                    >
                      <NavLink
                        to={`${data.src}`}
                        className="flex justify-between gap-5   p-2 w-full h-full "
                      >
                        {data.icon}
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

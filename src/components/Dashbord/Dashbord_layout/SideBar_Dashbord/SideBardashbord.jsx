import { useEffect, useState, useRef } from "react";
import Logo from "../../../utilities/Logo";

import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import vector from "./SideBar_Dashbord_images/Vector.svg";
import mini_menu from "../../../../assets/icons/mini-menu.svg";
import {
  Log_Out,
  Person_pluse,
  Settings,
  Graph,
  Notification,
  Person_sidebar,
  Arrow_dropdown,
} from "../../../utilities/Icons";
import { Dropdown_whithout_icon } from "../../../utilities/Dropdown";
import logo from "../../../../assets/icons/Logo.svg";
import { Services } from "../../../utilities/Icons";

const SideBardashbord = () => {
  const { t } = useTranslation("global");
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [DropdownOpen, SetDropdownOpen] = useState(false);
  const [Menus, setMenus] = useState([]);
  const [subMenuType, setSubMenuType] = useState("");
  const [menueClicked, setMenueClicked] = useState("");
  const Role = useLocation().pathname.split("/")[1];
  useEffect(() => {
    if (Role === "dashboard") {
      setMenus(Menus_Admin_dashboard);
    } else if (Role === "dashboard_service_provider") {
      setMenus(Menus_Service_provider);
    }
  }, [menueClicked]);

  const Menus_Admin_dashboard = [
    {
      main_title: t("sideBar_Dashbord.dashboard_menu.0"),
      Data: [
        {
          title: t("sideBar_Dashbord.AdminDashboard_about_users_menu.0"),
          src: "/dashboard/users",
          icon: <Person_sidebar menue={menueClicked} />,
          subMenus: [
            {
              name: t("sideBar_Dashbord.AdminDashbord_all_users_menu.0"),
              src: "service_Providers",
            },
            {
              name: t("sideBar_Dashbord.AdminDashbord_all_users_menu.1"),
              src: "patient_Users",
            },
            {
              name: t("sideBar_Dashbord.AdminDashbord_all_users_menu.2"),
              src: "Admin_Users",
            },
          ],
          cname: " top-[-4rem] rtl:start-[4rem]  ltr:left-16",
        },

        {
          title: t("sideBar_Dashbord.AdminDashboard_about_users_menu.1"),
          src: "/dashboard/services",
          icon: <Services stoke="white" menue={menueClicked} />,

          subMenus: [
            {
              name: t("sideBar_Dashbord.Admin_dashboard_Services.0"),
              src: "Doctors_Services",
            },
            {
              name: t("sideBar_Dashbord.Admin_dashboard_Services.1"),
              src: "Hospital_Services",
            },
            {
              name: t("sideBar_Dashbord.Admin_dashboard_Services.2"),
              src: "Pharmacy_Services",
            },
            {
              name: t("sideBar_Dashbord.Admin_dashboard_Services.3"),
              src: "Clinic_Services",
            },
            {
              name: t("sideBar_Dashbord.Admin_dashboard_Services.4"),
              src: "Lab_Services",
            },
          ],
          cname: "ltr:left-16 top-[-4rem] rtl:start-[4rem]",
        },
        {
          title: t("sideBar_Dashbord.AdminDashboard_about_users_menu.2"),
          src: "/dashboard/requests",
          icon: <Person_pluse stoke="white" menue={menueClicked} />,
        },
        {
          title: t("sideBar_Dashbord.AdminDashboard_about_users_menu.3"),
          src: "/dashboard/report",
          gap: true,
          icon: <Graph stoke="white" menue={menueClicked} />,
        },
        {
          title: t("sideBar_Dashbord.AdminDashboard_about_users_menu.4"),
          src: "/dashboard/products",
          icon: <Notification stoke="white" menue={menueClicked} />,
        },
      ],
    },
    {
      main_title: t("sideBar_Dashbord.dashboard_menu.1"),
      Data: [
        {
          title: t("sideBar_Dashbord.about_dashboard_menu.0"),
          src: "/dashboard/settings",
          icon: <Settings stoke="white" menue={menueClicked} />,
        },

        {
          title: t("sideBar_Dashbord.about_dashboard_menu.1"),
          src: "/dashboard/signOut",
          icon: <Log_Out stoke="white" menue={menueClicked} />,
        },
      ],
    },
  ];
  const Menus_Service_provider = [
    {
      main_title: t("sideBar_Dashbord.dashboard_menu.0"),
      Data: [
        {
          title: t("sideBar_Dashbord.serviceProvider_about_users_menu.0"),
          src: "/dashboard_service_provider/appointment",
          icon: <Person_sidebar stoke="white" menue={menueClicked} />,
          subMenus: [
            {
              name: t("sideBar_Dashbord.serviceProvider_Appointment.0"),
              src: "Request_Appointment",
            },
            {
              name: t("sideBar_Dashbord.serviceProvider_Appointment.1"),
              src: "Table_Appointment",
            },
          ],
          cname: " top-[-4rem] rtl:start-[4rem]  ltr:left-16",
        },

        {
          title: t("sideBar_Dashbord.serviceProvider_about_users_menu.1"),
          src: "/dashboard_service_provider/services",
          icon: <Services stoke="white" menue={menueClicked} />,

          subMenus: [
            {
              name: t("serviceProvider_dashboard_Services.0"),
              src: "Requests_servies",

              cName: "sub-nav",
            },
            {
              name: t("serviceProvider_dashboard_Services.1"),
              src: "Table_Services",

              cName: "sub-nav",
            },
          ],
          cname: "ltr:left-16 top-[-4rem] rtl:start-[4rem]",
        },
        {
          title: t("sideBar_Dashbord.serviceProvider_about_users_menu.2"),
          src: "/dashboard_service_provider/Products",
          icon: <Notification stoke="white" menue={menueClicked} />,
          subMenus: [
            {
              name: t("sideBar_Dashbord.serviceProvider_dashboard_products.0"),
              src: "Request_Product",
            },
            {
              name: t("sideBar_Dashbord.serviceProvider_dashboard_products.1"),
              src: "Table_Product",
            },
          ],
        },
        {
          title: t("sideBar_Dashbord.serviceProvider_about_users_menu.3"),
          src: "/dashboard_service_provider/report",
          gap: true,
          icon: <Graph stoke="white" menue={menueClicked} />,
        },
      ],
    },
    {
      main_title: t("sideBar_Dashbord.dashboard_menu.1"),
      Data: [
        {
          title: t("sideBar_Dashbord.about_dashboard_menu.0"),
          src: "/dashboard_service_provider/settings",
          icon: <Settings stoke="white" menue={menueClicked} />,
        },

        {
          title: t("sideBar_Dashbord.about_dashboard_menu.1"),
          src: "/dashboard_service_provider/signOut",
          icon: <Log_Out stoke="white" menue={menueClicked} />,
        },
      ],
    },
  ];
  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    // <div className={` sidebar_dashboard bg-red-200 flex justify-center flex-wrap  py-5  shadow-lg    px-10 w-[20%]  ${open ? "w-[20%]" :""} `}>
    <div
      className={`lg:w-72    sidebar_dashboard   relative duration-500  flex flex-col gap-8 shadow-lg  items-start py-5  lg:px-12 px-5`}
    >
      {/* logo */}
      <div className=" justify-center  hidden lg:flex ">
        <Logo className="" />
      </div>
      <img src={logo} alt="" className="w-10 h-10 lg:hidden" />

      {/* Dashbord  */}
      <div
        className="flex grident  px-5 py-2 items-center gap-5 bg-gradient-to-r from-primary to-secondary rounded-[8px] w-full "
        onClick={toggleSidebar}
      >
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
                    className={`${
                      menueClicked.title === data.title
                        ? "bg-gradient-to-r from-primary to-secondary text-white"
                        : ""
                    } flex menue_li  hover:text-whitezrounded-md  cursor-pointer mb-4 rounded-md text-sm items-center gap-x-5 
                      ${data.gap ? "mt-9" : "mt-2"}  `}
                    onClick={() => {
                      setMenueClicked(data);
                      SetDropdownOpen(!DropdownOpen);
                      setSubMenuType(data.title);
                    }}
                  >
                    <NavLink
                      to={`${data.src}`}
                      className={` flex justify-between gap-5   p-2 w-full h-full `}
                    >
                      {data.icon}

                      <span
                        className={`${
                          menueClicked.title === data.title ? " text-white" : ""
                        } flex-1 hidden  lg:inline-block`}
                      >
                        {data.title}
                      </span>
                      {data.subMenus && (
                        <div
                          onClick={(e) => {
                            setSubMenuOpen(!subMenuOpen);
                            setSubMenuType(data.title);
                          }}
                          className={`${
                            subMenuOpen && "rotate-90 "
                          } hidden lg:inline-block   `}
                        >
                          <Arrow_dropdown menue={menueClicked} stoke="white" />
                        </div>
                      )}
                    </NavLink>
                  </li>

                  {data.subMenus &&
                    subMenuType === data.title &&
                    subMenuOpen &&
                    open && (
                      <ul className=" hidden lg:block ">
                        {data.subMenus.map((subMenuItem, idx) => (
                          <li
                            key={idx}
                            className="  flex px-5 cursor-pointer    text-center text-[15px] text-myGray-600 py-5 hover:text-primary duration-75"
                          >
                            <NavLink
                              to={`${data.src}/${subMenuItem.src}`}
                              className="flex justify-between gap-5 lg:block"
                            >
                              {subMenuItem.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}

                  {/*  submenues in md and sm screen  */}
                  {data.subMenus && subMenuType === data.title && (
                    //  <Dropdown  />
                    <div
                      className={` ${
                        DropdownOpen === true ? " block" : "hidden"
                      }  lg:hidden`}
                    >
                      <Dropdown_whithout_icon
                        options={data.subMenus}
                        dataSrc={data.src}
                        SetDropdownOpen={SetDropdownOpen}
                        className={""}
                        icon={mini_menu}
                        showSlected={false}
                        ulClassname={`${data.cname}`}
                      />
                    </div>
                  )}
                </>
              ))}
            </ul>
          </div>
        );
      })}
      {/* </div> */}

      <p className="relative text-myGray-500 text-[14px] rounded-md hidden lg:block bg-myGray-200 px-4 py-5 font-semibold leading-[18px]">
        {t("sideBar_Dashbord.Contact_us_discrption")}
        <span className="text-success cursor-pointer">
          {" "}
          {t("sideBar_Dashbord.contact_us")}
        </span>
        .
      </p>
    </div>
  );
};

export default SideBardashbord;

import { useState } from "react";
import Logo from "../../../utilities/Logo";

import { Link, NavLink } from 'react-router-dom'

import vector from "./SideBar_Dashbord_images/Vector.svg";
import person from "./SideBar_Dashbord_images/Person.svg";
import Arrow_Dropdown from "./SideBar_Dashbord_images/Arrow Dropdown.svg";
import Services from "./SideBar_Dashbord_images/Services.svg";
import person_pluse from "./SideBar_Dashbord_images/Person Plus.svg";
import Graph from "./SideBar_Dashbord_images/Graph.svg";
import Notification from "./SideBar_Dashbord_images/Notification.svg";
import setting from "./SideBar_Dashbord_images/Setting.svg";
import logout from "./SideBar_Dashbord_images/Logout.svg";

const Menus = [
    {
        main_title: "About users",
        Data: [
            {
                title: "All Users",
                src: "/dashboard/users",
                icon: person,
                subMenus: [
                    {
                        title: "Service Providers",
                        src: "service_Providers",

                        cName: "sub-nav",
                    },
                    {
                        title: "Patient Users ",
                        src: "patient_Users",

                        cName: "sub-nav",
                    },
                    {
                        title: "Admin Users  ",
                        src: "Admin_Users",

                        cName: "sub-nav",
                    },
                ],
            },

            {
                title: "Services",
                src: "/dashboard/services",
                icon: Services,
                // subMenus: [
                //   {
                //     title: 'Service 1',
                //     src: '/services/services1',

                //     cName: 'sub-nav',
                //   },
                //   {
                //     title: 'Service 2',
                //     src: '/services/services2',

                //     cName: 'sub-nav',
                //   },
                //   {
                //     title: 'Service 3',
                //     src: '/services/services3',
                //   },
                // ],
            },
            { title: "Requests ", src: "/dashboard/requests", icon: person_pluse },
            { title: "Report  ", src: "/dashboard/report", gap: true, icon: Graph },
            { title: "Notifications", src: "/dashboard/notifications", icon: Notification },
        ],
    },
    {
        main_title: "About Dashboard",
        Data: [
            {
                title: "Settings",
                src: "/dashboard/settings",
                icon: setting,
            },

            {
                title: "Sign Out",
                src: "/dashboard/signOut",
                icon: logout,
            },
        ],
    },
];

const SideBardashbord = () => {
    const [open, setOpen] = useState(true);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const toggleSidebar = () => {
        setOpen(!open);
    };

    return (
        <div className=" h-screen  flex justify-center flex-wrap  py-5 px-10 w-[20%] ">
            {/* for md and sm screen */}
            {/* <button
      className="fixed lg:hidden z-90 bottom-10 right-8 bg-teal-800 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-teal-800   duration-300"
      onClick={toggleSidebar}
    >
      <span className="text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-6 m-auto"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
          />
        </svg>
      </span>
    </button> */}

            <div
                className={` ${
                    open ? "w-48 px-2 " : "w-0 "
                } lg:w-72  h-screen   relative duration-500 flex flex-col gap-8  items-start  `}
            >
                {/* logo */}
                <div className=" justify-center flex ">
                    <Logo />
                </div>
                {/* Dashbord  */}
                <div className="flex px-5 py-2 items-center gap-5 lg:grident rounded-[8px] w-full ">
                    <img src={vector} alt=""  className="red bg-red-500"/>
                    <p className="text-white hidden lg:block">Dashboard</p>
                </div>

                {Menus.map((Menu, index) => {
                    return (
                        <div className=" w-full " key={index}>
                            <p className="text-[16px] font-normal text-myGray-500 mb-4 hidden lg:block">
                                {Menu.main_title}
                            </p>
                            <span className="w-6 h-5 inline-block border-b-2 border-myGray-100 lg:hidden "></span>
                            <ul className="   w-full">
                                {Menu.Data.map((data, index) => (
                                    <>
                                        <li
                                           
                                            key={index}
                                            className={`flex menue_li rounded-md  cursor-pointer mb-5 text-w text-sm items-center gap-x-5 red
          ${data.gap ? "mt-9" : "mt-2"}  `}
          onClick={() =>{document.querySelectorAll(".menue_li").forEach((m,i)=>{m.classList.remove("grident")})
            document.querySelectorAll(".menue_li")[index].classList.add("grident");
            document.querySelectorAll(".menue_li")[index].classList.add("text-white")
        }
        }
                                        >
                                            <NavLink  to={`${data.src}`} className='flex justify-between gap-5   p-2 w-full h-full red'>
                                            
                                            <img src={data.icon} style={{backgroundImage:`url(${data.i})`}} alt="" className="fill-blue-500 " >
                                           
                                            </img>
                                            <span className="flex-1 hidden lg:inline-block">
                                                {data.title}
                                            </span>
                                            {data.subMenus && (
                                                <img
                                                    src={Arrow_Dropdown}
                                                    onClick={(e) => {
                                                        setSubMenuOpen(
                                                            !subMenuOpen
                                                        );
                                                    }}
                                                    className={`${
                                                        subMenuOpen &&
                                                        "rotate-90 "
                                                    } hidden lg:inline-block`}
                                                />
                                            )}
                                            </NavLink>
                                        </li>
                                        {data.subMenus &&
                                            subMenuOpen &&
                                            open && (
                                                <ul>
                                                    {data.subMenus.map(
                                                        (subMenuItem, idx) => (
                                                            <li
                                                                key={idx}
                                                                className="  flex px-5 cursor-pointer  text-center text-[15px] text-myGray-600 py-5 hover:text-primary duration-75"
                                                            >
                                                                <NavLink  to={`${data.src}/${subMenuItem.src}`} className='flex justify-between gap-5'>
                                                                {
                                                                    subMenuItem.title
                                                                }
                                                                </NavLink>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            )}
                                    </>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>

            <p className="text-myGray-500 text-[12px] hidden lg:block">
                We hope that our website will be useful to you and we are happy
                for you to <span>contact us</span>.
            </p>
        </div>
    );
};

export default SideBardashbord;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/icons/Logo.svg";
import menuIcon from "../../assets/icons/menu.svg";
import MultiLanguage from "./MultiLanguage";
import { useTranslation } from "react-i18next"; 
import Button from "../utilities/Button";
const NavBar = () => {
    const location = useLocation();
    const { t } = useTranslation("global");
    const [openList, setOpenList] = useState(false);
    const links = [
        { name: t("navbar.links.0"), to: "/" },
        { name: t("navbar.links.1"), to: "/services" },
        { name: t("navbar.links.2"), to: "/about-us" },
        { name: t("navbar.links.3"), to: "/contact-us" },
    ];
    return (
        <div className="pt-5 px-5">
            <div className="flex justify-between items-center border-b-2">
                <Link to="/">
                    <div className="flex flex-row">
                        <img src={logo} alt="logo" width={35} height={30} />
                        <div className="font-bold text-xl bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent">
                            Med - Sal
                        </div>
                    </div>
                </Link>
                <ul
                    className={`absolute flex items-start flex-col space-y-4 ps-5 left-0 shadow-lg w-full py-2 z-10 transition-all duration-300 ease-in text-myGray-600 bg-white
                lg:static lg:items-center lg:flex-row lg:space-y-0 lg:pe-0 lg:shadow-none lg:w-auto lg:h-auto
                ${openList ? "top-14 " : "top-[-490px]"}`}
                >
                    {links.map((page) => (
                        <li
                            key={page.name}
                            className={`me-0 lg:me-9 ${
                                location.pathname !== page.to
                                    ? ""
                                    : "text-secondary"
                            }`}
                        >
                            <Link to={page.to}>{page.name}</Link>
                        </li>
                    ))}
                    <li className="me-0 lg:me-9">
                        <MultiLanguage />
                    </li>
                    <li>
                        <Link to="/login">
                            <Button>{t("navbar.links.4")}</Button>
                        </Link>
                    </li>
                </ul>
                <div
                    onClick={() => {
                        setOpenList(!openList);
                    }}
                    className="lg:hidden text-3xl cursor-pointer"
                >
                    <img
                        src={menuIcon}
                        alt={"List-icon"}
                        name={openList ? "close" : "menu"}
                        width={32}
                        height={32}
                    />
                </div>
            </div>
        </div>
    );
};
export default NavBar;

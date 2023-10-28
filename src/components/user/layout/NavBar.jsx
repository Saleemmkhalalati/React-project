import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import Button from "../../utilities/Button";
import MultiLangDropdown from "../../utilities/MultiLangDropdown";
import Logo from "../../utilities/Logo";
import menuIcon from "../../../assets/icons/menu.svg";
const NavBar = () => {
    const location = useLocation();
    const { t } = useTranslation("global");
    const links = [
        { name: t("navbar.links.0"), to: "/" },
        { name: t("navbar.links.1"), to: "/services" },
        { name: t("navbar.links.2"), to: "/about-us" },
        { name: t("navbar.links.3"), to: "/contact-us" },
    ];
    const [openList, setOpenList] = useState(false);
    return (
        <div className="p-5">
            <div className="flex justify-between items-center border-b-2 py-2">
                <Logo />
                <ul
                    className={`absolute flex flex-col items-start ps-5 shadow-md lg w-full left-0 py-5 gap-x-9 gap-y-3 z-10 transition-all duration-300 ease-in text-myGray-600 bg-white
                                lg:static lg:flex-row lg:items-center lg:pe-0 lg:shadow-none lg:w-auto lg:h-auto lg:py-0
                                ${openList ? " top-16 " : " top-[-490px] "}`}
                >
                    {links.map((link) => (
                        <li
                            key={link.name}
                            className={`${
                                location.pathname !== link.to
                                    ? ""
                                    : "text-secondary"
                            }`}
                        >
                            <Link to={link.to}>{link.name}</Link>
                        </li>
                    ))}
                    <li className="">
                        <MultiLangDropdown />
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
                    className="lg:hidden cursor-pointer"
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
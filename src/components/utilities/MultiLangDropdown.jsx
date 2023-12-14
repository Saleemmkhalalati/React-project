import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import arrowIcon from "../../assets/icons/arrowDropdown.svg";
export default function MultiLangDropdown() {
  const [, i18n] = useTranslation("global");
  const langs = ["EN", "AR"];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(langs[0]);
  const dropdownRef = useRef(null);
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const handleSelect = (lang) => {
    handleChangeLanguage(lang.toLowerCase());
    document.documentElement.dir = lang === "AR" ? "rtl" : "ltr";
    document.documentElement.lang = lang === "AR" ? "ar" : "en";
    setSelectedItem(lang);
    setIsOpen(false);
  };
  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center whitespace-nowrap bg-transparent uppercase leading-normal transition duration-150 ease-in-out"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {selectedItem}
        <img src={arrowIcon} alt="icon" />
      </button>
      {isOpen && (
        <ul className="absolute shadow-xl -right-3 z-10">
          {langs.map((lang, index) => (
            <li
              className={`block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal uppercase hover:bg-myGray-100 active:bg-myGray-100 hover:text-secondary active:text-secondary`}
              key={index}
              onClick={() => handleSelect(lang)}
            >
              {lang}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

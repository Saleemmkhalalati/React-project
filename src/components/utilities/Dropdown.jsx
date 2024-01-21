import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Dropdown({
  value,
  options,
  onChange,
  className,
  icon,
  showSlected,
  ulClassname,
  classNameIcon,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(options[0].name);
  const dropdownRef = useRef(null);

  const handleSelect = (selected) => {
    onChange(selected);
    setSelectedItem(selected.name);
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
    <div
      className={` ${
        className ? className : "text-myGray-500"
      } relative  flex flex-col z-10  `}
      ref={dropdownRef}
    >
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="  flex  items-center p-2 justify-between z-10 tracking-wider border-myGray-100 active:border-primary duration-150 ease-in-out"
      >
        {showSlected ? selectedItem : ""}
        <img
          className={` ${classNameIcon ? classNameIcon : ""} `}
          src={icon}
          alt=""
        />
      </button>
      {isOpen && (
        <ul
          className={`${
            ulClassname ? ulClassname : ""
          } absolute shadow-md top-[100%]  z-20  mt-[4px]`}
        >
          {options.map((option, index) => (
            <li
              className={`block cursor-pointer w-full whitespace-nowrap bg-myGray-200 px-4 py-2 text-sm font-normal  hover:bg-myGray-100 active:bg-myGray-100 hover:text-secondary active:text-secondary ${
                option.type == "delete" ? " text-error hover:text-error " : ""
              }  `}
              key={index}
              onClick={() => {
                handleSelect(option);
              }}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

import PropTypes from "prop-types";

Dropdown.propTypes = {
  showSlected: PropTypes.bool,
  icon: PropTypes.string,
  className: PropTypes.string,
  ulClassname: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.string,
  onChange: PropTypes.func,
};
// ***************************************************************

export function Dropdown_whithout_icon({
  value,
  options,
  onChange,
  className,
  icon,
  showSlected,
  ulClassname,
  dataSrc,
  SetDropdownOpen,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(options[0].name);
  const dropdownRef = useRef(null);
  const handleSelect = (selected) => {
    // onChange(selected);
    setSelectedItem(selected);
    setIsOpen(false);
    console.log(`${dataSrc}/${selected.src}`);
  };
  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      SetDropdownOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className={` ${
        className ? className : ""
      } relative  flex flex-col   z-10 text-myGray-500 `}
      ref={dropdownRef}
    >
      {showSlected ? selectedItem : ""}

      <ul
        className={`${
          ulClassname ? ulClassname : ""
        } absolute shadow-md top-[100%  z-20  mt-[4px]`}
      >
        {options.map((option, index) => (
          <li
            className={`block cursor-pointer w-full whitespace-nowrap bg-myGray-200 px-4 py-2 text-sm font-normal  hover:bg-myGray-100 active:bg-myGray-100 hover:text-secondary active:text-secondary ${
              option.type == "delete" ? " text-error hover:text-error " : ""
            }  `}
            key={index}
            onClick={() => {
              handleSelect(option);
            }}
          >
            <NavLink
              to={`${dataSrc}/${option.src}`}
              className="flex justify-between gap-5 lg:block"
            >
              {option.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

Dropdown_whithout_icon.propTypes = {
  showSlected: PropTypes.bool,
  icon: PropTypes.string,
  className: PropTypes.string,
  ulClassname: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.string,
  onChange: PropTypes.func,
  dataSrc: PropTypes.string,
  dropdownRef: PropTypes.string,
  SetDropdownOpen: PropTypes.func,
};

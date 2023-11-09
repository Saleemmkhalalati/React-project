import { useState } from "react";
import arrowIcon from "../../assets/icons/arrowDropdown.svg";

export default function Dropdown({ value, options, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(options[0]);
  const handleSelect = (selected) => {
    setSelectedItem(selected);
    setIsOpen(false);
  };

  return (
    <div className="relative sm:w-[12rem] w-[7rem] flex flex-col  border-[1px] rounded-lg border-myGray-100 active:border-primary duration-150 ease-in-out text-myGray-500 ">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="  flex  items-center p-2 justify-between tracking-wider border-myGray-100 active:border-primary duration-150 ease-in-out"
      >
        {selectedItem}
        <img src={arrowIcon} alt="" />
      </button>
      {isOpen && (
        <ul className="absolute shadow-md top-[100%] w-full mt-[4px]">
          {options.map((option, index) => (
            <li
              className={`block cursor-pointer w-full whitespace-nowrap bg-myGray-200 px-4 py-2 text-sm font-normal  hover:bg-myGray-100 active:bg-myGray-100 hover:text-secondary active:text-secondary `}
              key={index}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>

    //       <div className="curser-pointer   border-2 border-solid border-myGray-200 flex focus:border-primary   justify-between  " >
    //             <select value={value} onChange={onChange} className="sm:px-2 sm:py-1  sm:w-[12rem] w-[8rem]  bg-transparent uppercase leading-normal transition duration-150 ease-in-out  ">

    //    {options.map((option) => (

    //      <option value={option.value} className="text-left hover:bg-myGray-100   active:bg-myGray-100 hover:text-secondary active:text-secondary">{option.value}</option>

    //    ))}

    //  </select>
    //       </div>
  );
}
import PropTypes from "prop-types";
Dropdown.propTypes = {
  value: PropTypes.string,
  options: PropTypes.string,
  onChange: PropTypes.func,
};

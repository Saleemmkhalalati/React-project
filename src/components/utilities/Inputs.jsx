import PropTypes from "prop-types";
import { useState } from "react";

//datePik library
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import isSameDay from "date-fns/isSameDay";
import { format } from "date-fns";

export function FInput({
  label,
  name,
  value,
  onBlur,
  onChange,
  icon,
  errorMsg,
  type,
}) {
  console.log(errorMsg);
  return (
    <div className="relative">
      <div
        className={`flex flex-row py-2 px-3 border-[1px] ${
          errorMsg !== ""
            ? "border-error "
            : "border-myGray-400 focus-within:border-primary "
        } bg-white rounded-lg transition-all duration-100 ease-in-out`}
      >
        <label
          htmlFor={name}
          className="relative z-[0] w-full me-1 transition-all duration-100 ease-in"
        >
          <input
            className="peer w-full placeholder-transparent text-mySlate outline-0 focus:outline-none"
            placeholder="placeholder"
            id={name}
            name={name}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            type={type}
          />
          <span className="absolute start-0 -top-[1.40rem] px-1 text-mySlate text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-mySlate peer-placeholder-shown:top-0 peer-focus:-top-[1.40rem] peer-focus:text-mySlate peer-focus:text-sm rounded-md bg-gradient-to-b from-transparent from-65% to-white to-35%">
            {label}
          </span>
        </label>
        <img src={icon} width={12} height={12} alt="icon" />
      </div>
      {errorMsg !== "" && (
        <p className="ps-1 pt-2 text-error font-normal text-xs">{errorMsg}</p>
      )}
    </div>
  );
}
FInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.oneOf(["text", "password", "email", "number", "date"])
    .isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  icon: PropTypes.string.isRequired,
  errorMsg: PropTypes.string.isRequired,
};
export function Textarea({
  label,
  value,
  onBlur,
  onChange,
  errorMsg,
  rows,
  name,
  className,
}) {
  return (
    <div>
      <div className={`relative z-[0]`}>
        <textarea
          className={`peer py-2 px-3 resize-none w-full ${
            className ? className : "h-52"
          }  rounded-md border-[1px]
                    bg-transparent placeholder-transparent  text-mySlate outline-0 focus:outline-none
                    ${
                      errorMsg !== ""
                        ? "border-error"
                        : "border-myGray-400 focus-within:border-primary"
                    } text-mySlate placeholder-mySlate bg-white outline-0 placeholder:focus:opacity-0`}
          placeholder="placeholder"
          rows={rows}
          id={name}
          name={name}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
        />
        <label
          htmlFor={name}
          className="absolute start-3 -top-[0.85rem] px-1 text-mySlate text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-mySlate peer-placeholder-shown:top-1 peer-focus:-top-[0.85rem] peer-focus:text-mySlate peer-focus:text-sm rounded-md bg-gradient-to-b from-transparent from-65% to-white to-35%"
        >
          {label}
        </label>
      </div>
      {errorMsg !== "" && (
        <p className="ps-1 text-error font-normal text-xs">{errorMsg}</p>
      )}
    </div>
  );
}
Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  errorMsg: PropTypes.string.isRequired,
  rows: PropTypes.number,
};
import { easeInOut, motion } from "framer-motion";

export function InputDatePicker({
  label,
  name,
  value,
  onBlur,
  onChange,
  icon,
  errorMsg,
  type,
}) {
  const dateFormat = "MM/dd/yyyy";
  const customInput = (
    <div
      className={`relative flex bg-white px-4 py-2 border-solid text-mySlate border-[1px] rounded-md  ${
        errorMsg
          ? "border-error "
          : "border-myGray-400 focus-within:border-primary "
      } `}
    >
      <label
        htmlFor={name}
        className="relative z-[0] w-full me-1 transition-all duration-100 ease-in"
      >
        <input
          className="peer cursor-pointer w-full placeholder-transparent text-mySlate outline-0 focus:outline-none"
          placeholder="p"
          type={type}
          name={name}
          value={value ? format(new Date(value), dateFormat) : ""}
          onBlur={onBlur}
          readOnly
          onChange={onChange}
        />
        <span className="absolute start-0 -top-[1.40rem] px-1 text-mySlate text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-mySlate peer-placeholder-shown:top-0 peer-focus:-top-[1.40rem] peer-focus:text-mySlate peer-focus:text-sm rounded-md bg-gradient-to-b from-transparent from-65% to-white to-35%">
          {label}
        </span>
      </label>
      <img className="w-4" src={icon} alt={name} />
    </div>
  );

  const handleTodayClick = () => {
    onChange(new Date());
  };

  return (
    <DatePicker
      dateFormat={dateFormat}
      customInput={customInput}
      selected={value}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      showPopperArrow={false}
      dayClassName={(date) =>
        value && isSameDay(date, new Date(value))
          ? "bg-gradient-to-b from-primary from-15% to-secondary to-85% rounded"
          : ""
      }
      calendarClassName="border-none shadow"
      className={`flex flex-row border-[1px] border-solid w-full outline-none py-2 px-4 rounded ${
        errorMsg
          ? "border-error"
          : "border-myGray-400 focus-within:border-primary"
      }`}
    >
      <div
        onClick={handleTodayClick}
        className="text-secondary text-center cursor-pointer"
      >
        Today
      </div>
    </DatePicker>
  );
}

export function Input({
  label,
  name,
  value,
  onBlur,
  onChange,
  icon,
  iconOnClick,
  errorMsg,
  type,
  handleOnclick,
}) {
  console.log(errorMsg);
  return (
    <div className="flex  flex-col gap-1">
      <div
        className={`relative flex bg-white px-4 py-2 border-solid text-mySlate border-[1px] rounded-md  ${
          errorMsg
            ? "border-error "
            : "border-myGray-400 focus-within:border-primary "
        } `}
      >
        <label
          htmlFor={name}
          className="relative z-[0] w-full me-1 transition-all duration-100 ease-in"
        >
          <input
            className="peer w-full placeholder-transparent text-mySlate outline-0 focus:outline-none"
            placeholder="p"
            type={type}
            name={name}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            onClick={handleOnclick}
          />
          <span className="absolute start-0 -top-[1.40rem] px-1 text-mySlate text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-mySlate peer-placeholder-shown:top-0 peer-focus:-top-[1.40rem] peer-focus:text-mySlate peer-focus:text-sm rounded-md bg-gradient-to-b from-transparent from-65% to-white to-35%">
            {label}
          </span>
        </label>
        <img
          src={icon}
          alt={name}
          onClick={iconOnClick}
          className={`w-4 h-w-4 ${iconOnClick ? "cursor-pointer" : ""}`}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: easeInOut }}
        className="text-xs text-error"
      >
        {errorMsg}
      </motion.div>
    </div>
  );
}
Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.oneOf(["text", "password", "email", "number", "date"])
    .isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  icon: PropTypes.string.isRequired,
  iconOnClick: PropTypes.func,
  errorMsg: PropTypes.string.isRequired,
};

export function InputFile({
  className,
  label,
  name,
  onBlur,
  onChange,
  value,
  icon,
  errorMsg,
  id,
  hasValueTrue,
  isInvalidType,
  classNameIcon,
  getInputProps,
  getRootProps,
  isDragActive,
}) {
  return (
    <>
      <div {...getRootProps}>
        <label
          className={`relative cursor-pointer bg-white  border-solid text-mySlate border-[1px] rounded-md 
        ${className ? className : ""}

        ${
          hasValueTrue
            ? "border-success"
            : errorMsg || isInvalidType
            ? "border-error"
            : "border-myGray-400"
        }
        ${isDragActive ? "border-primary shadow-lg" : ""}
        `}
          htmlFor={name}
        >
          {label}
          <input
            {...getInputProps}
            type="file"
            className={"hidden "}
            id={id}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
          />
          <img
            src={icon}
            alt={name}
            className={`${classNameIcon ? classNameIcon : ""}`}
          />
        </label>
        <p className="ps-1 pt-2 text-error font-normal text-xs">{errorMsg}</p>
      </div>
    </>
  );
}

export function DashInput({
  name,
  value,
  onBlur,
  onChange,
  icon,
  errorMsg,
  type,
  isDisabled,
  className,
  placeholder,
}) {
  return (
    <div className="relatie ">
      <div
        className={`flex  flex-row py-2 px-3 border-[1px] items-center justify-between focus-within:border-primary  ${
          errorMsg !== "" && !isDisabled ? "border-error " : "border-myGray-400"
        } bg-white rounded-lg transition-all duration-100 ease-in-out`}
      >
        <input
          className={`${
            className ? className : ""
          } text-sm text-myGray-500 outline-0 focus:outline-none bg-white w-full`}
          id={name}
          name={name}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          type={type}
          disabled={isDisabled}
          placeholder={placeholder}
        />
        <img src={icon} width={12} height={12} alt="icon" />
        {/* {icon} */}
      </div>

      {errorMsg !== "" && (
        <p className="ps-1 pt-2 text-error font-normal text-xs">{errorMsg}</p>
      )}
    </div>
  );
}
FInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.oneOf(["text", "password", "email", "number", "date"])
    .isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  icon: PropTypes.string.isRequired,
  errorMsg: PropTypes.string.isRequired,
};

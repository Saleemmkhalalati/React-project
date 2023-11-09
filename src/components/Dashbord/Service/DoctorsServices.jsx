import Typography from "../../utilities/Typography";
import ref from "./Services_img/Refrech.svg";
import share from "./Services_img/Export.svg";
import { useState } from "react";
import "./DoctorsServices.css";
export default function DoctorServices() {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const array = [
    "Dental",
    " Optics",
    "Nutritionist",
    "Home Care",
    "Plastic Surgery",
    "Radiologis",
    "Aesthetics",
  ];

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    // هنا يمكنك تنفيذ الدالة التي تريدها
    console.log(`الخيار المحدد هو: ${event.target.value}`);
  };

  return (
    <div className="bg-myGray-200 h-screen">
      <div className="flex justify-between px-5 pt-4 pb-4">
        <div className="flex  items-center gap-1 ">
          <span className="text-secondary">Dashboard / </span>
          <Typography component={"p"}>Services /</Typography>
          <Typography component={"p"}>Doctors Services</Typography>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 ">
            <img src={ref} alt="icon" />
            <botton className="text-myGray-500 text-sm cursor-pointer hover:text-myGray-600">
              Refresh
            </botton>
          </div>
          <div className="flex items-center gap-1 ">
            <img src={share} alt="icon" />
            <botton className="text-myGray-500 text-sm cursor-pointer hover:text-myGray-600">
              Export Table
            </botton>
          </div>
        </div>
      </div>
      <div className="bg-white min-h-screen mx-5 rounded-md  ">
        <div className=" flex items-center gap-5  px-5 py-5 border-b">
          <div>
            <span className=" border-solid border-[1px] border-myGray-100 px-5 py-2 rounded-lg text-myGray-500 text-sm">
              <span className="text-sm text-myGray-500 ">3</span> record
            </span>
          </div>

          <div>
            <select
              className="custom-dropdown border-solid border-[1px] border-myGray-100 ps-1 pe-14 text-sm text-myGray-500 py-2  rounded-lg cursor-pointer outline-none focus:border-primary"
              value={selectedValue}
              onChange={handleChange}
            >
              {array.map((value, index) => (
                <option
                  className="text-sm text-myGray-600  bg-myGray-200 border-solid border-[1px] border-myGray-100"
                  key={index}
                  value={value}
                >
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-5">
            <label className="text-sm text-myGray-500 cursor-pointer">
              <input
                className="me-2"
                type="radio"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
              />
              All services
            </label>

            <div>
              <label className="text-sm text-myGray-500 cursor-pointer">
                <input
                  className="me-2"
                  type="radio"
                  value="option2"
                  checked={selectedOption === "option2"}
                  onChange={handleOptionChange}
                />
                Last services
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

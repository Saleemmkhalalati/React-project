import React, { useState } from "react";
import Dropdown from "../../utilities/Dropdown";
import mini_menu from "../../../assets/icons/mini-menu.svg";
const Table = ({ columns, rows, points }) => {
  const [point, setPoint] = useState(null);
  console.log(point);
  const handlepoint = (e) => {
    setPoint(e.target.value);
  };
  
  return (
    <div className="overflow-hidden px-7 min-h-screen overflow-x-auto ">
      <table className="table-auto w-full overflow-x-auto">
        <thead className="">
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="px-4 py-6 text-myGray-500 text-sm">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`relative ${
                rowIndex % 2 === 0 ? "bg-myGray-200 border-b" : ""
              }`}
            >
              <td className="py-8 px-5 text-sm text-gray-500 flex justify-center ">
                {(rowIndex + 1).toString().padStart(2, "0")}
              </td>

              {Object.values(row).map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`text-center py-8 text-sm ${
                    cell === "Active"
                      ? "text-success"
                      : cell === "Not Active"
                      ? "text-error"
                      : "text-gray-500"
                  }`}
                >
                  {cell}
                </td>
              ))}
              <td className="flex justify-center items-center">
                <Dropdown
                  className={"text-xl text-myGray-600 text-start p-0 "}
                  options={points}
                  value={point}
                  onChange={handlepoint}
                  icon={mini_menu}
                  showSlected={false}
                  ulClassname={" ltr:-start-28 -top-0 rtl:start-[-7rem]"}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

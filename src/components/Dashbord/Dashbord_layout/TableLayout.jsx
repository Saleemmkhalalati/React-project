import React, { useState } from "react";
import Dropdown from "../../utilities/Dropdown";
import mini_menu from "../../../assets/icons/mini-menu.svg";
import pdf from "../../../assets/icons/pdf.svg";

const Table = ({ columns, rows, points, handlepoint, point, className }) => {
  return (
    <div
      className={` ${
        className ? className : ""
      } px-2 lg:px-7  overflow-x-auto overflow-hidden    `}
    >
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
              {Object.entries(row).map(([key, value], cellIndex) => (
                <td
                  key={cellIndex}
                  className={`text-center py-8 text-sm ${
                    key === "status"
                      ? value === "Active"
                        ? "text-success"
                        : value === "Not Active"
                        ? "text-error"
                        : "text-gray-500"
                      : "text-gray-500"
                  }`}
                >
                  {key === "pdf" ? (
                    <a
                      href={value} // استخدام مسار الـ PDF من الباك إند
                      target="_blank"
                      className="text-error hover:underline"
                    >
                      <img
                        src={pdf}
                        alt="PDF Icon"
                        className=" w-4 h-4 inline me-1"
                      />
                      PDF
                    </a>
                  ) : (
                    value
                  )}
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

export default Table 

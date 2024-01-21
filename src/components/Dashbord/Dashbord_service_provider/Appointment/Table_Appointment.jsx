import React, { useState, useRef, useEffect } from "react";
import Content from "../../Dashbord_layout/Content/Content";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import Dropdown from "../../../utilities/Dropdown";
import arrowIcon from "../../../../assets/icons/arrowDropdown.svg";
import { InputDatePicker } from "../../../utilities/Inputs";

function Table_Appointment() {
  const myOptions = [
    { name: "Month", type: "dayGridMonth" },
    { name: "Schedule", type: "timeGridDay" },
    { name: "Day", type: "timeGridWeek" },
  ];
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  console.log(selectedDate);
  const [valueDropdown, setValueDtopdown] = useState("");
  const calendarRef = useRef(null);

  const handleChangeDropdown = (selected) => {
    setValueDtopdown(selected.type);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e);
    console.log(selectedDate);
  };

  useEffect(() => {
    // عندما يتغير التاريخ المحدد
    if (calendarRef.current) {
      calendarRef.current.getApi().gotoDate(selectedDate);
    }
  }, [selectedDate]);

  return (
    <div>
      <Content
        classNameChildern={
          "min-h-screen bg-white px-7 py-5 mt-4 rounded -z-[0]"
        }
        path={"Appointment / Table Appointment"}
      >
        <div className="flex items-center gap-4">
          <div>
            {/* <InputDatePicker
              className={"border-none "}
              icon={arrowIcon}
              value={selectedDate ? selectedDate : ""}
              onChange={handleDateChange}
              customdateFormat={"dd/MM/yyyy"}
            /> */}
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>
          <div>
            <Dropdown
              options={myOptions}
              value={valueDropdown}
              onChange={handleChangeDropdown}
              className=" w-20 z-50 text-black "
              icon={arrowIcon}
              showSlected={true}
              ulClassname={"w-full text-black  "}
            />
          </div>
        </div>
        <FullCalendar
          ref={calendarRef}
          key={valueDropdown}
          plugins={[dayGridPlugin, timeGridPlugin]}
          initialView={valueDropdown}
          events={[
            { title: "مهمة 1", date: "2024-01-20" },
            { title: "مهمة 2", date: "2024-01-25" },
            // يمكنك إضافة المزيد من الأحداث هنا
          ]}
          headerToolbar={{
            right: "",
            left: "",
          }}
        />
      </Content>
    </div>
  );
}

export default Table_Appointment;

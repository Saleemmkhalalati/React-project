import React, { useState, useRef, useEffect } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import Dropdown from "../../../../utilities/Dropdown";
import arrowIcon from "../../../../../assets/icons/arrowDropdown.svg";
import { InputDatePicker } from "../../../../utilities/Inputs";
import { format, isToday } from "date-fns";
import { Calendar } from "@fullcalendar/core";
import listPlugin from "@fullcalendar/list";
import "./Appointment.css";
import Typography from "../../../../utilities/Typography";
import Click_Outsite from "../../../../utilities/Click_Outsite";
import Content from "../../../Dashbord_layout/Content/Content";
import NoData from "../../../Dashbord_layout/NoData/NoData";
function Table_Appointment() {
  const events = [
    {
      id: "1",
      resourceId: "1",
      date: today,
      time: "09:00 AM - 11:00 PM",
      title: "Cholecystectomy",
      start: today + "T09:00:00",
      end: today + "T11:00:00",
      color: "#2F4050",
    },
    {
      id: "2",
      resourceId: "2",
      date: today,
      time: "11:15 AM - 14:00 PM",

      title: "Kidney Transplant",
      start: today + "T11:15:00",
      end: today + "T14:00:00",
      color: "#5A81FD",
    },
    {
      id: "3",
      resourceId: "3",
      date: today,
      time: "08:00 AM - 11:00 AM",

      title: "Regular Medical Examination",
      start: today + "T13:15:00",
      end: today + "T16:00:00",
      color: "#FAA209 ",
    },
  ];

  const myOptions = [
    { name: "Month", type: "dayGridMonth" },
    { name: "Schedule", type: "listWeek" },
    { name: "Day", type: "dayGrid" },
  ];
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [valueDropdown, setValueDropdown] = useState("dayGridMonth");
  const [event, SetEvent] = useState("");

  const calendarRef = useRef(null);

  const handleChangeDropdown = (selected) => {
    setValueDropdown(selected.type);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e);
    console.log(format(e, "MMMM,dd,yyyy"));
  };

  useEffect(() => {
    if (calendarRef.current) {
      calendarRef.current.getApi().gotoDate(selectedDate);
    }
  }, [selectedDate]);

  const handleEvent = () => {
    SetEvent(true);
    console.log(event);
  };
  const handleCloseEvent = () => {
    SetEvent(false);
  };
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
            <InputDatePicker
              className={"border-none "}
              icon={arrowIcon}
              value={selectedDate}
              onChange={handleDateChange}
              // showYearDropdown={true}
              customdateFormat={"MMMM,dd,yyyy"}
              classNameInput={"w-28"}
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
        {valueDropdown === "listWeek" ? (
          <div className="schedule">
            <FullCalendar
              ref={calendarRef}
              initialView={valueDropdown}
              key={valueDropdown}
              plugins={[listPlugin]}
              events={[
                { title: "zero", date: "2024-01-22", from_time: "08:00:00" },
                { title: "one", date: "2024-01-24", from_time: "08:00:00" },
                { title: "one", date: "2024-01-24", from_time: "08:00:00" },
                { title: "one", date: "2024-01-27", from_time: "08:00:00" },
                { title: "one", date: "2024-01-28", from_time: "08:00:00" },
              ]}
              eventClassNames={"text-xs border-none py-1 px-0 cursor-pointer"}
              noEventsContent={<NoData />}
              noEventsClassNames={"bg-white "}
              eventClick={handleEvent}
              headerToolbar={{
                right: "",
                left: "",
              }}
              dayHeaderFormat={{ weekday: "long" }}
              firstDay={1}
              eventContent={({ event }) => (
                <div className="">
                  {event.title}
                  {""}
                </div>
              )}
              dayCellContent={({ date }) => (
                <div
                  className={`${
                    isToday(date)
                      ? "text-primary text-2xl font-bold  "
                      : "text-myGray-500"
                  }`}
                >
                  {format(date, date ? "dd" : "")}
                </div>
              )}
              dayHeaderClassNames={`font-medium`}
              dayHeaderContent={({ date }) => (
                <div className="flex justify-between">
                  <div className="text-md font-normal py-2">
                    {date.toLocaleDateString("en-US", { weekday: "long" })}
                  </div>
                  <div className="text-myGray-500">{format(date, "dd")}</div>
                </div>
              )}
            />
          </div>
        ) : (
          ""
        )}

        {valueDropdown === "dayGridMonth" ? (
          <div className="month">
            <FullCalendar
              ref={calendarRef}
              initialView={valueDropdown}
              key={valueDropdown}
              plugins={[dayGridPlugin]}
              events={events}
              eventClassNames={
                "text-xs bg-myGray-400 border-none py-1 px-0 cursor-pointer hover:bg-myGray-500 "
              }
              noEventsContent={<NoData />}
              noEventsClassNames={"bg-white "}
              eventClick={handleEvent}
              headerToolbar={{
                right: "",
                left: "",
              }}
              dayHeaderFormat={{ weekday: "long" }}
              firstDay={1}
              dayCellContent={({ date }) => (
                <div
                  className={`${
                    isToday(date)
                      ? "text-primary text-2xl font-bold  "
                      : "text-myGray-500"
                  }`}
                >
                  {format(date, date ? "dd" : "")}
                </div>
              )}
              dayHeaderClassNames={`font-medium`}
              dayHeaderContent={({ date }) => (
                <div className="text-md font-normal py-2  ">
                  {date.toLocaleDateString("en-US", { weekday: "long" })}
                </div>
              )}
            />
          </div>
        ) : (
          ""
        )}
        {valueDropdown === "dayGrid" ? (
          <div className="day">
            <FullCalendar
              ref={calendarRef}
              initialView={valueDropdown}
              key={valueDropdown}
              plugins={[dayGridPlugin]}
              events={[
                { title: "zero", date: "2024-01-22", from_time: "08:00:00" },
                { title: "one", date: "2024-01-24", from_time: "08:00:00" },
                { title: "one", date: "2024-01-24", from_time: "08:00:00" },
                { title: "one", date: "2024-01-27", from_time: "08:00:00" },
                { title: "one", date: "2024-01-28", from_time: "08:00:00" },
              ]}
              eventClassNames={
                "text-xs border-none py-1 px-0 cursor-pointer bg-white text-black  "
              }
              noEventsContent={<NoData />}
              noEventsClassNames={"bg-white "}
              eventClick={handleEvent}
              headerToolbar={{
                right: "",
                left: "",
              }}
              eventContent={({ event }) => {
                return (
                  <div className="hover:bg-red-100 text-myGray-500 py-1 px-3 rounded bg-blue-100 transition-all my-5">
                    {event.from_time}
                    {event.title}

                    {""}
                  </div>
                );
              }}
              dayHeaderFormat={{ weekday: "long" }}
              firstDay={1}
              dayCellContent={({ date }) => (
                <div
                  className={`${
                    isToday(date)
                      ? "text-primary text-2xl font-bold   "
                      : "text-myGray-500"
                  }`}
                >
                  {format(date, date ? "dd" : "")}
                </div>
              )}
              dayHeaderClassNames={`font-medium`}
              dayHeaderContent={({ date }) => (
                <div className="text-md font-normal py-2  ">
                  {date.toLocaleDateString("en-US", { weekday: "long" })}
                </div>
              )}
            />
          </div>
        ) : (
          ""
        )}
        <Click_Outsite onClick={handleCloseEvent}>
          {event ? (
            <div className="lg:h-[43rem] w-[28rem] bg-white shadow absolute end-5 top-[8.5rem] z-50 rounded flex flex-col gap-7 px-7 py-14">
              <Typography component={"h3"}>
                Regular Medical Examination
              </Typography>
              <Typography component={"h4"}>Saturday, September 2023</Typography>
              <div className="flex flex-col gap-1">
                <Typography className={"text-primary"} component={"h4"}>
                  Discription:
                </Typography>
                <Typography className={""} component={"h4"}>
                  This periodic examination includes all the patients we follow
                  on this site and is repeated every month of the year until we
                  ensure that all our patients are in good health and that no
                  new symptoms appear on them. Therefore, this periodic
                  examination is held.
                </Typography>
              </div>
              <div className="flex flex-col gap-1">
                <Typography className={"text-primary"} component={"h4"}>
                  Location:
                </Typography>
                <Typography className={""} component={"h4"}>
                  Regular medical examination in my clinic.
                </Typography>
              </div>
              <div className="flex flex-col gap-1">
                <Typography className={"text-primary"} component={"h4"}>
                  Person:
                </Typography>
                <Typography className={""} component={"h4"}>
                  Reem Basel - Medical Examination.
                </Typography>
              </div>
              <div className="flex flex-col gap-1">
                <Typography className={"text-primary"} component={"h4"}>
                  Date:
                </Typography>
                <Typography className={""} component={"h4"}>
                  For 13:15 pm To 16:00 pm.
                </Typography>
              </div>
            </div>
          ) : (
            ""
          )}
        </Click_Outsite>
      </Content>
    </div>
  );
}

export default Table_Appointment;

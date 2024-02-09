import React, { useState, useRef, useEffect } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import Dropdown from "../../../../utilities/Dropdown";
import arrowIcon from "../../../../../assets/icons/arrowDropdown.svg";
import { InputDatePicker } from "../../../../utilities/Inputs";
import { format, isToday, isAfter } from "date-fns";
import listPlugin from "@fullcalendar/list";
import "./Appointment.css";
import Typography from "../../../../utilities/Typography";
import Click_Outsite from "../../../../utilities/Click_Outsite";
import Content from "../../../Dashbord_layout/Content/Content";
import NoData from "../../../Dashbord_layout/NoData/NoData";
import moment from "moment";
import { useTranslation } from "react-i18next";

function Table_Appointment() {
  const { t } = useTranslation("global");
  const events = [
    {
      date: "2024-01-24",
      details: {
        from_time: "08:00:00",
        to_time: "09:00:00",
        patient_id: 29,
        patient_email: "maamoun.h.najeeb@gmail.com",
        service_id: 8,
        title: "chandeleer",
        provider_id: 30,
        provider_business_name: "Remostart",
        location_id: 3,
        diagonsis: null,
        created_at: "2023-12-09T20:56:54.340246",
        note: "Dddd",
      },
    },
    {
      date: "2024-01-25",
      details: {
        from_time: "08:00:00",
        to_time: "09:00:00",
        patient_id: 29,
        patient_email: "maamoun.h.najeeb@gmail.com",
        service_id: 8,
        title: "chandeleer",
        provider_id: 30,
        provider_business_name: "Remostart",
        location_id: 3,
        diagonsis: null,
        created_at: "2023-12-09T20:56:54.340246",
        note: null,
      },
    },
    {
      date: "2024-01-28",
      details: {
        from_time: "08:00:00",
        to_time: "09:00:00",
        patient_id: 29,
        patient_email: "maamoun.h.najeeb@gmail.com",
        service_id: 8,
        title: "chandeleer",
        provider_id: 30,
        provider_business_name: "Remostart",
        location_id: 3,
        diagonsis: null,
        created_at: "2023-12-09T20:56:54.340246",
        note: "ssss",
      },
    },
    {
      date: "2024-02-03",
      details: {
        from_time: "08:00:00",
        to_time: "09:00:00",
        patient_id: 29,
        patient_email: "maamoun.h.najeeb@gmail.com",
        service_id: 8,
        title: " chandeleer",
        provider_id: 30,
        provider_business_name: "Remostart",
        location_id: 3,
        diagonsis: null,
        created_at: "2023-12-09T20:56:54.340246",
        note: "This appointment is not sure yet.",
      },
    },
    {
      date: "2024-02-01",
      details: {
        from_time: "08:00:00",
        to_time: "09:00:00",
        patient_id: 29,
        patient_email: "maamoun.h.najeeb@gmail.com",
        service_id: 8,
        title: "chandeleer",
        provider_id: 30,
        provider_business_name: "Remostart",
        location_id: 3,
        diagonsis: null,
        created_at: "2023-12-09T20:56:54.340246",
        note: null,
      },
    },
    {
      date: "2024-02-06",
      details: {
        from_time: "11:00:00",
        to_time: "12:00:00",
        patient_id: 29,
        patient_email: "maamoun.h.najeeb@gmail.com",
        service_id: 8,
        title: "chandeleer",
        provider_id: 30,
        provider_business_name: "Remostart",
        location_id: 3,
        diagonsis: null,
        created_at: "2023-12-09T20:56:54.340246",
        note: null,
      },
    },
    {
      date: "2024-02-07",
      details: {
        from_time: "08:00:00",
        to_time: "09:00:00",
        patient_id: 29,
        patient_email: "maamoun.h.najeeb@gmail.com",
        service_id: 8,
        title: "chandeleer",
        provider_id: 30,
        provider_business_name: "Remostart",
        location_id: 3,
        diagonsis: null,
        created_at: "2023-12-09T20:56:54.340246",
        note: null,
      },
    },
    {
      date: "2024-02-07",
      details: {
        from_time: "10:00:00",
        to_time: "11:00:00",
        patient_id: 29,
        patient_email: "maamoun.h.najeeb@gmail.com",
        service_id: 8,
        title: "chandeleer",
        provider_id: 30,
        provider_business_name: "Remostart",
        location_id: 3,
        diagonsis: null,
        created_at: "2023-12-09T20:56:54.340246",
        note: null,
      },
    },
    {
      date: "2024-02-07",
      details: {
        from_time: "13:00:00",
        to_time: "14:00:00",
        patient_id: 29,
        patient_email: "maamoun.h.najeeb@gmail.com",
        service_id: 8,
        title: "chandeleer",
        provider_id: 30,
        provider_business_name: "Remostart",
        location_id: 3,
        diagonsis: null,
        created_at: "2023-12-09T20:56:54.340246",
        note: null,
      },
    },
  ];
  const dayEvents = events.map((event) => ({
    title: event.details.title,
    start: moment(`${event.date}T${event.details.from_time}`).format(),
    end: moment(`${event.date}T${event.details.to_time}`).format(),
  }));
  const myOptions = [
    { name: t("tableAppointment.0"), type: "dayGridMonth" },
    { name: t("tableAppointment.1"), type: "listWeek" },
    { name: t("tableAppointment.2"), type: "timeGridDay" },
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
        path={`${t("tableAppointment.3")} / ${t("tableAppointment.4")}`}
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
              classNameInput={"w-32"}
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
              events={events}
              eventClassNames={"text-xs border-none py-1 px-0 cursor-pointer"}
              noEventsContent={<NoData />}
              noEventsClassNames={"bg-white "}
              eventClick={handleEvent}
              headerToolbar={{
                right: "",
                left: "",
              }}
              dayHeaderFormat={{ weekday: "long" }}
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
              eventContent={({ event }) => {
                return (
                  <>
                    <div className="flex items-center gap-16 p-1">
                      <div className="flex items-center gap-7 text-myGray-500 rounded-md cursor-pointer hover:bg-red-50 transition-all py-2 px-4">
                        <span className="w-[0.50rem] h-[0.50rem] bg-blue-500 rounded-full"></span>

                        <div className="flex items-center">
                          <p className="text-black text-sm">
                            {event.extendedProps.details.from_time}
                          </p>
                          <span className="text-black text-sm">-</span>
                          <p className="text-black text-sm">
                            {event.extendedProps.details.to_time}
                          </p>
                        </div>

                        <p className="text-sm text-myGray-500">
                          {event.extendedProps.details.title}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-myGray-500">
                        <p className="text-error ">Note:</p>
                        {""}
                        {event.extendedProps.details.note}
                      </div>
                    </div>
                  </>
                );
              }}
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
              eventClassNames={"border-none "}
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
              eventContent={({ event }) => {
                return (
                  <div className="flex  gap-1 p-1 bg-blue-100 text-myGray-500 rounded-md cursor-pointer hover:bg-red-50 transition-all">
                    <p>{event.extendedProps.details.title}</p>
                    <p>{event.extendedProps.details.from_time}</p>
                  </div>
                );
              }}
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

        {valueDropdown === "timeGridDay" ? (
          <div className="day">
            <FullCalendar
              ref={calendarRef}
              initialView={valueDropdown}
              key={valueDropdown}
              plugins={[timeGridPlugin]}
              events={dayEvents}
              slotMinTime="08:00:00"
              slotLabelFormat={{
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
                hourCycle: "h12",
              }}
              headerToolbar={false}
              eventContent={({ event }) => {
                const formattedTime = format(event.start, "HH:mm:ss");
                return (
                  <div className="flex gap-2 py-1 px-3 bg-blue-100 text-myGray-500 rounded-md cursor-pointer hover:bg-red-50 transition-all">
                    <p>{event.title}</p>
                    <span>-</span>
                    <p>{formattedTime}</p>
                  </div>
                );
              }}
              noEventsContent={<NoData />}
              noEventsClassNames={"bg-white "}
              eventClick={handleEvent}
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

import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
import Content from "../../Dashbord_layout/Content/Content"
import Home from '../Service_provider_home/Home'
import Typography from '../../../utilities/Typography'
import Docter from "./img/Doctor.png"
import img1 from "./img/Frame 32 (1).png"
import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import "./Calendar.css"
import img_1 from "./img/Frame 32 (1).png"
import img_2 from "./img/Frame 32 (2).png"
import img_3 from "./img/Frame 32 (3).png"


const Appointment = () => {
    const { t } = useTranslation("global");
    const [Data, setData] = useState({})
    const data = {
        "last_five": [
            {
                "date": "2023-12-15",
                "details": {
                    "from_time": "08:00:00",
                    "to_time": "09:00:00",
                    "patient_id": 29,
                    "patient_email": "maamoun.h.najeeb@gmail.com",
                    "service_id": 9,
                    "service_title": "check ear",
                    "provider_id": 30,
                    "provider_business_name": "Remostart",
                    "location_id": 4,
                    "diagonsis": null,
                    "result": null,
                    "status": "accepted",
                    "created_at": "2023-12-09T20:57:04.261432",
                    "patient_image": "D:\\new\\media\\profile_images\\2023\\12\\5\\704e2cea1c23445488ee1e401df551ea.png"
                }
            },
            {
                "date": "2023-12-15",
                "details": {
                    "from_time": "08:00:00",
                    "to_time": "09:00:00",
                    "patient_id": 29,
                    "patient_email": "maamoun.h.najeeb@gmail.com",
                    "service_id": 8,
                    "service_title": "check Endocrine",
                    "provider_id": 30,
                    "provider_business_name": "Remostart",
                    "location_id": 3,
                    "diagonsis": null,
                    "result": null,
                    "status": "accepted",
                    "created_at": "2023-12-09T20:56:54.340246",
                    "patient_image": "D:\\new\\media\\profile_images\\2023\\12\\5\\704e2cea1c23445488ee1e401df551ea.png"
                }
            },
            {
                "date": "2023-12-15",
                "details": {
                    "from_time": "08:00:00",
                    "to_time": "09:00:00",
                    "patient_id": 29,
                    "patient_email": "maamoun.h.najeeb@gmail.com",
                    "service_id": 7,
                    "service_title": "check stomach",
                    "provider_id": 30,
                    "provider_business_name": "Remostart",
                    "location_id": 3,
                    "diagonsis": null,
                    "result": null,
                    "status": "accepted",
                    "created_at": "2023-12-09T18:31:30.756170",
                    "patient_image": "D:\\new\\media\\profile_images\\2023\\12\\5\\704e2cea1c23445488ee1e401df551ea.png"
                }
            }
        ],
        "today_appointments": [
            {
                "date": "2023-12-15",
                "details": {
                    "from_time": "09:00:00",
                    "to_time": "10:00:00",
                    "patient_id": 23,
                    "patient_email": "maamoun.haj.najeeb@gmail.com",
                    "service_id": 7,
                    "service_title": "check stomach",
                    "provider_id": 30,
                    "provider_business_name": "Remostart",
                    "location_id": 3,
                    "diagonsis": null,
                    "result": null,
                    "status": "rejected",
                    "created_at": "2023-12-09T21:00:29.850293",
                    "patient_image": "D:\\new\\media\\profile_images\\2023\\12\\5\\d0172c3d05a24618957dbf2718ce24b0.png"
                }
            },
            {
                "date": "2023-12-15",
                "details": {
                    "from_time": "09:00:00",
                    "to_time": "10:00:00",
                    "patient_id": 23,
                    "patient_email": "maamoun.haj.najeeb@gmail.com",
                    "service_id": 8,
                    "service_title": "check Endocrine",
                    "provider_id": 30,
                    "provider_business_name": "Remostart",
                    "location_id": 3,
                    "diagonsis": null,
                    "result": null,
                    "status": "rejected",
                    "created_at": "2023-12-09T21:00:32.948291",
                    "patient_image": "D:\\new\\media\\profile_images\\2023\\12\\5\\d0172c3d05a24618957dbf2718ce24b0.png"
                }
            },
            {
                "date": "2023-12-15",
                "details": {
                    "from_time": "08:00:00",
                    "to_time": "09:00:00",
                    "patient_id": 29,


                    "patient_email": "maamoun.h.najeeb@gmail.com",
                    "service_id": 8,
                    "service_title": "check Endocrine",
                    "provider_id": 30,
                    "provider_business_name": "Remostart",
                    "location_id": 3,
                    "diagonsis": null,
                    "result": null,
                    "status": "accepted",
                    "created_at": "2023-12-09T20:56:54.340246",
                    "patient_image": "D:\\new\\media\\profile_images\\2023\\12\\5\\704e2cea1c23445488ee1e401df551ea.png"
                }
            },
            {
                "date": "2023-12-15",
                "details": {
                    "from_time": "09:00:00",
                    "to_time": "10:00:00",
                    "patient_id": 23,
                    "patient_email": "maamoun.haj.najeeb@gmail.com",
                    "service_id": 9,
                    "service_title": "check ear",
                    "provider_id": 30,
                    "provider_business_name": "Remostart",
                    "location_id": 4,
                    "diagonsis": null,
                    "result": null,
                    "status": "accepted",
                    "created_at": "2023-12-09T21:00:38.743626",
                    "patient_image": "D:\\new\\media\\profile_images\\2023\\12\\5\\d0172c3d05a24618957dbf2718ce24b0.png"
                }
            },
            {
                "date": "2023-12-15",
                "details": {
                    "from_time": "08:00:00",
                    "to_time": "09:00:00",
                    "patient_id": 29,
                    "patient_email": "maamoun.h.najeeb@gmail.com",
                    "service_id": 9,
                    "service_title": "check ear",
                    "provider_id": 30,
                    "provider_business_name": "Remostart",
                    "location_id": 4,
                    "diagonsis": null,
                    "result": null,
                    "status": "accepted",
                    "created_at": "2023-12-09T20:57:04.261432",
                    "patient_image": "D:\\new\\media\\profile_images\\2023\\12\\5\\704e2cea1c23445488ee1e401df551ea.png"
                }
            },
            {
                "date": "2023-12-15",
                "details": {
                    "from_time": "09:00:00",
                    "to_time": "10:00:00",
                    "patient_id": 23,
                    "patient_email": "maamoun.haj.najeeb@gmail.com",
                    "service_id": 10,
                    "service_title": "check eye",
                    "provider_id": 30,
                    "provider_business_name": "Remostart",
                    "location_id": 4,
                    "diagonsis": null,
                    "result": null,
                    "status": "accepted",
                    "created_at": "2023-12-09T21:00:42.431956",
                    "patient_image": "D:\\new\\media\\profile_images\\2023\\12\\5\\d0172c3d05a24618957dbf2718ce24b0.png"
                }
            },
            {
                "date": "2023-12-15",
                "details": {
                    "from_time": "08:00:00",
                    "to_time": "09:00:00",
                    "patient_id": 29,
                    "patient_email": "maamoun.h.najeeb@gmail.com",
                    "service_id": 10,
                    "service_title": "check eye",
                    "provider_id": 30,
                    "provider_business_name": "Remostart",
                    "location_id": 4,
                    "diagonsis": null,
                    "result": null,
                    "status": "rejected",
                    "created_at": "2023-12-09T20:57:09.278776",
                    "patient_image": "D:\\new\\media\\profile_images\\2023\\12\\5\\704e2cea1c23445488ee1e401df551ea.png"
                }
            }
        ]
    }


    useEffect(() => {
        setData(data)
    })
    const today = new Date().toISOString().split('T')[0];
    const resources = [
        { id: '1', title: 'Resource 1' },
        { id: '2', title: 'Resource 2' },
        { id: '3', title: 'Resource 3' }
    ];

    const events = [
        {
            id: '1',
            resourceId: '1',
            date: today,
            time: '09:00 AM - 11:00 PM',
            img: img_1,
            title: 'Cholecystectomy',
            start: today + 'T09:00:00',
            end: today + 'T11:00:00',
            color: '#2F4050'
        },
        {
            id: '2',
            resourceId: '2',
            date: today,
            time: '11:15 AM - 14:00 PM',
            img: img_2,
            title: 'Kidney Transplant',
            start: today + 'T11:15:00',
            end: today + 'T14:00:00',
            color: '#5A81FD'
        },
        {
            id: '3',
            resourceId: '3',
            date: today,
            time: '08:00 AM - 11:00 AM',
            img: img_3,
            title: 'Regular Medical Examination',
            start: today + 'T13:15:00',
            end: today + 'T16:00:00',
            color: '#FAA209 '
        }
    ];

    const eventContent = (eventInfo) => {
        return (
            <div className='flex justify-between  z-10 mt-2 '>

                <div>
                    <p className='!text-[#434343] z-30 bg-red-10'>{eventInfo.event.title}</p>
                    <p> {eventInfo.event.extendedProps.time}</p>
                </div>


                <img src={eventInfo.event.extendedProps.img} alt="Event" />
            </div>
        );
    };

    const eventDidMount = (arg) => {
        const eventColor = arg.event.extendedProps.color;
        // Custom styling for events
        arg.el.style.backgroundColor = eventColor;
        arg.el.style.opacity = "70%"
        arg.el.style.padding = "5px"
        arg.el.style.borderRadius = '5px';
        arg.el.style.width = '250px';

    };



    return (
        <div className=''>
            {Data ?
                (
                    <Content path="Home Page" >
                        <div>
                            <div className='bg-white relative py-[3.2rem] mt-6'>
                                <div className='w-[40%] ps-8  '>
                                    <Typography component="h3" className="!text-[#2F4050] mb-5">
                                        {t("Appointment.0")}
                                    </Typography>
                                    <Typography component="h5">
                                        {t("Appointment.1")}


                                    </Typography>
                                </div>
                                <img src={Docter} className='absolute ltr:right-0  rtl:left-0  top-0 ' />
                            </div>


                            <div className='flex justify-between mt-10'>
                                <div className='w-[58%] bg-white'>

                                    <FullCalendar
                                        plugins={[resourceTimelinePlugin]}
                                        initialView="resourceTimelineDay"
                                        resources={resources}
                                        events={events}
                                        headerToolbar={false}
                                        eventContent={eventContent}
                                        eventDidMount={eventDidMount}
                                        slotMinTime="9:00:00"
                                        slotMaxTime="16:00:00"
                                        allDaySlot={false}
                                        resourceAreaHeaderContent={null} // Hide resource column
                                        resourceAreaWidth={0}

                                    />

                                </div>



                                <div className='w-[40%] bg-white px-4 pt-5 rounded-md shadow-md'>

                                    <Typography component="h3" className="!text-[#2F4050]">{t("Appointment.2")}</Typography>
                                    <div>
                                        {/* must use map  */}
                                        <div className='flex   mt-5 justify-between items-center '>

                                            <div className='flex items-center gap-5'>
                                                <img src={img1} alt="Patient_1" />

                                                <div className=''>

                                                    <Typography component="h4" className="!text-[#2f4050]" >Reem Basel - Kidney Transplant </Typography>
                                                    <span className='text-[12px] text-myGray-500 mr-2'>Sep 12, 2023</span>
                                                    <span className='text-[12px] text-myGray-500'>09:00 - 11:00 am </span>
                                                </div>



                                            </div>
                                            <span className='text-error'>  View Details</span>
                                        </div>

                                        <div className='flex   mt-5 justify-between items-center'>

                                            <div className='flex items-center gap-5'>
                                                <img src={img_2} alt="Patient_2" />

                                                <div className=''>

                                                    <Typography component="h4" className="!text-[#2f4050]" >Reem Basel - Kidney Transplant </Typography>
                                                    <span className='text-[12px] text-myGray-500 mr-2'>Sep 12, 2023</span>
                                                    <span className='text-[12px] text-myGray-500'>09:00 - 11:00 am </span>
                                                </div>



                                            </div>
                                            <span className='text-error'>  View Details</span>
                                        </div>


                                        <div className='flex   mt-5 justify-between items-center'>

                                            <div className='flex items-center gap-5'>
                                                <img src={img_3} alt="Patient_3" className='' />

                                                <div className=''>

                                                    <Typography component="h4" className="!text-[#2f4050]" >Reem Basel - Kidney Transplant </Typography>
                                                    <span className='text-[12px] text-myGray-500 mr-2'>Sep 12, 2023</span>
                                                    <span className='text-[12px] text-myGray-500'>09:00 - 11:00 am </span>
                                                </div>



                                            </div>
                                            <span className='text-error'>  View Details</span>
                                        </div>


                                        <div className='flex   mt-5 justify-between items-center'>

                                            <div className='flex items-center gap-5'>
                                                <img src={img1} alt="" />

                                                <div className=''>

                                                    <Typography component="h4" className="!text-[#2f4050]" >Reem Basel - Kidney Transplant </Typography>
                                                    <span className='text-[12px] text-myGray-500 mr-2'>Sep 12, 2023</span>
                                                    <span className='text-[12px] text-myGray-500'>09:00 - 11:00 am </span>
                                                </div>



                                            </div>
                                            <span className='text-error'>  View Details</span>
                                        </div>





                                        <div className='flex   mt-5 justify-between items-center'>

                                            <div className='flex items-center gap-5'>
                                                <img src={img1} alt="" />

                                                <div className=''>

                                                    <Typography component="h4" className="!text-[#2f4050]" >Reem Basel - Kidney Transplant </Typography>
                                                    <span className='text-[12px] text-myGray-500 mr-2'>Sep 12, 2023</span>
                                                    <span className='text-[12px] text-myGray-500'>09:00 - 11:00 am </span>
                                                </div>



                                            </div>
                                            <span className='text-error'>  View Details</span>
                                        </div>






                                    </div>

                                </div>

                            </div>


                        </div>

                    </Content>
                )





















                : <Home />}

        </div>
    )
}

export default Appointment

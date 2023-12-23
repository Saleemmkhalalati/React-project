import OurServicesTitle from "../../../utilities/OurServicesTitle";
import Container from "../../../utilities/Container";
import d1 from "../Services_img/d1.svg";
import backDetails from "../Services_img/backDetails.svg";
import second from "../Services_img/second.svg";
import Typography from "../../../utilities/Typography";
import star from "../Services_img/star.svg";
import "./Details.css";
import { InputDatePicker, Input, Textarea } from "../../../utilities/Inputs";
import Button from "../../../utilities/Button";
import { useEffect, useState } from "react";
import { Formik } from "formik";
import BackPolygon from "../../../utilities/BackPolygon";

function Details() {
  const [date, setDate] = useState("");
  const [totalVotes, setTotalVotes] = useState(0);
  const [percentageVotes, setPercentageVotes] = useState({});
  const Someservices = [
    {
      id: 3,
      image: d1,
      secondImage: second,
      provider_location_id: 1,
      provider_name: "service",
      category_name: "Doctor",
      title: "Analysis Of Sample Types",
      description:
        "We have many machines that help analyze different types of samples.",
      price: 500,
      avg_rate: {
        rate__avg: "4.5",
      },
      stars5: 35,
      stars4: 22,
      stars3: 12,
      stars2: 0,
      stars1: 1,
    },
  ];

  const info = [
    {
      date: "2023-12-15",
      details: {
        from_time: "09:00:00",
        to_time: "10:00:00",
        patient_id: 23,
        patient_email: "maamoun.haj.najeeb@gmail.com",
        service_id: 8,
        service_title: "check Endocrine",
        provider_id: 30,
        provider_business_name: "Remostart",
        location_id: 3,
        created_at: "2023-12-09T21:00:32.948291",
      },
    },
  ];
  const fromTime = info[0].details.from_time;
  const ToTime = info[0].details.to_time;

  const calculatePercentageVotes = () => {
    const votes = {
      stars5: Someservices[0].stars5,
      stars4: Someservices[0].stars4,
      stars3: Someservices[0].stars3,
      stars2: Someservices[0].stars2,
      stars1: Someservices[0].stars1,
    };

    const newTotalVotes = Object.values(votes).reduce(
      (acc, val) => acc + val,
      0
    );
    setTotalVotes(newTotalVotes);

    const newPercentageVotes = {};
    for (const [key, value] of Object.entries(votes)) {
      const percentage = (value / newTotalVotes) * 100;
      newPercentageVotes[key] = `${percentage.toFixed(2)}%`;
    }

    setPercentageVotes(newPercentageVotes);
  };

  useEffect(() => {
    calculatePercentageVotes();
  }, []);

  return (
    <Container className={"overflow-hidden "}>
      {Someservices.map((e, index) => (
        <div key={index} className="px-5 lg:px-20 flex flex-col gap-7">
          <div className=" ">
            <OurServicesTitle />

            <div className="flex flex-col md:flex-row gap-5 pt-14">
              <div className="">
                <img className="w-full" src={e.image} alt="" />
              </div>
              <div className="  sm:flex gap-5 flex-row md:flex-col  ">
                <div
                  className=" z-50 min-h-[47%] min-w-[50%] rounded bg-cover bg-center xl:pb-[3.4rem] "
                  style={{
                    backgroundImage: `url(${backDetails})`,
                  }}
                >
                  <div>
                    <div className="text-center pt-7 xl:pt-12 ">
                      <Typography
                        className={"text-xs lg:text-lg "}
                        component={"h3"}
                      >
                        Review & Rating
                      </Typography>
                    </div>
                    <>
                      <div className="flex items-center ">
                        <div className="flex gap-0 lg:gap-1 min-w-[70%] flex-col ">
                          {Object.entries(percentageVotes).map(
                            ([key, value], index) => (
                              <div
                                key={key}
                                className="flex items-center justify-center gap-2"
                              >
                                <Typography component={"h4"}>
                                  {5 - index}
                                </Typography>
                                <span className="w-2/4 lg:w-3/4 h-[4.5px] lg:h-[8.5px] bg-myGray-400 relative rounded-sm">
                                  <span
                                    style={{ width: value }}
                                    className="h-[4.5px] lg:h-[8.5px] bg-warning absolute rounded-sm"
                                  ></span>
                                </span>
                              </div>
                            )
                          )}
                        </div>

                        <div className="flex flex-col  items-center gap-0">
                          <div className="flex items-center  gap-1">
                            <span className="text-base lg:text-2xl">
                              {Someservices[0].avg_rate.rate__avg}
                            </span>
                            <span className="pt-1">
                              <img className="w-3 md:w-4" src={star} alt="" />
                            </span>
                          </div>

                          <div className="flex xl:flex-row md:flex-col items-center gap-1 ">
                            <Typography
                              className={"text-xs lg:text-sm"}
                              component={"h4"}
                            >
                              {totalVotes ? totalVotes : ""}
                            </Typography>
                            <Typography
                              className={"text-xs lg:text-sm"}
                              component={"h4"}
                            >
                              Reviews
                            </Typography>
                          </div>
                        </div>
                      </div>
                    </>
                  </div>
                </div>
                <div className="w-full hidden sm:block ">
                  <img className="w-full" src={second} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -z-10 -start-36 top-[48rem] ">
            <BackPolygon />
          </div>
          <div className="flex flex-col gap-7">
            <div className="flex xl:w-2/4 flex-col gap-4">
              <Typography component={"h3"}>
                {" "}
                {Someservices[0].provider_name}
              </Typography>
              <Typography component={"h5"}>
                Bethel Analysis Center (BAC) is a medical analysis facility
                known for its state-of-the-art, excellent machines and friendly
                staff. Our place is as elegant as it is practical, and we take
                pride in supporting our customers with the highest quality of
                service and the accuracy of excellent laboratory tests. Whether
                you are simple or simple analyses, we are constantly working
                towards ensuring that our customers receive service that exceeds
                expectations.
              </Typography>
            </div>

            <div className="flex flex-col gap-4">
              <Typography component={"h3"}>Information About BAC:</Typography>
              <Typography component={"h5"}>
                {Someservices[0].description}
                Bethel Analysis Center (BAC) is a medical analysis facility
                known for its state-of-the-art, excellent machines and friendly
                staff. Our place is as elegant as it is practical, and we take
                pride in supporting our customers with the highest quality of
                service and the accuracy of excellent laboratory tests. Whether
                you are simple or simple analyses, we are constantly working
                towards ensuring that our customers receive service that exceeds
                expectations.
              </Typography>
            </div>

            <Typography component={"h3"}>Our Schedule</Typography>

            <table className=" hidden sm:table md:w-full">
              <thead className="">
                <th className=" py-2 w-20"></th>
                <th className="bg-myGray-100 text-center py-2">Sun</th>
                <th className="bg-myGray-100 text-center py-2">Mon</th>
                <th className="bg-myGray-100 text-center py-2">Tue</th>
                <th className="bg-myGray-100 text-center py-2">Wed</th>
                <th className="bg-myGray-100 text-center py-2">Thu</th>
                <th className="bg-myGray-100 text-center py-2">Fri</th>
                <th className="bg-myGray-100 text-center py-2">Sat</th>
              </thead>

              <tbody className="overflow-x-scroll w-full">
                <tr className="">
                  <td className="py-2 text-center bg-myGray-100 border-b border-myGray-400">
                    From
                  </td>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    {fromTime}
                  </td>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    {fromTime}
                  </td>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    {fromTime}
                  </td>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    {fromTime}
                  </td>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    {fromTime}
                  </td>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    {fromTime}
                  </td>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    {fromTime}
                  </td>
                </tr>
                <tr className="">
                  <td className="py-2 text-center bg-myGray-100 border-b border-myGray-400">
                    To
                  </td>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    {ToTime}
                  </td>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    {ToTime}
                  </td>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    {ToTime}
                  </td>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    {ToTime}
                  </td>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    {ToTime}
                  </td>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    {ToTime}
                  </td>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    {ToTime}
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="sm:hidden">
              <thead>
                <th className="bg-myGray-100 text-center py-2">Day</th>
                <th className="bg-myGray-100 text-center py-2">From</th>
                <th className="bg-myGray-100 text-center py-2">To</th>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    Sun
                  </td>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    {fromTime}
                  </td>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    {ToTime}
                  </td>
                </tr>
                <tr>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    Mon
                  </td>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    {fromTime}
                  </td>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    {ToTime}
                  </td>
                </tr>
                <tr>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    Tue
                  </td>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    {fromTime}
                  </td>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    {ToTime}
                  </td>
                </tr>
                <tr>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    Wed
                  </td>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    {fromTime}
                  </td>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    {ToTime}
                  </td>
                </tr>
                <tr>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    Thu
                  </td>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    {fromTime}
                  </td>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    {ToTime}
                  </td>
                </tr>
                <tr>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    Fri
                  </td>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    {fromTime}
                  </td>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    {ToTime}
                  </td>
                </tr>
                <tr>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    Sat
                  </td>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    {fromTime}
                  </td>
                  <td className="text-center border-[1px] border-solid border-myGray-400 py-4">
                    {ToTime}
                  </td>
                </tr>
              </tbody>
            </table>
            <Typography component={"h3"}>Our Location</Typography>
          </div>
          <div
            className="xl:absolute w-full xl:w-[29rem]   bg-white py-4 px-6 rounded shadow
          end-0 xl:end-24  top-[40rem]  xl:top-[30rem]   "
          >
            <div className="flex flex-col gap-3">
              <Typography className={"text"} component={"h3"}>
                Make a Reservation
              </Typography>
              <Typography className={"mb-7"} component={"h5"}>
                If you want to book an appointment, please fill out this
                information.
              </Typography>
              <InputDatePicker
                name={"dateInput"}
                value={date}
                onChange={setDate}
                icon={star}
                label={"Booking Time"}
                errorMsg={""}
              />
              <Input
                name={"Booking Time"}
                icon={star}
                label={"Booking Time"}
                errorMsg={""}
              />
              <Textarea className={"h-28"} label={"Note"} errorMsg={""} />
              <Button type={"submit"}>Make a Reservation</Button>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
}

export default Details;

//images
import one from "./Services_img/one.svg";
import tow from "./Services_img/tow.svg";
import three from "./Services_img/three.svg";
import fore from "./Services_img/for.svg";
import five from "./Services_img/five.svg";
import six from "./Services_img/six.svg";
import seven from "./Services_img/seven.svg";
import eaghit from "./Services_img/eaghit.svg";
import nghit from "./Services_img/nghit.svg";
import tean from "./Services_img/tean.svg";
import BackPolygon from "../../utilities/BackPolygon";
import { useParams } from "react-router-dom";
export default function Service() {
  const providers = [
    {
      id: 1,
      image: one,
      provider_location_id: 1,
      provider_name: "service",
      service_category: "OPTICS",
      title: "Analysis Of Sample Types",
      description:
        "We have many machines that help analyze different types of samples.",
      price: 33,
    },
    {
      id: 2,
      image: tow,
      provider_location_id: 1,
      provider_name: "service",
      service_category: "OPTICS",
      title: "Analysis Of Sample Types",
      description:
        "We have many machines that help analyze different types of samples.",
      price: 33,
    },
    {
      id: 3,
      image: three,
      provider_location_id: 1,
      provider_name: "service",
      service_category: "OPTICS",
      title: "Analysis Of Sample Types",
      description:
        "We have many machines that help analyze different types of samples.",
      price: 33,
    },
    {
      id: 4,
      image: fore,
      provider_location_id: 1,
      provider_name: "service",
      service_category: "OPTICS",
      title: "Analysis Of Sample Types",
      description:
        "We have many machines that help analyze different types of samples.",
      price: 33,
    },
    {
      id: 5,
      image: five,
      provider_location_id: 1,
      provider_name: "service",
      service_category: "OPTICS",
      title: "Analysis Of Sample Types",
      description:
        "We have many machines that help analyze different types of samples.",
      price: 33,
    },
    {
      id: 6,
      image: six,
      provider_location_id: 1,
      provider_name: "service",
      service_category: "OPTICS",
      title: "Analysis Of Sample Types",
      description:
        "We have many machines that help analyze different types of samples.",
      price: 33,
    },
    {
      id: 7,
      image: seven,
      provider_location_id: 1,
      provider_name: "service",
      service_category: "OPTICS",
      title: "Analysis Of Sample Types",
      description:
        "We have many machines that help analyze different types of samples.",
      price: 33,
    },
    {
      id: 8,
      image: eaghit,
      provider_location_id: 1,
      provider_name: "service",
      service_category: "OPTICS",
      title: "Analysis Of Sample Types",
      description:
        "We have many machines that help analyze different types of samples.",
      price: 33,
    },
    {
      id: 9,
      image: nghit,
      provider_location_id: 1,
      provider_name: "service",
      service_category: "OPTICS",
      title: "Analysis Of Sample Types",
      description:
        "We have many machines that help analyze different types of samples.",
      price: 33,
    },
    {
      id: 10,
      image: tean,
      provider_location_id: 1,
      provider_name: "service",
      service_category: "OPTICS",
      title: "Analysis Of Sample Types",
      description:
        "We have many machines that help analyze different types of samples.",
      price: 33,
    },
  ];

  const { myCheckValue } = useParams();
  console.log(myCheckValue);
  return (
    <div>
      <div className="  sm:pb-20 pt-6 lg:pt-36 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ps-5 md:ps-10 pe-5 gap-5">
        {providers.map((e, index) => (
          <div
            className="relative  before:absolute before:content-[''] before:w-full before:h-full before:bg-black before:bg-opacity-30 before:rounded-xl "
            key={index}
          >
            <img className="w-full" src={e.image} alt="" />

            <div className="absolute bottom-0 px-4 py-2">
              <span className="text-sm text-white">{e.title}</span>
              <p className="text-xs text-white">{e.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute -bottom-32 end-10">
        <BackPolygon />
      </div>
      <div className=" hidden  bottom-0 md:flex items-center start-[50%] gap-2 absolute">
        <div className="w-14 h-3 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
        <div className="w-4 h-4 bg-myGray-400 rounded-full"></div>
        <div className="w-4 h-4 bg-myGray-400 rounded-full"></div>
        <div className="w-4 h-4 bg-myGray-400 rounded-full"></div>
      </div>
    </div>
  );
}

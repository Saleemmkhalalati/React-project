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
import { useContext, useState } from "react";
import { useServices } from "../../../context/Context";
import NoData from "./ServicesComponents/Nodata";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
export default function Service() {
  const { customServices } = useContext(useServices);
  const { changeData } = useContext(useServices);

  console.log(customServices);

  const providers = {
    page: 1,
    pagination: 4,
    services: [
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
        id: 10,
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
        id: 11,
        image: tean,
        provider_location_id: 1,
        provider_name: "service",
        service_category: "OPTICS",
        title: "Analysis Of Sample Types",
        description:
          "We have many machines that help analyze different types of samples.",
        price: 33,
      },
      {
        id: 12,
        image: nghit,
        provider_location_id: 1,
        provider_name: "service",
        service_category: "OPTICS",
        title: "Analysis Of Sample Types",
        description:
          "We have many machines that help analyze different types of samples.",
        price: 33,
      },
    ],
  };
  const [filters, setFilters] = useSearchParams("filters");
  const [curentPage, setCurentPagePage] = useState(1);

  const handleActive = (pageNumber) => {
    setCurentPagePage(pageNumber);
  };
  useEffect(() => {
    changeData({ page: curentPage });
    setFilters({ page: curentPage });
  }, [curentPage]);

  return (
    <>
      {providers.services.length >= 1 ? (
        <div className="pt-6 lg:pt-28 px-0 min-h-screen">
          <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:px-10 lg:ps-14">
            {providers.services.map((provider, index) => (
              <div className="w-full" key={index}>
                <Link to={`/details/${provider.id}`}>
                  <div className="relative  before:absolute before:content-[''] before:w-full before:h-full before:bg-black before:bg-opacity-30 before:rounded-xl">
                    <img className="w-full" src={provider.image} alt="img" />
                    <div className="absolute bottom-0 px-4 py-2">
                      <span className="text-sm text-white">
                        {provider.title}
                      </span>
                      <p className="text-xs text-white">
                        {provider.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {providers.pagination >= 1 && (
            <div className="flex items-center justify-center gap-3 pt-5  pb-1">
              {Array.from({ length: providers.pagination }, (_, index) => {
                const pageNumber = index + 1;
                return (
                  <span
                    onClick={() => handleActive(pageNumber)}
                    key={index}
                    className={`cursor-pointer bg-myGray-400 rounded-full shadow z-50 ${
                      pageNumber === curentPage
                        ? "bg-gradient-to-b from-primary to-secondary w-12 h-[0.9rem] transition-all"
                        : "w-5 h-5 "
                    }`}
                  ></span>
                );
              })}
            </div>
          )}
          <div className="absolute -bottom-32 end-10">
            <BackPolygon />
          </div>
        </div>
      ) : (
        <NoData />
      )}
    </>
  );
}

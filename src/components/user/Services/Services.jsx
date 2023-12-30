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
import { useContext } from "react";
import { useServices } from "../../../context/Context";
import NoData from "./Nodata";
import { Link } from "react-router-dom";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

export default function Service() {
  const { customServices } = useContext(useServices);
  console.log(customServices);

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
  ];
  console.log(providers.length);

  return (
    <>
      {providers.length >= 1 ? (
        <div className=" pt-6 lg:pt-36 px-0 min-h-screen ">
          <Swiper
            allowTouchMove={false}
            spaceBetween={20}
            className="w-[90%] md:ps-3 "
            slidesPerView={3}
            grid={{
              rows: 4,
              fill: "row",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="${className} swiper-pagination-bullet bg-gradient-to-b from-primary to-secondary w-4 h-4  ${
                  index === this.activeIndex
                    ? "swiper-pagination-bullet-active w-12 h-[0.8rem] rounded-md "
                    : ""
                }"></span>`;
              },
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              500: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              1150: { slidesPerView: 3 },
            }}
            modules={[Grid, Pagination]}
          >
            {providers.map((provider, index) => (
              <SwiperSlide key={index}>
                <Link to={`/details/${provider.id}`}>
                  <div className="relative w-full sm:w-52 md:w-full  before:absolute before:content-[''] before:w-full before:h-full before:bg-black before:bg-opacity-30 before:rounded-xl">
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
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-pagination relative pt-10"></div>
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

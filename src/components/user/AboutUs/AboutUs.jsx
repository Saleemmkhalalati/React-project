import doctor from "./AboutUs-Image/Intersect.svg";
export default function AboutUs() {
  const data = [
    {
      title: "Locate the patient to the nearest delivery service.",
      description:
        "We can determine the patient's location and determine the nearest service to him, so that it is easy and convenient for him to access the service",
    },
    {
      title: "Contain Cloud payments.",
      description:
        "We have developed an electronic payment feature that makes it easier for the patient to pay money for the services provided to him via the Internet.",
    },
    {
      title: "Filter depending on the current location.",
      description:
        "We filtered all services close to the patient and vice versa",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      <div className="grid-cols-6">
        <div className="absolute rotate-45 w-72 h-72  top-44  bg-sky-50 rounded-3xl -start-20 sm:w-96 sm:h-96 sm:-start-28"></div>
        <div className="relative pt-10 lg:pt-32 ps-5 md:ps-20 pb-0 sm:pb-32">
          <h3 className="text-primary text-4xl font-bold mb-4">About us</h3>
          <p className="text-mySlate mb-6 text-sm sm:text-lg">
            We are a platform that seeks to connect clinical patients with
            doctors in various medical specialties and pharmacies all over the
            Emirates, So it has the following features:
          </p>

          <ul className=" relative ps-7 after:content-[''] after:w-[2px] after:h-full after:bg-secondary after:absolute after:top-0 after:start-[0.4rem]">
            {data.map((item, index) => (
              <div key={index}>
                <li className="text-myGray-500 text-sm sm:text-lg mb-2 relative before:content-[''] before:absolute before:w-4 before:h-4 before:rotate-45 before:bg-primary before:rounded-sm before:border-solid before:border-[1px] before:border-secondary before:-start-[1.8rem] before:z-10">
                  {item.title}
                </li>
                <p className="text-xs sm:text-sm text-myGray-500 mb-2">
                  {item.description}
                </p>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative grid-cols-6 hidden md:block ">
        <div className="absolute hidden xl:block end-5 top-8 w-40 h-40 bg-gradient-to-b from-secondary to-primary ltr:rotate-45 rtl:-rotate-45 rounded-2xl"></div>
        <div className="relative start-64  top-36 z-10 ">
          <div className="absolute  w-72 h-72 bg-gray-100  origin-center  ltr:rotate-45 rtl:-rotate-45 rounded-xl"></div>
          <img
            className="absolute w-[21rem] h-[21rem] ltr:-start-10 top-2 hidden lg:block"
            src={doctor}
            alt="img"
          />
        </div>
        <div className=" relative start-44 top-40 ">
          <div className="absolute w-[258px] h-[258px] bg-gradient-to-b from-primary to-secondary rounded-2xl  ltr:rotate-45 rtl:-rotate-45"></div>
          <div className="absolute w-[250px] h-[250px] bg-white start-[4px] top-[4px] rounded-xl ltr:rotate-45 rtl:-rotate-45"></div>
        </div>
      </div>
    </div>
  );
}

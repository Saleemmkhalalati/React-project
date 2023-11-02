import Typography from "../../utilities/Typography";
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
    description: "We filtered all services close to the patient and vice versa",
  },
];
export const AboutUsContent = ({ className }) => {
  return (
    <div className={`${className} flex flex-col gap-6`}>
      <Typography component={"h1"}>About Us</Typography>
      <Typography component={"h2"}>
        We are a platform that seeks to connect clinical patients with doctors
        in various medical specialties and pharmacies all over the Emirates, So
        it has the following features:
      </Typography>
      <ul className="  relative flex flex-col gap-6 ps-7 after:content-[''] after:w-[2px] after:h-full after:bg-secondary after:absolute after:top-0 after:start-[0.4rem]">
        {data.map((item, index) => (
          <div className="flex flex-col gap-2" key={index}>
            <Typography
              component={"h4"}
              className=" relative before:content-[''] before:absolute before:w-4 before:h-4 before:rotate-45 before:bg-primary before:rounded-sm before:border-solid before:border-[1px] before:border-secondary before:-start-[1.8rem] before:z-10"
            >
              {item.title}
            </Typography>
            <Typography component={"h5"}>{item.description}</Typography>
          </div>
        ))}
      </ul>
    </div>
  );
};

import Typography from "../../utilities/Typography";
import { useTranslation } from "react-i18next";

export const AboutUsContent = ({ className }) => {
  const { t } = useTranslation("global");
  const AboutUs = [
    { mainTitle: t("AboutUs.mainTitle") },
    { mainDesc: t("AboutUs.mainDesc") },
    { data: [{ title1: t("AboutUs.data.0") }] },
  ];

  return (
    <div className={`${className} flex flex-col gap-5`}>
      {AboutUs.map((ele) => (
        <>
          <Typography component={"h1"} key={ele.mainTitle}>
            {ele.mainTitle}
          </Typography>
          <Typography component={"h2"} key={ele.mainDesc}>
            {ele.mainDesc}
          </Typography>
        </>
      ))}

      <>
        <ul className="  relative flex flex-col gap-6 ps-7 after:content-[''] after:w-[2px] after:h-full after:bg-secondary after:absolute after:top-0 after:start-[0.4rem]">
          <div className="flex flex-col gap-2">
            <Typography
              component={"h4"}
              className=" relative before:content-[''] before:absolute before:w-4 before:h-4 before:rotate-45 before:bg-primary before:rounded-sm before:border-solid before:border-[1px] before:border-secondary before:-start-[1.8rem] before:z-10"
            ></Typography>
            <Typography component={"h5"}></Typography>
          </div>
        </ul>
      </>
    </div>
  );
};

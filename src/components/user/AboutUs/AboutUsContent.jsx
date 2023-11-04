import Typography from "../../utilities/Typography";
import { useTranslation } from "react-i18next";

export const AboutUsContent = ({ className }) => {
  const { t } = useTranslation("global");
  const AboutUs = [
    {
      title: t("AboutUs.info.0.title"),
      desc: t("AboutUs.info.0.desc"),
    },
    {
      title: t("AboutUs.info.1.title"),
      desc: t("AboutUs.info.1.desc"),
    },
    {
      title: t("AboutUs.info.2.title"),
      desc: t("AboutUs.info.2.desc"),
    },
  ];
  return (
    <div className={`${className} flex flex-col gap-5`}>
      <Typography component={"h1"}>{t("AboutUs.main.0")}</Typography>
      <Typography component={"h2"}>{t("AboutUs.main.1")}</Typography>

      <ul className="relative flex flex-col gap-6 ps-7 after:content-[''] after:w-[2px] after:h-full after:bg-secondary after:absolute after:top-0 after:start-[0.4rem]">
        {AboutUs.map((item, index) => (
          <div className="flex flex-col gap-2" key={index}>
            <Typography
              component={"h4"}
              className="relative before:content-[''] before:absolute before:w-4 before:h-4 before:rotate-45 before:bg-primary before:rounded-sm before:border-solid before:border-[1px] before:border-secondary before:-start-[1.8rem] before:z-10"
            ></Typography>
            <Typography component={"h4"}>{item.title}</Typography>
            <Typography component={"h5"}>{item.desc}</Typography>
          </div>
        ))}
      </ul>
    </div>
  );
};

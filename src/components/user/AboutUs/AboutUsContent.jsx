import Typography from "../../utilities/Typography";
import { useTranslation } from "react-i18next";

export const AboutUsContent = ({ className }) => {
  const { t } = useTranslation("global");
  const AboutUs = ["AboutUs.main"];
  const info = [
    { title: t("AboutUs.info.0") },
    { title: t("AboutUs.info.1") },
    { title: t("AboutUs.info.2") },
  ];
  const desc = [{ desc: t("AboutUs.info.[1]") }];

  return (
    <div className={`${className} flex flex-col gap-5`}>
      {AboutUs.map((item) => (
        <>
          <Typography component={"h1"}> {t("AboutUs.main.0")},</Typography>
          <Typography component={"h2"}>{t("AboutUs.main.1")}</Typography>
          
        </>
      ))}

      <ul className="relative flex flex-col gap-6 ps-7 after:content-[''] after:w-[2px] after:h-full after:bg-secondary after:absolute after:top-0 after:start-[0.4rem]">
        <div className="flex flex-col gap-2">
          {info.map((e) => (
            <>
              <Typography
                key={e}
                component={"h4"}
                className="relative before:content-[''] before:absolute before:w-4 before:h-4 before:rotate-45 before:bg-primary before:rounded-sm before:border-solid before:border-[1px] before:border-secondary before:-start-[1.8rem] before:z-10"
              >
                {e.title}
              </Typography>
              <Typography key={desc} component={"h5"}></Typography>
            </>
          ))}
        </div>
      </ul>
    </div>
  );
};

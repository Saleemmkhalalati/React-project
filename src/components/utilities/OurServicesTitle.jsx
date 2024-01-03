import Typography from "./Typography";
import { useTranslation } from "react-i18next";
import BackPolygon from "./BackPolygon";
export default function OurServicesTitle({ className }) {
  const { t } = useTranslation("global");
  return (
    <div className="overflow-hidden">
      <div className=" absolute -z-30 top-20 end-10 hidden lg:block">
        <BackPolygon />
      </div>

      <div
        className={`flex flex-col items-center gap-2 sm:gap-5 mt-7 ${
          className ? className : ""
        } `}
      >
        <Typography className={"text-xl sm:text-3xl"} component={"h1"}>
          {t("Services_Home.0")}
        </Typography>
        <p className="font-normal text-xs sm:text-base text-myGray-600 text-center ">
          {t("Services_Home.1")}
        </p>
      </div>
      <div className=" absolute top-20 -start-32 -z-30  ">
        <BackPolygon />
      </div>
    </div>
  );
}

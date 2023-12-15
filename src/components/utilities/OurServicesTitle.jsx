import Typography from "./Typography";
import { useTranslation } from "react-i18next";
import BackPolygon from "./BackPolygon";
export default function OurServicesTitle() {
  const { t } = useTranslation("global");
  return (
    <div className="">
      <div className=" absolute top-20 end-10 hidden lg:block ">
        <BackPolygon />
      </div>

      <div className="flex flex-col items-center gap-2 sm:gap-5 mt-7 w-[100%]  lg:w-[85%]  ">
        <Typography className={"text-xl sm:text-3xl"} component={"h1"}>
          {t("Services_Home.0")}
        </Typography>
        <p className="font-normal text-xs sm:text-base text-myGray-600 text-center ">
          {t("Services_Home.1")}
        </p>
      </div>
      <div className=" absolute top-20 -start-32 hidden sm:block ">
        <BackPolygon />
      </div>
    </div>
  );
}

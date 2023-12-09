import Typography from "./Typography";
import { useTranslation } from "react-i18next";
export default function OurServicesTitle() {
  const { t } = useTranslation("global");
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-7">
      <Typography className={"text-xl sm:text-3xl"} component={"h1"}>
        {t("Services_Home.0")}
      </Typography>
      <p className="font-normal text-base text-myGray-600 text-center">
        {" "}
        {t("Services_Home.1")}
      </p>
    </div>
  );
}

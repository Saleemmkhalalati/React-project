import error from "./Error_img/error3.svg";
import cat from "./Error_img/cat3.svg";
import cat2 from "./Error_img/cat2.svg";
import Typography from "../utilities/Typography";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Error404() {
  const { t } = useTranslation("global");
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="absolute ltr:end-0 top-0 rtl:start-0">
        <img className="w-[18rem] lg:w-[32rem]" src={error} alt="img" />
      </div>
      <div className="flex flex-col items-center">
        <img className="w-[14rem] lg:w-[18rem]" src={cat} alt="img" />
        <div className="text-center flex flex-col gap-2">
          <Typography component={"h1"}>{t("error3.0")}</Typography>
          <Typography component={"p"}>{t("error3.1")}</Typography>
          <Link className="text-primary text-lg" to="/">
            {t("error3.2")}
          </Link>
        </div>
      </div>
      <div className="absolute ltr:start-0 rtl:end-0 bottom-0">
        <img className="w-[18rem] lg:w-[32rem]" src={cat2} alt="img" />
      </div>
    </div>
  );
}

import error from "./Error_img/error.svg";
import cat from "./Error_img/cat.svg";
import cat2 from "./Error_img/cat2.svg";
import Typography from "../utilities/Typography";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Error404() {
  const { t } = useTranslation("global");
  return (
    <div className="relative">
      <div className="hidden sm:flex ltr:justify-end rtl:justify-start">
        <img src={error} alt="img" />
      </div>
      <div className="flex items-center justify-center flex-col gap-8 mt-10 sm:mt0">
        <img src={cat} alt="img" />
        <div className="text-center flex flex-col gap-4">
          <Typography component={"h1"}>{t("error4.0")}</Typography>
          <Typography component={"p"}>{t("error4.1")}</Typography>
          <Link className="text-primary text-lg" to="/">
            {t("error4.2")}
          </Link>
        </div>
      </div>
      <div className="hidden sm:flex  ltr:justify-start rtl:justify-end">
        <img src={cat2} alt="img" />
      </div>
    </div>
  );
}

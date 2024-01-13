import no from "./NoData_images/No data found.svg";
import { useTranslation } from "react-i18next";
const NoData = ({ className }) => {
  const { t } = useTranslation("global");
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <img className={`w-72 ${className}?className:`} src={no} alt="img" />
      <p className="text-sm text-myGray-500">{t("nodata")}</p>
    </div>
  );
};
export default NoData;

import noData from "../../Dashbord_layout/Notifications/Notification_image/No data found.svg";
import Typography from "../../../utilities/Typography";
import { useTranslation } from "react-i18next";
const Nonotification = ({ notNumber }) => {
  const { t } = useTranslation("global");
  return (
    <div className="absolute -start-56 sm:end-8  z-20 top-20 shadow-sm">
      <div className="bg-white w-[14rem] sm:w-[26rem] h-[30rem]  rounded flex flex-col gap-28  ">
        <div className="flex items-center  px-4 py-5 gap-1">
          <p className="text-xl font-bold text-myGray-600">
            {t("noNotification.0")}
          </p>
          <span className="text-error text-sm">-</span>
          <span className="text-error text-sm">{notNumber}</span>
        </div>
        <div className=" flex flex-col items-center justify-center ">
          <img src={noData} alt="" />
          <Typography component={"h5"}>{t("noNotification.1")}</Typography>
        </div>
      </div>
    </div>
  );
};
export default Nonotification;

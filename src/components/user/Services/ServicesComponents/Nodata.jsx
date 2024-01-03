import Data from "../../../Dashbord/Dashbord_layout/NoData/NoData_images/No data found.svg";
import { useTranslation } from "react-i18next";
import Typography from "../../../utilities/Typography";
import BackPolygon from "../../../utilities/BackPolygon";
function NoData() {
  const { t } = useTranslation("global");
  return (
    <div className="min-h-screen ">
      <div className="absolute top-[50%] start-[50%]">
        <img className="w-52" src={Data} alt="" />
        <Typography component={"h4"} className="text-center">
          {t("nodata")}
        </Typography>
      </div>
      <div className="hidden lg:block absolute -bottom-32 end-10">
        <BackPolygon />
      </div>
    </div>
  );
}

export default NoData;

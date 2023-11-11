
import Dark_logo from "../../../assets/icons/Dark_Logo.svg"
import { useTranslation } from "react-i18next";

export default function Dashboard() {
  const { t } = useTranslation("global");

  return (
    <div className=" bg-blac h-screen flex flex-col justify-center items-center gap-6">
      <img src={Dark_logo} alt="" />
      <h2 className="text-[20px] font-[700] leading-[21px] text-myGray-600 opacity-[80%] w-[80%] text-center">{t("Med_sal_dashbord.main_title")} </h2>
      <p className="text-[15px] font-[400] leading-[24px] text-myGray-500  w-[80%] text-center">{t("Med_sal_dashbord.descrption")}</p>
    </div>
  )
}
//styleName: Text - 4/Heading - 5 Text;

//styleName: Admin - 2/Admin Dashboard - Text;

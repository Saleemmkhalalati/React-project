

import { useTranslation } from "react-i18next";
import Welcome from "./Service_provider_home_img/Welcome.png"

export default function Home() {
  const { t } = useTranslation("global");

  return (
    <div className=" bg-blac h-screen flex flex-col justify-center items-center gap-6">
      <img src={Welcome} alt="welcome" />
      <h2 className="text-[20px] font-[700] leading-[21px] text-myGray-600 opacity-[80%] w-[80%] text-center">{t("Med_sal_dashbord.main_title")} </h2>
      <p className="text-[15px] font-[400] leading-[24px] text-myGray-500  w-[80%] text-center">{t("Med_sal_dashbord.descrption")}</p>
    </div>
  )
}

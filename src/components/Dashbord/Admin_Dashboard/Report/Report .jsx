import React from 'react'
import Content from "../../Dashbord_layout/Content/Content";
import { Outlet } from 'react-router-dom';
import Department from "../../Dashbord_layout/Department/Department"
import { useTranslation } from "react-i18next";

const Report  = () => {
  const { t } = useTranslation("global");
  return (
    <Content
    path={" Report"}
    
 
  >
  

  <div className='flex flex-wrap flex-col lg:flex-row  xl:gap-1  lg:gap-4 justify-between items-center xl:items-start gap-2 mt-3 '>
  <div className='flex flex-col flex-wrap md:flex-row xl:gap-5  lg:w-[68%] xl:w-[77%] sm:w-[100%]    gap-5 xl:justify-between lg:justify-around sm:justify-center sm:items-center  w-full xl:h-[10rem]'>
  <Department  path="all_users" title= {t("report_admin_page.department.0")} descrption={t("report_admin_page.department_des.0")}/>
    <Department path="all_services" title={t("report_admin_page.department.1")} descrption={t("report_admin_page.department_des.1")}  />

    <Department path="all-product" title={t("report_admin_page.department.2")} descrption={t("report_admin_page.department_des.2")}/>
  </div>
 
    <Outlet />
  
  </div>
 

    </Content>
  )
}

export default Report 

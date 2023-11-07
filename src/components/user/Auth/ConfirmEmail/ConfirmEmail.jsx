import docImg from "../AuthDesign/Imgs/Doctor.svg";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AuthDesign from '../AuthDesign/AuthDesign';
import Typography from "../../../utilities/Typography";
const ConfirmEmail = () => {
  // Initialize the i18n translation hook
  const { t } = useTranslation("global");
  // Get the current language from i18n
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <div className="max-w-[1750px] mx-auto max-[1750px]:overflow-hidden">
      <div className='relative  ltr:left-0  rtl:right-0 z-[-1]'>
        <div className="absolute rotate-45 w-80 h-80 top-10 sm:top-24 bg-sky-50 rounded-3xl -start-14"></div>
        <div className="absolute rotate-45 w-80 h-80 top-96 sm:top-[29rem] bg-sky-50 rounded-3xl start-28"></div>
        <div></div>
      </div>
      <div className={`relative flex justify-between flex-col ${currentLanguage === "ar" ? "lg:flex-row-reverse" : "lg:flex-row"} gap-[45px] max-[1750px]:overflow-hidden`}>
        <div className='py-[12%] w-[90%] lg:w-[50%] p-[25px] md:px-[70px] pr-0 flex flex-col gap-[48px]'>
          <div className='flex flex-col gap-[32px] text-center lg:text-start'>
            {/* Heading for the confirmation page */}
            <Typography component={'h1'}>{t("confirmEmail.head")}</Typography>
            <div className='text-[16px] font-normal leading-[25.14px] flex items-center lg:items-start flex-col gap-[8px]'>
              {/* Information text */}
              <Typography component={'h4'}>{t("confirmEmail.resendQuest")}</Typography>
              {/* Link to resend confirmation email */}
              <p className='text-success hover:text-secondary border-b-solid border-b-success border-b-[1px] hover:border-secondary cursor-pointer w-fit'>{t("confirmEmail.resendLink")}</p>
            </div>
          </div>
          {/* Link to go back */}
          <p className='text-secondary hover:text-success cursor-pointer  text-[16px] font-normal leading-[25.14px]'>
            <Link to="/login">{t("confirmEmail.back")}</Link>
          </p>
        </div>
        <AuthDesign img={docImg}
          title={t("confirmEmail.action")}
          paragraph={t("ImageContainer.aboutUs")} />
      </div>
    </div>
  );
}

export default ConfirmEmail;

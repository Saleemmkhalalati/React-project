import ContainerImg from '../ContainerImage/ContainerImg';
import docImg from "./ConfirmImage/Intersect.svg";
import BackPolygon from '../../../utilities/BackPolygon';
import { useTranslation } from 'react-i18next';
const ConfirmEmail = () => {
  // Initialize the i18n translation hook
  const { t } = useTranslation("global");
  // Get the current language from i18n
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <div className={`relative py-[70px] flex justify-between flex-col ${currentLanguage === "ar" ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-[45px] overflow-hidden`}>
      <div className='w-[90%] lg:w-[50%] p-[25px] md:p-[70px] pr-0 flex flex-col gap-[48px]'>
        <div className='flex flex-col gap-[32px] text-center lg:text-start'>
          {/* Heading for the confirmation page */}
          <p className='text-[25px] lg:text-[39.06px] font-bold leading-[51.99px] text-primary'>{t("confirmEmail.head")}</p>
          <div className='text-[16px] font-normal leading-[25.14px] flex items-center lg:items-start flex-col gap-[8px]'>
            {/* Information text */}
            <p className='text-muGray-600'>{t("confirmEmail.resendQuest")}</p>
            {/* Link to resend confirmation email */}
            <p className='text-success hover:text-secondary border-b-solid border-b-success border-b-[1px] hover:border-secondary cursor-pointer w-fit'>{t("confirmEmail.resendLink")}</p>
          </div>
        </div>
        {/* Link to go back */}
        <p className='text-secondary hover:text-success cursor-pointer  text-[16px] font-normal leading-[25.14px]'>{t("confirmEmail.back")}</p>
      </div>
      <div className='w-[90%] lg:w-[45%]'>
        {/* Display a container with an image for confirmation */}
        <ContainerImg docImg={docImg} action={t("confirmEmail.action")} />
      </div>
      <div className='translate-x-[-145px] translate-y-[-39px] absolute z-[-100] '>
        <BackPolygon />
      </div>
      <div className='translate-x-[-30px] translate-y-[400px] absolute z-[-100]'>
        <BackPolygon />
      </div>
    </div>
  );
}

export default ConfirmEmail;

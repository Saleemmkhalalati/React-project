import ContainerImg from '../ContainerImage/ContainerImg';
import docImg from "./VerfictionImage/Intersect.svg";
import BackPolygon from '../../../utilities/BackPolygon';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import VerificationCodeInput from './VerfictionCodeInput';
import { useState } from 'react';
import Button from '../../../utilities/Button';
import AuthDesign from '../AuthDesign/AuthDesign';
const VerfictionCode = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [invalidCode, setInvalidCode] = useState(false)
  const trueCode = "123456"
  const handleCodeChange = (code) => {
    setVerificationCode(code);
  };
  const sendCode = () => {
    verificationCode.length !== 6 || verificationCode !== trueCode ? setInvalidCode(true) : console.log(verificationCode);
  }
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
            <p className='text-[25px] lg:text-[39.06px] font-bold leading-[51.99px] text-primary'>{t("verification.head")}</p>
            <div className=' font-normal leading-[25.14px] flex items-center lg:items-start flex-col gap-[8px]'>
              {/* Informatin text */}
              <p className='text-muGray-600'>{t("verification.p")}</p>
              <VerificationCodeInput codeLength={6} onCodeChange={handleCodeChange} />
              {/* Link to resend confirmation email */}
              <p className='text-success hover:text-secondary border-b-solid border-b-success border-b-[1px] hover:border-secondary cursor-pointer w-fit'>{t("verification.resend")}</p>
            </div>
            <Button type="button" onClick={sendCode} >{t("verification.button")}</Button>
          </div>
          <div>
          </div>
        </div>
        <AuthDesign img={docImg} title={t("confirmEmail.action")} paragraph={t("ImageContainer.aboutUs")} />
      </div>
    </div>
  );
}

export default VerfictionCode;

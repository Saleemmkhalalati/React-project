import ContainerImg from '../ContainerImage/ContainerImg';
import docImg from "./VerfictionImage/Intersect.svg";
import BackPolygon from '../../../utilities/BackPolygon';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import VerificationCodeInput from './VerfictionCodeInput';
import { useState } from 'react';
import Button from '../../../utilities/Button';
const VerfictionCode = () => {
const [verificationCode, setVerificationCode] = useState('');
const [invalidCode,setInvalidCode] = useState(false)
const trueCode = "123456"
const handleCodeChange = (code) => {
  setVerificationCode(code);
};
const sendCode = ()=>{
  verificationCode.length !==6 || verificationCode !==trueCode ? setInvalidCode(true) : console.log(verificationCode);
}
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
          <p className='text-[25px] lg:text-[39.06px] font-bold leading-[51.99px] text-primary'>{t("verfictionCode.head")}</p>
          <div className=' font-normal leading-[25.14px] flex items-center lg:items-start flex-col gap-[8px]'>
            {/* Informatin text */}
            <p className='text-muGray-600'>{t("verfictionCode.label")}</p>
            <VerificationCodeInput codeLength={6} onCodeChange={handleCodeChange} />
            {/* Link to resend confirmation email */}
            <p className='text-success hover:text-secondary border-b-solid border-b-success border-b-[1px] hover:border-secondary cursor-pointer w-fit'>{t("verfictionCode.resendLink")}</p>
          </div>
          <Button type="button" children='Send Code' onClick={sendCode}/>
        </div>
        {/* Link to go back */}
        <p className='text-secondary hover:text-success cursor-pointer  text-[16px] font-normal leading-[25.14px]'>
          <Link to="/login">{t("confirmEmail.back")}</Link>
        </p>
        <div>
    </div>
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

export default VerfictionCode;

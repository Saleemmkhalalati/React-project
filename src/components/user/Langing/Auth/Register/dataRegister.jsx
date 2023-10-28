import email from './RegisterImage/Email.svg';
import phone from './RegisterImage/Phone.svg';
import buisness from './RegisterImage/Business.svg';
import drop from './RegisterImage/Dropdown.png';
import bank from './RegisterImage/Bank.svg';
import card from './RegisterImage/Card.svg';
import code from './RegisterImage/Code.svg';
import showPass from './RegisterImage/Vector.svg'
import hidePassword from './RegisterImage/icons8-eye-26.png'
import MultiLanguage from '../../../../layout/MultiLanguage';
import { useTranslation } from 'react-i18next';

export const RegisterData = (showPassword,showRePass) => {
  const getPasswordIcon = showPassword ? hidePassword : showPass;
  const getRePasswordIcon = showRePass ? hidePassword : showPass;
  const {t} = useTranslation("global")

  return {
    patient: [
      {
        inputType: "email",
        inputIcon: email,
        placeHolder: t("register.inputFields.email"),
        name: "email"
      },
      {
        inputType: "password",
        inputIcon: getPasswordIcon,
        placeHolder:t("register.inputFields.password"),
        name: "password"
      },
      {
        inputType: "password",
        inputIcon: getRePasswordIcon  ,
        placeHolder: t("register.inputFields.confirmPassword"),
        name: "repassword"
      },
      {
        inputType: "submit",
        placeHolder: t("register.inputFields.submit"),
        name :"submit"
      }
    ],
    provider: [
      {
        inputType: "email",
        inputIcon: email,
        placeHolder: t("register.inputFields.email"),
        name: "email"
      },
      {
        inputType: "password",
        inputIcon: getPasswordIcon,
        placeHolder: t("register.inputFields.password"),
        name: "password"
      },
      {
        inputType: "password",
        inputIcon: getRePasswordIcon,
        placeHolder: t("register.inputFields.confirmPassword"),
        name: "repassword"
      },
      {
        inputType: "text",
        inputIcon: phone,
        placeHolder: t("register.inputFields.number"),
        name: "number"
      },
      {
        inputType: "text",
        inputIcon: buisness,
        placeHolder: t("register.inputFields.buisness"),
        name: "business"
      },
      {
        inputType: "select",
        placeHolder: t("register.inputFields.serviceType"),
        inputIcon : drop ,
        name: "serviceType",
        options: [t("register.services.doctor"), t("register.services.pharmacy"), t("register.services.hospital"), t("register.services.lab"), t("register.services.clinic")]
      },
      {
        inputType: "text",
        name : "bank",
        placeHolder: t("register.inputFields.bankDetailes"),
        inputIcon: drop,
        details: [
          {
            inputType: "text",
            inputIcon: bank,
            placeHolder: t("register.inputFields.bank"),
            name: "bankName"
          },
          {
            inputType: "text",
            inputIcon: card,
            placeHolder: t("register.inputFields.iban"),
            name: "IBAN"
          },
          {
            inputType: "text",
            inputIcon: code,
            placeHolder: t("register.inputFields.swift"),
            name: "Swift"
          }
        ]
      },
      {
        inputType: "submit",
        name :"submit",
        placeHolder: t("register.inputFields.submit")
      }
    ],
  };
};

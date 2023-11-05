import "./Login.css";
import loginImage from "../Login/logain-image/Intersect.svg";
import iconEmail from "../Login/logain-image/Email.svg";
import iconShow from "../Login/logain-image/View.svg";

import { Link } from "react-router-dom";
import { useState } from "react";
import AuthDesign from "../AuthDesign/AuthDesign";
import Typography from "../../../utilities/Typography";
import { Input } from "../../../utilities/Inputs";
import Button from "../../../utilities/Button";
import { useTranslation } from "react-i18next";

export default function Login() {
  const { t } = useTranslation("global");
  const [email, SetEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ErrM, setErrM] = useState("");
  const [ErrP, setErrP] = useState("");
  const [accept, setAccept] = useState("");
  const [showpass, setshowpass] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isFilledPass, setIsFilledPass] = useState(false);

  //show password
  function ShowPassword() {
    setshowpass(!showpass);
  }

  async function submit(e) {
    e.preventDefault();
    setAccept(true);
    if (!(accept && email)) {
      setErrM(t("login.err"))
    } else {
      setErrM("")
    }
    if (!(accept && password)) {
      setErrP(t("login.err"))
    } else {
      setErrP("")
    }
  }

  return (
    <div className="max-w-[1750px] mx-auto my-0 h-screen max-[1100px]:overflow-y-auto max-[1750px]:overflow-hidden">
      <div className='relative  ltr:left-0  rtl:right-0 z-[-1]'>
        <div className="absolute rotate-45 w-80 h-80 top-10 sm:top-24 bg-sky-50 rounded-3xl -start-14"></div>
        <div className="absolute rotate-45 w-80 h-80 top-96 sm:top-[29rem] bg-sky-50 rounded-3xl start-28"></div>
        <div></div>
      </div>
      <div className="max-w-[1750px] mx-auto my-0 flex justify-between flex-wrap">
        <div className="relative flex flex-1 flex-col gap-8 py-[12%] p-[5%]">
          <Typography component={'h1'}>
            {t("login.title")}
          </Typography>
          <div className="min-w-[300px]">
            <Typography component={'h4'}>
              {t("login.p")}
              <Link
                className="text-success text-xs md:text-base border-b-[1px] border-success hover:text-secondary hover:border-secondary"
                to={"/register"}
              >
                {t("login.create")}
              </Link>
            </Typography>
          </div>
          <form onSubmit={submit} className='relative space-y-5'>
            <div>
              <Input type="email"
                value={email}
                onChange={(e) => {
                  SetEmail(e.target.value);
                  setIsFilled(e.target.value !== "");
                }}
                label={t("login.inputFields.email")}
                icon={iconEmail}
                errorMsg={ErrM}
                iconOnClick
              />
            </div>
            <div>
              <Input
                type={showpass ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setIsFilledPass(e.target.value !== "");
                }}
                label={t("login.inputFields.password")}
                icon={iconShow}
                errorMsg={ErrP}
                iconOnClick={ShowPassword}
              />
              <div className="text-end mb-[-5px]">
                <Link
                  className="text-sm texe-mySlate hover:text-secondary transition hover:animate-bounce"
                  to={"/forget-password"}
                >
                  {t("login.forget")}
                </Link>
              </div>
            </div>
            <Button fullWidth>
              {t("login.button")}
            </Button>
          </form>
        </div>
        <AuthDesign img={loginImage}
          title={t("login.TitleImg")}
          paragraph={t("login.resetPar")} />
      </div>
    </div>
  );
}

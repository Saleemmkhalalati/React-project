import { motion, useAnimation } from "framer-motion";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import vector from "./Hero_images/Vector.svg";
import DocterImage from "./Hero_images/Doctor Image.svg";
import Typography from "../../../utilities/Typography";
import Button from "../../../utilities/Button";
import BackPolygon from "../../../utilities/BackPolygon";
import Polygon from "../../../utilities/Polygon";

const Hero = () => {
  const { t } = useTranslation("global");
  const controls = useAnimation();
  const navigate = useNavigate();
  const handleClick = async () => {
    //animation start ..
    await controls.start({ rotate: 10, transition: { duration: 0.3 } });
    await controls.start({ rotate: -10, transition: { duration: 0.3 } });
    await controls.start({ rotate: 0, transition: { duration: 0.3 } });
    //go to next page ..
    await navigate("/login");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div className="relative grid-col-6 pt-28 pb-52 px-5 sm:px-0 sm:ps-10  flex flex-col gap-5">
        <div className="flex">
          <div className="text-primary">{t("Hero.0")}</div>
          <img className="ms-2" src={vector} alt="img" />
        </div>

        <div className="absolute top-24 -start-24">
          <BackPolygon></BackPolygon>
        </div>

        <Typography component={"h1"}>{t("Hero.1")}</Typography>
        <p className="text-mySlate text-sm sm:text-md">{t("Hero.2")}</p>
        <div className="relative">
          <motion.div
            initial={{ rotate: 0 }}
            animate={controls}
            className="absolute border-solid border-secondary border-[1px] rounded top-1 start-1 rtl:w-[6.3rem] ltr:w-32 h-8"
          ></motion.div>
          <Button onClick={handleClick}>{t("Hero.3")}</Button>
        </div>
      </div>
      <div className="relative grid-col-6">
        <div className="absolute top-24 start-60">
          <BackPolygon></BackPolygon>
        </div>
        <div className="absolute hidden text-center xl:w-1/3 xl:h-10 w-fit bg-white  lg:flex lg:items-center lg:justify-center top-44 start-[25rem] z-20 rounded-lg shadow-md">
          <p className="text-success">{t("Hero.4")}</p>
        </div>
        <div className="relative top-28 start-44">
          <Polygon color="gradient" className={"absolute w-60 h-60 "}></Polygon>
        </div>
        <div className="relative start-[12.5rem]  top-28  ">
          <Polygon color="gray" className={"absolute w-60 h-60 "}>
            <img
              className="absolute w-36 ltr:start-[5rem] rtl:start-[4.5rem] top-[1.3rem] hidden md:block ltr:-rotate-45 rtl:rotate-45"
              src={DocterImage}
              alt="img"
            />
          </Polygon>
        </div>
      </div>
    </div>
  );
};
export default Hero;

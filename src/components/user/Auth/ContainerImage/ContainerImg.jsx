import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import Typography from "../../../utilities/Typography";
const   ContainerImg = ({ docImg, action }) => {
    // Initialize the i18n translation hook
    const { t } = useTranslation("global");
    return (
        <div className="relative">
            {/* Container for gradient border */}
            <div className="w-[457px] h-[457px] absolute z-1 start-[62px] top-[-92px] rounded-[16px] rotate-[46deg] gradient-border hidden lg:block"></div>
            {/* Container for the main image */}
            <div className="w-[547px] h-[547px] bg-myGray-100 shadow-sm hidden lg:flex justify-end items-center z-2 translate-x-[190px] translate-y-[-130px] rotate-[46deg] rounded-[16px] overflow-hidden">
                <img
                    src={docImg}
                    className="rotate-[-46deg] absolute bottom-[-100px] left-[60px] w-[545.43px] origin-center max-w-full max-h-full"
                />
            </div>
            <div className="w-[90%] lg:w-[74%] flex gap-[24px] flex-col ml-auto pr-[22px]">
                {/* Heading for the container */}
                <Typography component={"gradient-text"}>
                    {action} ...
                </Typography>
                {/* Text content */}
                <p className="text-[16px] font-normal leading-[25.14px] text-icons">
                    {t("register.ImageContainer.aboutUs")}
                </p>
            </div>
        </div>
    );
};
export default ContainerImg;
ContainerImg.propTypes = {
    docImg: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
};

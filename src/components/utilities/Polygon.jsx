export default function Polygon({ color, className }) {
    return (
        <div
            className={`${className ? className : ""} ${
                color === "primary"
                    ? "w-96 h-96 absolute -z-50 origin-center rounded-2xl ltr:rotate-45 rtl:-rotate-45 bg-primary opacity-5"
                    : "" //gradient
            }`}
        >
            Polygon
        </div>
    );
}
import PropTypes from "prop-types";
Polygon.propTypes = {
    color: PropTypes.oneOf(["primary", "gradient"]),
    className: PropTypes.string,
};
export default function Polygon({ color, className,children }) {
    return (
        <div
            className={`${className ? className : ""} ${
                color === "primary"
                    ? "w-96 h-96 absolute -z-50 origin-center rounded-2xl ltr:rotate-45 rtl:-rotate-45 bg-primary opacity-5"
                    : color === "gradient" 
                    ? "absolute bg-gradient-to-b from-secondary to-primary rounded-2xl shadow-md ltr:rotate-45 rtl:-rotate-45"
                    :  color === "white" 
                    ? "absolute bg-white rounded-xl "
                    : color === "gray"
                    ? "bg-gray-200 origin-center ltr:rotate-45 rtl:-rotate-45 rounded-xl"
                    : ""
            }`}
        >
            {children}
           
        </div>
    );
}
import PropTypes from "prop-types";
Polygon.propTypes = {
    children: PropTypes.string,
    color: PropTypes.oneOf(["primary", "gradient","white","gray"]).isRequired,
    className: PropTypes.string,
};

// white polygon must be more  8px graident border
// when use graident as a Transparent layer above polgon must give it rotate -90 deg
export default function Typography({ component, children, className }) {
    return (
        <div
            className={`${className ? className : ""} ${
                component === "h1"
                    ? "font-bold text-4xl text-primary "
                    : component === "h4"
                    ? "font-normal text-base text-myGray-500"
                    : component === "h5"
                    ? "font-normal text-xs text-myGray-500"
                    : "font-normal text-base text-myGray-600"
            }`}
        >
            {children}
        </div>
    );
}
import PropTypes from "prop-types";

Typography.propTypes = {
  children: PropTypes.any.isRequired,
  component: PropTypes.oneOf(["h1", "h4", "h5", "p"]),
  className: PropTypes.string,
};

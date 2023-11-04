export default function Typography({ component, children, className }) {
    return (
        <>
            {component === "success-text" ? (
                <span className={`${className ? className : ""} text-xs md:text-base text-success border-b-[1px] border-success hover:text-secondary hover:border-secondary`}>
                    {children}
                </span>
            ) : (
                <div
                    className={`${className ? className : ""} ${
                        component === "h1"
                            ? "font-bold text-4xl text-primary "
                            : component === "h4"
                            ? "font-normal text-base text-myGray-500"
                            : component === "h5"
                            ? "font-normal text-xs text-myGray-500"
                            : component === "gradient-text"
                            ? "font-bold text-xl bg-gradient-to-b from-primary from-15% to-secondary to-85% transform rotate-15 bg-clip-text text-transparent"
                            : component === "secondary-text"
                            ? "text-base font-normal w-full text-center text-secondary hover:text-success cursor-pointer "
                            : "font-normal text-base text-myGray-600" // p
                    }`}
                >
                    {children}
                </div>
            )}
        </>
    );
}
import PropTypes from "prop-types";
Typography.propTypes = {
    children: PropTypes.any.isRequired,
    component: PropTypes.oneOf([
        "h1",
        "h4",
        "h5",
        "p",
        "gradient-text",
        "success-text",
        "secondary-text",
    ]),
    className: PropTypes.string,
};

import PropTypes from "prop-types";

export default function Container({ children, className }) {
    return (
        <div className={`relative max-w-[1750px] mx-auto ${className ? className : ""}`}>
            {children}
        </div>
    );
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
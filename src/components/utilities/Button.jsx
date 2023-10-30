export default function Button({
    type,
    children,
    disabled,
    fullWidth,
    onClick,
}) {
    return (
        <button
            disabled={disabled}
            type={type}
            onClick={onClick}
            className={`px-3 py-1 ${fullWidth === true ? "w-full" : ""
                } text-white rounded bg-gradient-to-b from-primary to-secondary transform rotate-15 hover:opacity-90 opacity-100 disabled:opacity-80 disabled:pointer-events-none`}
        >
            {children}
        </button>
    );
}
import PropTypes from "prop-types";
Button.propTypes = {
    children: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["button", "submit"]),
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

export default function Button({children}) {
    return (
        <button
            type="button"
            className="px-3 py-1 rounded w-full text-white bg-gradient-to-b from-primary to-secondary"
        >
            {children}
        </button>
    );
}
import PropTypes from "prop-types";
Button.propTypes = {
    children: PropTypes.string.isRequired,
};
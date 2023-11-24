export default function View({
    type,
    children,
    disabled,
    fullWidth,
    onClick,
}) {
    return (
 <div>
 vvvvvvvvvv
 </div>
    );
}
import PropTypes from "prop-types";
View.propTypes = {
    children: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["button", "submit"]),
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};
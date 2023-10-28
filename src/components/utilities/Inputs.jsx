import PropTypes from "prop-types";
export function Input({ label, name, value, onChange, icon, errorMsg }) {
    console.log(errorMsg);
    return (
        <div className="relative">
            <div
                className={`flex flex-row py-2 px-3 border-[1px] ${
                    errorMsg !== ""
                        ? "border-error "
                        : "border-myGray-400 focus-within:border-primary "
                } bg-white rounded-md transition-all duration-100 ease-in-out`}
            >
                <label
                    htmlFor={name}
                    className="relative z-[0] w-full me-1 transition-all duration-100 ease-in"
                >
                    <input
                        className="peer w-full placeholder-transparent text-mySlate outline-0 focus:outline-none"
                        placeholder="placeholder"
                        id={name}
                        name={name}
                        value={value}
                        onChange={onChange}
                    />
                    <span className="absolute start-0 -top-[1.40rem] px-1 text-mySlate text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-mySlate peer-placeholder-shown:top-0 peer-focus:-top-[1.40rem] peer-focus:text-mySlate peer-focus:text-sm rounded-md bg-gradient-to-b from-transparent from-65% to-white to-35%">
                        {label}
                    </span>
                </label>
                <img src={icon} width={12} height={12} alt="icon" />
            </div>
            {errorMsg !== "" && (
                <p className="ps-1 pt-2 text-error font-normal text-xs">
                    {errorMsg}
                </p>
            )}
        </div>
    );
}
Input.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    type: PropTypes.oneOf(["text", "password", "email", "number", "date"])
        .isRequired,
    onChange: PropTypes.func.isRequired,
    icon: PropTypes.string.isRequired,
    errorMsg: PropTypes.string.isRequired,
};
export function Textarea({ label, value, onChange, errorMsg, rows, name }) {
    return (
        <div>
            <div className={`relative z-[0]`}>
                <textarea
                    className={`peer py-2 px-3 resize-none w-full h-52 rounded-md border-[1px]
                    bg-transparent placeholder-transparent  text-mySlate outline-0 focus:outline-none
                    ${
                        errorMsg !== ""
                            ? "border-error"
                            : "border-myGray-400 focus-within:border-primary"
                    } text-mySlate placeholder-mySlate bg-white outline-0 placeholder:focus:opacity-0`}
                    placeholder="placeholder"
                    rows={rows}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
                <label
                    htmlFor={name}
                    className="absolute start-3 -top-[0.85rem] px-1 text-mySlate text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-mySlate peer-placeholder-shown:top-1 peer-focus:-top-[0.85rem] peer-focus:text-mySlate peer-focus:text-sm rounded-md bg-gradient-to-b from-transparent from-65% to-white to-35%"
                >
                    {label}
                </label>
            </div>
            {errorMsg !== "" && (
                <p className="ps-1 text-error font-normal text-xs">
                    {errorMsg}
                </p>
            )}
        </div>
    );
}
Textarea.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    errorMsg: PropTypes.string.isRequired,
    rows: PropTypes.number,
};

import logo from "../../assets/icons/Logo.svg";
import "../../App.css";
export default function Loading() {
    return (
        <div className="min-h-screen px-5 flex flex-col justify-between">
            <img
                className="self-start opacity-20 w-48 sm:w-60 md:w-72"
                src={logo}
                alt="logo"
            />
            <div className="self-center flex flex-row items-center">
                <img
                    className="me-1 w-8 sm:w-12 md:w-16"
                    src={logo}
                    alt="logo"
                    width={100}
                />
                <div className="font-bold text-2xl sm:text-3xl md:text-4xl bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent me-1">
                    Loading
                </div>
                <div className="custom-loader mt-7 w-8 h-[0.35rem] sm:h-2"></div>
            </div>
            <img
                className="self-end opacity-20 w-48 sm:w-60 md:w-72"
                src={logo}
                alt="logo"
            />
        </div>
    );
}

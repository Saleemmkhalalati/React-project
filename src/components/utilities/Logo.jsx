import { Link } from "react-router-dom";
import logo from "../../assets/icons/Logo.svg";
import Typography from "./Typography";

export default function Logo() {
    return (
        <Link to="/">
            <div className="flex flex-row items-center">
                <img
                    className="ltr:mr-1 rtl:ml-1"
                    src={logo}
                    alt="logo"
                    width={25}
                    height={20}
                    dir="ltr"
                />
                <Typography component={"gradient-text"}>Med - Sal</Typography>
            </div>
        </Link>
    );
}

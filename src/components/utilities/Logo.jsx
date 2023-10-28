import { Link } from "react-router-dom";
import logo from "../../assets/icons/Logo.svg";

export default function Logo() {
    return (
        <Link to="/">
            <div className="flex flex-row items-center">
                <img className="ml-1" src={logo} alt="logo" width={25} height={20} dir="ltr"/>
                <div className="font-bold text-xl bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent">
                    Med - Sal
                </div>
            </div>
        </Link>
    );
}

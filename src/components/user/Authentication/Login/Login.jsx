import "./Login.css";
import loginImage from "../Login/logain-image/Image.svg";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="login grid grid-cols-1 sm:grid-cols-2 h-screen ">
      <div className="relative pt-52 pl-14 ">
        <div className="absolute rotate-45 w-3/5 h-3/5 top-24 -left-50 bg-sky-50 rounded-3xl"></div>
        <div className="relative">
          <h3 className="text-primary text-4xl text mb-5 font-semibold ">
            Login in Med - Sal
          </h3>
          <div className="flex gap-1">
            <p className="text-mySlate text-md">
              Don’t have an account with us?
            </p>
            {
              <Link className="text-success text-md" to={""}>
                Create account
              </Link>
            }
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="relative">
          <div className="loginImage relative  flex justify-end">
            <img
              className=" relative shrink w-4/6 z-10 hidden sm:block"
              src={loginImage}
              alt=""
            />
          </div>
        </div>
        <div className="pb-40">
          <h3 className="text-red-500">Welcome back to Med - Sal ...</h3>
          <p>
            We are a platform that seeks to connect clinical patients with
            doctors in various medical specialties and pharmacies all over the
            Emirates.
          </p>
        </div>
      </div>
    </div>
  );
}
{
}

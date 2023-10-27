import "./Login.css";
import loginImage from "../Login/logain-image/Intersect.svg";
import iconEmail from "../Login/logain-image/Email.svg";
import iconShow from "../Login/logain-image/View.svg";

import { Link } from "react-router-dom";
import { useState } from "react";
export default function Login() {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [accept, setAccept] = useState("");

  async function submit(e) {
    e.preventDefault();
    setAccept(true);
    nav("/Home");
  }

  return (
    <div className="login grid grid-cols-1 sm:grid-cols-2 h-screen  ">
      <div className="relative pt-20 m-3  sm:pt-20 sm-ps-0 md:pt-40 md:ps-14">
        <div className="absolute rotate-45 w-80 h-80  top-24  bg-sky-50 rounded-3xl -start-14"></div>
        <div className="fixed rotate-45 w-80 h-80  top-[600px] sm:top-[470px] start-28  bg-sky-50 rounded-3xl"></div>
        <div className="relative text-center sm:text-start">
          <h3 className="text-primary text-4xl text mb-6 font-semibold ">
            Login in Med - Sal
          </h3>
          <div className="min-w-[300px]">
            <p className="text-mySlate text-md">
              Don’t have an account with us?
              {
                <Link
                  className="text-success text-md border-b-[1px] border-success"
                  to={""}
                >
                  Create account
                </Link>
              }
            </p>
          </div>
        </div>
        <form onSubmit={submit} className="mt-10 relative">
          <div className="relative mb-5">
            <input
              type="email"
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
              className="input p-2 w-full outline-none border-solid border-[1px] border-myGray-300 focus:border-secondary rounded-lg relative"
            />
            <label className="placeholder  bg-white absolute top-3 start-5 text-sm text-gray-500 pointer-events-none">
              Email Address
            </label>
            <div className="absolute end-4 top-[16px]">
              <img className="" src={iconEmail} alt="" />
            </div>
          </div>

          <div className=" relative mb-5  ">
            <input
              type="password"
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
              className="input p-2 w-full outline-none border-solid border-[1px] border-myGray-300 focus:border-secondary rounded-lg  relative"
            />
            <label className="placeholder bg-transparent absolute top-3 start-5 text-sm text-gray-500 pointer-events-none">
              Password
            </label>
            {accept &&
              password === "" &&
              password.length < 8 &&
              email === "" && (
                <p className="text-sm text-warning">
                  Invalid Email or Password
                </p>
              )}
            <div className="absolute end-4 top-[16px] cursor-pointer">
              <img className="" src={iconShow} alt="" />
            </div>
          </div>
          <button
            className=" rounded-lg  p-2  w-full text-white bg-gradient-to-b from-primary to-secondary"
            type="submit"
          >
            Login in med - sal
          </button>
        </form>
      </div>
      <div className="relative overflow-hidden flex flex-col justify-end ">
        <div className="loginImage relative  flex justify-end ">
          <img
            className="w-3/6 relative z-[1] hidden sm:block "
            src={loginImage}
            alt=""
          />
        </div>
        <div className="m-auto pb-0  sm:text-start text-center sm:ps-0 md:ps-20  ">
          <h3 className="bg-gradient-to-b from-primary to-secondary text-transparent bg-clip-text mb-4 text-xl font-bold">
            Welcome back to Med - Sal ...
          </h3>
          <p className="text-md text-mySlate">
            We are a platform that seeks to connect clinical patients with
            doctors in various medical specialties and pharmacies all over the
            Emirates.
          </p>
        </div>
      </div>
    </div>
  );
}

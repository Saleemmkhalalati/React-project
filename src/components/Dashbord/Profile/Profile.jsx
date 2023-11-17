import { useState } from "react";
import avater from "./PeofileImages/Avtar.svg";
import camera from "./PeofileImages/Camera.svg";
import user from "../../../assets/icons/Vector.svg";
import email from "../../../assets/icons/Email.svg";
import pass from "../../../assets/icons/eyepass.svg";
import Typography from "../../utilities/Typography";
import viow from "../../../assets/icons/View.svg";
import { Link } from "react-router-dom";
export default function Profile() {
  const items = [
    {
      image: avater,
      name: "admin user",
      email: "rawanahd23@gmail.com",
      password: "123456789",
    },
  ];

  const [isTextVisible, setTextVisibility] = useState(false);

  const toggleTextVisibility = () => setTextVisibility(!isTextVisible);
  console.log(isTextVisible);
  return (
    <div className="flex md:justify-end justify-center pt-5 px-0 sm:px-5">
      <div className=" flex flex-col bg-white  min-w-[10%] sm:min-w-[25rem] rounded-md px-5 py-10 gap-5 ">
        {items.map((item, index) => (
          <>
            <div className=" relative flex items-center justify-center flex-col gap-2">
              <div className="relative ">
                <img
                  className="w-28 sm:w-32"
                  src={item.image ? item.image : ""}
                  alt={""}
                />
                <img
                  className="absolute bottom-3 start-24 "
                  src={item.image ? camera : ""}
                  alt=""
                />
              </div>
              <div>
                <Typography component={"p"}> {item.email}</Typography>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center border-2 border-myGray-100 py-2 rounded-md">
                <Typography className={"ps-3"} component={"h4"}>
                  {item.name ? item.name : ""}
                </Typography>
                <img className="pe-3" src={user} alt="" />
              </div>
              <div className="flex justify-between items-center border-2  border-myGray-100 py-2 rounded-md">
                <Typography className={"ps-3"} component={"h4"}>
                  {item.email ? item.email : ""}
                </Typography>
                <img className="pe-3" src={email} alt="img" />
              </div>
              <div className="flex justify-between items-center border-2 border-myGray-100 py-2 rounded-md">
                <Typography className={"ps-3"} component={"h4"}>
                  {item.password
                    ? isTextVisible
                      ? item.password.replace(/./g, "*")
                      : item.password
                    : ""}
                </Typography>
                <img
                  className="pe-3 w-6 cursor-pointer"
                  src={isTextVisible ? pass : viow}
                  alt=""
                  onClick={toggleTextVisibility}
                />
              </div>
            </div>
          </>
        ))}
        <Link>
          <Typography className={"text-end"} component={"secondary-text"}>
            Edit Profile
          </Typography>
        </Link>
      </div>
    </div>
  );
}

import loginImage from "../Login/logain-image/Intersect.svg";
import emailIcon from "../../../../assets/icons/Email.svg";
import ViewIcon from "../../../../assets/icons/View.svg";
import eyepassIcon from "../../../../assets/icons/eyepass.svg";

import { Link } from "react-router-dom";
import { useState } from "react";
import Typography from "../../../utilities/Typography";
import { Input } from "../../../utilities/Inputs";
import Button from "../../../utilities/Button";
import Polygon from "../../../utilities/Polygon";

export default function Login() {
    const [formData, setFormData] = useState({}); // Form data
    const [errors, setErrors] = useState({}); // Form data
    const [isSubmitting, setIsSubmitting] = useState(false); // Indicates if the form is submitted
    const [isValid, setIsValid] = useState(true); // Indicates if the form is Valid
    const [showpass, setShowpass] = useState(false);
    // send error msg
    const handleSetErrors = (name, msgError) => {
        console.log(name);
        setErrors({
            ...errors,
            [name]: msgError,
        });
    };
    // Handle form input changes
    const handleChange = async (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
        if (event.target.value === "") {
            setIsValid(false);
            handleSetErrors([event.target.name], "This field is required");
        }
        if (
            event.target.name === "email" &&
            !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
                event.target.value
            )
        ) {
            setIsValid(false);
            handleSetErrors([event.target.name], "Invalid email address");
        } else if (
            event.target.name === "password" &&
            event.target.value.length < 6
        ) {
            setIsValid(false);
            handleSetErrors(
                [event.target.name],
                "The minimum number of characters is six."
            );
        } else {
            await handleSetErrors([event.target.name], "");
            if (errors.email === "" && errors.password === "") setIsValid(true);
        }
    };
    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        const hasEmptyFields = ["email", "password"].some(
            (fieldName) => !formData[fieldName]
        );
        if (!hasEmptyFields) {
            setIsSubmitting(true);
            setIsSubmitting(false);
        } else {
            setIsValid(false);
            console.log("Some required fields are empty.");
        }
    };
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen overflow-clip">
            <div className="relative lg:grid-cols-7 pt-20 m-3 sm:pt-20 sm-ps-0 md:pt-40 md:ps-14">
                <Polygon
                    color={"primary"}
                    className={"top-0 sm:top-24 -start-14"}
                />
                <Polygon
                    color={"primary"}
                    className={"top-96 sm:top-[29rem] start-28"}
                />
                <div className="flex flex-col gap-y-10 w-full text-center sm:text-start">
                    <Typography component={"h1"}>Login in Med - Sal</Typography>
                    <div className="flex flex-row gap-x-1">
                        <Typography component={"p"}>
                            Don’t have an account with us?
                        </Typography>
                        <Link to={"/register"}>
                            <Typography component={"success-text"}>
                                Create account
                            </Typography>
                        </Link>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="relative mt-10">
                    <div className="flex flex-col gap-y-9">
                        <Input
                            name="email"
                            type="email"
                            label="Email Address"
                            icon={emailIcon}
                            onChange={handleChange}
                            errorMsg={
                                !isValid && errors.email === undefined
                                    ? "This field is required"
                                    : errors.email
                            }
                        />
                        <Input
                            name="password"
                            type={showpass ? "text" : "password"}
                            label="Password"
                            icon={showpass ? eyepassIcon : ViewIcon}
                            iconOnClick={() => {
                                setShowpass(!showpass);
                            }}
                            onChange={handleChange}
                            errorMsg={
                                !isValid && errors.password === undefined
                                    ? "This field is required"
                                    : errors.password
                            }
                        />
                    </div>
                    <div className="text-end mb-9">
                        <Link
                            className="text-sm texe-mySlate hover:text-secondary transition hover:animate-bounce"
                            to={"/forget-password"}
                        >
                            Forget password ?
                        </Link>
                    </div>
                    <Button
                        fullWidth
                        type="submit"
                        disabled={isSubmitting || !isValid}
                    >
                        Login in Med - Sal
                    </Button>
                </form>
            </div>
            <div className=" lg:grid-cols-5 flex flex-col justify-between ">
                <div className=" hidden lg:block">
                    <div className=" relative start-[15rem] top-[6rem] xl:top-[9.5rem] origin-center ltr:rotate-45 rtl:-rotate-45 ">
                        <div className="absolute w-[346px] h-[346px] xl:w-[370px]  xl:h-[370px] rounded-2xl bg-gradient-to-r from-primary to-secondary">
                            <div className="absolute z-10 w-[340px] h-[340px] xl:w-[364px]  xl:h-[364px] rounded-2xl top-[3px] start-[3px] bg-white"></div>
                        </div>
                    </div>
                    <div className=" relative start-[24rem] xl:start-[27rem] top-16 origin-center ltr:rotate-45 rtl:-rotate-45">
                        <div className="absolute  w-[400px] h-[400px] xl:w-[500px]  xl:h-[500px]  rounded-2xl bg-myGray-100 shadow-md overflow-hidden">
                            <img
                                src={loginImage}
                                alt="img"
                                className="absolute start-12 rtl:start-20  top-24  z-10 w-[400px] h-[400px] xl:w-[500px] xl:h-[500px] ltr:-rotate-45 rtl:rotate-45 "
                            />
                        </div>
                    </div>
                </div>
                <div className="relative pb-0 md:pb-10 ms-5 md:ms-16 lg:ms-40 lg:me-5">
                    <Typography component={"gradient-text"}>
                        Welcome back to Med - Sal ...
                    </Typography>
                    <Typography component={"p"}>
                        We are a platform that seeks to connect clinical
                        patients with doctors in various medical specialties and
                        pharmacies all over the Emirates.
                    </Typography>
                </div>
            </div>
        </div>
    );
}

import { styles } from "../Stayles";
import DocterImage from "./About_images/Intersect.png";
const About = () => {
    return (
        <section className={`About_section overflow-hidden  ${styles.padding}`}>
            <div className={`flex lg:flex-row flex-col justify-between  `}>
                <div className="about_image lg:w-[40%]   relative ">
                    {/* rectangle border  */}
                    <div
                        className={`${styles.border_graident}  ${styles.Rectangle_border}   w-[150px] h-[150px] md:w-[220px] md:h-[220px] lg:w-[220px] lg:h-[220px] rounded-[5px] relative lg:top-1/2 translate-y-[-50%]  top-[200px] translate-x-[-60px] lg:translate-x-[-120px] rtl:md:right-56 rtl:lg:right-16 rtl:right-16`}
                    >
                        <div className="bg-white w-full h-full"></div>
                    </div>
                    {/* rectangle image */}
                    <div
                        className={` relative ${styles.Rectangle_image} lg:w-[350px] lg:h-[350px] md:w-[350px] md:h-[350px] w-[250px] h-[250px] left-6 bottom-20 md:right- md:top-[-200px] lg:right-[-80px] lg:top-[-120px] rtl:lg:right-[60px] rtl:md:right-40 rtl:right-10`}
                    >
                        <div
                            style={{ backgroundImage: `url(${DocterImage})` }}
                            className={` absolute bottom-0 left-[50%] translate-x-[-50%] img-landing-page bg-no-repeat bg-cover bg-center lg:w-[270px] lg:h-[300px] md:w-[270px] md:h-[300px] w-[180px] h-[200px]   `}
                        ></div>
                    </div>
                    {/* rectangle graident */}
                    <div
                        className={`  ${styles.Rectangle_grident} lg:w-[150px] lg:h-[150px] md:w-[130px] md:h-[130px] w-[100px] h-[100px] mr-10 absolute top-5 lg:top-10 right-0 rtl:lg:top-[-20px] rtl:lg:right-72`}
                    ></div>
                </div>

                <div className="about-content lg:w-1/2  ">
                    <div className="content flex flex-col lg:w-[80%] text-left relative">
                        <h1 className={`${styles.heroHeadText}`}>About us </h1>
                        <p className={`${styles.heroSubText} `}>
                            We are a platform that seeks to connect clinical
                            patients with doctors in various medical specialties
                            and pharmacies all over the Emirates, So it has the
                            following features:
                        </p>
                        <div className="content pl-6 mt-2 flex flex-wrap flex-col border-l-2 border-solid border-secondary">
                            <div
                                className={`solution-item  mb-5  relative before:content-[''] before:p-[10px] before:rotate-[45deg] before:absolute before:left-[-37px] before:top-[2%] before:border-2 before:border-solid before:border-primary before:bg-primary `}
                            >
                                <h5 className="text-lg mb-1 text-TextOtherColor">
                                    Locate the patient to the nearest delivery
                                    service.
                                </h5>
                                <p className="text-TextOtherColor opacity-[70%]">
                                    We can determine the patient's location and
                                    determine the nearest service to him, so
                                    that it is easy and convenient for him to
                                    access the service
                                </p>
                            </div>
                            <div className="solution-item mb-5 text-[var(--color-text-black)] relative before:content-[''] before:p-[10px] before:rotate-[45deg] before:absolute before:left-[-37px] before:top-[2%] before:border-2 before:border-primary before:bg-primary ">
                                <h5 className="text-lg mb-1 text-TextOtherColor">
                                    Contain Cloud payments.
                                </h5>
                                <p className="text-TextOtherColor opacity-[70%]">
                                    We have developed an electronic payment
                                    feature that makes it easier for the patient
                                    to pay money for the services provided to
                                    him via the Internet.
                                </p>
                            </div>
                            <div className="solution-item text-[var(--color-text-black)] relative before:content-[''] before:p-[10px] before:rotate-[45deg] before:absolute before:left-[-37px] before:top-[2%] before:border-2 before:border-solid before:border-primary before:bg-primary">
                                <h5 className="text-lg mb-1 text-TextOtherColor">
                                    Filter depending on the current location.
                                </h5>
                                <p className="text-TextOtherColor opacity-[70%]">
                                    We filtered all services close to the
                                    patient and vice versa
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About image */}
        </section>
    );
};

export default About;

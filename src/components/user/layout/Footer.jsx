import { NavLink } from "react-router-dom";
import Logo from "../../utilities/Logo";
import Typography from "../../utilities/Typography";
import Container from "../../utilities/Container";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation("global");
  const links = [
    { name: t("navbar.links.0"), to: "/" },
    { name: t("navbar.links.1"), to: "/services" },
    { name: t("navbar.links.2"), to: "/about-us" },
    { name: t("navbar.links.3"), to: "/contact-us" },
  ];
  return (
    <Container>
      <div className="p-5">
        <div className="py-3 border-t-2 grid grid-cols-1 lg:grid-cols-2 gap-y-5 lg:gap-x-16 xl:gap-x-80">
          <div className="flex flex-col gap-y-3">
            <Logo />
            <Typography component={"p"} className={"max-w-md ms-1"}>
              We are a platform that seeks to connect clinical patients with
              doctors in various medical specialties and pharmacies all over the
              Emirates.
            </Typography>
          </div>
          <div className="flex flex-col gap-y-3 mt-2">
            <p htmlFor="email">Subscribe to our Quarterly newsletter ....</p>
            <div className="flex flex-row">
              <input
                id="email"
                placeholder="Enter your email "
                className="p-2 border-[1px] border-e-0 border-primary bg-myGray-100 placeholder-myGray-500 rounded-s-md w-full outline-0 placeholder:focus:opacity-0"
              />
              <button
                type="button"
                className="rounded-e-md px-3 py-1 text-white bg-gradient-to-b from-primary to-secondary hover:opacity-90 opacity-100"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className="lg:mx-80 my-3" />
        <div className="flex justify-center sm:justify-between flex-wrap gap-x-1 gap-y-5">
          <Typography className={"ms-1"} component={"p"}>
            Copyright @ 2023, All Right Resaved By{" "}
            <a href="/" className="text-secondary">
              Remostart
            </a>
          </Typography>
          <ul
            className={`flex flex-row flex-wrap items-center text-myGray-600 gap-x-9 `}
          >
            {links.map((link) => (
              <NavLink to={link.to} key={link.to}>
                {link.name}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}

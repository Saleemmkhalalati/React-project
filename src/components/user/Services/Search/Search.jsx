//imgs
import searshIcon from "../../../../assets/icons/Search.svg";
import imgSearch from "../Services_img/searching.svg";
//components
import { Input } from "../../../utilities/Inputs";
import BackPolygon from "../../../utilities/BackPolygon";
import Container from "../../../utilities/Container";

import { useEffect, useState } from "react";
//useContext
import { useContext } from "react";
import { useServices } from "../../../../context/Context";
import Typography from "../../../utilities/Typography";
//translation
import { useTranslation } from "react-i18next";

function Search() {
  const { t } = useTranslation("global");
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const { setcustomServices } = useContext(useServices);
  useEffect(() => {
    setcustomServices(search);
  }, [setcustomServices]);
  const { customServices } = useContext(useServices);
  console.log(customServices);
  return (
    <Container>
      <div className="pt-6 md:pt-36 min-h-screen flex flex-col gap-52 sm:gap-80 ">
        <div className="sm:px-12">
          <Input
            type={"text"}
            name={"search"}
            label={t("search.2")}
            icon={searshIcon}
            value={search}
            onChange={handleSearch}
            errorMsg={""}
          />
        </div>

        <div>
          {search === "" ? (
            <div className="flex flex-col items-center  justify-center">
              <img className="w-44 sm:w-64" src={imgSearch} alt="img" />
              <Typography component={"h4"}>{t("search.0")}</Typography>
              <Typography component={"h4"}>{t("search.1")}</Typography>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className=" absolute md:hidden lg:block -end-44 sm:end-0 bottom-0 sm:top-[55rem]">
        <BackPolygon />
      </div>
    </Container>
  );
}

export default Search;

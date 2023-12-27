import Container from "../../utilities/Container";
import { Input } from "../../utilities/Inputs";
import searshIcon from "../../../assets/icons/Search.svg";
import { useState } from "react";
import BackPolygon from "../../utilities/BackPolygon";

function Search() {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  console.log(search);
  return (
    <Container className={"pt-6 md:pt-36 min-h-screen"}>
      <div className="sm:px-14">
        <Input
          type={"text"}
          name={"search"}
          label={"Search ..."}
          icon={searshIcon}
          value={search}
          onChange={handleSearch}
          errorMsg={""}
        />
        <div className=" absolute md:hidden lg:block -end-44 sm:end-0 bottom-0 sm:top-[55rem]">
          <BackPolygon />
        </div>
      </div>
    </Container>
  );
}

export default Search;

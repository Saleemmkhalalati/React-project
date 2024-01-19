import { useTranslation } from "react-i18next";
import Typography from "../../../utilities/Typography";
import { DashInput } from "../../../utilities/Inputs";
import Button from "../../../utilities/Button";

function Discount({
  name,
  type,
  value,
  onChange,
  onBlur,
  icon,
  errorMsg,
  price,
  priceAfterDiscount,
}) {
  const { t } = useTranslation("global");
  return (
    <div className="w-[17rem] min-h-full sm:w-[22rem] md:w-[36rem] pb-5 bg-white absolute top-32 end-0 sm:end-5 rounded shadow z-20 px-4 md:px-8 ">
      <div className="py-5 md:py-10 flex flex-col gap-3">
        <Typography component={"h3"}>{t("discount.0")}</Typography>
        <Typography component={"h5"}>{t("discount.1")}</Typography>
      </div>
      <div className="flex flex-col gap-2 md:gap-4">
        <DashInput
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          icon={icon}
          errorMsg={errorMsg}
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-primary text-xs">{t("discount.2")}</p>
            <p className="text-myGray-600 text-xs">{price}</p>{" "}
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-primary text-xs">{t("discount.3")}</p>
            <p className="text-myGray-600 text-xs">{priceAfterDiscount}</p>
          </div>
        </div>
        <Button fullWidth={true} type="submit">
          {t("discount.4")}
        </Button>
      </div>
    </div>
  );
}

export default Discount;

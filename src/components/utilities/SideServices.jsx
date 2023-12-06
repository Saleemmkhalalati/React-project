import BackPolygon from "./BackPolygon";
import Typography from "./Typography";
export default function SideServices() {
  return (
    <div className="h-screen">
      <div className=" absolute top-20 -start-28 hidden sm:block ">
        <BackPolygon />
      </div>

      <div className="mt-48 px-10">
        <Typography className={"text-lg"} component={"h1"}>
          Categories
        </Typography>
      </div>
    </div>
  );
}

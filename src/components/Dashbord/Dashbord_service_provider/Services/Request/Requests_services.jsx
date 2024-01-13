import { Link } from "react-router-dom";
import Typography from "../../../../utilities/Typography";
import Content from "../../../Dashbord_layout/Content/Content";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function Requests_servies() {
  const [active, setActive] = useState(null);

  const requests = [
    { AllRequest: 100 },
    { RequestsRejected: 10 },
    { RequestsAccepted: 50 },
    { LastRequest: 40 },
  ];

  const handleClick = (id) => {
    setActive(id === active ? null : id); // قم بتغيير القيمة إلى null إذا كانت متساوية، وإلا قم بتغييرها إلى id
  };

  return (
    <Content path="Products /Request Product">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 py-5">
        <Link to={""}>
          <div
            onClick={() => handleClick("1")}
            className={`rounded py-5 px-7 flex flex-col gap-2 ${
              active === "1" ? "bg-white/75" : "bg-white"
            }`}
          >
            <p className="text-md">All Request - {requests[0].AllRequest}</p>
            <Typography component={"h5"}>
              These requests are sent by people who would like to book an
              appointment.
            </Typography>
          </div>
        </Link>
        <Link to={"RequestsRejected_services"}>
          <div
            onClick={() => handleClick("2")}
            className={` rounded py-5 px-7 flex flex-col gap-2 ${
              active === "2" ? "bg-white/75" : "bg-white"
            }`}
          >
            <p className="text-md">
              Requests Rejected - {requests[1].RequestsRejected}
            </p>
            <Typography component={"h5"}>
              These requests are sent by people who would like to book an
              appointment.
            </Typography>
          </div>
        </Link>
        <Link to={"RequestAccepted_services"}>
          <div
            onClick={() => handleClick("3")}
            className={` rounded py-5 px-7 flex flex-col gap-2 ${
              active === "3" ? "bg-white/75" : "bg-white"
            }`}
          >
            <p className="text-md">
              Requests accepted - {requests[2].RequestsAccepted}
            </p>
            <Typography component={"h5"}>
              These requests are sent by people who would like to book an
              appointment.
            </Typography>
          </div>
        </Link>
        <Link to={"LastRequest_service"}>
          <div
            onClick={() => handleClick("4")}
            className={` rounded py-5 px-7 flex flex-col gap-2 ${
              active === "4" ? "bg-white/75" : "bg-white"
            }`}
          >
            <p className="text-md">Last Request - {requests[3].LastRequest}</p>
            <Typography component={"h5"}>
              These requests are sent by people who would like to book an
              appointment.
            </Typography>
          </div>
        </Link>
      </div>

      <Outlet />
    </Content>
  );
}

export default Requests_servies;

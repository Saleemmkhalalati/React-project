import Typography from "../../../utilities/Typography";
import noData from "../../Dashbord_layout/Notifications/Notification_image/No data found.svg";
import "./Notification.css";

const Notifications = () => {
  const notifications = [
    {
      dessc:
        "You have a request for edit information for service provider is name : Omer Ahmed - Doctor",
      date: "now",
    },
    {
      dessc:
        "You have a request for edit information for service provider is name : Omer Ahmed - Doctor",
      date: "1h ago",
    },
    {
      dessc:
        "You have a request for edit information for service provider is name : Omer Ahmed - Doctor",
      date: "4h ago",
    },
    {
      dessc:
        "You have a request for edit information for service provider is name : Omer Ahmed - Doctor",
      date: "05, May, 2023",
    },
    {
      dessc:
        "You have a request for edit information for service provider is name : Omer Ahmed - Doctor",
      date: "05, May, 2023",
    },
    {
      dessc:
        "You have a request for edit information for service provider is name : Omer Ahmed - Doctor",
      date: "05, May, 2023",
    },
    {
      dessc:
        "You have a request for edit information for service provider is name : Omer Ahmed - Doctor",
      date: "05, May, 2023",
    },
    {
      dessc:
        "You have a request for edit information for service provider is name : Omer Ahmed - Doctor",
      date: "05, May, 2023",
    },
    {
      dessc:
        "You have a request for edit information for service provider is name : Omer Ahmed - Doctor",
      date: "05, May, 2023",
    },
    {
      dessc:
        "You have a request for edit information for service provider is name : Omer Ahmed - Doctor",
      date: "05, May, 2023",
    },
    {
      dessc:
        "You have a request for edit information for service provider is name : Omer Ahmed - Doctor",
      date: "05, May, 2023",
    },
    {
      dessc:
        "You have a request for edit information for service provider is name : Omer Ahmed - Doctor",
      date: "05, May, 2023",
    },
    {
      dessc:
        "You have a request for edit information for service provider is name : Omer Ahmed - Doctor",
      date: "05, May, 2023",
    },
    {
      dessc:
        "You have a request for edit information for service provider is name : Omer Ahmed - Doctor",
      date: "05, May, 2023",
    },
  ];
  return (
    <>
      {notifications.length > 0 ? (
        <div className="absolute w-[26rem] max-h-[36.5rem] overflow-hidden overflow-y-auto hide-scrollbar end-8  z-20 top-24 shadow-sm">
          <div className="bg-white py-4 rounded    ">
            <div className="flex items-center  px-4 py-5 gap-1">
              <p className="text-xl font-bold text-myGray-600">Notifications</p>
              <span className="text-error text-sm">-</span>
              <span className="text-error text-sm">
                {notifications.length + 1}
              </span>
            </div>

            <ul className=" px-8">
              {notifications.map((e, index) => (
                <div
                  key={index}
                  className="mb-10 pb-5 border-b relative before:absolute before:content-[''] before:w-[0.3rem] before:h-[0.3rem] before:bg-secondary before:rounded-full before:top-[0.40rem] before:-start-4  "
                >
                  <li className="mb-2 text-sm">{e.dessc}</li>
                  <span>
                    <Typography component={"h5"}> {e.date}</Typography>
                  </span>
                </div>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="absolute z-20 end-8 top-24 shadow-sm">
          <div className="bg-white w-[26rem] h-[30rem]  rounded flex flex-col gap-28  ">
            <div className="flex items-center  px-4 py-5 gap-1">
              <p className="text-xl font-bold text-myGray-600">Notifications</p>
              <span className="text-error text-sm">-</span>
              <span className="text-error text-sm">{notifications.length}</span>
            </div>
            <div className=" flex flex-col items-center justify-center ">
              <img src={noData} alt="" />
              <Typography component={"h5"}>Not Found Notification</Typography>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Notifications;

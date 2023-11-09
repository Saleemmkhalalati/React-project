import no from "./NoData_images/No data found.svg";
const NoData = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img className="w-72" src={no} alt="img" />
      <p className="text-sm text-myGray-500">{children}</p>
    </div>
  );
};
export default NoData;

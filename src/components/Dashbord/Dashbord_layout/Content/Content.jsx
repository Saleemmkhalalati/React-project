import Refrech from "../../../../assets/icons/Refrech.svg";
import Export from "../../../../assets/icons/Export.svg";

const Content = ({ children, path, RefrechFun, ExportFunc }) => {
  return (
    <div className="px-1 sm:px-5 py-4 flex flex-col justify-between   ">
      <div className="flex justify-between  flex-wrap gap-2">
        <p className="text-[16px] font-normal text-myGray-600">
          <span className="text-secondary">Dashboard</span> {path}
        </p>
        <div className="flex items-center gap-4 cursor-pointer mb-4">
          <div className="flex gap-1 " onClick={RefrechFun}>
            <img src={Refrech} alt="" />
            <span className="font-normal text-[13px] leading-[20px] text-myGray-500 hover:text-primary ">
              Refresh
            </span>
          </div>
          <div className="flex gap-1 " onClick={ExportFunc}>
            <img src={Export} alt="" />
            <span className="font-normal text-[13px] leading-[20px] text-myGray-500 hover:text-primary">
              Export Table
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white h-[90%] rounded-lg">{children}</div>
      <p>Copyright @ 2023, All Right Resaved By Remostart </p>
    </div>
  );
};

export default Content;

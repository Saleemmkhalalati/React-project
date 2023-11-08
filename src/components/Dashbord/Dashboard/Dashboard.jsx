import Dark_logo from "../../../assets/icons/Dark_Logo.svg"
export default function Dashboard() {
  return (
    <div className=" bg-blac h-screen flex flex-col justify-center items-center gap-6">
      <img src={Dark_logo} alt="" />
      <h2 className="text-[20px] font-[700] leading-[21px] text-myGray-600 opacity-[80%]">Med - Sal for  Admin - Dashboard </h2>
      <p className="text-[15px] font-[400] leading-[24px] text-myGray-500  ">The control panel for the med-sal website, its users, and its services</p>
    </div>
  )
}
//styleName: Text - 4/Heading - 5 Text;

//styleName: Admin - 2/Admin Dashboard - Text;

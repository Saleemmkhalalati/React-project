// import React from 'react'
// import { NavLink, useLocation, useRoutes } from "react-router-dom";
// import SubMenu from "./SubMenu"


const Test = () => {
  
//     const subMenusList = [
//         {
//           name: "build",
//         //   icon: RiBuilding3Line,
//           menus: ["auth", "app settings", "stroage", "hosting"],
//         },
//         {
//           name: "analytics",
//         //   icon: TbReportAnalytics,
//           menus: ["dashboard", "realtime", "events"],
//         },
//       ];
  return (

    <div>
    <div
   onClick={() => setOpen(false)}
//       className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
//         open ? "block" : "hidden"
//       } `}
//     ></div>
//     <div
//     //   ref={sidebarRef}
      
    
//       animate={open ? "open" : "closed"}
//       className=" bg-white text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
//           overflow-hidden md:relative fixed
//        h-screen "
//     >
//       <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
//         <img
//           // src="https://img.icons8.com/color/512/firebase.png"
//           width={45}
//           alt=""
//         />
//         <span className="text-xl whitespace-pre">Fireball</span>
//       </div>

//       <div className="flex flex-col  h-full">
//         <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
//           <li>
//             <NavLink to={"/"} className="link">
//               {/* <AiOutlineAppstore size={23} className="min-w-max" /> */}
//               All Apps
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to={"/authentication"} className="link">
//               {/* <BsPerson size={23} className="min-w-max" /> */}
//               Authentication
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to={"/stroage"} className="link">
//               {/* <HiOutlineDatabase size={23} className="min-w-max" /> */}
//               Stroage
//             </NavLink>
//           </li>

//           { (
//             <div className="border-y py-5 border-slate-300 ">
//               <small className="pl-3 text-slate-500 inline-block mb-2">
//                 Product categories
//               </small>
//               {subMenusList?.map((menu) => (
//                 <div key={menu.name} className="flex flex-col gap-1">
//                   <SubMenu data={menu} />
//                 </div>
//               ))}
//             </div>
//           )}
//           <li>
//             <NavLink to={"/settings"} className="link">
//               {/* <SlSettings size={23} className="min-w-max" /> */}
//               Settings
//             </NavLink>
//           </li>
//         </ul>
//         {open && (
//           <div className="flex-1 text-sm z-50  max-h-48 my-auto  whitespace-pre   w-full  font-medium  ">
//             <div className="flex border-y border-slate-300 p-4 items-center justify-between">
//               <div>
//                 <p>Spark</p>
//                 <small>No-cost $0/month</small>
//               </div>
//               <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl">
//                 Upgrade
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//       <div
//         onClick={() => {
//           setOpen(!open);
//         }}
//         animate={
//           open
//             ? {
//                 x: 0,
//                 y: 0,
//                 rotate: 0,
//               }
//             : {
//                 x: -10,
//                 y: -200,
//                 rotate: 180,
//               }
//         }
//         transition={{ duration: 0 }}
//         className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
//       >
//         {/* <IoIosArrowBack size={25} /> */}
//       </div>
//     </div>
//     <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
//       {/* <MdMenu size={25} /> */}
//     </div>
//   </div>
  )
}

export default Test

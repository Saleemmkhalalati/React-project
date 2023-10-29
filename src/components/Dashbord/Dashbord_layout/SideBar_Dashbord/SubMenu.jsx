// import { useState } from "react";
// // import { motion } from "framer-motion";
// // import { IoIosArrowDown } from "react-icons/io";
// import { NavLink, useLocation } from "react-router-dom";

const SubMenu = ({ data }) => {
  // const { pathname } = useLocation();
  // const [subMenuOpen, setSubMenuOpen] = useState(false);
  // console.log("dsssssssssss")
  // return (
  //   <>
  //     <li
  //       className={`link ${pathname.includes(data.name) && "text-blue-600"}`}
  //       onClick={() => setSubMenuOpen(!subMenuOpen)}
  //     >
       
  //       <p className="flex-1 capitalize">{data.name}</p>
      
  //     </li>
  //     <ul
  //       // animate={
  //       //   subMenuOpen
  //       //     ? {
  //       //         height: "fit-content",
  //       //       }
  //       //     : {
  //       //         height: 0,
  //       //       }
  //       // }
  //       className="flex h-0 flex-col pl-14 text-[0.8rem] font-normal overflow-hidden"
  //     >
  //       {data.menus.map((menu) => (
  //         <li key={menu}>
  //           {/* className="hover:text-blue-600 hover:font-medium" */}
  //           <NavLink
  //             to={`/${data.name}/${menu}`}
  //             className="link !bg-transparent capitalize"
  //           >
  //             {menu}
  //           </NavLink>
  //         </li>
  //       ))}
  //     </ul>
  //   </>
  // );
};

export default SubMenu;

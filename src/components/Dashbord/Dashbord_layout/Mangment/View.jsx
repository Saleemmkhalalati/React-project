
import React from "react";


const View = React.forwardRef(({view_content,view_user, set_View_user  }, ref) => {
   
  const toggle_View_user = () => {
    set_View_user(!view_user)
  }
    return (
      <div className=''>
      <ClickOutside 
        onClick={toggle_View_user}
      >
        </ClickOutside>
        {view_user && (
        <div ref={ref}className="flex flex-col gap-3 absolute right-0 bg-white w-[40%] px-5 py-3 rounded-md shadow-md z-50">
        
               <Typography component={"h3"} >
               {view_content.title}
               </Typography>
               <Typography component={"h4"}>
              {view_content.descrption}
               </Typography>
               {view_content.inputs.map((input) => {
                 return (
                    <>
                  
                    <div className="flex justify-between items-center  border-2 border-myGray-100 py-2 rounded-md">
                    <Typography className={"ps-3"} component={"h4"}>
                    {input.text}
                    </Typography>
                  
                    <div className="pe-3 w-6">
                    {input.img}
                    </div>
                    
                  </div>
                  {input.des && (<Typography>{input.des}</Typography>) }
                  </>
                 )
               }
               )}
               {view_content.other && (
                <div className="flex items-center gap-2">
                    {view_content.other.img} 
                    <Typography className={"!text-error cursor-pointer"}>{view_content.other.des}</Typography>
                     </div>
               )}
           
               <Button type="submit" fullWidth>
                  {view_content.button_content}
                 </Button>
             </div>
        )}
     </div>
         );
  });
import PropTypes from "prop-types";
import Typography from "../../../utilities/Typography";
import Button from "../../../utilities/Button";
import ClickOutside from "../../../utilities/Click_Outsite";
View.propTypes = {
  
};
export default View




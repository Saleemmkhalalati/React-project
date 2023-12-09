
import React from "react";
import PropTypes from "prop-types";
import Typography from "../../../utilities/Typography";
import Button from "../../../utilities/Button";
import ClickOutside from "../../../utilities/Click_Outsite";
import { DashInput } from "../../../utilities/Inputs"
import { Formik } from "formik";


const View = React.forwardRef(({ view_content, view_user, set_View_user, open_change_password, set_open_change_password }, ref) => {

  const toggle_View_user = () => {
    set_View_user(!view_user)
  }
  return (
    <div className=''>
      <ClickOutside
        onClick={toggle_View_user}
       
      >
        {view_user && (
          <div  className="flex flex-col gap-3 absolute right-0 bg-white w-[40%] px-5 py-3 rounded-md shadow-md z-50 min-h-full">

            <Typography component={"h3"} >
              {view_content.title}
            </Typography>
            <Typography component={"h4"}>
              {view_content.descrption}
            </Typography>
            {view_content.inputs.map((input) => {
              return (
                <>
                  <div className="w-full">
                    <DashInput
                      id={input.text}
                      icon={input.img}
                      isDisabled={true}
                      value={input.text}

                      // placeholder={input.text}
                      errorMsg=""
                      className={`placeholder:text-mySlate  w-full`}

                    />

                  </div>

                  {input.des && (<Typography component={"h4"}>{input.des.text} <span className="cursor-pointer text-primary hover:text-success" onClick={() => { set_open_change_password(!open_change_password) }}>{input.des.click_here}</span></Typography>)}
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

      </ClickOutside>

    </div>
  );
});

View.propTypes = {
  view_content: PropTypes.object.isRequired,
  view_user: PropTypes.bool,
  set_View_user: PropTypes.func,
  open_change_password: PropTypes.bool,
  set_open_change_password: PropTypes.func,
};
export default View




import React, { useState } from "react";
import { useFormik } from "formik";
import Typography from "../../../utilities/Typography";
import Button from "../../../utilities/Button";
import {DashInput} from "../../../utilities/Inputs"



const Edit = React.forwardRef(({ Edit_content,validation_schema,Edit_user , set_Edit_user,open_change_password, set_open_change_password }, ref) => {
  const [showpass, setshowpass] = useState(false);
  const [EditDropdown, setEditDropdown] = useState(null);
  const formik = useFormik({
    initialValues: {
      inputs: [''],
      // inputs:
     
      //   {"inputs[0]":"q",
      //   "inputs[1]":"qsssssss",
      // }
   
      
    },  
    validationSchema: validation_schema,
    validateOnBlur: true,
    validateOnChange: false,
    validateOnMount: false,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  console.log(formik.values.inputs[0])
  const optionsDropdown = [
    { name: "active", type: "" },
    { name: "Non Active", type: "" },
    { name: "Disable", type: "view" },

  ];
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    formik.setFieldValue(`inputs[${index}]`, value);
   
  };
  console.log(formik.initialValues)
  const hangdleInputBluer=(index,event) => {
  
    formik.setFieldTouched(`inputs[${index}]`, true);
  }
  //show password
  function ShowPassword() {
    setshowpass(!showpass);
  }
  const getInputClassName = (index) => {
    return formik.touched.inputs?.[index] && formik.errors.inputs?.[index]
      ? 'border-error'
      : 'border-myGray-400';
  };
  const handleChangeDropdown = (selected) => {
    setEditDropdown(selected);
  };
  const toggle_Edit_user = () => {
    set_Edit_user(!Edit_user)
  }
  return (
    <div className=''>
      <ClickOutside 
        onClick={toggle_Edit_user}
      >
          {
        Edit_user && (
    <div ref={ref} className="flex flex-col gap-3 absolute right-0 bg-white min-w-[45%] px-5 py-3 rounded-md shadow-md z-50 min-h-full">

      <Typography component={"h3"} >
        {Edit_content.title}
      </Typography>
      <Typography component={"h4"}>
        {Edit_content.descrption}
      </Typography>
      {/* inputs */}



      <form onSubmit={formik.handleSubmit} className="relative space-y-5 ">

  
      {Edit_content.inputs.map((input,index) => {
        return (
          <>
            <div className="flex justify-between items-center ">
              {
              input.input_type==="dropdown" ?
             <div className="w-full flex items-center justify-between   ease-in-out  border-[1px] rounded-md text-mySlate  border-myGray-400">
              
              <Dropdown
              options={optionsDropdown}
              value={EditDropdown}
              onChange={handleChangeDropdown}
              // onBlur={formik.handleBlur("dropdownValue")}
              className=" active:border-primary focus-within:border-primary duration-150 w-full"
              // icon={arrowIcon}
              showSlected={true}
              ulClassname={"w-full "}

              
            />
                   <div className="relative end-4">
                {input.img}
              </div>
             </div>

               
               :  
                 <div className=" w-full"> 
                <DashInput
                   type={input.type}
                   name={`inputs[${index}]`}
                  //  value={input.value}
                  value={formik.values.inputs[index]}
                   onChange={(event) => handleInputChange(index, event)}
                   onBlur={(event)=> hangdleInputBluer(index,event)}
                  autoComplete="off"
                  id={input.name}
                  icon={input.img}
                  isDisabled={false}
                
                  // placeholder={input.text} 
                  errorMsg={
                    formik.errors.inputs && formik.errors.inputs[index] &&   formik.touched.inputs[index]
                      ? formik.errors.inputs[index]
                      : ""
                  }
                  className={`placeholder:text-mySlate placeholder:focus:opacity-0`}
                
                // className={`${ getInputClassName(index) } py-[6px] px-[16px] w-full border-[1px]  focus-within:border-primary placeholder:text-mySlate  rounded-md transition-all duration-100 ease-in-out      rounded-s-md outline-0 placeholder:focus:opacity-0`}
              />
                
                
                </div>}
              

              {/* <div className="relative end-5">
                {input.img}
              </div> */}

              {/* errors */}
         
            </div>
            {/* {formik.errors.inputs && formik.errors.inputs[index] &&   formik.touched.inputs[index] &&(
            <div  className="text-xs text-error">{formik.errors.inputs[index]}</div>
          )} */}

            {input.des && (<Typography component={"h4"}>{input.des.text} <span className="cursor-pointer text-primary hover:text-success"onClick={() => {set_open_change_password(!open_change_password) }
            }>{input.des.click_here}</span></Typography>)}
          </>
        )
      }
      )}




      {Edit_content.other && (
        <div className="flex items-center gap-2">
          {Edit_content.other.img}
          <Typography className={"!text-error cursor-pointer"}>{Edit_content.other.des}</Typography>
        </div>
      )}

      <Button type="submit" fullWidth>
        {Edit_content.button_content}
      </Button>
   
      </form>
    </div>
        )}

        {/* If you click here inside this Nothing happens. */}

      </ClickOutside>





    </div>

  );
});
import PropTypes from "prop-types";
import Dropdown from "../../../utilities/Dropdown";
import ClickOutside from "../../../utilities/Click_Outsite";

Edit.propTypes = {
  Edit_content: PropTypes.object.isRequired,
  validation_schema: PropTypes.any,
  Edit_user: PropTypes.bool,
  set_Edit_user: PropTypes.fun,
  open_change_password: PropTypes.bool,
  set_open_change_password: PropTypes.func,


};
export default Edit


import React, { useState } from 'react'
import Content from "../../Dashbord_layout/Content/Content"

import Dropdown from '../../../utilities/Dropdown'
import Radio from '../../../utilities/Radio'
import TabsFillter from '../../../utilities/TabsFillter'
import arrowIcon from "../../../../assets/icons/arrowDropdown.svg";







const Service_Provider = () => {
const [refrech,setrefrech]=useState(false)
const [Export ,setexport]=useState(false)



 


    const optionsDropdown = [

        "docter", "jj", "ll"

    ];
    // for radio commponenet
    const radioItems = [
        { value: 'All Users', label: "All users" },
        { value: 'Last Users', label: "Last users" },

    ]


    const [valueDropdown, setValueDtopdown] = React.useState(null);
    const [valueRadio,setValueRadio] =useState(null)

 

  const handleChangeDropdown = (event) => {
    setValueDtopdown(event.target.value);
  };
  const handleRefrech=() => {
    setrefrech(!refrech)
  }
  const handleExport=() => {
    setexport(!Export)
  }











    return (
        <Content path="/All Uers/Service Provider" RefrechFun={handleRefrech} ExportFunc={handleExport} refrech={refrech} Export={Export}  >
            {/* // must be as a commponent  */}
            <TabsFillter>
                <span className='px-2 py-1 border-[1px] border-solid border-myGray-100 opacity-[70%]  flex items-center rounded-[5px] font-semibold text-myGray-500'>0 record</span>



                <Dropdown
                    options={optionsDropdown}
                    value={valueDropdown}
                    onChange={handleChangeDropdown}
                    className="sm:w-[12rem] w-[7rem] ease-in-out  border-[1px] rounded-lg  border-myGray-100 active:border-primary focus-within:border-primary duration-150"
                    icon={arrowIcon}
                    showSlected={true}
                    ulClassname={"w-full "}
                    />


                <Radio
                    name="users"
                    items={radioItems}
                    value={valueRadio}
                    onChange={setValueRadio}


                />



            </TabsFillter>


            <div className=' w-full '>
                jjj

            </div>
        </Content>

    )
}




;

export default Service_Provider;


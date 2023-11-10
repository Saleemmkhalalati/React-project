import React, { useState } from 'react'
import Content from "../../Dashbord_layout/Content/Content"

import Dropdown from '../../../utilities/Dropdown'
import Radio from '../../../utilities/Radio'
import TabsFillter from '../../../utilities/TabsFillter'


const Service_Provider = () => {



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

    const handleChange = (event) => {

        setValueDtopdown(event.target.value);
    }
    const handleRefrech=() => {
        console.log(refrech)
      
    }
    







    return (
        <Content path="/All Uers/Service Provider" RefrechFun={handleRefrech} >
            {/* // must be as a commponent  */}
            <TabsFillter>
                <span className='px-2 py-1 border-[1px] border-solid border-myGray-100 opacity-[70%]  flex items-center rounded-[5px] font-semibold text-myGray-500'>0 record</span>



                <Dropdown
                    options={optionsDropdown}
                    value={valueDropdown}
                    onChange={handleChange} />


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

export default Service_Provider

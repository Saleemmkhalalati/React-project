import React from 'react'
import docImg from "./ConfirmImage/Login.svg"
const ContainerImg = () => {

  return (
    <div className='relative'>
      <div className='w-[457px] h-[457px] absolute z-1 left-[82px] top-[-92px] rounded-[16px] rotate-[46deg] gradient-border hidden lg:block'></div>
      <div className='w-[547.09px] h-[547.02px] bg-myGray-400 hidden rotate-[46.49deg] lg:flex justify-end items-center s z-2 translate-x-[190px] translate-y-[-130px]  rounded-[16px] overflow-hidden'>
        <img src={docImg} className='bottom-[-100px] right-[-100px] rotate-[-46deg] absolute bottom-0 w-[480.5px] h-[708.27px] origin-center max-w-full max-h-full bottom-0' />
      </div>
    </div>
  )
}

export default ContainerImg
import Refrech from "../../../../assets/icons/Refrech.svg"
import Export from "../../../../assets/icons/Export.svg"
const Content = ({children,path}) => {
  return (
    <div className='px-5 py-4 flex flex-col justify-between   h-full '>
      <div className='flex justify-between  flex-wrap gap-2'>
        <p>{path}</p>
        <div className='flex items-center gap-4 cursor-pointer'>
            <div className='flex gap-1 '><img src={Refrech} alt="" /><span className="font-normal text-[13px] leading-[20px] text-myGray-500">Refresh</span></div>
            <div className='flex gap-1 '><img src={Export} alt="" /><span className="font-normal text-[13px] leading-[20px] text-myGray-500">Export Table</span></div>
        </div>
      </div>
      <div className='bg-white h-[90%]'>
       {children}
      </div>
      <p>Copyright @ 2023, All Right Resaved By Remostart </p>
    </div>
  )
}

export default Content
import Typography from '../../../utilities/Typography'

export default function AuthDesign({ img, title, paragraph }) {
    return (
        <div className='flex-2 relative min-[1100px]:h-screen'>
            <div className='relative max-[1100px]:hidden  rtl:scale-x-[-1] '>
                <div className='absolute right-[-70px]  w-[420px] h-[420px] top-[-24px] mr-[-32px] rounded-xl rotate-45 bg-gray-100 overflow-hidden'></div>
                <div className="absolute top-[16px] right-[80px] w-[336px] h-[336px]  z-[-1] rounded-2xl rotate-45 bg-gradient-to-r from-primary to-secondary">
                    <div className="absolute w-[330px] h-[330px] rounded-2xl top-[3px] start-[3px] bg-white"></div>
                </div>
                <img className='relative z-50 ltr:right-[-188px] rtl:right-[-159px] w-[670px] top-[76px] h-[400px] mr-[-32px]' src={img} alt="" />
            </div>
            <div className='absolute max-[1100px]:relative mt-24 max-[1100px]:mt-0 
                        ltr:pr-[12px] ltr:pl-[150px] ltr:max-[1100px]:pl-[90px] ltr:max-[940px]:px-[5%]
                        rtl:pl-[12px] rtl:pr-[180px] rtl:max-[1100px]:pr-[120px] rtl:max-[940px]:px-[5%]'>
                <Typography component={'gradient-text'} >
                    {title}
                </Typography>
                <Typography component={'h4'} >
                    {paragraph}
                </Typography>
            </div>
        </div>
    )
}
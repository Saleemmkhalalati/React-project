import img1 from './imgs/Rectangle.svg'
import img3 from './imgs/Rectangle Doctor - 2.svg'
import doc from './imgs/Intersect.svg'
import vector from './imgs/Vector (3).svg'
import Button from '../../../utilities/Button'
import { useTranslation } from "react-i18next";
import './style.css'
import { useState } from 'react'

export default function ForgetPassword() {
    const { t } = useTranslation("global");
    const Forget = {
        title: t("forget.title"),
        p: t("forget.p"),
        placeholder: t("forget.placeholder"),
        errEmail: t("forget.erremail"),
        button: t("forget.button"),
        resetTitle: t("forget.resetTitle"),
        resetPar: t("forget.resetPar")
    }
    // state variants
    const [email, setEmail] = useState('')
    const [err, seterr] = useState('')

    // regex for email validation 
    const regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email.match(regx)) {
            seterr('')
        } else {
            seterr(Forget.errEmail)
        }
        console.log(email)
    }

    return (
        <div>
            <div className='absolute rtl:left-0 ltr:right-0 max-[1200px]:h-screen z-[-1]'>
                <img className='w-[100%] h-screen ltr:scale-x-[-1]' src={img1} alt="" />
            </div>
            <div className='max-w-[1750px] mx-auto my-0 flex flex-row-reverse justify-between flex-wrap '>
                <div className='relative flex flex-1 flex-col gap-8 py-[12%] p-[5%]'>
                    <h1 className='text-4xl text-primary font-bold'>{Forget.title}</h1>
                    <p>{Forget.p}</p>

                    <form onSubmit={handleSubmit} className='relative space-y-5'>
                        <div className='relative'>
                            <input onChange={(e) => setEmail(e.target.value)} className={`w-full border border-gray focus:outline-none p-2 ${err ? 'border-error outline-none' : ''}`} placeholder={Forget.placeholder} type="text" required />
                            <div className='absolute z-10 ltr:right-2 rtl:left-2 top-3'>
                                <img className='w-5 h-5 bg-white' src={vector} alt="" />
                            </div>
                            {err ? <label className='text-sm text-error mt-[-10px] ml-2' htmlFor="">{err}</label> : ''}
                        </div>
                        <Button fullWidth>{Forget.button}</Button>
                    </form>
                </div>
                <div className='flex-2 relative max-[1750px]:overflow-hidden min-[1100px]:h-screen'>
                    <div className='relative max-[1100px]:hidden ltr:scale-x-[-1]'>
                        <div className='absolute right-[-70px]  w-[400px] top-[-24px] h-[400px] mr-[-32px] rounded-xl rotate-45 bg-gray-100'></div>
                        <img className='absolute right-[-70px]  w-[58.9%] top-[-22px] h-[100%] mt-[50px] ml-[150px]' src={doc} alt="" />
                        <img className='relative z-[-1] ltr:ml-[29%] rtl:mr-[-8%] max-[1100px]:w-[46%] max-[1000px]:ml-[50%]' src={img3} width={'79%'} alt="" />
                    </div>
                    <div className='absolute max-[1100px]:relative max-[1100px]:px-10    min-[1100px]:mt-12 rtl:pr-[50px] pl-[26px] pr-[150px]'>
                        <h3 className='bg-gradient-to-r from-primary via-secondary to-secondary bg-clip-text text-transparent md:text-xl max-md:text-lg font-bold py-4'>
                            {Forget.resetTitle}
                        </h3>
                        <p className='md:text-md max-md:first-letter:text-xs'>
                            {Forget.resetPar}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
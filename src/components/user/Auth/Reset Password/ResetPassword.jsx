import img1 from './imgs/Rectangle.svg'
import img3 from './imgs/Rectangle Doctor - 2.svg'
import doc from './imgs/Intersect.svg'
import view from './imgs/View.svg'
import Button from '../../../utilities/Button'
import { useTranslation } from "react-i18next"
import './style.css'


import { useState } from 'react'

export default function ResettPassword() {
    const { t } = useTranslation("global");
    const reset = {
        title: t("reset.title"),
        p: t("reset.p"),
        placeholder1: t("reset.placeholder1"),
        placeholder2: t("reset.placeholder2"),
        err: t('reset.err'),
        errcunfirm: t('reset.errcunfirm'),
        button: t("reset.button"),
        resetTitle: t("reset.resetTitle"),
        resetPar: t("reset.resetPar")
    }
    // state variants
    const [pwd1, setPwd1] = useState('')
    const [pwd2, setPwd2] = useState('')
    const [view1, setView1] = useState(0)
    const [view2, setView2] = useState(0)
    const [err1, seterr1] = useState('')
    const [err2, seterr2] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        (pwd1 != pwd2) ? seterr2(reset.errcunfirm) : seterr2('');
        (pwd1.length < 5) ? seterr1(reset.err) : seterr1('');
    }

    const showpassword = (e) => {
        e ? setView1(!view1) : setView2(!view2)
    }
    return (
        <div>
            <div className='absolute rtl:left-0 ltr:right-0 max-[1200px]:h-screen z-[-1]'>
                <img className='h-screen ltr:scale-x-[-1] w-[100%]' src={img1} alt="" />
            </div>
            <div className='max-w-[1750px] mx-auto my-0 flex flex-row-reverse justify-between flex-wrap '>
                <div className='relative flex flex-1 flex-col gap-8 py-[12%] p-[5%]'>
                    <h1 className='text-4xl text-primary font-bold'>{reset.title}</h1>
                    <p>{reset.p}</p>

                    <form onSubmit={handleSubmit} className='relative space-y-5'>
                        <div className='relative'>
                            <input type={view1 ? 'text' : 'password'} onChange={(e) => setPwd1(e.target.value)} className={`w-full border border-gray focus:outline-none p-2 `} placeholder={reset.placeholder1} required />
                            <div className='absolute z-10 ltr:right-2 rtl:left-2 top-3'>
                                <img onClick={() => showpassword(1)} className='w-5 h-5 bg-white cursor-pointer' src={view} alt="" />
                            </div>
                            {err1 ? <label className='text-sm text-error mt-[-10px] ml-2' htmlFor="">{err1}</label> : ''}
                        </div>
                        <div className='relative'>
                            <input type={view2 ? 'text' : 'password'} onChange={(e) => setPwd2(e.target.value)} className={`w-full border border-gray focus:outline-none p-2`} placeholder={reset.placeholder2} required />
                            <div className='absolute z-10 ltr:right-2 rtl:left-2 top-3'>
                                <img onClick={() => showpassword(0)} className='w-5 h-5 bg-white cursor-pointer' src={view} alt="" />
                            </div>
                            {err2 ? <label className='text-sm text-error mt-[-10px] ml-2' htmlFor="">{err2}</label> : ''}
                        </div>
                        <Button fullWidth>{reset.button}</Button>
                    </form>
                </div>
                <div className='flex-2 relative max-[1750px]:overflow-hidden min-[1100px]:h-screen'>
                    <div className='relative max-[1100px]:hidden ltr:scale-x-[-1]'>
                        <div className='absolute right-[-70px]  w-[400px] top-[-24px] h-[400px] mr-[-32px] rounded-xl rotate-45 bg-gray-100'></div>
                        <img className='absolute right-[-70px]  w-[58.9%] top-[-22px] h-[100%] mt-[50px] ml-[150px]' src={doc} alt="" />
                        <img className='relative z-[-1] ltr:ml-[29%] rtl:mr-[-8%] max-[1100px]:w-[46%] max-[1000px]:ml-[50%]' src={img3} width={'79%'} alt="" />
                    </div>
                    <div className='absolute max-[1100px]:relative max-[1100px]:px-10 min-[1100px]:mt-12 rtl:pr-[50px] pl-[26px] pr-[150px]'>
                        <h3 className='bg-gradient-to-r from-primary via-secondary to-secondary bg-clip-text text-transparent md:text-xl max-md:text-lg font-bold py-4'>
                            {reset.resetTitle}
                        </h3>
                        <p className='md:text-md max-md:first-letter:text-xs'>
                            {reset.resetPar}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
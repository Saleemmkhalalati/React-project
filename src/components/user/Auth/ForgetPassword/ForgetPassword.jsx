import { useTranslation } from "react-i18next";
import { useState } from 'react'

import { Input } from '../../../utilities/Inputs'
import Typography from '../../../utilities/Typography'
import Button from '../../../utilities/Button'
import AuthDesign from '../AuthDesign/AuthDesign'

import Doc from './imgs/Intersect.svg'
import vector from './imgs/Vector (3).svg'


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

    // state variants ..
    const [email, setEmail] = useState('')
    const [err, seterr] = useState('')

    // regex for email validation ..
    const regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email.match(regx)) {
            seterr(Forget.errEmail)
        } else {
            seterr('')
        }
        console.log(email)
    }

    return (
        <div className='max-w-[1750px] max-[1750px]:overflow-hidden h-screen max-[1100px]:overflow-y-auto mx-auto my-0'>
            <div className='relative  ltr:left-0  rtl:right-0 z-[-1]'>
                <div className="absolute rotate-45 w-80 h-80 top-10 sm:top-24 bg-sky-50 rounded-3xl -start-14"></div>
                <div className="absolute rotate-45 w-80 h-80 top-96 sm:top-[29rem] bg-sky-50 rounded-3xl start-28"></div>
                <div></div>
            </div>
            <div className='max-w-[1750px] mx-auto my-0 flex  justify-between flex-wrap '>
                <div className='relative flex flex-1 flex-col gap-8 py-[12%] p-[5%]'>
                    <Typography component={'h1'}>{Forget.title}</Typography>
                    <Typography component={'h4'}>{Forget.p}</Typography>
                    <form onSubmit={handleSubmit} className='relative space-y-5'>
                        <div className='relative'>
                            <Input onChange={(e) => setEmail(e.target.value)}
                                type='email'
                                errorMsg={err}
                                icon={vector}
                                iconOnClick
                                label='Email Address' />
                        </div>
                        <Button fullWidth>{Forget.button}</Button>
                    </form>
                </div>
                <AuthDesign img={Doc} title={Forget.resetTitle} paragraph={Forget.resetPar} />
            </div>
        </div>
    )
}
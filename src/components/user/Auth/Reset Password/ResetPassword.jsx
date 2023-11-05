import doc from './imgs/Intersect.svg'
import view from './imgs/View.svg'

import { useTranslation } from "react-i18next"

import { Input } from '../../../utilities/Inputs'
import Button from '../../../utilities/Button'
import Typography from '../../../utilities/Typography'
import AuthDesign from '../AuthDesign/AuthDesign'

import { useState } from 'react'

export default function ResettPassword() {
    // translation ..
    const { t } = useTranslation("global");
    // state variants
    const [pwd1, setPwd1] = useState('')
    const [pwd2, setPwd2] = useState('')
    const [view1, setView1] = useState(0)
    const [view2, setView2] = useState(0)
    const [err1, seterr1] = useState('')
    const [err2, seterr2] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        (pwd1.length < 5) ? seterr1(t("reset.err")) : seterr1('');
        (pwd1 != pwd2) ? seterr2(t("reset.errcunfirm")) : seterr2('');
    }

    const showpassword = (e) => {
        e ? setView1(!view1) : setView2(!view2)
    }
    return (
        <div>
            <div className='max-w-[1750px] mx-auto my-0 flex max-[1750px]:overflow-hidden h-screen max-[1100px]:overflow-y-auto justify-between flex-wrap '>
                <div className='relative  ltr:left-0  rtl:right-0 z-[-1]'>
                    <div className="absolute rotate-45 w-80 h-80 top-10 sm:top-24 bg-sky-50 rounded-3xl -start-14"></div>
                    <div className="absolute rotate-45 w-80 h-80 top-96 sm:top-[29rem] bg-sky-50 rounded-3xl start-28"></div>
                    <div></div>
                </div>
                <div className='relative flex flex-1 flex-col gap-8 py-[12%] p-[5%]'>
                    <Typography component={'h1'} >{t("reset.title")}</Typography>
                    <Typography component={'h4'}>{t("reset.p")}</Typography>
                    <form onSubmit={handleSubmit} className='relative space-y-5'>
                        <div className='relative'>
                            <Input onChange={(e) => setPwd1(e.target.value)}
                                type={view1 ? 'text' : 'password'}
                                errorMsg={err1}
                                icon={view}
                                iconOnClick={() => showpassword(1)}
                                label={t("reset.placeholder1")} />
                        </div>
                        <div className='relative'>
                            <Input onChange={(e) => setPwd2(e.target.value)}
                                type={view2 ? 'text' : 'password'}
                                errorMsg={err2}
                                icon={view}
                                iconOnClick={() => showpassword(0)}
                                label={t("reset.placeholder2")} />
                        </div>
                        <Button fullWidth>{t("reset.button")}</Button>
                    </form>
                </div>
                <AuthDesign img={doc} title={t("reset.resetTitle")} paragraph={t("ImageContainer.aboutUs")} />
            </div>
        </div>
    )
}
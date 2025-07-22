import React from 'react'
import Faqs from '../components/Faqs'

const Faq = () => {
    return (
        <>
            <section className='py-[142px] bg-black'>
                <div className="2xl:max-w-[1544px] lg:max-w-[1108px] mx-auto">
                    <div className="grid grid-cols-2 items-center">
                        <div className="">
                            <img src="/faq.jpeg" alt="faq image" className='w-[37.875rem] h-[25rem] object-cover object-center rounded-2xl' />
                        </div>
                        <div className="">
                            <h2 className="text-[6.875rem] font-bold capitalize tracking-[-2.59px] leading-[100%] bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent">
                                Frequently Asked Questions
                            </h2>
                        </div>
                    </div>
                </div>
            </section>


            <section className='py-[134px]'>
                <div className="2xl:max-w-[1544px] lg:max-w-[1108px] mx-auto">
                    <div className="border border-[#D4BC6D] border-[1.5px] w-full rounded-2xl">
                        <Faqs />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Faq
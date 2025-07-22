import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="bg-[#100E08] py-10">
                <div className="2xl:max-w-[1560px] lg:max-w-[1184px] mx-auto">
                    <img src="/logo.png" alt="footer-logo" className='w-[275px] h-[44px] mx-auto mb-14' />
                    <div className="flex justify-between">
                        <div className="max-w-[551px]">
                            <button className="bg-[#2e2e2e] rounded-full px-[38px] py-[13px] text-[#d4bc6d] font-medium text-[0.875rem] mb-9">
                                Our Mission
                            </button>
                            <p className='text-lg font-medium text-white'>
                                At Hometown Hero, our mission is to empower athletes with a bold, AI-driven platform built to unlock real growth and real NIL earnings. We’re hands-on every step of the way — from launching your brand to building your audience, locking in deals, and scaling your success. With the highest profit share in the game and tools designed for creators who hustle, we make it easy for athletes to own their story, monetize their name, and turn their grind into long-term greatness.
                            </p>
                        </div>
                        <div className="max-w-[200px]">
                            <h4 className='text-lg font-medium text-[#D4BC6D] mb-[33px]'>Home</h4>
                            <div className="flex flex-col gap-7">
                                <a href="#" className='text-lg font-semibold text-white capitalize'>
                                    Shop by
                                </a>
                                <a href="#" className='text-lg font-semibold text-white capitalize'>
                                    Services
                                </a>
                                <Link to="/our-team" className='text-lg font-semibold text-white capitalize'>
                                    About
                                </Link>
                            </div>
                        </div>
                        <div className="max-w-[200px]">
                            <h4 className='text-lg font-medium text-[#D4BC6D] mb-[33px]'>Quick Links</h4>
                            <div className="flex flex-col gap-7">
                                <Link to="/faq" className='text-lg font-semibold text-white capitalize'>
                                    FAQs
                                </Link>
                                <Link to="/policy" className='text-lg font-semibold text-white capitalize'>
                                    Policy
                                </Link>
                            </div>
                        </div>
                        <div className="max-w-[200px]">
                            <h4 className='text-lg font-medium text-[#D4BC6D] mb-[33px]'>Social Media</h4>
                            <div className="flex flex-col gap-7">
                                {/* <a href="#" className='text-lg font-semibold text-white capitalize'>
                                    Facebook
                                </a> */}
                                <a href="https://www.instagram.com/hometownheroagency?igsh=NGV5NWFsMWdsZnE5&utm_source=qr" className='text-lg font-semibold text-white capitalize' target='_blank'>
                                    Instagram
                                </a>
                                {/* <a href="#" className='text-lg font-semibold text-white capitalize'>
                                    Twitter
                                </a>
                                <a href="#" className='text-lg font-semibold text-white capitalize'>
                                    Youtube
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-[23px] mt-[69px]">
                    <Link to="/athlete-signup" className=" w-full py-[60px] px-[85px] rounded-lg flex items-center justify-between bg-[#2e2e2e]">
                        <div className="text-[1.669rem] font-medium text-white">
                            Join the family
                        </div>
                        <div className="">
                            <svg
                                fill="none"
                                height="23"
                                viewBox="0 0 24 23"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.10052 21.3368L21.8995 1.53785M21.8995 1.53785L4.92894 1.53785M21.8995 1.53785L21.8995 18.5084"
                                    stroke="#ECEEEC"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2.66667"
                                />
                            </svg>
                        </div>
                    </Link>
                </div>

                <div className="2xl:max-w-[1560px] lg:max-w-[1184px] mx-auto mt-[38px]">
                    <div className="flex justify-between">
                        <div className="">
                            <p className='text-sm font-semibold text-white'>
                                © 2025 HOMETOWN HERO. All rights reserved.
                            </p>
                        </div>
                        <div className="flex gap-3">

                            <Link to="/policy" className='text-sm font-semibold text-white'>
                                Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
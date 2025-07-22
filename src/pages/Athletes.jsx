import React from 'react'
import CarouselSlider from '../components/CarouselSlider'

const Athletes = () => {
    return (
        <>
            {/* first section */}
            <section className="bg-black min-h-screen flex flex-col items-center justify-center p-8">

                <h1 className='text-[6.875rem] text-center uppercase font-extrabold bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent mb-5'>
                    HOMETOWN HERO FOR <br /> ATHELETES
                </h1>
                <p className="text-xl text-center font-medium text-[#adadad] max-w-[1523px] mx-auto mb-7">
                    We support athletes through every step of their NIL journey, providing a range of opportunities designed to maximize earnings and build lasting value. <br />
                    At Hometown Hero, we offer 50% commissions - the highest-percentage earning opportunities in the NIL marketplace - because we care about athletes, their <br />
                    futures, and making sure they win on and off the field.
                </p>
                <CarouselSlider data={
                    [
                        {
                            name: "AVERY BRINKLEY",
                            image: "/football-group.svg",
                            rating: 5,
                            subTitle: "Seller",
                        },
                        {
                            name: "AVERY BRINKLEY",
                            image: "/football-group.svg",
                            rating: 5,
                            subTitle: "Seller",
                        },
                        {
                            name: "AVERY BRINKLEY",
                            image: "/football-group.svg",
                            rating: 5,
                            subTitle: "Seller",
                        },
                        {
                            name: "AVERY BRINKLEY",
                            image: "/football-group.svg",
                            rating: 5,
                            subTitle: "Seller",
                        },
                        {
                            name: "AVERY BRINKLEY",
                            image: "/football-group.svg",
                            rating: 5,
                            subTitle: "Seller",
                        },
                    ]
                } />
                <button className="bg-[#d4bc6d] font-extrabold px-[23px] py-[14px] text-[1.156rem] rounded-[11.6px]">
                    Join the Failmy
                </button>
            </section>

            {/* third section */}
            <section className="pt-[195px] pb-[98px]">
                <div className="2xl:max-w-[1764px] lg:max-w-[1284px] m-auto">
                    <div className="grid grid-cols-2 gap-20 items-center">
                        <div className="">
                            <h2 className="text-[4.588rem] capitalize bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent mb-10">
                                Sign Up and Launch Your Brand
                            </h2>
                            <p className="text-[1.125rem] text-white mb-10">
                                Hometown Hero is a platform built for athletes, by athletes, designed to empower players at every stage of their journey—whether they are building their brand for the future or actively monetizing their name, image, and likeness (NIL).
                                <br />
                                <br />
                                For athletes currently earning through NIL, Hometown Hero offers a comprehensive, AI-powered platform that helps players monetize their talents, secure brand collaborations, and maximize their earning potential. With advanced tools for real-time earnings tracking, data-driven insights, and automated brand connections, we streamline the process of building and managing your NIL success. Whether it's selling products through your storefront, such as online courses, player cards, and merchandise, securing sponsorship deals, or monetizing content, our platform provides athletes with all the tools they need to grow their brand, expand their influence, and take full control of their financial future.
                            </p>
                            <button className="bg-[#2e2e2e] rounded-full px-[38px] py-[13px] text-[#d4bc6d] font-medium text-[0.875rem] mb-9">
                                Sign Up Now
                            </button>
                        </div>
                        <div className="">
                            <img src="/phone.svg" alt="about us" className="w-auto h-[58.625rem] mx-auto object-cover" />
                        </div>
                    </div>
                </div>
            </section>


            {/* third section */}
            <section className="pt-[195px] pb-[98px]">
                <div className="2xl:max-w-[1764px] lg:max-w-[1284px] m-auto">
                    <div className="grid grid-cols-2 gap-20 items-center">
                        <div className="">
                            <button className="bg-[#2e2e2e] rounded-full px-[38px] py-[13px] text-[#d4bc6d] font-medium text-[0.875rem] mb-9">
                                Why Choose Us
                            </button>
                            <h2 className="text-[4.125rem] font-bold capitalize bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent tracking-[-1.98px]">
                                Clothing
                            </h2>
                            <div className="w-[43rem] mx-auto">
                                <img src="/user-cash.svg" alt="user with cash" className="w-full h-[37.625rem] object-contain mb-3.5" />
                                <p className="text-[1.125rem] font-medium text-white mb-10">
                                    We offer a wide range of tools to help athletes build, grow, and monetize their personal brands — both on and off the field. From brand collaborations and media exposure to personalized merchandise and digital products, our platform is designed to turn your story into a scalable business. Our all-in-one system gives athletes the tools they need to succeed in the NIL era, including these services
                                </p>
                            </div>

                        </div>
                        <div className="">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex flex-col gap-3.5">
                                    <div className="bg-[#ffffff19] flex items-center p-2 rounded-full">
                                        <div className="h-[3.125rem] w-[3.125rem] rounded-full text-white text-2xl font-medium bg-[#d4bc6d] flex items-center justify-center" >
                                            1
                                        </div>
                                        <div className="text-[#d4bc6d] font-bold text-lg ms-[20px]">
                                            Maximize Your NIL Potential
                                        </div>
                                    </div>
                                    <div className="bg-[#ffffff19] flex items-center p-2 rounded-full">
                                        <div className="h-[3.125rem] w-[3.125rem] rounded-full text-white text-2xl font-medium bg-[#666666] flex items-center justify-center" >
                                            2
                                        </div>
                                        <div className="text-white font-bold text-lg ms-[20px]">
                                            Custom Merchandise
                                        </div>
                                    </div>
                                    <div className="bg-[#ffffff19] flex items-center p-2 rounded-full">
                                        <div className="h-[3.125rem] w-[3.125rem] rounded-full text-white text-2xl font-medium bg-[#666666] flex items-center justify-center" >
                                            3
                                        </div>
                                        <div className="text-white font-bold text-lg ms-[20px]">
                                            Player Card
                                        </div>
                                    </div>
                                    <div className="bg-[#ffffff19] flex items-center p-2 rounded-full">
                                        <div className="h-[3.125rem] w-[3.125rem] rounded-full text-white text-2xl font-medium bg-[#666666] flex items-center justify-center" >
                                            4
                                        </div>
                                        <div className="text-white font-bold text-lg ms-[20px]">
                                            Launch Supplements
                                        </div>
                                    </div>
                                    <div className="bg-[#ffffff19] flex items-center p-2 rounded-full">
                                        <div className="h-[3.125rem] w-[3.125rem] rounded-full text-white text-2xl font-medium bg-[#666666] flex items-center justify-center" >
                                            5
                                        </div>
                                        <div className="text-white font-bold text-lg ms-[20px]">
                                            Publish your Book
                                        </div>
                                    </div>
                                    <div className="bg-[#ffffff19] flex items-center p-2 rounded-full">
                                        <div className="h-[3.125rem] w-[3.125rem] rounded-full text-white text-2xl font-medium bg-[#666666] flex items-center justify-center" >
                                            6
                                        </div>
                                        <div className="text-white font-bold text-lg ms-[20px]">
                                            Ambassador Program
                                        </div>
                                    </div>
                                    <div className="bg-[#ffffff19] flex items-center p-2 rounded-full">
                                        <div className="h-[3.125rem] w-[3.125rem] rounded-full text-white text-2xl font-medium bg-[#666666] flex items-center justify-center" >
                                            7
                                        </div>
                                        <div className="text-white font-bold text-lg ms-[20px]">
                                            Ai Powered Analytics and intant C..
                                        </div>
                                    </div>
                                    <div className="bg-[#ffffff19] flex items-center p-2 rounded-full">
                                        <div className="h-[3.125rem] w-[3.125rem] rounded-full text-white text-2xl font-medium bg-[#666666] flex items-center justify-center" >
                                            8
                                        </div>
                                        <div className="text-white font-bold text-lg ms-[20px]">
                                            Play at the Next Level
                                        </div>
                                    </div>
                                    <div className="bg-[#ffffff19] flex items-center p-2 rounded-full">
                                        <div className="h-[3.125rem] w-[3.125rem] rounded-full text-white text-2xl font-medium bg-[#666666] flex items-center justify-center" >
                                            9
                                        </div>
                                        <div className="text-white font-bold text-lg ms-[20px]">
                                            Social Media Promotion
                                        </div>
                                    </div>
                                    <div className="bg-[#ffffff19] flex items-center p-2 rounded-full">
                                        <div className="h-[3.125rem] w-[3.125rem] rounded-full text-white text-2xl font-medium bg-[#666666] flex items-center justify-center" >
                                            10
                                        </div>
                                        <div className="text-white font-bold text-lg ms-[20px]">
                                            Industry Leading Profit Sharing
                                        </div>
                                    </div>
                                    <div className="bg-[#ffffff19] flex  items-center p-2 rounded-full">
                                        <div className="h-[3.125rem] w-[3.125rem] rounded-full text-white text-2xl font-medium bg-[#666666] flex items-center justify-center" >
                                            11
                                        </div>
                                        <div className="text-white font-bold text-lg ms-[20px]">
                                            Pro Dashboard
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3.5">
                                    <div className="p-2">
                                        <div className="h-[3.125rem] flex items-center">
                                            <h4 className='text-2xl font-bold text-[#D4BC6D] '>
                                                Coming Soon
                                            </h4>
                                        </div>

                                    </div>
                                    <div className="bg-[#ffffff19] flex  items-center p-2 rounded-full">
                                        <div className="h-[3.125rem] w-[3.125rem] rounded-full text-white text-2xl font-medium bg-[#666666] flex items-center justify-center" >
                                            12
                                        </div>
                                        <div className="text-white font-bold text-lg ms-[20px]">
                                            Brand Marketplace
                                        </div>
                                        <div className="ms-auto me-[20px]">
                                            <svg
                                                fill="none"
                                                height="1.75rem"
                                                viewBox="0 0 28 28"
                                                width="1.75rem"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <mask
                                                    height="28"
                                                    id="mask0_305_301"
                                                    maskUnits="userSpaceOnUse"
                                                    style={{
                                                        maskType: "alpha",
                                                    }}
                                                    width="28"
                                                    x="0"
                                                    y="0">
                                                    <rect fill="url(#pattern0_305_301)" height="28" width="28" />
                                                </mask>
                                                <g mask="url(#mask0_305_301)">
                                                    <rect fill="#D4BC6D" height="28" width="28" x="0.109375" y="0.109375" />
                                                </g>
                                                <defs>
                                                    <pattern
                                                        height="1"
                                                        id="pattern0_305_301"
                                                        patternContentUnits="objectBoundingBox"
                                                        width="1">
                                                        <use transform="scale(0.00195312)" xlinkHref="#image0_305_301" />
                                                    </pattern>
                                                    <image
                                                        height="512"
                                                        id="image0_305_301"
                                                        preserveAspectRatio="none"
                                                        width="512"
                                                        xlinkHref="data:image/png;base64,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"
                                                    />
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="bg-[#ffffff19] flex  items-center p-2 rounded-full">
                                        <div className="h-[3.125rem] w-[3.125rem] rounded-full text-white text-2xl font-medium bg-[#666666] flex items-center justify-center" >
                                            13
                                        </div>
                                        <div className="text-white font-bold text-lg ms-[20px]">
                                            LMS Online Course
                                        </div>
                                        <div className="ms-auto me-[20px]">
                                            <svg
                                                fill="none"
                                                height="1.75rem"
                                                viewBox="0 0 28 28"
                                                width="1.75rem"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <mask
                                                    height="28"
                                                    id="mask0_305_301"
                                                    maskUnits="userSpaceOnUse"
                                                    style={{
                                                        maskType: "alpha",
                                                    }}
                                                    width="28"
                                                    x="0"
                                                    y="0">
                                                    <rect fill="url(#pattern0_305_301)" height="28" width="28" />
                                                </mask>
                                                <g mask="url(#mask0_305_301)">
                                                    <rect fill="#D4BC6D" height="28" width="28" x="0.109375" y="0.109375" />
                                                </g>
                                                <defs>
                                                    <pattern
                                                        height="1"
                                                        id="pattern0_305_301"
                                                        patternContentUnits="objectBoundingBox"
                                                        width="1">
                                                        <use transform="scale(0.00195312)" xlinkHref="#image0_305_301" />
                                                    </pattern>
                                                    <image
                                                        height="512"
                                                        id="image0_305_301"
                                                        preserveAspectRatio="none"
                                                        width="512"
                                                        xlinkHref="data:image/png;base64,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"
                                                    />
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="bg-[#ffffff19] flex  items-center p-2 rounded-full">
                                        <div className="h-[3.125rem] w-[3.125rem] rounded-full text-white text-2xl font-medium bg-[#666666] flex items-center justify-center" >
                                            14
                                        </div>
                                        <div className="text-white font-bold text-lg ms-[20px]">
                                            Press
                                        </div>
                                        <div className="ms-auto me-[20px]">
                                            <svg
                                                fill="none"
                                                height="1.75rem"
                                                viewBox="0 0 28 28"
                                                width="1.75rem"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <mask
                                                    height="28"
                                                    id="mask0_305_301"
                                                    maskUnits="userSpaceOnUse"
                                                    style={{
                                                        maskType: "alpha",
                                                    }}
                                                    width="28"
                                                    x="0"
                                                    y="0">
                                                    <rect fill="url(#pattern0_305_301)" height="28" width="28" />
                                                </mask>
                                                <g mask="url(#mask0_305_301)">
                                                    <rect fill="#D4BC6D" height="28" width="28" x="0.109375" y="0.109375" />
                                                </g>
                                                <defs>
                                                    <pattern
                                                        height="1"
                                                        id="pattern0_305_301"
                                                        patternContentUnits="objectBoundingBox"
                                                        width="1">
                                                        <use transform="scale(0.00195312)" xlinkHref="#image0_305_301" />
                                                    </pattern>
                                                    <image
                                                        height="512"
                                                        id="image0_305_301"
                                                        preserveAspectRatio="none"
                                                        width="512"
                                                        xlinkHref="data:image/png;base64,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"
                                                    />
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="bg-[#ffffff19] flex  items-center p-2 rounded-full">
                                        <div className="h-[3.125rem] w-[3.125rem] rounded-full text-white text-2xl font-medium bg-[#666666] flex items-center justify-center" >
                                            15
                                        </div>
                                        <div className="text-white font-bold text-lg ms-[20px]">
                                            Newsroom
                                        </div>
                                        <div className="ms-auto me-[20px]">
                                            <svg
                                                fill="none"
                                                height="1.75rem"
                                                viewBox="0 0 28 28"
                                                width="1.75rem"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <mask
                                                    height="28"
                                                    id="mask0_305_301"
                                                    maskUnits="userSpaceOnUse"
                                                    style={{
                                                        maskType: "alpha",
                                                    }}
                                                    width="28"
                                                    x="0"
                                                    y="0">
                                                    <rect fill="url(#pattern0_305_301)" height="28" width="28" />
                                                </mask>
                                                <g mask="url(#mask0_305_301)">
                                                    <rect fill="#D4BC6D" height="28" width="28" x="0.109375" y="0.109375" />
                                                </g>
                                                <defs>
                                                    <pattern
                                                        height="1"
                                                        id="pattern0_305_301"
                                                        patternContentUnits="objectBoundingBox"
                                                        width="1">
                                                        <use transform="scale(0.00195312)" xlinkHref="#image0_305_301" />
                                                    </pattern>
                                                    <image
                                                        height="512"
                                                        id="image0_305_301"
                                                        preserveAspectRatio="none"
                                                        width="512"
                                                        xlinkHref="data:image/png;base64,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"
                                                    />
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="bg-[#ffffff19] flex  items-center p-2 rounded-full">
                                        <div className="h-[3.125rem] w-[3.125rem] rounded-full text-white text-2xl font-medium bg-[#666666] flex items-center justify-center" >
                                            16
                                        </div>
                                        <div className="text-white font-bold text-lg ms-[20px]">
                                            Fan Room
                                        </div>
                                        <div className="ms-auto me-[20px]">
                                            <svg
                                                fill="none"
                                                height="1.75rem"
                                                viewBox="0 0 28 28"
                                                width="1.75rem"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <mask
                                                    height="28"
                                                    id="mask0_305_301"
                                                    maskUnits="userSpaceOnUse"
                                                    style={{
                                                        maskType: "alpha",
                                                    }}
                                                    width="28"
                                                    x="0"
                                                    y="0">
                                                    <rect fill="url(#pattern0_305_301)" height="28" width="28" />
                                                </mask>
                                                <g mask="url(#mask0_305_301)">
                                                    <rect fill="#D4BC6D" height="28" width="28" x="0.109375" y="0.109375" />
                                                </g>
                                                <defs>
                                                    <pattern
                                                        height="1"
                                                        id="pattern0_305_301"
                                                        patternContentUnits="objectBoundingBox"
                                                        width="1">
                                                        <use transform="scale(0.00195312)" xlinkHref="#image0_305_301" />
                                                    </pattern>
                                                    <image
                                                        height="512"
                                                        id="image0_305_301"
                                                        preserveAspectRatio="none"
                                                        width="512"
                                                        xlinkHref="data:image/png;base64,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"
                                                    />
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="bg-[#ffffff19] flex  items-center p-2 rounded-full">
                                        <div className="h-[3.125rem] w-[3.125rem] rounded-full text-white text-2xl font-medium bg-[#666666] flex items-center justify-center" >
                                            17
                                        </div>
                                        <div className="text-white font-bold text-lg ms-[20px]">
                                            Enterprise Support (MVP)
                                        </div>
                                        <div className="ms-auto me-[20px]">
                                            <svg
                                                fill="none"
                                                height="1.75rem"
                                                viewBox="0 0 28 28"
                                                width="1.75rem"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <mask
                                                    height="28"
                                                    id="mask0_305_301"
                                                    maskUnits="userSpaceOnUse"
                                                    style={{
                                                        maskType: "alpha",
                                                    }}
                                                    width="28"
                                                    x="0"
                                                    y="0">
                                                    <rect fill="url(#pattern0_305_301)" height="28" width="28" />
                                                </mask>
                                                <g mask="url(#mask0_305_301)">
                                                    <rect fill="#D4BC6D" height="28" width="28" x="0.109375" y="0.109375" />
                                                </g>
                                                <defs>
                                                    <pattern
                                                        height="1"
                                                        id="pattern0_305_301"
                                                        patternContentUnits="objectBoundingBox"
                                                        width="1">
                                                        <use transform="scale(0.00195312)" xlinkHref="#image0_305_301" />
                                                    </pattern>
                                                    <image
                                                        height="512"
                                                        id="image0_305_301"
                                                        preserveAspectRatio="none"
                                                        width="512"
                                                        xlinkHref="data:image/png;base64,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"
                                                    />
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* third section */}
            <section className="py-[98px] bg-[url('/bg-texture.svg')] bg-no-repeat bg-center bg-size-[100%]">
                <div className="2xl:max-w-[1764px] lg:max-w-[1284px] m-auto">
                    <div className="grid grid-cols-2 gap-20 items-center">
                        <div className="">
                            <button className="bg-[#2e2e2e] rounded-full px-[38px] py-[13px] text-[#d4bc6d] font-medium text-[0.875rem] mb-9">
                                Our Numbers
                            </button>
                            <h2 className="text-[4.588rem] capitalize bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent ">
                                We’re Proud  To Have <br />
                                Athlete Success
                            </h2>
                        </div>
                        <div className="">
                            <h2 className="text-[130px] font-semibold text-white text-center">
                                10,023
                            </h2>
                            <h4 className="text-[52px] font-extrabold text-center bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent mt-[-30px]">
                                Active Athletes
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            <div className="w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-16 items-center">
                    <div className="space-y-8 relative hidden lg:block">
                        <div className="feature-card">
                            <div
                                className="info-line"
                                style={{
                                    right: "-40px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                }}
                            />
                            <div
                                className="info-dot"
                                style={{
                                    right: "-44px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                }}
                            />
                            <h3 className="text-lg font-bold text-gray-200 mb-2">
                                AI-Powered Analytics & Instant Cashouts
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Our platform is backed by AI technology that delivers real-time sales
                                analytics, audience insights, and growth recommendations. You'll know
                                exactly who's buying, where your fans are, and how to boost
                                performance. And when it comes time to get paid, our instant cashout
                                system gives you direct access to your earnings without delay.
                            </p>
                        </div>
                        <div className="feature-card">
                            <div
                                className="info-line"
                                style={{
                                    right: "-40px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                }}
                            />
                            <div
                                className="info-dot"
                                style={{
                                    right: "-44px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                }}
                            />
                            <h3 className="text-lg font-bold text-gray-200 mb-2">
                                Social Media Promotion
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                We help amplify your presence through smart, strategic social media
                                support. From optimizing your profiles to crafting collaborative posts
                                with popular brands, we post on you to grow your following and turn
                                views into value.
                            </p>
                        </div>
                    </div>
                    <div className="phone-bezel bg-black mx-auto">
                        <div className="phone-notch" />
                        <div
                            className="w-full h-full bg-[#0D0D0D] rounded-[32px] p-4 flex flex-col overflow-hidden"
                            style={{
                                height: "812px",
                                width: "375px",
                            }}>
                            <header className="flex items-center justify-between pt-8 px-2">
                                <div className="flex items-center space-x-3">
                                    <img
                                        alt="User Avatar"
                                        className="w-10 h-10 rounded-full"
                                        src="https://placehold.co/40x40/334155/e2e8f0?text=MR"
                                    />
                                    <div>
                                        <p className="font-semibold text-sm">Michael Robinson</p>
                                        <p className="text-xs text-gray-500">michael.robinson.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <i className="w-5 h-5 text-gray-400" data-lucide="bell" />
                                    <i className="w-5 h-5 text-gray-400" data-lucide="grid-3x3" />
                                </div>
                            </header>
                            <main className="flex-grow py-6 space-y-6 overflow-y-auto">
                                <div className="bg-[#1C1C1E] p-4 rounded-2xl">
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="font-semibold">AI Reports</h2>
                                        <i
                                            className="w-5 h-5 text-gray-500"
                                            data-lucide="arrow-up-right"
                                        />
                                    </div>
                                    <div className="flex items-center space-x-6">
                                        <div className="relative w-32 h-32">
                                            <svg className="w-full h-full" viewBox="0 0 36 36">
                                                <path
                                                    className="text-gray-700"
                                                    d="M18 2.0845                                            a 15.9155 15.9155 0 0 1 0 31.831                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3.5"
                                                />
                                                <path
                                                    className="text-yellow-400"
                                                    d="M18 2.0845                                            a 15.9155 15.9155 0 0 1 0 31.831                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeDasharray="53, 100"
                                                    strokeLinecap="round"
                                                    strokeWidth="3.5"
                                                />
                                                <path
                                                    className="text-gray-400"
                                                    d="M18 2.0845                                            a 15.9155 15.9155 0 0 1 0 31.831                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeDasharray="24, 100"
                                                    strokeDashoffset="-53"
                                                    strokeLinecap="round"
                                                    strokeWidth="3.5"
                                                />
                                            </svg>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-2xl font-bold">53%</span>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <span className="w-3 h-3 rounded-full bg-yellow-400 mr-2" />
                                                <div>
                                                    <p className="text-sm font-medium">Competitive</p>
                                                    <p className="text-xs text-gray-400">53%</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="w-3 h-3 rounded-full bg-gray-400 mr-2" />
                                                <div>
                                                    <p className="text-sm font-medium">Top Tier</p>
                                                    <p className="text-xs text-gray-400">24%</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="w-3 h-3 rounded-full bg-gray-700 mr-2" />
                                                <div>
                                                    <p className="text-sm font-medium">User Journey</p>
                                                    <p className="text-xs text-gray-400">23%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#1C1C1E] p-4 rounded-2xl">
                                    <div className="flex justify-between items-center mb-2">
                                        <h2 className="font-semibold">Passing Rate</h2>
                                        <i
                                            className="w-5 h-5 text-gray-500"
                                            data-lucide="arrow-up-right"
                                        />
                                    </div>
                                    <p className="text-4xl font-bold text-gray-200 mb-4">28%</p>
                                    <div className="flex items-end h-24 space-x-px"></div>
                                    <div className="flex justify-between mt-3 text-sm">
                                        <p className="text-gray-400">
                                            61% <span className="text-gray-200">Complete</span>
                                        </p>
                                        <p className="text-gray-400">
                                            11% <span className="text-gray-200">Partial</span>
                                        </p>
                                    </div>
                                </div>
                            </main>
                            <footer className="flex justify-around items-center py-2 px-2 bg-[#1C1C1E] rounded-full">
                                <a className="flex flex-col items-center text-yellow-400" href="#">
                                    <i className="w-6 h-6" data-lucide="home" />
                                    <span className="text-xs mt-1">Home</span>
                                </a>
                                <a
                                    className="flex flex-col items-center text-gray-500 hover:text-white transition-colors"
                                    href="#">
                                    <i className="w-6 h-6" data-lucide="search" />
                                    <span className="text-xs mt-1">Search</span>
                                </a>
                                <a
                                    className="flex flex-col items-center text-gray-500 hover:text-white transition-colors"
                                    href="#">
                                    <i className="w-6 h-6" data-lucide="layout-template" />
                                    <span className="text-xs mt-1">Templates</span>
                                </a>
                                <a
                                    className="flex flex-col items-center text-gray-500 hover:text-white transition-colors"
                                    href="#">
                                    <i className="w-6 h-6" data-lucide="library" />
                                    <span className="text-xs mt-1">Library</span>
                                </a>
                                <a
                                    className="flex flex-col items-center text-gray-500 hover:text-white transition-colors"
                                    href="#">
                                    <i className="w-6 h-6" data-lucide="settings" />
                                    <span className="text-xs mt-1">Settings</span>
                                </a>
                            </footer>
                        </div>
                    </div>
                    <div className="relative hidden lg:block">
                        <div className="feature-card">
                            <div
                                className="info-line"
                                style={{
                                    left: "-40px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                }}
                            />
                            <div
                                className="info-dot"
                                style={{
                                    left: "-44px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                }}
                            />
                            <h3 className="text-lg font-bold text-gray-200 mb-2">
                                Industry-Leading Profit Sharing
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Unlike most platforms that offer athletes just 5-20% of profits,
                                Hometown Hero gives athletes the opportunity to earn up to 50% of all
                                profits from every sale and every offer. We believe athletes deserve
                                to be the biggest winners in their success - and we back that belief
                                with one of the most athlete-centric profit-sharing models in the
                                industry.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-8 lg:hidden mt-8">
                        <div className="feature-card">
                            <h3 className="text-lg font-bold text-gray-200 mb-2">
                                AI-Powered Analytics & Instant Cashouts
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Our platform is backed by AI technology that delivers real-time sales
                                analytics...
                            </p>
                        </div>
                        <div className="feature-card">
                            <h3 className="text-lg font-bold text-gray-200 mb-2">
                                Social Media Promotion
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                We help amplify your presence through smart, strategic social media
                                support...
                            </p>
                        </div>
                        <div className="feature-card">
                            <h3 className="text-lg font-bold text-gray-200 mb-2">
                                Industry-Leading Profit Sharing
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Unlike most platforms that offer athletes just 5-20% of profits,
                                Hometown Hero gives athletes the opportunity...
                            </p>
                        </div>
                    </div>
                </div>
            </div>






            <section className="w-full h-[100dvh] relative hidden">
                <img src="/download-app.svg" alt="download" className="w-full h-full object-contain" />
                <div className="absolute right-[24px] bottom-[47px] z-10">
                    <a href="#" className="bg-black rounded-full px-[56px] inline-block py-[32px] text-[#d4bc6d] font-extrabold text-[1.25rem] mb-9">
                        Download the App
                    </a>
                </div>
            </section>
        </>
    )
}

export default Athletes
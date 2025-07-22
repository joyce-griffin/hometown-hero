import React, { useRef } from 'react'
import CarouselSlider from '../components/CarouselSlider'
import { Link } from 'react-router-dom'

const Home = () => {
    const videoRef = useRef(null);

    const handlePlay = () => {
        videoRef.current?.play();
    };
    return (
        <>

            {/* first section */}
            <section className="bg-black min-h-screen flex flex-col items-center justify-center p-8">
                <CarouselSlider data={
                    [
                        {
                            name: "Coming Soon",
                            image: "/question-mark.jpeg",
                            // rating: 5,
                            // subTitle: "Seller",
                        },
                        {
                            name: "Coming Soon",
                            image: "/question-mark.jpeg",
                            // rating: 5,
                            // subTitle: "Seller",
                        },
                        {
                            name: "Coming Soon",
                            image: "/question-mark.jpeg",
                            // rating: 5,
                            // subTitle: "Seller",
                        },
                        {
                            name: "Coming Soon",
                            image: "/question-mark.jpeg",
                            // rating: 5,
                            // subTitle: "Seller",
                        },
                        {
                            name: "Coming Soon",
                            image: "/question-mark.jpeg",
                            // rating: 5,
                            // subTitle: "Seller",
                        },
                    ]
                } />
               
                <h1 className='text-[6.875rem] text-center uppercase font-extrabold bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent mb-5'>
                    Furious 5 Incoming...
                </h1>
                
                <p className="text-xl text-center font-medium text-[#adadad] max-w-[1523px] mx-auto">
                    Within the first month, we’ll be selecting the Furious 5 — our top 5 earning athletes on the platform.
                    <br />
                    Being part of the Furious 5 comes with exclusive perks, special recognition, and opportunities to grow your brand even further.
                    <br />
                    Let’s see who earns their spot. It’s game time.

                </p>

                {/* <h1 className='text-[6.875rem] text-center uppercase font-extrabold bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent mb-5'>
                    This Month's Furious 5
                </h1> */}
                <p className="text-xl text-center font-medium text-[#adadad] max-w-[1523px] mx-auto">
                    Our top 5 earning athletes, leading in NIL. Members gain exclusive access to brand partnerships, priority NIL opportunities, and elevated exposure across the <br />
                    platform. Our team reviews earnings monthly to ensure the top performers hold their place among the Furious 5.


                </p>
                <h4 className="text-[52px] font-extrabold text-center bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent">
                    Athletes Partnered With
                </h4>
                <h2 className="text-[130px] font-semibold text-white text-center mb-12 mt-[-30px]">
                    10,023
                </h2>

                <Link to={explore-athletes} className="bg-[#d4bc6d] font-extrabold px-[23px] py-[14px] text-[1.156rem] rounded-[11.6px] mt-[-25px]">
                    View Athlete Marketplace
                </Link>
            </section>

            {/* second section */}
            <section className="pt-[105px]">
                <div className="flex gap-[22px] justify-center">
                    <h2 className="text-[5.9rem] font-extrabold text-center bg-[url(/texture.png)] bg-no-repeat bg-center bg-cover bg-clip-text text-transparent mb-8">
                        YOUR STORY
                    </h2>
                    <h2 className="text-[5.9rem] font-extrabold text-center bg-[url(/texture.png)] bg-no-repeat bg-center bg-cover bg-clip-text text-transparent mb-8">
                        YOUR BRAND
                    </h2>
                    <h2 className="text-[5.9rem] font-extrabold text-center bg-[url(/texture.png)] bg-no-repeat bg-center bg-cover bg-clip-text text-transparent mb-8">
                        YOUR LEGACY
                    </h2>
                </div>
                <div className="mt-[87.1px] hidden">
                    <div className="bg-[url(/play-boy.png)] bg-no-repeat bg-center h-[704px] w-full relative">
                        <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
                            <img src="/play-button.svg" alt="play button" className="w-[6.688rem] h-[6.375rem]" />
                        </div>
                        <div className="absolute bottom-[38px] left-[50%] transform -translate-x-[50%]">
                            <button className="text-black text-[1.125rem] font-extrabold bg-[#d4bc6d] rounded-[20px] px-[2.125rem] py-6" type="button">
                                Join the Family
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-[195px] pb-[98px]">
                <div className="2xl:max-w-[1764px] lg:max-w-[1284px] m-auto">
                    <div className="grid grid-cols-2 gap-20 items-center">
                        <div className="">

                            <h2 className="text-[4.588rem] capitalize bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent mb-10">
                                Launching your brand has never been this easy.

                            </h2>
                            <p className="text-[1.125rem] text-white mb-10">
                                At Hometown Hero, we handle everything — from the graphics to the setup to your personal storefront — so you can stay focused on the grind. Whether it’s merch, supplements, or any other NIL service, you’ll have access to over 300+ products to build, sell, and profit from.

                                <br />
                                <br />
                                You bring the hustle. We’ll handle the rest.

                            </p>
                            <Link to='/athlete-signup' className="bg-[#d4bc6d] rounded-full px-[38px] py-[13px] text-black font-medium text-[0.875rem] mb-9">
                                Join the Family
                            </Link>
                        </div>
                        <div className="">
                            <div className="relative bg-no-repeat bg-center bg-cover h-[700px] w-full rounded-3xl overflow-hidden">
                                <video ref={videoRef} muted loop class="absolute top-0 left-0 w-full h-full object-cover">
                                    <source src="/video2.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
                                    <img src="/play-button.svg" alt="play button" className="w-[6.688rem] h-[6.375rem]" onClick={handlePlay} type="button" />
                                </div>
                                <div className="hidden absolute bottom-[38px] left-[50%] transform -translate-x-[50%]">
                                    <button className="text-black text-[1.125rem] font-extrabold bg-[#d4bc6d] rounded-[20px] px-[2.125rem] py-6" type="button">
                                        Join the Family
                                    </button>
                                </div>
                            </div>
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
                                About Us
                            </button>
                            <h2 className="text-[4.588rem] capitalize bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent mb-10">
                                NIL Marketplace built for athletes, by athletes,
                            </h2>
                            <p className="text-[1.125rem] text-white mb-10">
                                Hometown Hero is a platform built for athletes, by athletes, designed to empower players at every stage of their journey—whether they are building their brand for the future or actively monetizing their name, image, and likeness (NIL).
                                <br />
                                <br />
                                For athletes currently earning through NIL, Hometown Hero offers a comprehensive, AI-powered platform that helps players monetize their talents, secure brand collaborations, and maximize their earning potential. With advanced tools for real-time earnings tracking, data-driven insights, and automated brand connections, we streamline the process of building and managing your NIL success. Whether it's selling products through your storefront, such as online courses, player cards, and merchandise, securing sponsorship deals, or monetizing content, our platform provides athletes with all the tools they need to grow their brand, expand their influence, and take full control of their financial future.
                            </p>
                            <Link to='/our-team' className="bg-[#2e2e2e] rounded-full px-[38px] py-[13px] text-[#d4bc6d] font-medium text-[0.875rem] mb-9">
                                Learn More
                            </Link>
                        </div>
                        <div className="">
                            <img src="/alek.jpeg" alt="about us" className="w-full h-[250px] object-fill object-top rounded-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full h-[100dvh] bg-black">
                <div className="flex items-center justify-center h-full w-full">
                    <div className="text-center">
                        <button className="bg-[#2e2e2e] rounded-full px-[38px] py-[13px] text-[#d4bc6d] font-medium text-[0.875rem] mb-9">
                            Why Join Us
                        </button>
                        <h2 className="text-[7.5rem] capitalize font-medium bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent mb-10">
                            Brand Marketplace <br /> coming soon
                        </h2>
                        <Link to='/athlete-signup' className="bg-[#d4bc6d] rounded-full px-[38px] py-[13px] text-black font-medium text-[0.875rem] mb-9">
                            Join the Family
                        </Link>
                    </div>
                </div>
            </section>

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

export default Home
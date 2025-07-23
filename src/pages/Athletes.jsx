import React, { useState } from 'react';

import CarouselSlider from '../components/CarouselSlider'
import { Link } from 'react-router-dom';
import { Lock } from 'lucide-react';



const featureList = [
  {
    id: 1,
    title: 'Clothing',
    description: "This isn’t just your gear — this reflects your game. Your clothing line should tell your story before you even say a word. Whether you're rocking it at the gym, on campus, or out with friends, each piece represents your grind, your mindset, and your movement. With full customization and top-tier quality, you’re not just selling a product — you’re building a uniform for your supporters to wear with pride. This is your everyday legacy.",
    image: '/user-cash.svg',
    locked: false,
  },
  {
    id: 2,
    title: 'Acid Wash Clothing',
    description: "A bold, vintage look for athletes who don’t follow trends — they set them. Acid wash is for those who stand out. This collection brings raw energy and retro vibes to your brand. Whether it’s tees, hoodies, or shorts, this line lets you drop a statement with every launch. It’s gritty, it’s unique, and it reflects the battles you’ve fought on and off the field. Let your personality show in every thread.",
    image: '/user-cash.svg',
    locked: false,
  },
  {
    id: 3,
    title: 'Jerseys',
    description: "You're not just repping a name. You're representing a legacy. Every athlete deserves a jersey with their name on it. Whether it's a throwback look, gameday-ready design, or a limited-edition drop, your jersey represents your team, your supporters, and your mission. Fans don’t just want merch — they want to be part of something. Give them a piece of your journey they can wear with pride.",
    image: '/user-cash.svg',
    locked: false,
  },
  {
    id: 4,
    title: 'Footwear',
    description: "Walk your own path — now do it in style. Custom footwear is more than a flex — it’s a platform. Drop sneakers and slides designed with your personal flair, built for comfort and movement. Whether it’s pre-game walk-ins or streetwear statements, you’ll be remembered for every step. This is where fashion meets ambition — lace it up and lead the way.",
    image: '/user-cash.svg',
    locked: false,
  },
  {
    id: 5,
    title: 'Home & Lifestyle',
    description: "Bring your brand into the daily lives of your fans. Your brand doesn’t stop at what you wear. From custom mugs to posters, pillows to blankets, this category allows your supporters to live with your story. Turn everyday spaces into inspiration hubs and let your brand become a part of people’s lives — from the kitchen to the living room.",
    image: '/user-cash.svg',
    locked: false,
  },
  {
    id: 6,
    title: 'Accessories',
    description: "Small details. Big impact.Sometimes it’s the little things that leave the biggest impression. Keychains, phone cases, bags, and more — accessories are perfect for giveaways, fan drops, and content packs. Affordable, creative, and memorable — they’re an easy way to expand your brand and reach every corner of your community.",
    image: '/user-cash.svg',
    locked: false,
  },
  {
    id: 7,
    title: 'Strength Supplements',
    description: 'Fuel your grind. Build your brand. Athletes aren’t just selling a look — they’re selling a lifestyle. With this service, you can launch high-quality supplements that match your performance. Whether it’s pre-workout, recovery, or protein blends, you’re giving fans and teammates a product they can trust. Power your brand with what powers you.',
    image: '/user-cash.svg',
    locked: false,
  },
  {
    id: 8,
    title: 'Health',
    description: "More than a product — it’s a lifestyle shift. This category is about pushing the importance of long-term health. From immunity teas to clean energy blends and superfoods, these products let you promote balance, focus, and longevity. Your audience doesn’t just look up to your hustle — they want to learn from your habits. Lead the next generation of athletes in and out of the game.",
    image: '/user-cash.svg',
    locked: false,
  },
  {
    id: 9,
    title: 'Book',
    description: "Your story is your power — now publish it. Whether it’s a personal journey, motivational journal, training guide, or kids’ book, the Book service gives you the chance to build a legacy through words. You don’t need a publisher — you need a platform. And now you’ve got one. Inspire the next you by telling the world how you got here.",
    image: '/user-cash.svg',
    locked: false,
  },
  {
    id: 10,
    title: 'Player Card',
    description: "Turn your moment into a collectible. Your official player card is more than a photo and a name — it’s a snapshot of your legacy. Fans will want to collect it, trade it, and show it off. Whether it’s glossy, signed, or limited edition, this is your chance to create something iconic. Cement your presence. Make it official",
    image: '/user-cash.svg',
    locked: false,
  },
  {
    id: 11,
    title: 'Coffee',
    description: "More than a caffeine fix — it’s part of the routine. \n This category highlights the daily habits that keep athletes locked in. Whether it’s a morning jumpstart or an evening reset, coffee becomes a steady part of focus, energy, and rhythm. By sharing your blend, you’re letting others tap into the pace that drives you — on and off the court.",
    image: '/user-cash.svg',
    locked: false,
  },
  {
    id: 12,
    title: 'Ambassador program',
    description: "Ai powered analytics and instant cashouts\nPlay at the next level\nSocial media promotion\nPro Dashboard\nIndustry leading profit sharing",
    image: '/user-cash.svg',
    locked: false,
  }
];


const Athletes = () => {
    const [activeFeature, setActiveFeature] = useState(featureList[0]);
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
                            name: "Coming Soon",
                            image: "/question-mark.jpeg",
                            rating: 5,
                            subTitle: "Seller",
                        },
                        {
                            name: "Coming Soon",
                            image: "/question-mark.jpeg",
                            rating: 5,
                            subTitle: "Seller",
                        },
                        {
                            name: "Coming Soon",
                            image: "/question-mark.jpeg",
                            rating: 5,
                            subTitle: "Seller",
                        },
                        {
                            name: "Coming Soon",
                            image: "/question-mark.jpeg",
                            rating: 5,
                            subTitle: "Seller",
                        },
                        {
                            name: "Coming Soon",
                            image: "/question-mark.jpeg",
                            rating: 5,
                            subTitle: "Seller",
                        },
                    ]
                } />
                <Link
                                to="/athlete-signup"
                                className="inline-block bg-[#d4bc6d] rounded-full px-[38px] py-[13px] text-black font-medium text-[0.875rem] mb-9 transition duration-300 hover:bg-[#c2a851]"
                                >
                                Join the Family
                            </Link>
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
                            
                            <Link
                                to="/athlete-signup"
                                className="inline-block bg-[#d4bc6d] rounded-full px-[38px] py-[13px] text-black font-medium text-[0.875rem] mb-9 transition duration-300 hover:bg-[#c2a851]"
                                >
                                Join the Family
                            </Link>
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
                                {activeFeature.title}
                                </h2>
                                <div className="w-[43rem] mx-auto">
                                <img
                                    src={activeFeature.image}
                                    alt={activeFeature.title}
                                    className="w-full h-[37.625rem] object-contain mb-3.5"
                                />
                                <p className="text-[1.125rem] font-medium text-white mb-10 whitespace-pre-line">
                                    {activeFeature?.description}
                                </p>
                                </div>

                        </div>
                        <div className="">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex flex-col gap-3.5">
                                    {featureList.map((feature) => (
                                        <div
                                        key={feature.id}
                                        onClick={() => {
                                            if (!feature.locked) setActiveFeature(feature);
                                        }}
                                        className={`bg-[#ffffff19] flex items-center p-2 rounded-full cursor-pointer hover:bg-[#ffffff2d] transition ${
                                            feature.id === activeFeature.id ? 'border border-[#d4bc6d]' : ''
                                        }`}
                                        >
                                        <div
                                            className={`relative h-[3.125rem] w-[3.125rem] rounded-full text-white text-2xl font-medium flex items-center justify-center ${
                                            feature.id === activeFeature.id ? 'bg-[#d4bc6d]' : 'bg-[#666666]'
                                            }`}
                                        >
                                            {feature.id}
                                            {feature.locked && (
                                            <span className="absolute -top-1 -right-1 text-xs bg-black rounded-full px-1 py-0.5">
                                                🔒
                                            </span>
                                            )}
                                        </div>
                                        <div
                                            className={`font-bold text-lg ms-[20px] ${
                                            feature.id === activeFeature.id
                                                ? 'text-[#d4bc6d]'
                                                : 'text-white'
                                            }`}
                                        >
                                            {feature.title}
                                        </div>
                                        </div>
                                    ))}
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
                                                    <Lock size={48} color="#d4bc6d" />
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
                                                    <Lock size={48} color="#d4bc6d" />
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
                                                    <Lock size={48} color="#d4bc6d" />
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
                                                    <Lock size={48} color="#d4bc6d" />
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
                                                    <Lock size={48} color="#d4bc6d" />
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
                                                    <Lock size={48} color="#d4bc6d" />
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
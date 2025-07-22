import React from 'react'
import CarouselSlider2 from '../components/CarouselSlider2'

const OurTeam = () => {
    return (
        <>
            <section className='py-16 bg-black'>
                <h1 className='text-[10rem] mt-12 mb-0 text-center capitalize font-bold bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent '>
                    Our Leaders
                </h1>

                <CarouselSlider2 data={
                    [

                        {
                            name: "Saif Khan",
                            image: "/team5.jpg",
                            rating: 0,
                            subTitle: "Chief Technology Officer (CTO)",
                            sport: 'Soccer',
                            homeTown: ['Karachi', 'Pakistan'],
                        },
                        {
                            name: "Thomas Jenkins",
                            image: "/team3.jpeg",
                            rating: 0,
                            subTitle: "Vice President",
                            sport: 'Wrestling, Rugby',
                            homeTown: ['Bridgewater', 'Virginia'],
                        },
                        {
                            name: "Alek Giatopoulous Moore",
                            image: "/team1.jpeg",
                            rating: 0,
                            subTitle: "CEO",
                            sport: 'Basketball',
                            homeTown: ['Sydney', 'Australia'],
                        }

                        ,

                        {
                            name: "Benjamin Jenkins",
                            image: "/team2.jpeg",
                            rating: 0,
                            subTitle: "Founder",
                            sport: 'Basketball',
                            homeTown: ['Tokyo', 'Japan'],
                        },
                        {
                            name: "Coming Soon",
                            image: "/question-mark.jpeg",
                            // rating: 0,
                            // subTitle: "Founder & CEO",
                        },
                    ]
                } />

                <h1 className='text-[5rem] mt-12 mb-0 text-center capitalize font-medium bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent '>
                    About Project
                </h1>
                <p className='text-base text-center font-medium text-[#adadad] max-w-[98rem] mx-auto mt-6'>
                    Hometown Hero was created by former athletes who know what it’s like to chase the dream.
                    We’ve lived the grind, the sacrifice, and the uncertainty — and we built this platform to change
                    the game for athletes everywhere. Now, it’s bigger than us. Hometown Hero is on a mission to
                    become the world’s largest NIL ecosystem, giving athletes in every continent, country, and city
                    access to the tools and technology they need to grow their brand and get paid for the value they
                    bring. For too long, athletes haven’t earned what they deserve — but that era is over. We’re
                    here to help you take full advantage of this golden age of opportunity and finally take ownership
                    of your name, image, and likeness. This is your moment. Your story, your brand, your legacy —
                    in your control. And we’re here to help you own every part of it. Welcome to the future of sports.
                    Welcome to Hometown Hero.
                </p>
            </section>

            <section className='py-16 hidden'>
                <h1 className='text-[5rem] mt-12 mb-0 text-center capitalize font-medium bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent '>
                    Our Staff
                </h1>
                <div className="py-16">
                    <div class="flex justify-center space-x-5 mb-[81px]">
                        <button class="bg-[#D4BC6D] text-black text-sm font-medium py-3 px-8 rounded-full shadow-lg transition-colors duration-300 ease-in-out hover:text-black hover:bg-[#D4BC6D]" type='button'>
                            Country Agent
                        </button>
                        <button class="bg-gray-800 text-[#D4BC6D] text-sm font-medium py-3 px-8 rounded-full shadow-lg transition-colors duration-300 ease-in-out hover:text-black hover:bg-[#D4BC6D]" type='button'>
                            Advisors
                        </button>
                        <button class="bg-gray-800 text-[#D4BC6D] text-sm font-medium py-3 px-8 rounded-full shadow-lg transition-colors duration-300 ease-in-out hover:text-black hover:bg-[#D4BC6D]" type='button'>
                            Operations
                        </button>
                        <button class="bg-gray-800 text-[#D4BC6D] text-sm font-medium py-3 px-8 rounded-full shadow-lg transition-colors duration-300 ease-in-out hover:text-black hover:bg-[#D4BC6D]" type='button'>
                            Graphic Designers
                        </button>
                        <button class="bg-gray-800 text-[#D4BC6D] text-sm font-medium py-3 px-8 rounded-full shadow-lg transition-colors duration-300 ease-in-out hover:text-black hover:bg-[#D4BC6D]" type='button'>
                            Video Editors
                        </button>
                    </div>
                </div>
                <CarouselSlider2 data={
                    [
                        {
                            name: "HARRY FROTH",
                            image: "/agents.svg",
                            rating: 0,
                            subTitle: "Founder & CEO",
                        },
                        {
                            name: "HARRY FROTH",
                            image: "/agents.svg",
                            rating: 0,
                            subTitle: "Founder & CEO",
                        },
                        {
                            name: "HARRY FROTH",
                            image: "/agents.svg",
                            rating: 0,
                            subTitle: "Founder & CEO",
                        },
                        {
                            name: "HARRY FROTH",
                            image: "/agents.svg",
                            rating: 0,
                            subTitle: "Founder & CEO",
                        },
                        {
                            name: "HARRY FROTH",
                            image: "/agents.svg",
                            rating: 0,
                            subTitle: "Founder & CEO",
                        },
                    ]
                } />
            </section>
        </>
    )
}

export default OurTeam
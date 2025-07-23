import React from 'react'
import CarouselSlider2 from '../components/CarouselSlider2'

const ExploreAthletes = () => {
    return (
        <>
            <section className="bg-black flex flex-col items-center p-2">
                <h1 className='text-[6.875rem] my-[40px] text-center uppercase font-extrabold bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent '>
                    Explore Athletes
                </h1>
                <div className="">
                    <div class="flex space-x-5 mb-[81px]">
                        <button class="bg-[#D4BC6D] text-black text-sm font-medium py-3 px-8 rounded-full shadow-lg transition-colors" type='button'>
                            All
                        </button>
                        <button class="bg-gray-800 text-[#D4BC6D] text-sm font-medium py-3 px-8 rounded-full shadow-lg transition-colors" type='button'>
                            Furious 5
                        </button>
                        <button class="bg-gray-800 text-[#D4BC6D] text-sm font-medium py-3 px-8 rounded-full shadow-lg transition-colors" type='button'>
                            Royal
                        </button>
                        <button class="bg-gray-800 text-[#D4BC6D] text-sm font-medium py-3 px-8 rounded-full shadow-lg transition-colors" type='button'>
                            Emerald
                        </button>
                        <button class="bg-gray-800 text-[#D4BC6D] text-sm font-medium py-3 px-8 rounded-full shadow-lg transition-colors" type='button'>
                            Diamond
                        </button>
                        <button class="bg-gray-800 text-[#D4BC6D] text-sm font-medium py-3 px-8 rounded-full shadow-lg transition-colors" type='button'>
                            Gold
                        </button>
                        <button class="bg-gray-800 text-[#D4BC6D] text-sm font-medium py-3 px-8 rounded-full shadow-lg transition-colors" type='button'>
                            Silver
                        </button>
                        <button class="bg-gray-800 text-[#D4BC6D] text-sm font-medium py-3 px-8 rounded-full shadow-lg transition-colors" type='button'>
                            Bronze
                        </button>
                        <button class="bg-gray-800 text-[#D4BC6D] text-sm font-medium py-3 px-8 rounded-full shadow-lg transition-colors" type='button'>
                            Trending
                        </button>
                    </div>
                    <div className="flex items-center justify-center pl-0 pr-10 p-4">
                        <div className="w-full max-w-4xl">
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <button
                                    className="flex-shrink-0 w-full sm:w-auto flex items-center justify-center gap-x-2.5 px-5 py-3 rounded-full bg-[#2d2d2d] text-[#D4BC6D] font-semibold text-sm transition-colors duration-300 ease-in-out hover:bg-[#3a3a3a]"
                                    type="button">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        viewBox="0 0 20 18"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2 2H11"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeWidth="3"
                                        />
                                        <path
                                            d="M2 9H15"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeWidth="3"
                                        />
                                        <path
                                            d="M2 16H19"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeWidth="3"
                                        />
                                    </svg>
                                    <span>Filters</span>
                                </button>
                                <div className="relative w-full">
                                    <div className="flex items-center w-full p-1 rounded-full bg-[#2d2d2d] focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-black focus-within:ring-[#D4BC6D] transition-all duration-300">
                                        <input
                                            className="w-full pl-5 pr-3 py-2 bg-transparent border-none text-white placeholder-neutral-500 focus:outline-none focus:ring-0 text-base sm:text-sm"
                                            placeholder="Search by name"
                                            type="search"
                                        />
                                        <button
                                            className="flex-shrink-0 px-8 py-2.5 rounded-full bg-[#D4BC6D] text-black font-semibold text-sm transition-colors duration-300 ease-in-out hover:bg-[#e0d1a6]"
                                            type="submit">
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



            </section>

            <section className='py-8 bg-black'>
                <h1 className='text-[6.875rem] text-center capitalize font-bold bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent '>
                    this month’s furious  5
                </h1>
                <CarouselSlider2 data={
                    [
                        {
                            name: "Coming Soon",
                            image: "/question-mark.jpeg",
                            // name: "AVERY BRINKLEY",
                            // image: "/football-group.svg",
                            // rating: 5,
                            // subTitle: "Seller",
                        },
                        {
                            name: "Coming Soon",
                            image: "/question-mark.jpeg",
                            // name: "AVERY BRINKLEY",
                            // image: "/football-group.svg",
                            // rating: 5,
                            // subTitle: "Seller",
                        },
                        {
                            name: "Coming Soon",
                            image: "/question-mark.jpeg",
                            // name: "AVERY BRINKLEY",
                            // image: "/football-group.svg",
                            // rating: 5,
                            // subTitle: "Seller",
                        },
                        {
                            name: "Coming Soon",
                            image: "/question-mark.jpeg",
                            // name: "AVERY BRINKLEY",
                            // image: "/football-group.svg",
                            // rating: 5,
                            // subTitle: "Seller",
                        },
                        {
                            name: "Coming Soon",
                            image: "/question-mark.jpeg",
                            // name: "AVERY BRINKLEY",
                            // image: "/football-group.svg",
                            // rating: 5,
                            // subTitle: "Seller",
                        },
                    ]
                } />
            </section>
            <section className='py-8 bg-black'>
                <h1 className='text-[5rem] text-center capitalize font-medium bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent '>
                    Trending Athletes
                </h1>
                <CarouselSlider2 data={
                    [
                        {
                            name: "Coming Soon",
                            image: "/question-mark.jpeg",
                            rating: 5,
                            subTitle: "Seller",
                            isTrending: true,
                        },
                        {
                            name: "Coming Soon",
                            image: "/question-mark.jpeg",
                            rating: 5,
                            subTitle: "Seller",
                            isTrending: true,
                        },
                        {
                            name: "Coming Soon",
                            image: "/question-mark.jpeg",
                            rating: 5,
                            subTitle: "Seller",
                            isTrending: true,
                        },
                        {
                            name: "Coming Soon",
                            image: "/question-mark.jpeg",
                            rating: 5,
                            subTitle: "Seller",
                            isTrending: true,
                        },
                        {
                            name: "Coming Soon",
                            image: "/question-mark.jpeg",
                            rating: 5,
                            subTitle: "Seller",
                            isTrending: true,
                        },
                    ]
                } />

                <div className="grid grid-cols-6 gap-2.5 max-w-[96rem] mx-auto mt-12 mb-16">
                    <div className="text-center">
                        <img src="/bronze.png" alt="Athlete" className='w-[9.375rem] h-auto object-contain mx-auto' />
                        <h4 className='text-[3rem] text-center capitalize font-medium bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent mb-4'>
                            Bronze 
                        </h4>
                        <button class="bg-[#D4BC6D] text-black text-sm font-medium py-3 px-10 rounded-full shadow-lg transition-colors duration-300 ease-in-out hover:text-black hover:bg-[#D4BC6D]" type='button'>
                            View
                        </button>
                    </div>
                    

                    <div className="text-center">
                        <img src="/Silver.png" alt="Athlete" className='w-[9.375rem] h-auto object-contain mx-auto' />
                        <h4 className='text-[3rem] text-center capitalize font-medium bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent mb-4'>
                            Silver
                        </h4>
                        <button class="bg-[#D4BC6D] text-black text-sm font-medium py-3 px-10 rounded-full shadow-lg transition-colors duration-300 ease-in-out hover:text-black hover:bg-[#D4BC6D]" type='button'>
                            View
                        </button>
                    </div>

                    <div className="text-center">
                        <img src="/Gold.png" alt="Athlete" className='w-[9.375rem] h-auto object-contain mx-auto' />
                        <h4 className='text-[3rem] text-center capitalize font-medium bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent mb-4'>
                            Gold 
                        </h4>
                        <button class="bg-[#D4BC6D] text-black text-sm font-medium py-3 px-10 rounded-full shadow-lg transition-colors duration-300 ease-in-out hover:text-black hover:bg-[#D4BC6D]" type='button'>
                            View
                        </button>
                    </div>


                    <div className="text-center">
                        <img src="/Diamond.png" alt="Athlete" className='w-[9.375rem] h-auto object-contain mx-auto' />
                        <h4 className='text-[3rem] text-center capitalize font-medium bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent mb-4'>
                            Diamond 
                        </h4>
                        <button class="bg-[#D4BC6D] text-black text-sm font-medium py-3 px-10 rounded-full shadow-lg transition-colors duration-300 ease-in-out hover:text-black hover:bg-[#D4BC6D]" type='button'>
                            View
                        </button>
                    </div>
                    <div className="text-center">
                        <img src="/Emerlad.png" alt="Athlete" className='w-[9.375rem] h-auto object-contain mx-auto' />
                        <h4 className='text-[3rem] text-center capitalize font-medium bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent mb-4'>
                            Emerald 
                        </h4>
                        <button class="bg-[#D4BC6D] text-black text-sm font-medium py-3 px-10 rounded-full shadow-lg transition-colors duration-300 ease-in-out hover:text-black hover:bg-[#D4BC6D]" type='button'>
                            View
                        </button>
                    </div>
                    <div className="text-center">
                        <img src="/Royal.png" alt="Athlete" className='w-[9.375rem] h-auto object-contain mx-auto' />
                        <h4 className='text-[3rem] text-center capitalize font-medium bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent mb-4'>
                           Royal 
                        </h4>
                        <button class="bg-[#D4BC6D] text-black text-sm font-medium py-3 px-10 rounded-full shadow-lg transition-colors duration-300 ease-in-out hover:text-black hover:bg-[#D4BC6D]" type='button'>
                            View
                        </button>
                    </div>
                
                </div>
            </section>
        </>
    )
}

export default ExploreAthletes
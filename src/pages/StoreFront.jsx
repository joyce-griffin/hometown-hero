import React from 'react'
import MerchendiseSlider from '../components/MerchendiseSlider'

const StoreFront = () => {
    return (
        <>
            <section className="h-[90dvh] w-full bg-[url('/basket.svg')] bg-bottom bg-no-repeat bg-cover py-8 px-5">
                <h1 className='text-[7.5rem] text-center uppercase font-bold bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent '>
                    ATHLETE VAULT
                </h1>
                <div className="flex gap-2.5">
                    <div className="flex flex-col">
                        <div className="mb-2.5">
                            <img src="/advance-star.svg" alt="star" height="8.625rem" />
                            <p className='text-[1.75rem] font-semibold text-white'>
                                Joseph Zamot
                            </p>
                        </div>
                        <div className="mb-6">
                            <p className='text-lg font-normal text-white'>
                                Social Media Reach
                            </p>
                            <div className="flex items-center p-2 border border-[#2D2D2D] rounded-full bg-[rgba(255, 255, 255,0.1)] mb-7">
                                <img
                                    alt="avatar"
                                    className="w-16 h-16 rounded-full border-2 border-black object-cover"
                                    src="https://i.pravatar.cc/150?img=1"
                                    type="button"
                                />
                                <img
                                    alt="avatar"
                                    className="w-16 h-16 rounded-full border-2 border-black object-cover -ml-4"
                                    src="https://i.pravatar.cc/150?img=2"
                                    type="button"
                                />
                                <img
                                    alt="avatar"
                                    className="w-16 h-16 rounded-full border-2 border-black object-cover -ml-4"
                                    src="https://i.pravatar.cc/150?img=3"
                                    type="button"
                                />
                                <img
                                    alt="avatar"
                                    className="w-16 h-16 rounded-full border-2 border-black object-cover -ml-4"
                                    src="https://i.pravatar.cc/150?img=4"
                                    type="button"
                                />
                                <div className="w-16 h-16 rounded-full bg-[#D4BC6D] flex items-center justify-center text-white font-bold text-sm -ml-4 border-2 border-black">
                                    +500
                                </div>
                            </div>
                            <div class="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full border border-[#D4BC6D] p-1.5 pr-6">
                                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                    <svg
                                        fill="none"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <mask
                                            height="24"
                                            id="mask0_328_3357"
                                            maskUnits="userSpaceOnUse"
                                            style={{
                                                maskType: "alpha",
                                            }}
                                            width="24"
                                            x="0"
                                            y="0">
                                            <rect fill="url(#pattern0_328_3357)" height="24" width="24" />
                                        </mask>
                                        <g mask="url(#mask0_328_3357)">
                                            <rect fill="#D4BC6D" height="24" width="24" y="0.09375" />
                                        </g>
                                        <defs>
                                            <pattern
                                                height="1"
                                                id="pattern0_328_3357"
                                                patternContentUnits="objectBoundingBox"
                                                width="1">
                                                <use transform="scale(0.00195312)" xlinkHref="#image0_328_3357" />
                                            </pattern>
                                            <image
                                                height="512"
                                                id="image0_328_3357"
                                                preserveAspectRatio="none"
                                                width="512"
                                                xlinkHref="data:image/png;base64,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"
                                            />
                                        </defs>
                                    </svg>
                                </div>
                                <span class="text-white font-normal text-xl">Arizona University</span>
                            </div>

                        </div>
                        <div className="px-2">
                            <p className='font-bold text-lg text-white mb-4'>
                                “QUOTE”
                            </p>
                            <p className='font-bold text-lg text-white '>
                                “Description”
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-24'>
                <h1 className='text-[6.875rem] mb-[7.188rem] text-center uppercase font-bold bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent '>
                    MERCHANDISE
                </h1>
                <div className="mb-[7.188rem]">
                    <div class="flex justify-center space-x-5 mb-[81px]">
                        <button class="bg-[#D4BC6D] text-black text-sm font-medium py-3 px-8 rounded-full shadow-lg transition-colors" type='button'>
                            All
                        </button>
                        <button class="bg-gray-800 text-[#D4BC6D] text-sm font-medium py-3 px-8 rounded-full shadow-lg transition-colors" type='button'>
                            New Release
                        </button>
                        <button class="bg-gray-800 text-[#D4BC6D] text-sm font-medium py-3 px-8 rounded-full shadow-lg transition-colors" type='button'>
                            Best Seller
                        </button>
                    </div>

                </div>

                <MerchendiseSlider
                    data={[
                        { id: 1 },
                        { id: 2 },
                        { id: 3 },
                        { id: 4 },
                        { id: 5 },
                        { id: 6 },
                        { id: 7 },
                        { id: 8 },
                        { id: 9 },
                        { id: 10 },
                    ]}
                />
            </section>
            <section className='py-24 bg-black'>
                <h1 className='text-[6.875rem] mb-[7.188rem] text-center uppercase font-bold bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent '>
                    ATHLETE VAULT
                </h1>
                <div className="mb-[7.188rem]">
                    <div class="flex justify-center space-x-5 mb-[81px]">
                        <button class="bg-[#D4BC6D] text-black text-sm font-medium py-3 px-8 rounded-full shadow-lg transition-colors" type='button'>
                            All
                        </button>
                        <button class="bg-gray-800 text-[#D4BC6D] text-sm font-medium py-3 px-8 rounded-full shadow-lg transition-colors" type='button'>
                            New Arrival
                        </button>
                        <button class="bg-gray-800 text-[#D4BC6D] text-sm font-medium py-3 px-8 rounded-full shadow-lg transition-colors" type='button'>
                            Card Deals
                        </button>
                        <button class="bg-gray-800 text-[#D4BC6D] text-sm font-medium py-3 px-8 rounded-full shadow-lg transition-colors" type='button'>
                            Supplement Company
                        </button>
                        <button class="bg-gray-800 text-[#D4BC6D] text-sm font-medium py-3 px-8 rounded-full shadow-lg transition-colors" type='button'>
                            E Book
                        </button>
                    </div>

                </div>

                <MerchendiseSlider
                    data={[
                        { id: 1 },
                        { id: 2 },
                        { id: 3 },
                        { id: 4 },
                        { id: 5 },
                        { id: 6 },
                        { id: 7 },
                        { id: 8 },
                        { id: 9 },
                        { id: 10 },
                    ]}
                />
            </section>
        </>
    )
}

export default StoreFront
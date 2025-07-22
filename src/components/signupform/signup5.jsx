import { Instagram, Loader2, MoreHorizontal, ShieldCheck, Twitch, Twitter, Youtube } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';


const Signup5 = ({ onFinish, data, goBack, loading }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (newData) => {
        const allData = { ...data, newData }
        console.log('Form Data:', data);
        onFinish(allData)
    };
    return (
        <>
            <>
                <>
                    <form onSubmit={handleSubmit(onSubmit)} className='max-w-[87.5rem] mx-auto'>
                        <h2 className='text-xl font-bold text-center text-[#D4BC6D] mb-6'>Social Media</h2>

                        <div className="max-h-[37.5rem]">
                            <div className="flex gap-12">
                                <div className="mb-12 w-full">
                                    <label className='text-lg font-semibold text-[#D4BC6D] mb-5 inline-block'>
                                        Instagram
                                    </label>
                                    <div className="flex rounded-t-lg bg-[rgba(217,217,217,0.03)] border-b border-[#4B4C46]">
                                        <div className="p-4">
                                            <Instagram size={15} color='white' />
                                        </div>
                                        <div className="grow">
                                            <input
                                                {...register('instagram')}
                                                type="text" placeholder='Enter your instagram username' className='h-full w-full border-0 outline-0 text-[#6B6B6B]' />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12 w-full">
                                    <label className='text-lg font-semibold text-[#D4BC6D] mb-5 inline-block'>
                                        Tiktok
                                    </label>
                                    <div className="flex rounded-t-lg bg-[rgba(217,217,217,0.03)] border-b border-[#4B4C46]">
                                        <div className="p-4">
                                            <ShieldCheck size={15} color='white' />
                                        </div>
                                        <div className="grow">
                                            <input
                                                {...register('tiktok')}
                                                type="text" placeholder='Enter your tiktok username' className='h-full w-full border-0 outline-0 text-[#6B6B6B]' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-12">
                                <div className="mb-12 w-full">
                                    <label className='text-lg font-semibold text-[#D4BC6D] mb-5 inline-block'>
                                        Twitter
                                    </label>
                                    <div className="flex rounded-t-lg bg-[rgba(217,217,217,0.03)] border-b border-[#4B4C46]">
                                        <div className="p-4">
                                            <Twitter size={15} color='white' />
                                        </div>
                                        <div className="grow">
                                            <input
                                                {...register('twitter')}
                                                type="text" placeholder='Enter your twitter username' className='h-full w-full border-0 outline-0 text-[#6B6B6B]' />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12 w-full">
                                    <label className='text-lg font-semibold text-[#D4BC6D] mb-5 inline-block'>
                                        Youtube
                                    </label>
                                    <div className="flex rounded-t-lg bg-[rgba(217,217,217,0.03)] border-b border-[#4B4C46]">
                                        <div className="p-4">
                                            <Youtube size={15} color='white' />
                                        </div>
                                        <div className="grow">
                                            <input
                                                {...register('youtube')}
                                                type="text" placeholder='Enter your YouTube username' className='h-full w-full border-0 outline-0 text-[#6B6B6B]' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-12">
                                <div className="mb-12 w-full">
                                    <label className='text-lg font-semibold text-[#D4BC6D] mb-5 inline-block'>
                                        Twitch
                                    </label>
                                    <div className="flex rounded-t-lg bg-[rgba(217,217,217,0.03)] border-b border-[#4B4C46]">
                                        <div className="p-4">
                                            <Twitch size={15} color='white' />
                                        </div>
                                        <div className="grow">
                                            <input
                                                {...register('twitch')}
                                                type="text" placeholder='Enter your twitch username' className='h-full w-full border-0 outline-0 text-[#6B6B6B]' />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12 w-full">
                                    <label className='text-lg font-semibold text-[#D4BC6D] mb-5 inline-block'>
                                        Other
                                    </label>
                                    <div className="flex rounded-t-lg bg-[rgba(217,217,217,0.03)] border-b border-[#4B4C46]">
                                        <div className="p-4">
                                            <MoreHorizontal size={15} color='white' />
                                        </div>
                                        <div className="grow pe-2.5">
                                            <select
                                                {...register('other')}
                                                className='h-full w-full border-0 outline-0 text-[#6B6B6B]'>
                                                <option value="">Select other social media</option>
                                                <option value="male">Level 1s</option>
                                                <option value="female">level 2</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                        <div className="flex gap-6">
                            <button
                                onClick={goBack}
                                class="border-2 border-[#D4BC6D] text-[#D4BC6D] text-lg font-bold py-3 px-8 rounded-full w-full shadow-lg transition-colors" type='button'>
                                Back
                            </button>
                            <button
                                class="bg-[#D4BC6D] text-black  text-lg font-bold py-3 px-8 rounded-full w-full shadow-lg inline-flex justify-center items-center transition-colors" type='submit'
                            >
                                Next &nbsp;{loading && <Loader2 size={15} />}
                            </button>
                        </div>


                    </form>
                </>
            </>
        </>
    )
}

export default Signup5
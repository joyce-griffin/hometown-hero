import { Activity, Building2, Globe, GraduationCap, User } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { getNames } from 'country-list';


const countries = getNames(); 

const Signup3 = ({ next, setData, goBack }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        setData(prev => ({ ...prev, ...data }))
        console.log('Form Data:', data);
        setTimeout(() => {
            next()
        }, 500)
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='max-w-[87.5rem] mx-auto'>
                <h2 className='text-xl font-bold text-center text-[#D4BC6D] mb-6'>Personal Information</h2>

                <div className="max-h-[37.5rem]">
                    <div className="flex gap-12">
                        <div className="mb-12 w-full">
                            <label className='text-lg font-semibold text-[#D4BC6D] mb-5 inline-block'>
                                Age
                            </label>
                            <div className="flex rounded-t-lg bg-[rgba(217,217,217,0.03)] border-b border-[#4B4C46]">
                                <div className="p-4">
                                    <User size={15} color='white' />
                                </div>
                                <div className="grow">
                                    <input
                                        {...register('age', { required: 'Age is required' })}
                                        type="text" placeholder='Enter your age' className='h-full w-full border-0 outline-0 text-[#6B6B6B]' />
                                </div>
                            </div>
                            {errors?.age && <p className="text-red-500 text-sm">{errors?.age?.message}</p>}
                        </div>
                        <div className="mb-12 w-full">
                            <label className='text-lg font-semibold text-[#D4BC6D] mb-5 inline-block'>
                                Gender
                            </label>
                            <div className="flex rounded-t-lg bg-[rgba(217,217,217,0.03)] border-b border-[#4B4C46]">
                                <div className="p-4">
                                    <User size={15} color='white' />
                                </div>
                                <div className="grow pe-2.5">
                                    <select
                                        {...register('gender', { required: 'Gender is required' })}
                                        className='h-full w-full border-0 outline-0 text-[#6B6B6B]'>
                                        <option value="">Select your gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="prefer not to say">Prefer Not to Say</option>
                                    </select>
                                </div>
                            </div>
                            {errors?.gender && <p className="text-red-500 text-sm">{errors?.gender?.message}</p>}
                        </div>
                    </div>

                    <div className="flex gap-12">
                        <div className="mb-12 w-full">
                            <label className='text-lg font-semibold text-[#D4BC6D] mb-5 inline-block'>
                                Country
                            </label>
                            <div className="flex rounded-t-lg bg-[rgba(217,217,217,0.03)] border-b border-[#4B4C46]">
                                <div className="p-4">
                                    <Globe size={15} color='white' />
                                </div>
                                <div className="grow pe-2.5">
                                    <select
                                        {...register('country', { required: 'Country is required' })}
                                        className='h-full w-full border-0 outline-0 text-[#6B6B6B]'>
                                        <option value="">Select your country</option>
                                        {countries.map((country, index) => (
                                            <option key={index} value={country}>{country}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            {errors?.country && <p className="text-red-500 text-sm">{errors?.country?.message}</p>}
                        </div>
                        <div className="mb-12 w-full">
                            <label className='text-lg font-semibold text-[#D4BC6D] mb-5 inline-block'>
                                City
                            </label>
                            <div className="flex rounded-t-lg bg-[rgba(217,217,217,0.03)] border-b border-[#4B4C46]">
                                <div className="p-4">
                                    <Building2 size={15} color='white' />
                                </div>
                                <div className="grow pe-2.5">
                                    <input
                                        {...register('city', { required: 'City is required' })}
                                        type="text" placeholder='Enter Your City' className='h-full w-full border-0 outline-0 text-[#6B6B6B]' />
                                </div>
                            </div>
                            {errors?.city && <p className="text-red-500 text-sm">{errors?.city?.message}</p>}
                        </div>
                    </div>

                    <div className="flex gap-12">
                        <div className="mb-12 w-full">
                            <label className='text-lg font-semibold text-[#D4BC6D] mb-5 inline-block'>
                                Level of Athlete
                            </label>
                            <div className="flex rounded-t-lg bg-[rgba(217,217,217,0.03)] border-b border-[#4B4C46]">
                                <div className="p-4">
                                    <Activity size={15} color='white' />
                                </div>
                                <div className="grow pe-2.5">
                                    <select
                                        {...register('level_of_athlete', { required: 'level of athlete is required' })}
                                        className='h-full w-full border-0 outline-0 text-[#6B6B6B]'>
                                        <option value="">Select your level</option>
                                        <option value="Youth">Youth</option>
                                        <option value="High School">High School</option>
                                        <option value="College">College</option>
                                        <option value="Pro">Pro</option>
                                    </select>
                                </div>
                            </div>
                            {errors?.level_of_athlete && <p className="text-red-500 text-sm">{errors?.level_of_athlete?.message}</p>}
                        </div>
                        <div className="mb-12 w-full">
                            <label className='text-lg font-semibold text-[#D4BC6D] mb-5 inline-block'>
                                Grade Level
                            </label>
                            <div className="flex rounded-t-lg bg-[rgba(217,217,217,0.03)] border-b border-[#4B4C46]">
                                <div className="p-4">
                                    <GraduationCap size={15} color='white' />
                                </div>
                                <div className="grow pe-2.5">
                                    <input
                                        {...register('grand_level', { required: 'Grade Level is required' })}
                                        type="text" placeholder='Enter Grade Level' className='h-full w-full border-0 outline-0 text-[#6B6B6B]' />

                                </div>
                            </div>
                            {errors?.grand_level && <p className="text-red-500 text-sm">{errors?.grand_level?.message}</p>}
                        </div>
                    </div>



                </div>
                <div className="flex gap-6">
                    <button
                        class="border-2 border-[#D4BC6D] text-[#D4BC6D] text-lg font-bold py-3 px-8 rounded-full w-full shadow-lg transition-colors" type='button'
                        onClick={goBack}
                    >
                        Back
                    </button>
                    <button
                        class="bg-[#D4BC6D] text-black  text-lg font-bold py-3 px-8 rounded-full w-full shadow-lg transition-colors" type='submit'
                    >
                        Next
                    </button>
                </div>

            </form>
        </>
    )
}

export default Signup3
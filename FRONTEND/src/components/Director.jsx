import React from 'react'
import teacher1 from '../assets/photo.jpg'

const Director = () => {
    return (
        <section id="Mentor" className='w-full py-10 md:py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'>
            {/* Section Heading */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-8 md:mb-12'>
                Meet Our Director
            </h1>

            {/* Content Container */}
            <div className='max-w-6xl mx-auto px-4 sm:px-6 md:px-10'>
                <div className='flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16'>

                    {/* Image Card */}
                    <div className='w-full max-w-[350px] sm:max-w-[400px] lg:max-w-[450px] overflow-hidden rounded-xl shadow-2xl bg-white'>
                        <img
                            className='object-cover h-[280px] sm:h-[320px] md:h-[370px] w-full'
                            src={teacher1}
                            alt="Director - P. Rakesh Rao"
                        />
                        <div className='py-4 text-center bg-white'>
                            <h2 className='text-lg sm:text-xl font-semibold text-gray-800'>P. RAKESH RAO</h2>
                            <h3 className='text-sm text-gray-600'>Director & CEO</h3>
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className='flex flex-col gap-4 text-center lg:text-left max-w-lg'>
                        {/* Name & Title */}
                        <div>
                            <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-800'>
                                Mr. P. Rakesh Rao
                            </h1>
                            <p className='text-sm sm:text-base font-medium text-green-700 mt-1'>
                                Director & Mathematics Expert
                            </p>
                        </div>

                        {/* Description */}
                        <div className='mt-4'>
                            <ul className='text-sm sm:text-base text-gray-700 space-y-3 leading-relaxed'>
                                <li className='flex items-start gap-2'>
                                    <span className='text-green-600 mt-1'>✓</span>
                                    <span>10+ years of teaching experience in CBSE & State Board</span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='text-green-600 mt-1'>✓</span>
                                    <span>Hundreds of students have scored 90%+ under his guidance</span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='text-green-600 mt-1'>✓</span>
                                    <span>Known for easy explanations and strong conceptual teaching</span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='text-green-600 mt-1'>✓</span>
                                    <span>Focuses on personalised learning and doubt-clearing</span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='text-green-600 mt-1'>✓</span>
                                    <span>Helps students build strong basics for confident exam performance</span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='text-green-600 mt-1'>✓</span>
                                    <span>Trusted by parents for consistent results and friendly approach</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Director

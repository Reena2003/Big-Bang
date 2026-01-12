import React from 'react'

const Classes = () => {
  return (
    <section id="Classes" className='felx flex-col justify-center items-center py-12 bg-gradient-to-b from-slate-100 via-purple-50 to-pink-50'>

      <div className='text-center'>
        <h1 className='text-4xl font-bold text-center border-b-4 border-green-700 inline-block  mb-4'>Classes We Offer</h1>
        <h2 className='text-center text-xl pb-10'>We provide quality education for various classes with experienced teachers.</h2>
      </div>

      <div className='flex gap-10 justify-around px-10 pb-10 flex-wrap'>
        {/* Card 1 with overlay */}
        <div className='group  w-[300px] h-[350px] shadow-lg relative overflow-hidden cursor-pointer'>
          <img className='h-full w-full object-cover object-left transition-0.3s ease' src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D" />
          <div className='p-5 text-white absolute inset-0 bg-black/50 translate-y-full group-hover:translate-y-0 transition-all duration-500  flex flex-col justify-around items-center'>
            <h1 className='text-2xl text-black font-bold text-center pt-2 bg-amber-300 rounded px-3 py-2'>Class 1 to 5 </h1>

            <div className='p-3 text-center text-2xl '>
              <h2>Subjects : Maths,Sceince,Social Science,Hindi,English</h2>

            </div>
            <div className='mb-2 text-[16px]'>
              <h2 className=''>Offline Classes</h2>
              <h2>Duration: 2 hours</h2>
              <h2>Days: Mon to Fri</h2>
              <h2>Timing: 4pm to 6pm</h2>
            </div>

          </div>
        </div>

        {/* Card 2 */}

        <div className=' group relative  w-[300px] h-[350px] shadow-lg overflow-hidden cursor-pointer'>
          <img className='h-full w-full object-cover' src="https://plus.unsplash.com/premium_photo-1664372145541-4556b409492e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <div className='p-5 text-white absolute inset-0 bg-black/50 translate-y-full group-hover:translate-y-0 transition-all duration-500  flex flex-col justify-around items-center'>
            <h1 className='text-2xl text-[#616563] font-bold text-center pt-2 bg-[#d8ffeb] rounded px-3 py-2'>Class 6 to 8 </h1>

            <div className='p-3 text-center text-2xl '>
              <h2>Subjects : Maths,Sceince & English</h2>

            </div>
            <div className='mb-2 text-[16px]'>
              <h2 className=''>Offline Classes</h2>
              <h2>Duration: 2 hours</h2>
              <h2>Days: Mon to Fri</h2>
              <h2>Timing: 4pm to 6pm</h2>
            </div>

          </div>
        </div>

        {/* Card 3 */}
        <div className=' group relative  w-[300px] h-[350px] shadow-lg overflow-hidden cursor-pointer'>
          <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D" />
          <div className='p-5 text-white absolute inset-0 bg-black/50 translate-y-full group-hover:translate-y-0 transition-all duration-500  flex flex-col justify-around items-center'>
            <h1 className='text-2xl text-black font-bold text-center pt-2 bg-amber-400 rounded px-3 py-2'>Class 9 to 10 </h1>

            <div className='p-3 text-center text-2xl '>
              <h2>Subjects : Maths,Sceince</h2>

            </div>
            <div className='mb-2 text-[16px]'>
              <h2 className=''>Offline Classes</h2>
              <h2>Duration: 2 hours</h2>
              <h2>Days: Mon to Fri</h2>
              <h2>Timing: 4pm to 6pm</h2>
            </div>

          </div>

        </div>

        {/* Card 4 */}
        <div className=' group relative  w-[300px] h-[350px] shadow-lg overflow-hidden cursor-pointer'>
          <img className='h-full w-full object-cover object-left' src="https://images.unsplash.com/photo-1517971129774-8a2b38fa128e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D" />
          <div className='p-5 text-white absolute inset-0 bg-black/50 translate-y-full group-hover:translate-y-0 transition-all duration-500  flex flex-col justify-around items-center'>
            <h1 className='text-2xl text-[#616563] font-bold text-center pt-2 bg-[#d8ffeb] rounded px-3 py-2'>Class 11 to 12 </h1>
            <div className='p-3 text-center text-2xl '>
              <h2>Subjects : Maths & Bio</h2>
            </div>
            <div className='mb-2 text-[16px]'>
              <h2 className=''>Offline Classes</h2>
              <h2>Duration: 2 hours</h2>
              <h2>Days: Mon to Fri</h2>
              <h2>Timing: 4pm to 6pm</h2>
            </div>
          </div>
        </div>
      </div>
    </section>




  )
}

export default Classes


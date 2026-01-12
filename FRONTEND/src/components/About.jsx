import React from 'react'

const About = () => {
  return (
    <section id="About" className="w-full py-12 px-4 md:px-16 bg-gradient-to-b from-gray-50 via-white to-slate-100">
      <div className="max-w-5xl mx-auto ">
        <div className='text-center'>

          {/* Heading */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4 border-b-4 border-green-800 inline-block">
            About Us
          </h2>
        </div>

        {/* Short Intro */}
        <p className=" text-[20px] md:text-gray-600 leading-relaxed mb-6 text-[16px]">
          Big Bang Tuition is a small learning hub for Class 6 to 12 students.
          Our aim is to build strong concepts, improve confidence, and help every
          student learn at their own pace with personal attention.
        </p>

        <div className='  flex flex-wrap justify-between items-center'>

          {/* Why Choose Us */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 bg-amber-400 px-7 py-2 inline-block  mb-3">
              Why Choose Us?
            </h3>
            <ul className=" text-[20px] md:text-gray-600 space-y-2 mb-8 text-[16px]">
              <li>• Personal attention to every student</li>
              <li>• Weekly tests & progress tracking</li>
              <li>• Daily practice & revision support</li>
              <li>• Easy notes and concept-based teaching</li>
            </ul>
          </div>

          <div>
            <img className='h-[350px] w-[600px] object-cover' src="https://images.unsplash.com/photo-1676285437175-4c271304f343?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHN0YXRpb25hcnl8ZW58MHx8MHx8fDA%3D" />



          </div>
        </div>





        {/* Mission */}
        <h3 className="text-xl font-semibold text-gray-800 mb-3 bg-[#afcab8] py-2 px-4 inline-block">
          Our Mission
        </h3>
        <p className="text-[20px] text-gray-600 leading-relaxed text-[16px]">
          Our mission is to make learning simple and engaging. We focus on
          understanding instead of memorizing so every student can learn
          confidently and score better.
        </p>





      </div>







    </section>
  )
}

export default About

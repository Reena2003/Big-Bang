import React from 'react'


import { useEffect, useState } from "react";

const Home = () => {
  const images = [
"https://plus.unsplash.com/premium_photo-1661627316866-23502137abdd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxzdGF0aW9uYXJ5fGVufDB8fDB8fHww",
"https://plus.unsplash.com/premium_photo-1723579332266-3a387cf58377?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQxfHxzdGF0aW9uYXJ5fGVufDB8fDB8fHww",
"https://images.unsplash.com/photo-1518082091569-ccaa5d0c845a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHN0YXRpb25hcnl8ZW58MHx8MHx8fDA%3D",
"https://images.unsplash.com/photo-1471256737566-c7ddd846bee0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0YXRpb25hcnl8ZW58MHx8MHx8fDA%3D",
"https://plus.unsplash.com/premium_photo-1683734677413-234581d3dbc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHN0YXRpb25hcnl8ZW58MHx8MHx8fDA%3D",
"https://plus.unsplash.com/premium_photo-1681412205381-c0e9681bcbb8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHN0YXRpb25hcnl8ZW58MHx8MHx8fDA%3D",
"https://plus.unsplash.com/premium_photo-1663054914576-252d1479383e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN0YXRpb25hcnl8ZW58MHx8MHx8fDA%3D"

  ]
    

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto Image Change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change every 4 sec
    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-opacity-50 backdrop-blur-sm"></div>

      {/* Main Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Quality Education For Every Student
        </h2>

        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Class 6 to 12th • Maths • Science • English  
          <br />
          Strong Concepts | Regular Tests | Personalized Doubt Support
        </p>

        <div className="flex space-x-4">
          <button className="bg-amber-400 text-black px-6 py-3 rounded-xl text-lg font-semibold hover:bg-yellow-300 transition-all">
            Enroll Now
          </button>
          <button className="border border-white px-6 py-3 rounded-xl text-lg hover:bg-white hover:text-black transition-all">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};




export default Home

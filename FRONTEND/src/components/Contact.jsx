import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!name.trim()) {
    alert("Please enter your name");
    return;
  }

  if (!phone.trim()) {
    alert("Please enter your phone number");
    return;
  }

  if (!/^[0-9]{10}$/.test(phone)) {
    alert("Phone number must be 10 digits");
    return;
  }

  if (!city.trim()) {
    alert("Please enter your city");
    return;
  }

  try {
    const response = await fetch("https://big-bang-e6xk.onrender.com/api/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        phone,
        city,
        message
      })
    });

    const data = await response.json();
    console.log("Backend response:", data);


    if (data.success) {
      alert("Message sent successfully!");
      setName("");
      setPhone("");
      setCity("");
      setMessage("");
    } else {
      alert("Failed to send message");
    }

  } catch (error) {
    console.log(error);
    alert("Server error");
  }
};

  return (
    <section id="Contact" className="w-full h-[450px] bg-gradient-to-br from-slate-800 via-teal-900 to-slate-900 flex justify-center items-center py-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-[80%] md:w-[50%] mx-auto">
        <input
          className="bg-[#3f4c52] outline-0 px-5 py-2 text-xl rounded text-white"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className="bg-[#3f4c52] px-5 py-3 outline-0 text-xl rounded text-white"
          type="text"
          placeholder="Enter your phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <input
          className="bg-[#3f4c52] px-5 py-3 outline-0 text-xl rounded text-white"
          type="text"
          placeholder="Enter your city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />

        <textarea
          className="bg-[#3f4c52] outline-0 px-5 py-3 text-xl rounded text-white"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <div className="flex justify-center">
          <button
            className="bg-amber-400 text-black cursor-pointer text-[16px] items-center rounded w-[100px] px-4 py-3"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;





// import React from 'react'

// const Contact = () => {
//   return (
//     <div className='w-full h-[400px] bg-[#28373d] flex justify-center items-center'>
//         <form className='flex flex-col gap-5 ' >
//             <input className='bg-[#3f4c52] w-[600px] outline-0 px-5 py-2 text-xl rounded text-white' type="text" placeholder=' Enter your name' />
//             <input  className='bg-[#3f4c52] px-5 py-3 outline-0 text-xl rounded text-white' type="text" placeholder='Enter your phone' />
//             <input  className='bg-[#3f4c52] px-5 py-3 outline-0 text-xl rounded text-white' type="text" placeholder='Enter your City' />
//             <textarea  className='bg-[#3f4c52]  outline-0 px-5 py-3 text-xl rounded text-white' placeholder='Message'></textarea>

//             <div className='flex justify-center'>
//             <button className='bg-amber-400 text-black cursor-pointer text-[16px] items-center rounded w-[100px] px-4 py-3' type='submit'>Submit</button>
//             </div>



//         </form>
    
//     </div>
//   )
// }

// export default Contact

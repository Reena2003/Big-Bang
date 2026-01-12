import React, { useState } from 'react'
import logo from '../assets/logo.jpg'
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className='bg-white text-black shadow-md sticky top-0 z-50'>
            <div className='flex justify-between items-center py-3 px-4 md:px-8'>
                {/* Logo Section */}
                <div className='flex gap-2 items-center shrink-0'>
                    <img className='size-10 md:size-12 rounded-full overflow-hidden' src={logo} alt="Logo" />
                    <div className='flex flex-col'>
                        <h1 className='text-green-800 font-bold text-xl md:text-3xl'>BIG BANG</h1>
                        <div className='flex text-center gap-1'>
                            <span className='text-xs sm:text-sm leading-tight'>Tution</span>
                            <span className='text-xs sm:text-sm leading-tight'>Classes</span>
                        </div>
                    </div>
                </div>

                {/* Hamburger Button - Mobile Only */}
                <button
                    onClick={toggleMenu}
                    className='md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors'
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-gray-800 my-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>

                {/* Desktop Menu */}
                <div className='hidden md:block'>
                    <ul className='flex gap-5 items-center'>
                        <li className='px-4 py-2 hover:text-green-700 transition-colors'><a href='#Home'>HOME</a></li>
                        <li className='px-4 py-2 hover:text-green-700 transition-colors'><a href='#About'>ABOUT</a></li>
                        <li className='px-4 py-2 hover:text-green-700 transition-colors'><a href='#Classes'>CLASSES</a></li>
                        <li className='px-4 py-2 hover:text-green-700 transition-colors'><a href='#Mentor'>MENTOR</a></li>
                        <li className='bg-amber-400 hover:bg-amber-500 rounded-lg px-4 py-2 transition-colors'><a href='#Contact'>CONTACT</a></li>
                        <li>
                            <button
                                onClick={() => navigate("/admin-login")}
                                className='border border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-4 py-2 rounded-lg transition-colors'
                            >
                                Login as Admin
                            </button>
                        </li>

                    </ul>
                </div>
            </div>

            {/* Mobile Menu - Slide Down */}
            <div className={`md:hidden  transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen  opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className='flex flex-col bg-white border-t border-gray-100'>
                    <li className='border-b border-gray-100'>
                        <a href='#Home' onClick={closeMenu} className='block px-6 py-4 hover:bg-gray-50 hover:text-green-700 transition-colors'>HOME</a>
                    </li>
                    <li className='border-b border-gray-100'>
                        <a href='#About' onClick={closeMenu} className='block px-6 py-4 hover:bg-gray-50 hover:text-green-700 transition-colors'>ABOUT</a>
                    </li>
                    <li className='border-b border-gray-100'>
                        <a href='#Classes' onClick={closeMenu} className='block px-6 py-4 hover:bg-gray-50 hover:text-green-700 transition-colors'>CLASSES</a>
                    </li>
                    <li className='border-b border-gray-100'>
                        <a href='#Mentor' onClick={closeMenu} className='block px-6 py-4 hover:bg-gray-50 hover:text-green-700 transition-colors'>MENTOR</a>
                    </li>
                    <li className='p-4'>
                        <a href='#Contact' onClick={closeMenu} className='block bg-amber-400 hover:bg-amber-500 text-center rounded-lg px-4 py-3 font-semibold transition-colors'>CONTACT</a>
                    </li>
                    <li className='p-4'>
                        <button
                            onClick={() => {
                                navigate("/admin-login");
                                closeMenu();
                            }}
                            className='w-full border border-green-700 text-green-700 hover:bg-green-700 hover:text-white text-center rounded-lg px-4 py-3 font-semibold transition-colors'
                        >
                            Login as Admin
                        </button>
                    </li>



                </ul>
            </div>
        </nav>
    )
}

export default Navbar

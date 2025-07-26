import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaBars, FaTimes } from 'react-icons/fa';
import Img1 from '../../assets/carousel-1.jpg';
import Img2 from '../../assets/carousel-2.jpg';
import Register from '../../pages/auth/Register.jsx';

const slides = [
  {
    img: Img1,
    title: 'Fashionable Dress',
    offer: '10% OFF YOUR FIRST ORDER',
  },
  {
    img: Img2,
    title: 'New Summer Look',
    offer: 'Exclusive Offers Just For You',
  },
  {
    img: Img1,
    title: 'Streetwear Styles',
    offer: 'Trendy & Comfortable',
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [showRegister, setShowRegister] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    alert('You are now logged out!');
    window.location.reload();
  };

  useEffect(() => {
    document.body.style.overflow = showRegister ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showRegister]);

  return (
    <div className="relative w-full font-poppins">
      {/* Navbar */}
      <div className="bg-white px-4 sm:px-6 py-4 flex justify-between items-center text-sm z-10 relative shadow-sm">
        {/* Logo or site title */}
        <div className="text-xl font-bold text-rose-700">E-Shop</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-gray-700">
          <a href="#" className="text-pink-600 font-medium">Home</a>
          <a href="#">Shop</a>
          <a href="#">Shop Detail</a>
          <a href="#">Pages ▼</a>
          <a href="#">Contact</a>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>

        {/* Auth actions */}
        <div className="hidden md:flex space-x-4 text-gray-700">
          <button onClick={handleLogout}>Logout</button>
          <button onClick={() => setShowRegister(true)}>Register</button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {navOpen && (
        <div className="md:hidden flex flex-col items-center bg-white py-4 space-y-2 shadow-sm text-gray-700">
          <a href="#" className="text-pink-600 font-medium">Home</a>
          <a href="#">Shop</a>
          <a href="#">Shop Detail</a>
          <a href="#">Pages ▼</a>
          <a href="#">Contact</a>
          <div className="flex space-x-4 mt-2">
            <button onClick={handleLogout}>Logout</button>
            <button onClick={() => setShowRegister(true)}>Register</button>
          </div>
        </div>
      )}

      {/* Hero Slider */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={slides[current].img}
          alt="Slide"
          className="w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-white text-center drop-shadow-md px-4">
          <h3 className="text-sm sm:text-base md:text-lg font-semibold">{slides[current].offer}</h3>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold my-4">{slides[current].title}</h1>
          <button className="bg-white text-black px-6 py-2 font-medium rounded hover:bg-gray-200 text-sm sm:text-base">
            Shop Now
          </button>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full text-white"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full text-white"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Register Modal */}
      {showRegister && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white p-6 rounded-lg w-[90%] max-w-xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowRegister(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <Register />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;

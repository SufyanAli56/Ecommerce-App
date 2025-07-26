import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [showRegister, setShowRegister] = useState(false);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  const handleLogout = () => {
    // Example logout logic (replace with your actual logic)
    localStorage.removeItem('authToken'); // Or any other logout mechanism
    alert('You are now logged out!');
    window.location.reload(); // Optional: reload or redirect
  };

  // Prevent body scroll when register modal is open
  useEffect(() => {
    if (showRegister) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showRegister]);

  return (
    <div className="relative w-full font-poppins">
      {/* Navbar */}
      <div className="bg-white px-6 py-4 flex justify-between items-center text-sm z-10 relative">
        <div className="flex space-x-6 text-gray-700">
          <a href="#" className="text-pink-600 font-medium">Home</a>
          <a href="#">Shop</a>
          <a href="#">Shop Detail</a>
          <a href="#">Pages ▼</a>
          <a href="#">Contact</a>
        </div>
        <div className="flex space-x-4 text-gray-700">
          <button onClick={handleLogout}>Logout</button>
          <button onClick={() => setShowRegister(true)}>Register</button>
        </div>
      </div>

      {/* Hero Slider */}
      <div className="relative w-[1000px] ml-6 h-[400px] overflow-hidden">
        <img
          src={slides[current].img}
          alt="Slide"
          className="w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute top-1/3 left-1/4 text-white text-center drop-shadow-md">
          <h3 className="text-lg font-semibold">{slides[current].offer}</h3>
          <h1 className="text-4xl md:text-5xl font-bold my-4">{slides[current].title}</h1>
          <button className="bg-white text-black px-6 py-2 font-medium rounded hover:bg-gray-200">
            Shop Now
          </button>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full text-white"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 p-2 rounded-full text-white"
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


import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Img1 from '../../assets/carousel-1.jpg'
import Img2 from '../../assets/carousel-2.jpg'
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

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

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
          <a href="#">Login</a>
          <a href="#">Register</a>
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
          <button className="bg-white text-black px-6 py-2 font-medium rounded hover:bg-gray-200">Shop Now</button>
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
    </div>
  );
};

export default Hero;

import React from 'react';

const Hero = () => {
  return (
    <div className="w-full relative">
      <img
        src="https://i.ibb.co/2sDr6h8/fashion.jpg" // You can replace this with your own hosted image
        alt="Fashionable"
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute top-1/3 left-1/4 text-white text-center">
        <h3 className="text-lg font-semibold">10% OFF YOUR FIRST ORDER</h3>
        <h1 className="text-4xl md:text-5xl font-bold my-4">Fashionable Dress</h1>
        <button className="bg-white text-black px-6 py-2 font-medium rounded hover:bg-gray-200">Shop Now</button>
      </div>
    </div>
  );
};

export default Hero;


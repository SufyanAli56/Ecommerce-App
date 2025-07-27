import React from 'react';
import Img1 from '../../assets/offer-1.png';
import Img2 from '../../assets/offer-2.png';

const Cards = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center p-4 md:p-6 bg-white">
      {/* Spring Collection Card */}
      <div className="flex flex-col sm:flex-row items-center bg-[#bdeeea] rounded-xl p-4 w-full md:w-1/2 shadow-md">
        <div className="sm:order-1 w-full sm:w-auto flex justify-center mb-4 sm:mb-0">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 md:w-40 md:h-40 flex items-center justify-center overflow-hidden">
            <img src={Img1} alt="Spring Collection" className="object-contain w-full h-full" />
          </div>
        </div>

        <div className="sm:flex-1 sm:ml-4 text-center sm:text-left">
          <p className="text-sm text-[#8B4513] font-semibold">20% OFF THE ALL ORDER</p>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mt-2 mb-3 md:mb-4">Spring Collection</h2>
          <div className="flex justify-center sm:justify-start">
            <button className="border border-[#8B4513] text-[#8B4513] px-4 py-2 md:px-6 md:py-2 rounded-md hover:bg-[#8B4513] hover:text-white transition duration-300 transform hover:scale-105">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Winter Collection Card */}
      <div className="flex flex-col sm:flex-row items-center bg-[#bdeeea] rounded-xl p-4 w-full md:w-1/2 shadow-md">
        <div className="sm:flex-1 sm:mr-4 text-center sm:text-right">
          <p className="text-sm text-[#8B4513] font-semibold">20% OFF THE ALL ORDER</p>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mt-2 mb-3 md:mb-4">Winter Collection</h2>
          <div className="flex justify-center sm:justify-end">
            <button className="border border-[#8B4513] text-[#8B4513] px-4 py-2 md:px-6 md:py-2 rounded-md hover:bg-[#8B4513] hover:text-white transition duration-300 transform hover:scale-105">
              Shop Now
            </button>
          </div>
        </div>

        <div className="sm:order-2 w-full sm:w-auto flex justify-center mt-4 sm:mt-0">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 md:w-40 md:h-40 flex items-center justify-center overflow-hidden">
            <img src={Img2} alt="Winter Collection" className="object-contain w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

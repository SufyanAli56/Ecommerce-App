import React from "react";
import Img1 from "../../assets/vendor-4.jpg";
import Img2 from "../../assets/vendor-5.jpg";
import Img3 from "../../assets/vendor-6.jpg";
import Img4 from "../../assets/vendor-7.jpg";
import Img5 from "../../assets/vendor-8.jpg";
import Img6 from "../../assets/vendor-1.jpg";

const Testnomilas = () => {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6];

  return (
    <div className="p-6 bg-white">
      {/* Heading with red lines */}
      <div className="flex items-center justify-center mb-6">
        <div className="h-[2px] w-16 bg-red-500 mr-4"></div>
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Testimonials
        </h2>
        <div className="h-[2px] w-16 bg-red-500 ml-4"></div>
      </div>

      {/* Static Row of Images */}
      <div className="flex justify-center items-center gap-10">
        {images.map((img, index) => (
          <div
            key={index}
            className="w-45 h-48 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={img}
              alt={`Testimonial ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testnomilas;

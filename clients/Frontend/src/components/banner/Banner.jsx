import React from "react";
import { BadgeCheck, Truck, RotateCcw, Headphones } from "lucide-react";

const features = [
  {
    icon: <BadgeCheck className="w-8 h-8 text-yellow-600" />,
    title: "Quality Product",
  },
  {
    icon: <Truck className="w-8 h-8 text-yellow-600" />,
    title: "Free Shipping",
  },
  {
    icon: <RotateCcw className="w-8 h-8 text-yellow-600" />,
    title: "14-Day Return",
  },
  {
    icon: <Headphones className="w-8 h-8 text-yellow-600" />,
    title: "24/7 Support",
  },
];

const Banner = () => {
  return (
    <div className="w-full px-4 py-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border border-gray-200 bg-white shadow-sm rounded-xl p-6 sm:p-8"
          >
            {feature.icon}
            <h4 className="text-base sm:text-lg font-semibold text-gray-800">
              {feature.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;

import React from 'react';

const Updated = () => {
  return (
    <div className="bg-[#bdeeea] py-18 px-8 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-3">
        Stay Updated
      </h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-6">
        Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam labore at justo ipsum 
        eirmod duo labore labore.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-lg mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-auto flex-1 px-4 py-3 rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-amber-100"
        />
        <button
          className="border border-white hover:bg-amber-800 cursor-pointer text-white px-6 py-3 rounded-lg shadow-md transition"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Updated;

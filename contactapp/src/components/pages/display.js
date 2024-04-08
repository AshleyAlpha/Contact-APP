import React from "react";

const display = () => {
  return (
    <div>
      <div class="container mx-auto px-4 py-6 flex justify-center items-center">
        <p class="text-gray-800 mr-4">Welcome to your contact</p>
        <button class="bg-gray-800 text-white px-4 py-2 rounded ml-4">
          Add New
        </button>
      </div>
      <div class="flex flex-col items-center mt-10">
        <div class="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 h-24 bg-gray-300 shadow-lg rounded text-center flex items-center justify-center my-2"></div>
        <div class="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 h-24 bg-gray-300 shadow-lg rounded text-center flex items-center justify-center my-2"></div>
        <div class="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 h-24 bg-gray-300 shadow-lg rounded text-center flex items-center justify-center my-2"></div>
      </div>
    </div>
  );
};

export default display;

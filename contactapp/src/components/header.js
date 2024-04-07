import React from "react";

const Header = () => {
  return (
    <div>
      <div class="bg-blue-300 shadow-md">
        <div class="container mx-auto px-4 py-6 flex justify-center items-center">
          <h1 class="text-3xl font-bold text-gray-800 mr-4">Contacts</h1>
          <p class="text-gray-800 ml-4">Home</p>
        </div>
      </div>

      {/* <div class="flex flex-row space">
        <button class="bg-blue-800 w-24">update</button>
        <button class="bg-rose-800 w-24">delete</button>
      </div> */}
    </div>
  );
};

export default Header;

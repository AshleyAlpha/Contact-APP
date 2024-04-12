import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div class="bg-gray-100 flex flex-col justify-center items-center h-screen">
      <div class="text-center text-orange-300 text-3xl mb-4">
        Contacts are going to be displayed here
      </div>
      <Link to="/create">
        <button class="px-4 py-2 bg-blue-500 text-white rounded">
          Create Contact
        </button>
      </Link>
    </div>
  );
};

export default Home;

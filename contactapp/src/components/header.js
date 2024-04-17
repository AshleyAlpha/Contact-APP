import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="bg-cyan-500 shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-center items-center">
          <h1 className="text-3xl font-bold text-gray-800 mr-4">Contacts</h1>
          <Link to="/">
          <p className="text-gray-800 ml-4">Home</p>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Header;

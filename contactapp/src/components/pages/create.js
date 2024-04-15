import React from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
  return (
    <div>
       <div className="container mx-auto mt-8 p-6 bg-white rounded-lg shadow-md max-w-md">
        <h2 className="text-2xl font-bold mb-6">Add Contact</h2>
        <form action="#" method="post" encType="multipart/form-data">
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="number" className="block font-semibold mb-1">
              Number:
            </label>
            <input
              type="number"
              id="number"
              name="number"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="picture" className="block font-semibold mb-1">
              Upload Picture:
            </label>
            <input
              type="file"
              id="picture"
              name="picture"
              className="w-full p-2 border rounded-md"
              accept="image/*"
              required
            />
          </div>
          {/* <input type="submit" value="Submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 cursor-pointer"/> */}
        </form>
        <button className="bg-sky-800 text-white font-semibold py-2 px-4 hover:bg-cyan-700 cursor-pointer mt-4 w-full p-2 border rounded-md">
          Create
        </button>
      </div>
    </div>
  );
};

export default Create;

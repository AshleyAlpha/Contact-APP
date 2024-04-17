import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = () => {
    axios
      .get(
        "https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/list"
      )
      .then((response) => {
        setContacts(response.data.contacts);
        console.log(response.data);
      })
      .catch((err) => {
        alert("Failed to fetch contacts.");
      });
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/create">
          <button className="bg-cyan-700 text-white px-4 py-2 rounded">
            Create Contact
          </button>
        </Link>

        <table className="w-full border-collapse border border-gray-300 mt-8">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border border-gray-300">Name</th>
              <th className="py-2 px-4 border border-gray-300">Email</th>
              <th className="py-2 px-4 border border-gray-300">Phone Number</th>
              <th className="py-2 px-4 border border-gray-300">Profile</th>
              <th className="py-2 px-4 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="py-2 px-4">{contact.fullName}</td>
                <td className="py-2 px-4">{contact.email}</td>
                <td className="py-2 px-4">{contact.phone}</td>
                <td className="py-2 px-4">
                  <img
                    src={contact.picture}
                    style={{ width: "50px", height: "50px" }}
                    alt=""
                  />
                </td>
                <td className="py-2 px-4" style={{ display: "flex" }}>
                  <button className="bg-cyan-500 text-white px-3 py-1 rounded mr-2">
                    View
                  </button>
                  <button className="bg-cyan-700 text-white px-3 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

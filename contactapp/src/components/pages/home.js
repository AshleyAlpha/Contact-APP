import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [contacts, setContacts] = useState([]);
  const FetchContacts = () => {
    axios.get(
      'https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/list'
    ).then((response) => {
      setContacts(response.data.contacts);
      console.log(response.c);
    }).catch((err)=>{
       alert("Fail");
    });
    
  }
  useEffect(()=>{
    FetchContacts();
  }, []);
  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center h-screen">
      <div className="text-center text-orange-300 text-3xl mb-4">
        Contacts are going to be displayed here
      </div>
      <Link to="/create">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Create Contact
        </button>
      </Link>
    </div>
  );
};

export default Home;

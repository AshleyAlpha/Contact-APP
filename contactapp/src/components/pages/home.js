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
      console.log(response.data);
    }).catch((err)=>{
       alert("Fail");
    });
    
  }
  useEffect(()=>{
    FetchContacts();
  }, []);
  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center h-screen">
      <div className="text-center text-black text-base mb-4">
        {contacts.map((name,index)=>{
          return <div key={index}>
           <p>{name.fullName}</p>
           <p>{name.email}</p>
           <p>{name.phone}</p>
          </div>
        })}
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

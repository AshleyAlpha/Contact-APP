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

      <table className="text-center text-black text-base mb-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone_Number</th>
          </tr>
        </thead>
        {contacts.map((name,index)=>{
          return <tbody key={index}>
            
           <td>{name.fullname}</td>
           <td>{name.email}</td>
           <td>{name.phone}</td>
           <button>View</button>
           <button>Delete</button>
          </tbody>
        })}
      </table>

      <Link to="/create">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Create Contact
        </button>
      </Link>
    </div>
  );
};

export default Home;

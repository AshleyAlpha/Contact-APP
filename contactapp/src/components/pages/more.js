import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const More = () => {
  const { contactId } = useParams();
  const [contacts, setContacts] = useState();
  const [loading, setLoading] = useState(true);

 const fetchContacts=(id)=> {
    axios.get("https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/findById?id=" + id).then((response) => {
        console.log(response.data.contact);
        setContacts(response.data.contact);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    };

      const deleteContact = (id) => {
        axios.delete( "https://contact-app-server-nxgi.onrender.com/api/v1/contactapp/contact/delete?id=" + id)
        .then((resp) => {
            console.log(resp.data);
            fetchContacts(); 
            alert("successfully deleted");
            setContacts(null);
        })
        .catch((error) => {
            console.log(error);
            alert("Error deleting contact");
        });
     };

  useEffect(() => {
    fetchContacts(contactId);
  },[contactId]);
  if (loading) {
    return <div>Loading...</div>;
  }
  
  return(
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        <p className="text-lg"><strong>Full Name:</strong> {contacts ? contacts.fullName : "error"}</p>
        <p className="text-lg"><strong>Email:</strong> {contacts ? contacts.email : "error"}</p>
        <p className="text-lg"><strong>Phone_Number:</strong> {contacts ? contacts.phone : "error"}</p>
      </div>
      <div className="mt-4 flex justify-center">
      <Link to={`/update/${contactId}`}>
        <button className="bg-cyan-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4">
          Update Contact
        </button>
        </Link>
        <button className="bg-cyan-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded" onClick={() => deleteContact(contactId)}>
          Delete Contact
        </button>
      </div>
    </div>
  </div>
  
);
};

export default More;

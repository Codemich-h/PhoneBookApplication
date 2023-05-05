import React from "react";
import { useState } from "react";
import axios from 'axios';

function CreateContact(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, useContact] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/v1/create-user', {
            name: "Michell",
            email: "mich@gmail.com",
            contact: "123456789",
            password: "password" 
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ml-20">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-rose-600/40 ring-2 ring-indigo-200 lg:max-w-xl">
                <form onSubmit={handleSubmit}>
                    <div>
                        <h4 className="mt-8 text-center text-lg mb-7">Create Contact</h4>
                    </div>

                    <div>
                        <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-center mt-8 mb-8">message</label> 
                    </div>
                    <div>
                        <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Name</label>
                        <input className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400" type="email"></input>
                    </div>
                    <div>
                        <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Email</label>
                        <input className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400"></input>
                    </div>
                    <div>
                      <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Contact</label>
                      <input className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400"></input>
                    </div>
                    <div>
                      <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Password</label>
                      <input className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400"></input>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button className="shadow bg-blue-900 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">Create Contact</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateContact;

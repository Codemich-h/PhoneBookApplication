/* eslint-disable no-undef */
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function CreateAccount() {

  const [inputErrorList, setInputErrorList] = useState({});
  const [contact, setContact] = useState({
    
      name : "",
      email : "",
      tel_number : "",
      password : ""
  
  });

  const handleInput = (e) => {
    e.persist();
    setContact({...contact, [e.target.name]: e.target.value})
  }
  //Submit Data

  const userDetails = (e) => {
    e.preventDefault();

    const data = {
      name: contact.name,
      email: contact.email,
      tel_number: contact.tel_number,
      password: contact.password
    }
    axios.post('http://127.0.0.1:8000/api/v1/create-user', data)
    .then(res => {
      JSON.res();
      console.log(res.data.message);
    })
    .catch(error => 
      setInputErrorList('error', error));
      console.log('error:', error)
  }


    return (
<section className="bg-gray-100 mt-10">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create your account
              </h1>
              <form onSubmit={userDetails} className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <span>{inputErrorList.error}</span>
                      <label for="email" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                      <input value={contact.name} onChange={handleInput} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your name" required=""></input>
                  </div>
                  <div>
                      <label for="email" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input value={contact.email} onChange={handleInput} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@omomakay.com" required=""></input>
                  </div>
                  <div>
                      <label for="email" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telephone</label>
                      <input value={contact.tel_number} onChange={handleInput} type="number" name="tel_number" id="tel_number" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="3739738" required=""></input>
                  </div>
                  <div>
                      <label for="password" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input value={contact.password} onChange={handleInput} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""></input>
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                  </div>
                  <button onClick={userDetails} type="submit" className="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Alreadly register <Link to="/login" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Login</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    )
}
export default CreateAccount;

import React from 'react';
import { httpCall } from '../api/httpCall';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function UpdateContact () {
    var {id} = useParams();
    const userData = {
        name: "",
        phone_number: "",
        relationship: "",
        country: "",
        email: "",
        job : ""
    }
    const [data, setData] = useState(userData);
    const handleData = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
   
    useEffect(() => {
        httpCall().put('update-contact/' + id) 
        .then(res => {
            return res.json();
        })
        .then(res => {
            setData(res.data);
        })
        .catch(error => {
            console.log("Error:" + error)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return <section className="bg-gray-100 mt-10">
<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Update Contact
          </h1>
          <form   className="space-y-4 md:space-y-6" action="#">
              <div>
                  <label for="name" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input type="text" value={data.name} onChange={handleData}  name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your name" required=""></input>
              </div>
              <div>
                  <label for="phone_number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                  <input type="phone_number" value={data.phone_number} onChange={handleData} name="phone_number" id="phone_number" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="phone_number" required=""></input>
              </div>
              <div>
                  <label for="relationship" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Relationship</label>
                  <input  type="text" value={data.relationship} onChange={handleData} name="relationship" id="relationship" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="friend" required=""></input>
              </div>
              <div>
                  <label for="country" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                  <input type="country" value={data.country} onChange={handleData} name="country" id="country" placeholder="Liberia" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
              </div>
              <div>
                  <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input  type="email" value={data.email}  onChange={handleData} name="email" id="email" placeholder="info@omo.com" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
              </div>
                <div>
                  <label for="job" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job</label>
                  <input  type="text" value={data.job} onChange={handleData} name="job" id="job" placeholder="Dev" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                </div>
              <button type="submit" className="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Update Contact</button>
          </form>
      </div>
  </div>
</div>
</section>
}

export default UpdateContact;

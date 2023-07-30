import React from 'react';
import { useState, useEffect } from 'react';
import { httpCall } from '../api/httpCall';
import { Link } from 'react-router-dom';



function Contacts() {
    const [data, setData] =  useState([]); 

    const contactInfo = () => {
        httpCall().get('get-contacts')
        .then(res => {
            setData(res.data.data);
            console.log(res.data);
        })
        .catch((error) => {
            console.log("Error: " + error);
        })
    }

    useEffect(() => {
        contactInfo();
    }, []);

    var contactDetails = "";
    contactDetails = data.map((item, index) => {
        return (
            <tr key={index} className="bg-gray-500 dark:bg-gray-700 dark:border-gray-700  dark:hover:bg-gray-300">
                
                            <th scope="row" className="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-black">
                                <div className="pl-3">
                                    <div className="text-white text-base font-semibold">{item.name}</div>
                                </div>
                            </th>
                            <th>
                                <div className="pl-3">
                                    <div className="text-white text-base font-semibold">{item.email}</div>
                                </div>
                            </th>
                            <th>
                                <div className="pl-3">
                                    <div className="text-white text-base font-semibold">{item.phone_number}</div>
                                </div>
                            </th>
                            <th>
                                <div className="pl-3">
                                    <div className="text-white text-base font-semibold">{item.relationship}</div>
                                </div>
                            </th>
                            <th>
                                <div className="pl-3">
                                    <div className="text-white text-base font-semibold">{item.job}</div>
                                </div>
                            </th>
                            <th>
                                <div className="pl-3">
                                    <div className="text-white text-base font-semibold">{item.country}</div>
                                </div>
                            </th>

                            <th>
                                <div className="pl-3">
                                    <div className="text-base font-semibold">
                                        <Link to={`/update-contact/${item.id}`} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</Link>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <div className="pl-3">
                                    <div className="text-base font-semibold">
                                        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                                    </div>
                                </div>
                            </th>
            </tr>
            )
    });
    return (
        <div className="">
            <div className='text-black items-center justify-center'>
               <p className='text-2xl text-center mt-36 font-medium text-gray-900 dark:text-white-900'>User PhoneBook</p>
            </div>
            <div className="relative ml-36 mt-20">
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>   
            </div>
            <div class="pt-2 relative mx-auto text-gray-600">
                <input class="border-2 border-gray-300 bg-white  h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Search" />
            
        </div>
        </div> 
    <div className="mt-2 mr-16 flex flex-col">
        <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="mb-10 mt-7">
                    <h1 className="text-2xl text-center mt-1 font-medium text-gray-900">Contacts</h1>
                </div>
                <table className="w-full text-sm text-left text-white dark:text-white mt-6 ml-10 bg-black">
                    <thead className="text-xs text-white uppercase bg-black dark:bg-gray-900 dark:text-white">
                        <tr>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Email</th>
                            <th scope="col" className="px-6 py-3">contact</th>
                            <th scope="col" className="px-6 py-3">Relationship</th>
                            <th scope="col" className="px-6 py-3">Job</th>
                            <th scope="col" className="px-6 py-3">Country</th>
                            <th scope="col" className="px-6 py-3">Edit</th>
                            <th scope="col" className="px-6 py-3 ml-3">Delete</th>
                        </tr>
                    </thead>
                      {contactDetails}
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    </div>

     
</div>

    )
}

export default Contacts;

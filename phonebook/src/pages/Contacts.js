/* eslint-disable no-unused-vars */
import React from 'react';
import { useState, useEffect } from 'react';
import { httpCall } from '../api/httpCall';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function Contacts() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [data, setData] =  useState([]); 
    const [value, setValue] = useState("");


    //Calling data from our api  
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

    //Deleting data from our contact list 
    const handleDelete = (id) => {
        const confirm = window.confirm("Do you want to delete this contact!")
        if(confirm) {
            httpCall().delete(`delete-contact/${id}`)
            .then(res => {
                alert(res.data.message);
                if(res.data.message) {
                    navigate('/', {return: true})
                } else {
                    navigate('/', {return: true})
                }
            })
            .catch(error => {
                console.log('Error: ' + error)
            })
        }
    }

    useEffect(() => {
        contactInfo();
    }, []);

    //Searching data from our api and display that data that has been searched
    const changeData = (e) => {
        setValue(e.target.value);
    }
    const SearchData = (res) => {
        httpCall().post('search-contacts')
        .then(res => {
            console.log('Search',res)
        })
        .catch(error => {
            alert("Error: " + error);
        })
    }
    
    var contactDetails = "";
    contactDetails = data.filter(item => {
        const response = value.toLowerCase();
        const contactName = item.name.toLowerCase();

        return contactName.startsWith(response);
    }).map((item, index) => {
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
                                        <button onClick={(e) => handleDelete(item.id)} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
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
            <div className="relative ml-36 mt-20 items-center justify-center px-5 py-5">
            <div className="pt-2 relative mx-auto text-gray-600">
                <div className="relative mt-1overflow-hidden resize-x min-w-80 max-w-3xl">
                      <input type="search" name="search contact"  onChange={changeData} id="search" className="w-full mt-3 mr-3 pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-gray-500 transition-colors" placeholder="Search..." />
                      <div type="submit" className="text-black absolute right-2.5 bottom-0.5 focus:ring-4 focus:outline-none focus:ring-gray-900 font-medium rounded-lg text-sm px- py-2">
                    </div>
                    <button type="submit" onClick={(e) => SearchData(value)} className="text-white absolute right-2.5 bottom-1 bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-900 dark:focus:ring-gray-300">Search</button>
                </div>
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

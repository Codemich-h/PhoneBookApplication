import { React } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login';
import CreateContact from './CreateContact'


function UserContact() {
    
    return(
        <div>

    <BrowserRouter>
       <Routes>
        <Route path="/login" element={
            <Login />
        } />
        <Route path="/createcontact" element={
            <CreateContact />
        } />
        <Route path="" element="" />
        </Routes>
    </BrowserRouter>
        <nav className="bg-black border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
            <li className="block py-2 pl-3 pr-4 text-white bg-gray-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white md:dark:text-white-500" to="/"> 
            <a href="/usercontact">User Contact</a>   
            </li>
            <li className="block py-2 pl-3 pr-4 ml-10 text-white bg-gray-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white md:dark:text-white-500" >
               <a href="/CreateContact">Create Contact</a>
            </li>
            
            <li className="block py-2 pl-3 pr-4 ml-10 text-white bg-gray-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white md:dark:text-white-500 justify-end space-x-1" >
               <a href="/login">Login</a>
            </li>
        </div>
    </nav>
    <div className='text-black items-center justify-center'>
        <p className='text-2xl text-center mt-16 font-medium text-gray-900 dark:text-white-900'>User Phone Book</p>
    </div>
    <div className="relative ml-36 mt-20">
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>   
        </div>
        <input className="block w-small p-4 pl-10 text-sm text-black-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search, Logos..."></input>
    </div> 
    </div>
    )
}


export default UserContact;

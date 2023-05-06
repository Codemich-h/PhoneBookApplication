import React from "react";
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="bg-black dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 text-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">OMOMAKAY</span>
                </Link>
                <div className="flex md:order-2">
                    <button className="text-white bg-gray-800 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-800" type="button">
                        <Link to="/login">Login</Link>
                    </button>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to="/" className="block py-2 pl-3 pr-4 text-white-700 rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white-500 text-lg" aria-current="page" >Contacts</Link>
                        </li>
                        <li>
                            <Link to="/create-contact" className="block py-2 pl-3 pr-4 text-lg text-white rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white-500" aria-current="page" >Create Contacts</Link>
                        </li>
                    </ul>
                </div>
                
            </div>
        </nav> 
    );
}

export default Navbar;

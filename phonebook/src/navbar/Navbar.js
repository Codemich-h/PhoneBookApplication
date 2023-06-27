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
                
                <img id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" class="w-10 h-10 rounded-full cursor-pointer" src="/docs/images/people/profile-picture-5.jpg" alt="User dropdown" />
                <div id="userDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
    <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div>Bonnie Green</div>
      <div class="font-medium truncate">name@flowbite.com</div>
    </div>
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
      <li>
        <Link to="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
      </li>
      <li>
        <Link to="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
      </li>
      <li>
        <Link to="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
      </li>
    </ul>
    <div class="py-1">
      <Link to="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
    </div>
</div>
                </div>
         <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 mr-56 font-medium border md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
                <Link to="/add-contact" className="block py-2 pl-3 pr-4 text-white-700 rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white-500 text-lg" aria-current="page" >Add Contact</Link>
            </li>
            <li>
                <Link to="/" className="block py-2 pl-3 pr-4 text-white-700 rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white-500 text-lg" aria-current="page" >Contacts</Link>
            </li>
            <li>
                <Link to="/create-account" className="block py-2 pl-3 pr-4 text-lg text-white rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white-500" aria-current="page" >Create Account</Link>
            </li>
            </ul>
        </div>
                
        </div>
    </nav> 
    );
}

export default Navbar;

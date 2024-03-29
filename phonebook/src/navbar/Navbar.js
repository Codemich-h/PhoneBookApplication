import React from "react";
import { Link } from 'react-router-dom';
import DropDown from "../pages/DropDown";

function Navbar() {
return (
  <nav className="bg-black dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 text-white">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">OMOMAKAY</span>
        </Link>
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
      <button >
           <DropDown />
      </button>
    </div>
  </div>
</nav> 
);
}

export default Navbar;

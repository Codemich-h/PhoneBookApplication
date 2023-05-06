import React from 'react';
function Contacts() {
    return (
        <div className="">
            <div className='text-black items-center justify-center'>
               <p className='text-2xl text-center mt-36 font-medium text-gray-900 dark:text-white-900'>User Phone Book</p>
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
export default Contacts;

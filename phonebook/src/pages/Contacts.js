import React from 'react';



function Contacts() {
    return (
        <div className="">
            <div className='text-black items-center justify-center'>
               <p className='text-2xl text-center mt-36 font-medium text-gray-900 dark:text-white-900'>User PhoneBook</p>
            </div>
            <div className="relative ml-36 mt-20">
                <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>   
            </div>
        <input type='text' className="block w-small p-4 pl-10 text-sm text-black-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."></input>
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
                    <tbody>
                        <tr className="bg-gray-500 dark:bg-gray-700 dark:border-gray-700  dark:hover:bg-gray-600">
                            <th scope="row" className="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-black">
                                <img className="w-10 h-10 rounded-full" src="" alt="mich"/>
                                <div className="pl-3">
                                    <div className="text-white text-base font-semibold">Mich</div>
                                </div>
                            </th>
                            <th>
                                <div className="pl-3">
                                    <div className="text-white text-base font-semibold">info@omo.com</div>
                                </div>
                            </th>
                            <th>
                                <div className="pl-3">
                                    <div className="text-white text-base font-semibold">0774343333443</div>
                                </div>
                            </th>
                            <th>
                                <div className="pl-3">
                                    <div className="text-white text-base font-semibold">Brother</div>
                                </div>
                            </th>
                            <th>
                                <div className="pl-3">
                                    <div className="text-white text-base font-semibold">Frontend Dev</div>
                                </div>
                            </th>
                            <th>
                                <div className="pl-3">
                                    <div className="text-white text-base font-semibold">Liberia</div>
                                </div>
                            </th>
                            <th>
                                <div className="pl-3">
                                    <div className="text-base font-semibold">
                                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit</button>
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
                    </tbody>
                </table>
            </div>
        </div>
    </div>

     
</div>

    )
}

export default Contacts;

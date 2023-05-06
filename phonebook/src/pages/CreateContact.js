import React from 'react';
function CreateContact() {
    return (
        <div className="relative flex flex-col sm:justify-center min-h-screen w-full p-2 m-auto bg-white rounded shadow-md lg:max-w-lg mt-2 sm:rounded-lg">
          <form className="">
            <div className="text-3xl font-semibold text-center text-black-700 mt-8 mb-7">
              <h1>Create Contact</h1>
            </div>
            <div className="block text-sm font-medium text-slate-700 text-center mt-8 mb-8">
              <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 mt-1 mb-2 text-left">Name</label>
              <input className="w-full mt-1  px-3 py-2 bg-white border rounded-xl shadow-sm border-slate-300 placeholder-slate-400"></input>
            </div>
            <div className="block text-sm font-medium text-slate-700 text-center mt-8 mb-8">
            <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 mt-1 mb-2 text-left">Email</label>
              <input className="w-full mt-1  px-3 py-2 bg-white border rounded-xl shadow-sm border-slate-300 placeholder-slate-400"></input>
            </div>
            <div className="block text-sm font-medium text-slate-700 text-center mt-8 mb-8">
            <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 mt-1 mb-2 text-left">Contact</label>
              <input className="w-full mt-1  px-3 py-2 bg-white border rounded-xl shadow-sm border-slate-300 placeholder-slate-400"></input>
            </div>
            <div className="block text-sm font-medium text-slate-700 text-center mt-8 mb-8">
            <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 mt-1 mb-2 text-left">Password</label>
              <input className="w-full mt-1  px-3 py-2 bg-white border rounded-xl shadow-sm border-slate-300 placeholder-slate-400" placeholder='............'></input>
            </div>
            <div className="md:flex md:items-center mb-6">
                   <div className="flex items-start">
                    <div className="flex items-start">
                      <input className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" type="checkbox"></input>
                    </div>
                    <div className="ml-3 text-sm">
                        <label className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-blue-700 hover:underline dark:text-primary-500" href="/">Terms and Conditions</a></label>
                    </div>
                   </div>          
            </div>
            <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button className="w-full shadow bg-gray-700 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-medium rounded-xl text-sm px-5 py-2.5 text-center focus:ring-4 mt-7 justify-item-center" type="button">Create Contact</button>
                        </div>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-6">Alreadly have an account? <a href="/login" className="font-medium text-primary-600 hover:underline text-blue-700"> Login here </a></p>
          </form>
        </div>
    )
}
export default CreateContact;

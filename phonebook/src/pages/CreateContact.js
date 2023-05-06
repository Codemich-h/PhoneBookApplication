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
            <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 mt-1 mb-2 text-left">Email:</label>
              <input className="w-full mt-1  px-3 py-2 bg-white border rounded-xl shadow-sm border-slate-300 placeholder-slate-400"></input>
            </div>
            <div className="block text-sm font-medium text-slate-700 text-center mt-8 mb-8">
            <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 mt-1 mb-2 text-left">Contact:</label>
              <input className="w-full mt-1  px-3 py-2 bg-white border rounded-xl shadow-sm border-slate-300 placeholder-slate-400"></input>
            </div>
            <div className="block text-sm font-medium text-slate-700 text-center mt-8 mb-8">
            <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 mt-1 mb-2 text-left">Password:</label>
              <input className="w-full mt-1  px-3 py-2 bg-white border rounded-xl shadow-sm border-slate-300 placeholder-slate-400"></input>
            </div>
            <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button className="shadow bg-blue-900 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-xl mt-7 ml-14" type="button">Create Contact</button>
                        </div>    
            </div>
          </form>
        </div>
    )
}
export default CreateContact;

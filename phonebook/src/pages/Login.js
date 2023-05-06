import React from 'react';
function Login() {
    return (
        <div className="relative flex flex-col sm:justify-center min-h-screen w-full p-7 m-auto bg-white rounded shadow-md lg:max-w-lg mt-2 sm:rounded-lg">
          <div className="text-3xl font-semibold text-center text-black-700 ">
            <h1>Login</h1>
          </div>
          <form>
          <div className="block text-sm font-medium text-slate-700 text-center mt-6 mb-8">
          <label className="block text-sm font-medium text-slate-700 mt-1 mb-2 text-left">Email:</label>
            <input className="w-full mt-1  px-3 py-2 bg-white border rounded-xl shadow-sm border-slate-300 placeholder-slate-400"></input>
          </div>
          <div className="block text-sm font-medium text-slate-700 text-center mt-2 mb-8">
            <label className="block text-sm font-medium text-slate-700 mt-1 mb-2 text-left">Password:</label>
            <input className="w-full mt-1  px-3 py-2 bg-white border rounded-xl shadow-sm border-slate-300 placeholder-slate-400"></input>
          </div>
          <div className="block mt-4">
            <label className="inline-flex items-center">
              <input className="rounded boder-grey-300 text-indigo-200 focus:border-indigo-300 shadow-sm" type="checkbox" />
              <span className="ml-2">Rember me</span>
            </label>
          </div>
          <div className="md:flex md:items-center mb-6 mt-10 ml-14">
              <div className="md:w-1/3"></div>
                  <div className="md:w-2/3">
                    <a href="/" className="underline
                           text-sm text-gray-400 hover:text-gray-700">forget password</a>
                        <button className="shadow bg-gray-200 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded-xl sm:justify-item-right ml-2" type="button">Create Contact</button>
                  </div>    
            </div>
          </form>
        </div>
    )
}
export default Login;

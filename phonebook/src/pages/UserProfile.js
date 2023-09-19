import React from 'react';
import { NavLink } from 'react-router-dom';

function UserProfile() { 
    return (
      <>
      <NavLink />
        <section className="bg-white-100 dark:bg-gray-100">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
              <div className="flex item-center flex-col mb-20 ml-20">
                <img className="flex relative overflow-hidden bg-gray-100 rounded-full dark:bg-gray-800 w-20 h-20 mb-30 ml-20 mr-20 mt-5 p-1 ring-2 ring-gray-400 dark:ring-gray-500" src="./img/IMG_0161.jpg" alt="Bordered avatar" />
                <div className="text-center mb-10 button-start">
                  <h3 className="mb-6 mt-2 mr-10 text-xl">Samuel Jackson</h3>
                </div>
                <div className="text-center mr-12 text-sm text-gray-500">
                  <p>samuel@gmail.com</p>
                  <p>+231775309208</p>
                </div>
              </div>
              <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              <div className="sm:flex sm:items-center sm:justify-between">
                <div className="flex mt-4 ml-20 mb-5 space-x-5 sm:justify-center sm:mt-0">
                  <a href="facebook.com" className="">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default UserProfile;

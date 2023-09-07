import { useRef, useState } from "react";
import { MenuItems } from "./MenuItems";
import { useNavigate } from 'react-router-dom';

const DropDown = () => {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const imgRef = useRef();

  // Logout function 
  const logOut = () => {
    let tokenReMove = (localStorage.removeItem('token') )
  if(MenuItems.title.url && tokenReMove) {
    return navigate('/login');
  } 
}

  return (
    <div>
      <button onClick={() => setOpen(!open)}id="dropdownUserAvatarButton"
        data-dropdown-toggle="dropdownAvatar"
        className="flex mx-3 text-sm hover:text-blue-400 bg-gray-900 md:mr-0 menu-trigger"
        type="button">
        <img ref={imgRef} id="avatarButton" type="button" data-dropdown-toggle="userDropdown"
          data-dropdown-placement="bottom-start"
          className="w-8 h-8 mr-2 mb-0.5  rounded-full cursor-pointer"
          src="https://reactjs.org/logo-og.png"
          alt="User dropdown"/>
        Michell
        <svg className="w-2.5 h-2.5 ml-2.5 mt-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6">
          <path stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"/>
        </svg>
      </button>
           {
            open &&
            <div ref={dropdownRef} id="dropdownAvatar"
          className="fixed bg-gray-800 divide-y divide-gray-600 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-700">
          <ul className="py-2 text-sm text-white   dark:text-white" aria-labelledby="dropdownUserAvatarButton">
            {
                MenuItems.map((list) => {
                    return (
                        <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-200 dark:hover:text-black" key={list}>
                            <a href={list.url}>
                              <button onClick={logOut}>{list.title}</button>
                            </a>
                        </li>
                        
                    )
                })
            }
          </ul>
        </div>
           }
    </div>
  );
}


export default DropDown;

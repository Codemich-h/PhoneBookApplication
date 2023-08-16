import { useEffect, useState } from "react";
import { httpCall } from "../api/httpCall";


function SearchContact() {
    const [data, setData] = useState([]);
    useEffect(() => {
        httpCall().post('search-contacts')
        .then(res => {
            setData(res.data.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    return ( 
        <div className="relative ml-36 mt-20 items-center justify-center px-5 py-5">
            <div className="pt-2 relative mx-auto text-gray-600">
                <div className="relative mt-1overflow-hidden resize-x min-w-80 max-w-3xl">
                      <input type="search" name="search" value={data} id="search" className="w-full mb-1.5 mr-3 pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-gray-500 transition-colors" placeholder="Search..." />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-400 dark:hover:bg-gray-500 dark:focus:ring-gray-300">Search</button>
                </div>
            </div>
        </div>
)
}

export default SearchContact;

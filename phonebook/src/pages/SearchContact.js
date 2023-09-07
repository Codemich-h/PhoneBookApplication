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
                      <input type="text" name="search" value={data} id="search" className="w-full mb-1.5 mr-3 pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-gray-500 transition-colors" placeholder="Search..." />
                      
                </div>
            </div>
        </div>
)
}

export default SearchContact;

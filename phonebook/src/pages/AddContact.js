import { useState} from "react";
import { httpCall } from "../api/httpCall";


function AddContact () {

    const [addContact, setAddContact] = useState({
    name: "",
    phone_number: "",
    relationship: "",
    country: "",
    email: "",
    job : ""
    });
    const userData = {
        name: addContact.name,
        phone_number: addContact.phone_number ,
        relationship: addContact.relationship,
        country: addContact.country,
        email: addContact.email,
        job : addContact.job
    }

    const handleInput = (e) => {
        e.persist();
        setAddContact({...addContact, [e.target.name]: e.target.value})
    }
    
    const userContactDetails = (e) => {
        e.preventDefault();
        httpCall().post('add-contact', userData)
        .then(res => {
            alert('You have successfully created a contact');
            console.log("Data:"+ res.data.message);
        })
        .catch(error => alert('Error:'+ error.response.data.message));
    }

    return(
        <section className="bg-gray-100 mt-10">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Add Contact
              </h1>
              <form onSubmit={userContactDetails}  className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="name" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                      <input type="text" value={addContact.name} onChange={handleInput} name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your name" required=""></input>
                  </div>
                  <div>
                      <label for="phone_number" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                      <input type="phone_number" value={addContact.phone_number} onChange={handleInput} name="phone_number" id="phone_number" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="phone_number" required=""></input>
                  </div>
                  <div>
                      <label for="relationship" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Relationship</label>
                      <input  type="text" value={addContact.relationship} onChange={handleInput} name="relationship" id="relationship" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="friend" required=""></input>
                  </div>
                  <div>
                      <label for="country" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                      <input type="country" value={addContact.country} onChange={handleInput} name="country" id="country" placeholder="Liberia" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                  </div>
                  <div>
                      <label for="email" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                      <input  type="email" value={addContact.email} onChange={handleInput} name="email" id="email" placeholder="info@omo.com" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                  </div>
                    <div>
                      <label for="job" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job</label>
                      <input  type="text" value={addContact.job} onChange={handleInput} name="job" id="job" placeholder="Dev" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                    </div>
                  <button type="submit" className="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Add Contact</button>
              </form>
          </div>
      </div>
  </div>
</section>

    )
    }

export default AddContact;

/* eslint-disable no-undef */
import React, {  useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {
const [email, setEmail] = useState({
  email: ""
});
const [password, setPassword] = useState({
  password: ""
});

const navigate = useNavigate();
const userLoginDetail = async (e) => {
  e.preventDefault();
 
  const data = {
    email: email,
    password: password
  }
  axios.post('http://127.0.0.1:8000/api/v1/create-token', data)
  .then((res)=>{
     console.log('token',res.data.token);
     localStorage.setItem('token', JSON.stringify(res.data.token))
     alert('You have successfully login');
      navigate('/', {return: true});    
})
  .catch(error => {
    console.log('errors', error);
    alert("You have not been authorize to login", error);
  })
}

    return (
<section className="bg-white-100 dark:bg-gray-100">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-700 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign into your account
              </h1>
              <form onSubmit={userLoginDetail} className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" onChange={(e) => setEmail(e.target.value
                        )}  name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""></input>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" onChange={(e) => password.setLogin
                      (e.target.value)} aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""></input>
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                  </div>
                      <a href="/" className="underline
                           text-sm text-gray-400 hover:text-gray-700">Forget password?</a>
                  </div>
                  <button onClick={userLoginDetail} type="submit" className="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="/create-account" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign up</a>
                  </p>
        </form>
      </div>
    </div>
  </div>
</section>
    )
}
export default Login;




import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import CreateUser from './CreateUser';
import Login from './Login';


function ContactRouter() {
    <BrowserRouter>
       <Routes>
        <Route path="/login" element={
            <Login />
        } />
        <Route path="/create-user" element={
            <CreateUser />
        } />
        <Route path='' element="" />
       </Routes>
    </BrowserRouter>

}
export default ContactRouter;

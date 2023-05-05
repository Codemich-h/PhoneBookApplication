import {Routes, Route} from 'react-router-dom';
import Contacts from '../pages/Contacts';
import CreateContact from '../pages/CreateContact';
import Login from '../pages/Login';



function MyRouter() {
    return (
        <Routes>
            <Route path='/' element={<Contacts />} />
            <Route path='/create-contact' element={<CreateContact />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}

export default MyRouter;

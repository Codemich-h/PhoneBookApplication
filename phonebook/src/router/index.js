import {Routes, Route} from 'react-router-dom';
import Contacts from '../pages/Contacts';
import CreateAccount from '../pages/CreateAccount';
import Login from '../pages/Login';
import AddContact from '../pages/AddContact';



function MyRouter() {
    
    return (
        <Routes>
            <Route path='/add-contact' element={<AddContact />} />
            <Route path='/create-account' element={<CreateAccount />} />
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Contacts />} />
            
        </Routes>
    )
}

export default MyRouter;

import {Routes, Route} from 'react-router-dom';
import Contacts from '../pages/Contacts';
import CreateAccount from '../pages/CreateAccount';
import Login from '../pages/Login';
import AddContact from '../pages/AddContact';
import UpdateContact from '../pages/UpdateContact';



function MyRouter() {
    
    return (
        <Routes>
            <Route path='/add-contact' element={<AddContact />} />
            <Route path='/create-account' element={<CreateAccount />} />
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Contacts />} />
            <Route path='update-contact/:id' element={<UpdateContact />} />
            
        </Routes>
    )
}

export default MyRouter;

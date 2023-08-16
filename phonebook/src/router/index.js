import {Routes, Route} from 'react-router-dom';
import Contacts from '../pages/Contacts';
import CreateAccount from '../pages/CreateAccount';
import Login from '../pages/Login';
import AddContact from '../pages/AddContact';
import UpdateContact from '../pages/UpdateContact';
import UserProfile from '../pages/UserProfile';
import ForgetPassword from '../pages/ForgetPassword';



function MyRouter() {
    
    return (
        <Routes>
            <Route path='/add-contact' element={<AddContact />} />
            <Route path='/create-account' element={<CreateAccount />} />
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Contacts />} />
            <Route path='update-contact/:id' element={<UpdateContact />} />
            <Route path='/user-profile' element={<UserProfile />}></Route>
            <Route path='/forget-password' element={<ForgetPassword />}></Route>
        </Routes>
    )
}

export default MyRouter;

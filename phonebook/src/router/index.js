import {Routes, Route} from 'react-router-dom';
import Contacts from '../pages/Contacts';
import CreateAccount from '../pages/CreateAccount';
import Login from '../pages/Login';
import AddContact from '../pages/AddContact';
import UpdateContact from '../pages/UpdateContact';
import UserProfile from '../pages/UserProfile';
import ForgetPassword from '../pages/ForgetPassword';
import ResetPassword from '../pages/ResetPassword';
import PrivateRoutes from '../privateRoute/PrivateRoutes';



function MyRouter() {
    
    return (
        <Routes>
            <Route path='/create-account' element={<CreateAccount />} />
            <Route path='/login' element={<Login />} />
            <Route element={<PrivateRoutes />}>
                {/*Private or Protected Routes */}
                <Route path='/add-contact' element={<AddContact />} />
                <Route path='/' element={<Contacts />} />
                <Route path='/user-profile' element={<UserProfile />}></Route>
                <Route path='/reset-password' element={<ResetPassword />}></Route>
            </Route>
            <Route path='update-contact/:id' element={<UpdateContact />} />    
            <Route path='/login'></Route>
            <Route path='/forget-password' element={<ForgetPassword />}></Route>
        </Routes>
    )
}

export default MyRouter;

import {useLocation, Outlet, Navigate} from 'react-router-dom';

function PrivateRoutes () {
    const location = useLocation();
    const refreshToken = (localStorage.getItem('token'))
    let auth = refreshToken;
    return auth? <Outlet /> : <Navigate to='/login' state={{ from: location}} replace />
}

export default PrivateRoutes;

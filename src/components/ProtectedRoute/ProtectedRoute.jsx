import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Favorites from '../Favorites/Favorites';

const ProtectedRoute = () => {
    const isUserAuth = useSelector((state) => state.userAuth.Auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isUserAuth) {
            alert("log in first!")
            navigate('/login');
        }
    }, [isUserAuth, navigate]);

    return (
        <>
            {isUserAuth ? <Favorites /> : <></>}
        </>
    )
};

export default ProtectedRoute;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { Userlogout } from '../../../store/userAuthStore';
import { useEffect, useState } from 'react';

const Navv = () => {
    const dispatch = useDispatch();
    const isUserAuth = useSelector((state) => state.userAuth.Auth);
    console.log(isUserAuth);

    const [isAuth, setIsAuth] = useState(isUserAuth);

    useEffect(() => {
        setIsAuth(isUserAuth)

    }, [isUserAuth])

    const handleLogout = () => {
        dispatch(Userlogout());
    };


    return (
        <Navbar expand="lg" className="bg-white shadow-sm py-3" sticky="top">
            <Container>
                <Navbar.Brand className="fw-bold text-dark fs-4">
                    <i className="fas fa-store me-2"></i> Nike
                </Navbar.Brand>


                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/Home" className={({ isActive }) => (isActive ? "nav-link active fw-semibold text-primary" : "nav-link text-dark fw-medium")}>Home</NavLink>
                        <NavLink to="/products" className={({ isActive }) => (isActive ? "nav-link active fw-semibold text-primary" : "nav-link text-dark fw-medium")}>Products</NavLink>
                        <NavLink to="/About" className={({ isActive }) => (isActive ? "nav-link active fw-semibold text-primary" : "nav-link text-dark fw-medium")}>About</NavLink>
                        <NavLink to="/Favorites" className={({ isActive }) => (isActive ? "nav-link active fw-semibold text-primary" : "nav-link text-dark fw-medium")}>Favorites</NavLink>
                    </Nav>
                    <Nav>
                        {/* <NavLink to="/login" className={({ isActive }) => (isActive ? "btn btn-outline-primary px-3 fw-semibold" : "btn btn-outline-dark px-3 fw-semibold ms-2")}>Login</NavLink>
                        <NavLink to="/registration" className={({ isActive }) => (isActive ? "btn btn-primary px-3 fw-semibold ms-2" : "btn btn-dark px-3 fw-semibold ms-2")}>Sign Up</NavLink>

                        <button onClick={handleLogout} className="btn btn-danger px-3 fw-semibold ms-2">Logout</button> */}
                        {isAuth ? (
                            <button onClick={handleLogout} className="btn btn-danger px-3 fw-semibold">Logout</button>
                        ) : (
                            <>
                                <NavLink to="/login" className={({ isActive }) => (isActive ? "btn btn-outline-primary px-3 fw-semibold" : "btn btn-outline-dark px-3 fw-semibold ms-2")}>Login</NavLink>
                                <NavLink to="/registration" className={({ isActive }) => (isActive ? "btn btn-primary px-3 fw-semibold ms-2" : "btn btn-dark px-3 fw-semibold ms-2")}>Sign Up</NavLink>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navv;

import React from 'react';
import { Link } from 'react-router-dom';
//import useAuth from '../../hooks/useAuth';
import useFireBase from '../../hooks/useFireBase';
import './Header.css';

const Header = () => {
    //const {user , logout} = useAuth();
    const {user , logout} = useFireBase();
    return (
        <div className="header my-5 fs-5">
            <h2>Welcome to React authentication</h2>
            <Link to = "/home">Home</Link>
            <Link to ="/register">Register</Link>
            <Link to ="/login">Login</Link>
            <span>{user.displayName} </span>
            {
                
                user?.email && <button className="btn btn-primary" onClick={logout}>Logout</button>
            }
            
        </div>
    );
};

export default Header;
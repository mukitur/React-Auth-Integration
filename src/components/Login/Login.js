import React from 'react';
import { Link } from 'react-router-dom';
//import useAuth from '../../hooks/useAuth';
import useFireBase from '../../hooks/useFireBase';

const Login = () => {
    const {signInWithGoogle} = useFireBase(); 
    //const {signInWithGoogle} = useAuth()
    return (
        <div>
            <h2 className="my-3 text-primary">Welcome to Login Page</h2>
            <div>
                <h4>Login Through Email</h4>
            <form>
                <input className="my-2" type="email" placeholder="enter email"/> <br/>
                <input type="Password" placeholder="enter password"/>
                <br/>
                <input className="my-2" type="submit" value="Login"/>
            </form>
            </div>
            <h4 className="my-4">You may login through Gmail</h4>
            <button onClick= {signInWithGoogle}>Gmail Login</button>
            <br/>
            <h6 className="my-3">New User ? Please <Link  to ="/register">Register</Link></h6>

        </div>
    );
};

export default Login;
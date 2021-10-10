import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2 className="my-3">Please Register</h2>
            <form>
                <input className="my-2" type="Email" placeholder="Enter Your Email"/> <br/>
                <input type="password" placeholder="Enter Your password"/>
                <br/>
                <input className="my-2" type="submit" value="Register"/>
            </form>

            <h6 className="my-3"><Link to ="/login">Existing User ? Please login</Link></h6>
        </div>
    );
};

export default Register;
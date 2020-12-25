import { Link, useHistory } from 'react-router-dom';
import React from 'react';
import {auth, provider} from '../firebase';
import './Login.css'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const Login = () => {
    const user = useSelector(selectUser);
    const history = useHistory();
    
    const signIn = () => {
        auth.signInWithPopup(provider).catch(error => alert(error.message))
    }

    return (
        <div className="login" >
            {user ? history.push('/') : null}
            <Link className="login__link" to='/' >
            <h1 className="header__logo" > Lux Watch </h1>
            </Link>
            <div className="login__container">
                <button className="login__signInButton" onClick={signIn} >Sign-In</button>
                <p>By signing-in you agree to the Lux Watch Conditions of use & Sale. Please see our privacy Notice, our cookies notice and our Interest-Based Ads Notice</p>
            </div>
        </div>
    )
}

export default Login;

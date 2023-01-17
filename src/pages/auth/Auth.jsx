import React from 'react';
import { useState } from 'react';
import logo from '../../assets/images/logo.png'
import LoginForm from '../../components/LoginForm/LoginForm';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import './Auth.css';

const Auth = () => {
    const [isAuth, setIsAuth] = useState(false);
    
    return (
        <div className='auth__container'>

            <div className='left__block'>
                <img src={logo} alt="logo" className='auth__logo'/>
                <h1>Task Manager</h1>
                <p>Эффективное управление любыми проектами для вашей компании</p>
            </div>

            <div className='right__block'>
                {isAuth ?
                    <LoginForm setIsAuth={setIsAuth}/>
                    :
                    <RegistrationForm setIsAuth={setIsAuth}/>
                }
            </div>
        </div>
    );
};

export default Auth;
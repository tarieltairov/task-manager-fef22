import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { exampleContext } from '../../context';
import './Registration.css';

const RegistrationForm = ({ setIsAuth }) => {
    const context = useContext(exampleContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (context.initailStates.isRegistered === true) {
            navigate('login');
        }
    }, [context.initailStates.isRegistered, navigate]);

    return (
        <div className='registration'>
            <h3 className='reg_head'>Регистрация</h3>
            <input type="text" placeholder='Имя' />
            <input type="text" placeholder='Почта' />
            <input type="text" placeholder='Пароль' />
            <button>Зарегистрироваться</button>
            <div className='footer__btns'>
                <span className='left_btn'>Уже есть аккаунт?</span>
                <span className='right_btn' onClick={() => setIsAuth(true)}>Войти</span>
            </div>
        </div>
    );
};

export default RegistrationForm;
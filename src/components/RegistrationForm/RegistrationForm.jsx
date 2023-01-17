import React from 'react';
import './Registration.css';

const RegistrationForm = ({setIsAuth}) => {
    return (
        <div className='registration'>
            <h3>Регистрация</h3>

            <input type="text" placeholder='Имя'/>
            <input type="text" placeholder='Почта'/>
            <input type="text" placeholder='Пароль'/>

            <button>Зарегистрироваться</button>

            <div className='footer__btns'>
                <span className='left_btn'>Уже есть аккаунт?</span>
                <span className='right_btn' onClick={()=>setIsAuth(true)}>Войти</span>
            </div>

        </div>
    );
};

export default RegistrationForm;
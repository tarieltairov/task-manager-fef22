import React from 'react';
import './LoginForm.css';

const LoginForm = ({setIsAuth}) => {
    return (
        <div className='registration'>
            <h3>Авторизация</h3>

            <input type="text" placeholder='Почта' />
            <input type="text" placeholder='Пароль' />

            <button>Авторизоваться</button>

            <div className='footer__btns'>
                <span className='left_btn'>Нет учетной записи?</span>
                <span className='right_btn' onClick={()=>setIsAuth(false)}>Зарегистрироваться</span>
            </div>

        </div>
    );
};

export default LoginForm;
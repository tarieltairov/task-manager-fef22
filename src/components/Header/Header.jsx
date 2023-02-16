import React from 'react';
import logo from '../../assets/images/logo2.png';
import kanban from '../../assets/icons/kanban.png';
import deals from '../../assets/icons/deals.png';
import employees from '../../assets/icons/employees.png';
import searchIcon from '../../assets/icons/search.png';
import logoutIcon from '../../assets/icons/logout.png';
import { useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className='header' style={{ display: location.pathname === '/auth' ? 'none' : 'block' }}>
            <div className='header__inner'>
                <img src={logo} alt="logo" className='logo' onClick={() => navigate('/')}/>
                <nav className='nav__block'>
                    <div className={location.pathname === '/kanban' ? 'active' : 'nav__block-items'}>
                        <span onClick={() => navigate('/kanban')}>Канбан доска</span>
                        <img src={kanban} alt="first__icon" />
                    </div>
                    <div className={location.pathname === '/deals' ? 'active' : 'nav__block-items'}>
                        <span onClick={() => navigate('/deals')}>Сделки</span>
                        <img src={deals} alt="second__icon" />
                    </div>
                    <div className={location.pathname === '/employees' ? 'active' : 'nav__block-items'}>
                        <span onClick={() => navigate('/employees')}>Сотрудники</span>
                        <img src={employees} alt="third__icon" />
                    </div>
                </nav>

                <div className='search__block'>
                    <input type="text" />
                    <img src={searchIcon} alt="search__icon" />
                </div>

                <div className='last__block'>
                    <span>user-name</span>
                    <img src={logoutIcon} alt="logout-icon" onClick={() => navigate('/auth')} />
                </div>
            </div>
        </div>
    );
};

export default Header;
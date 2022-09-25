import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav className='navber'>
                <a href="/home">Home</a>
                <a href="/order">Order</a>
                <a href="/order Review">Order Review</a>
                <a href="/manage-inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;
import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

function Header() {
    return (
        <nav>
            <div className="header container">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className="links">
                    <a href="/shop">Shop</a>
                    <a href="/orders">Order Review</a>
                    <a href="/inventory">Manage Inventory</a>
                    <a href="/about">About</a>
                </div>
            </div>
        </nav>
    );
}

export default Header;

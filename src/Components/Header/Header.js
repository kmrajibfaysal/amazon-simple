import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import Shop from '../Shop/Shop';
import './Header.css';

function Header() {
    return (
        <nav>
            <div className="header container">
                <div>
                    <Link to="/shop" element={<Shop />}>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="links">
                    <Link to="/shop">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;

import React from 'react'
import { Link } from 'react-router-dom';

import Sidebar from './Sidebar'

import './header.css'
import { useSelector } from 'react-redux';

export default function Header() {

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const openMenu = () => {
        document.querySelector('.sidebar').classList.add('open');
        document.querySelector('.overlay').style.display = "block";
    };


    return (
        <div className="sticky-header" >
            <header className="header">

                <div className="brand">
                    <button onClick={openMenu}>&#9776;</button>
                    <Link to="/">amazona</Link>
                </div>

                <div className="header-links">
                    <Link to="/cart">Cart</Link>
                    {userInfo ? (
                        <Link to="/profile">{userInfo.name}</Link>
                    ) : (
                            <Link to="/signin">Sign In</Link>
                        )}
                    {userInfo && userInfo.isAdmin && (
                        <div className="dropdown">
                            <a href="#">Admin</a>
                            <ul className="dropdown-content">
                                <li>
                                    <Link to="/orders">Orders</Link>
                                    <Link to="/products">Products</Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </header>
            <Sidebar openMenu={openMenu} />
        </div>
    )
}


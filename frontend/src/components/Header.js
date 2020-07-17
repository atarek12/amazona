import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Sidebar from './Sidebar'

import './header.css'

export default function Header() {

    //const userSignin = useSelector((state) => state.userSignin);
    //const { userInfo } = userSignin;

    const [signIn, setSignIn] = useState({
        In: 0,
        name: 'Ahmed'
    })

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
                    <a href="cart.html">Cart</a>
                    {
                        signIn.In ?
                            (
                                <div className="dropdown">
                                    <Link to="/profile">Welcome, {signIn.name}</Link>
                                    <ul className="dropdown-content">
                                        <li>
                                            <Link to="/orders">My Orders</Link>
                                        </li>
                                        <li>
                                            <Link to="/products">Favorite Products</Link>
                                        </li>
                                    </ul>
                                </div>
                            )
                            :
                            (
                                <Link to="/signin">Sign In</Link>
                            )
                    }
                </div>
            </header>
            <Sidebar openMenu={openMenu} />
        </div>
    )
}

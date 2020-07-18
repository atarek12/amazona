import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { pageRefresh } from '../actions/productAction';

import './sidebar.css'


export default function Sidebar({ openMenu }) {

    const closeMenu = () => {
        document.querySelector('.sidebar').classList.remove('open');
        document.querySelector('.overlay').style.display = "none";
    };

    const dispatch = useDispatch()

    return (
        <div>
            <aside className="sidebar" >
                <h3>Shopping Categories</h3>

                <button className="sidebar-close-button" onClick={closeMenu}> X </button>

                <ul className="categories">
                    <li onClick={() => dispatch(pageRefresh(true))} >
                        <Link to="/category/Pants">Pants</Link>
                    </li>

                    <li onClick={() => dispatch(pageRefresh(false))}>
                        <Link to="/category/Shirts">Shirts</Link>
                    </li>
                </ul>
            </aside>
            <div className="overlay" onClick={closeMenu}></div>
        </div>

    )
}

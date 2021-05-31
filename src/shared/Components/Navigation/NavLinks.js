import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavLinks.css';

function NavLinks(props) {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to='/menu' exact>MENU</NavLink>
            </li>
            <li>
                <NavLink to='/login'>LOG IN</NavLink>
            </li>
            <li>
                <NavLink to='/signup'>SIGN UP</NavLink>
            </li>
            <li>
                <NavLink to='/cart'>CART</NavLink>
            </li>
            <li>
            <NavLink to='/profile'>MY PROFILE</NavLink>
            </li>
            <li>
                <NavLink to='/About'>ABOUT US</NavLink>
            </li>
            <li>
                <NavLink to='/payment'>CHECKOUT</NavLink>
            </li>
            <li>
                <NavLink to='/contact'>CONTACT US</NavLink>
            </li>
            <li>
                <NavLink to='/OrderTrack'>TRACK ORDER</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks;




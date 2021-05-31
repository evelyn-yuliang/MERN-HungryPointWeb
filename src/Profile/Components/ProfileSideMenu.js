import React from 'react'
import {
    NavLink,
    Link,
    useRouteMatch
  } from 'react-router-dom'
import './ProfileSideMenu.css'

const ProfileSideMenu = () => {
    let { url } = useRouteMatch()

    return (
        <nav class='profile-side-menu-main'>
            <NavLink exact={true} activeClassName='is-active' to={`${url}`}>
                Settings
            </NavLink>
            <NavLink exact={true} activeClassName='is-active' to={`${url}/myorders`}>
                My Orders
            </NavLink>
            <NavLink exact={true} activeClassName='is-active' to={`${url}/favoritemenus`}>
                Favorite Menus
            </NavLink>
            <NavLink exact={true} activeClassName='is-active' to={`${url}/myreviews`}>
                My Reviews
            </NavLink>
            <NavLink exact={true} activeClassName='is-active' to={`${url}/paymentmethods`}>
            Payment Methods
            </NavLink>
        </nav>
    )
}

export default ProfileSideMenu
import React from 'react'

import './MyOrderMenuItem.css'

const MyOrderMenuItem = (props) => {
    let menu = props.data
    return (
        <div class='profile-myorder-menu-item-main'>
            <img class='menu-img' src={menu.img} />
            <p class='menu-text-wrapper'>
                <p class='menu-name'>{menu.name}</p>
                <p class='menu-date'>{menu.date}</p>
                <p class='menu-price'>$ {menu.bill}</p>
            </p>
        </div>
    )
}

export default MyOrderMenuItem
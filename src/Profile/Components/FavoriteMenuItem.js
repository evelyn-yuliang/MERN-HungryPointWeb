import React from 'react'

import './FavoriteMenuItem.css'

const FavoriteMenuItem = (props) => {
    let menu = props.data
    return (
        <div class='profile-favorite-menu-item-main'>
            <img class='menu-img' src={menu.img} />
            <p class='menu-text-wrapper'>
                <p class='menu-name'>{menu.name}</p>
                <p class='menu-price'>$ {menu.price}</p>
            </p>
        </div>
    )
}

export default FavoriteMenuItem
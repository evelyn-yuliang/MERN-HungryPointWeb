import React from 'react'
import FavoriteMenuItem from './FavoriteMenuItem'

import './FavoriteMenus.css'

const menus = [
    {
        "id": 1,
        "name": "Braised Beef Steamed Bao",
        "img": "https://www.banhmiboys.com/wp-content/uploads/2020/03/Braised-Beef-Steamed-Bao.png",
        "price": 10
    },
    {
        "id": 2,
        "name": "Grilled Pork Banh Mi",
        "img": "https://www.banhmiboys.com/wp-content/uploads/2020/03/Grilled-Pork-Banh-Mi.png",
        "price": 10
    },
    {
        "id": 3,
        "name": "Panko Tofu Steamed Bao",
        "img": "https://www.banhmiboys.com/wp-content/uploads/2020/03/Panko-Tofu-Steamed-Bao.png",
        "price": 10
    }
]

const FavoriteMenus = () => {
    return (
        <div class="profile-favorite-menus-main">
            <h2>
                My favorite menus
            </h2>
            <ul>
            {
                menus.map((menu) => {
                    return (
                        <FavoriteMenuItem data={menu} key={menu.id} />
                    )
                })
            }
            </ul>
        </div>
    )
}

export default FavoriteMenus
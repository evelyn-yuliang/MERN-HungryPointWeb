import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useRouteMatch
} from 'react-router-dom'
  
import ProfileSideMenu from '../Components/ProfileSideMenu'
import Settings from '../Components/Settings'
import FavoriteMenus from '../Components/FavoriteMenus'

import ReviewsMenus from '../Review/Components/Reviews'
import MyOrderMenus from '../MyOrders/Components/MyOrderMenus'

import './ProfileMain.css'

const ProfileMain = () => {
    let { path, url } = useRouteMatch()

    return (
        <div class='profile-main'>
            <ProfileSideMenu />
            <Switch>
                <Route exact path={path}>
                    <Settings />
                </Route>
                <Route path={`${path}/favoritemenus`}>
                    <FavoriteMenus />
                </Route>
                <Route path={`${path}/myorders`}>
                    <MyOrderMenus />
                </Route>
                <Route path={`${path}/myreviews`}>
                    <ReviewsMenus />
                </Route>
            </Switch>
        </div>
    )
}

export default ProfileMain
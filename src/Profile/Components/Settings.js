import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";

import './Settings.css'

const Settings = () => {
    
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        axios.get("http://hungrypoint-backend.herokuapp.com/api/user/6088c3e05eb1670015db694f").then((response) => {
          setUserInfo(response.data);
        });
    }, []);

    return (
        <div class='profile-settings-main'>
            <div class='profile-settings-label'>
                Phone
            </div>
            <div class='profile-settings-value'>
                {userInfo.phone}
            </div>
            <div class='profile-settings-label'>
                Email
            </div>
            <div class='profile-settings-value'>
                {userInfo.email}
            </div>
            <div class='profile-settings-label'>
                Address
            </div>
            <div class='profile-settings-value'>
                {userInfo.address}
            </div>
        </div>
    )
}

export default Settings
import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";

import './TopPane.css'

const TopPane = () => {
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        axios.get("http://hungrypoint-backend.herokuapp.com/api/user/6088c3e05eb1670015db694f").then((response) => {
          setUserInfo(response.data);
        });
    }, []);

    return (
        <div class='top-pane-main'>
            <div class='top-pane-wrapper'>
                <div class='top-pane-left-area'>
                    <div class='top-pane-photo'></div>
                    <div class='top-pane-name'>
                        <h4>{userInfo.name}</h4>
                        <div class='top-pane-location'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="14" height="14" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="rbbb40-0 hoSSCx"><title>location-fill</title><path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z"></path></svg>
                            <span>{userInfo.address ? userInfo.address.split(',')[1] : ""}</span>
                        </div>
                    </div>
                </div>
                
                <div class='top-pane-left-area'>
                    <div class='top-pane-info-item'>
                        12
                        <span>Orders</span>
                    </div>
                    <div class='top-pane-info-item'>
                        3
                        <span>Reviews</span>
                    </div>
                </div>

                <button class='top-pane-edit-btn'>
                    Edit profile
                </button>
            </div>
        </div>
    )
}

export default TopPane
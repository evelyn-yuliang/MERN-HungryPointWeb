import React from 'react'

import './Review.css'
import StarRatings from 'react-star-ratings';

const ReviewMenuItem = (props) => {
    //let menu = props.reviews
    let menu = props
    return (
        <div class='profile-review-menu-item-main'>
            <p class='menu-text-wrapper'>
                <p class='menu-name'>{menu.review}</p>
                <p class='menu-price'>{menu.rating}/5</p>
                <StarRatings
                    rating={menu.rating}
                    starDimension="50px"
                    starSpacing="5px"
                />
            </p>
        </div>
    )
}

export default ReviewMenuItem
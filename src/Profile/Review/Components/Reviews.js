import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ReviewMenus.css'
import './Review.css'
import StarRatings from 'react-star-ratings';

// const menus = [
//     {
//         "id": 1,
//         "comments": "Order was delivered at right time",
//         "ratings": 5
//     },
//     {
//         "id": 2,
//         "comments": "Food Delivery late.",
//         "ratings": 3
//     },
//     {
//         "id": 3,
//         "comments": "I love this restaurant.",
//         "ratings": 3
//     },
//     {
//         "id": 4,
//         "comments": "Needs better Customer Service",
//         "ratings": 2
//     },
// ]
const ReviewsList = () => {
    const [reviews, setReviews] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:5000/api/restaurant_reviews/user/123').then((response) => {
        setReviews(response.data);
        //console.log("Reviews data from user : "+response);
      });
    }, []);
  
    return (
      <div>
          <h2>
                Your Reviews : 
            </h2>
        {reviews.map((reviews) => (
          <Reviews reviews={reviews} key={reviews._id} />
        ))}
      </div>
    );
  };

const Reviews = (props) => {
    return (
        <div class='profile-review-menus-main'>
        <div class='profile-review-menu-item-main'>
        {
            <p class='menu-text-wrapper'>
                <p class='menu-name'>{props.reviews.review}</p>
                <p class='menu-price'>{props.reviews.rating}/5</p>
                <StarRatings
                    //rating={props.reviews.rating}
                    rating={3}
                    starDimension="50px"
                    starSpacing="5px"
                />
            </p>
        }
        </div> 
        </div>
    )
}

export default ReviewsList
import React from 'react'
import queryString from 'query-string';
import './Order.css'
const Order = () => {
       
          const search = window.location.search;
    const params = new URLSearchParams(search);
    const price = params.get('price');
    const title = params.get('title');
    console.log(price);
    console.log(title);
    return (
        <div class="center">
            <h1>Order Summary</h1>
            <p>Item:  {title}</p>
            <p>Total: {price}</p>        
        </div>
    )
}

export default Order;

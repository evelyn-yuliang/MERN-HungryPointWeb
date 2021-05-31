import React, { useState, useEffect } from 'react';
import './MyOrderMenus.css'
import axios from 'axios';

const OrderHistoryList = () => {
    const [orders, setOrders] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:5000/api/order_history/123').then((response) => {
        setOrders(response.data);
      });
    }, []);
  
    return (
      <div>
          <h2>
            Your Orders : 
            </h2>
        {orders.map((orders) => (
          <OrderHistory orders={orders} key={orders._id} />
        ))}
      </div>
    );
  };

const OrderHistory = (props) => {
    return (
        <div class="profile-myorder-menus-main">
        <div class='profile-myorder-menu-item-main'>
            <img class='menu-img' src="https://e7.pngegg.com/pngimages/431/519/png-clipart-pizza-hut-sushi-pizza-delivery-pizza.png" />
            <p class='menu-text-wrapper'>
                <p class='menu-name'>{props.orders.orderId}</p>
                <p class='menu-date'>At {props.orders.orderLocation}</p>
                <p class='menu-date'>{props.orders.orderTime}</p>
                <p class='menu-price'>${props.orders.price}</p>
            </p>
        </div>
        </div>
    )
}

export default OrderHistoryList

//https://e7.pngegg.com/pngimages/431/519/png-clipart-pizza-hut-sushi-pizza-delivery-pizza.png
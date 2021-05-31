import React, { useState,useContext } from "react";
import { Link } from 'react-router-dom';
import "./Item.css";
import Modal from "./Modal";
import { CartContext } from '../../contexts/CartContext';

const Item = ({product}) => {
  const { addProduct, cartItems, increase } = useContext(CartContext);

  const [showSubMneu, setShowSubMenu] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const openSubMenuHandler = () => setShowSubMenu(true);
  const closeSubMenuHandler = () => setShowSubMenu(false);
  const addToCartHandler = () =>{
   addProduct(product);
   setShowSubMenu(false);
  }
  const isInCart = product => {
    return !!cartItems.find(item => item._id === product._id);
}

 return (
    <React.Fragment>
      <li className="sandwich" onClick={openSubMenuHandler}>
        <a href="#"></a>
        <div class="imgBox">
          {/* <img src={product.image} alt={product.title} /> */} 
          {/* <img src={require("../Images/chicken.jpg").default} alt={product.title} />*/}
          <img src={require(`../Images/${product.image}.jpg`).default} />
        </div>
        <div className="info">
          <p>
            <a href="">{product.title}</a>
          </p>
          <p>${product.price}</p>
        </div>
      </li>
      <Modal
        show={showSubMneu}
        onCancel={closeSubMenuHandler}
        header={product.title}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <button class="button-cancel" onClick={closeSubMenuHandler}>CLOSE</button>
            { <Link to={`/order/?title=${product.title}&price=${product.price}`} className="button-order">ORDER</Link>
             }
              {
                    !isInCart(product) && 
                    <button 
                    onClick={addToCartHandler}
                    className="btn btn-primary btn-sm">Add to cart</button>
                }
          </React.Fragment>
        }
      >
        <div class="submenu-container">
          <div class="imgBox-modal">
              <img src={require(`../Images/${product.image}.jpg`).default} alt={product.title} />
          </div>
          <div class="description">
            <p class="description-p">{product.description}</p>
            <p>${product.price}</p>
          </div>
  
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default Item;

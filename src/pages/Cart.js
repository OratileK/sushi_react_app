import React from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "../styles/Cart.css";
import { CartProvider, useCart } from "react-use-cart";
import {cartItems} from "../pages/Menu.js";



function Cart() {
    const {
      isEmpty,
      totalUniqueItems,
      items,
      updateItemQuantity,
      removeItem,
    } = useCart();
  
    if (isEmpty) return <p>Your cart is empty</p>;
    <div className="cart">
    <h2>Cart</h2>
    <ul>
      {cartItems.map((item, index) => (
        <li key={index}>
          {item.name} - R{item.price}
        </li>
      ))}
    </ul>
  </div>
  
    return (
      <>
        <h1>Cart ({totalUniqueItems})</h1>
  
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.quantity} x {item.name} &mdash;
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <button
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button onClick={() => removeItem(item.id)}>&times;</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
  

  export default Cart;
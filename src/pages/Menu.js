import React, { useState } from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import {Link} from "react-router-dom";

function Menu() {
  // State to keep track of the items in the cart
  const [cartItems, setCartItems] = useState([]);

  // Function to handle adding an item to the cart
  const addToCart = (menuItem) => {
    setCartItems([...cartItems, menuItem]);
  };

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <div key={key}>
              <MenuItem
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
              />
              <Link to="/cart"></Link>
              <button onClick={() => addToCart(menuItem)}>Add to Cart</button>
            </div>
          );
        })}
      </div>
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
    </div>
  );
}

export default Menu;

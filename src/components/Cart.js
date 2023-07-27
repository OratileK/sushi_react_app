import React, { useState }  from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "../styles/Cart.css";



const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to handle adding an item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Function to handle removing an item from the cart
  const removeFromCart = (item) => {
    setCartItems((prevItems) => prevItems.filter((cartItem) => cartItem.id !== item.id));
  };

  // Function to calculate the total price of items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
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
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
        
      ) : (

        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - R{item.price}
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total: R{calculateTotal()}</p>
    </div>
  );
};

  export default Cart;
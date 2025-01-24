import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import "./Cart.css"; // Create a CSS file for styling if needed

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="cart-item-price">{item.price}</p>
                <button onClick={() => removeFromCart(item.id)} className="btn btn-danger">
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="cart-summary">
        <h2>
          Total: ${cartItems.reduce((total, item) => {
            const price = parseFloat(item.price.replace(/[^0-9.-]+/g, "")); // Remove non-numeric characters and convert to number
            return total + (isNaN(price) ? 0 : price); // Add only if the price is a valid number
          }, 0).toFixed(2)}
        </h2>
        <button className="btn btn-primary">Checkout</button>
      </div>
      
      )}
    </div>
  );
}

export default Cart;

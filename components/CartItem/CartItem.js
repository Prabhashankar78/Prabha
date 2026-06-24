import React from 'react';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/helpers';
import './CartItem.css';

const CartItem = ({ item, showToast }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (delta) => {
    const newQty = item.qty + delta;
    if (newQty > 0) {
      updateQuantity(item.id, newQty);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
    showToast(`${item.name} removed from cart`, 'success');
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p className="cart-item-brand">{item.brand}</p>
      </div>
      <div className="cart-item-quantity">
        <button onClick={() => handleQuantityChange(-1)}>-</button>
        <span>{item.qty}</span>
        <button onClick={() => handleQuantityChange(1)}>+</button>
      </div>
      <div className="cart-item-price">
        {formatCurrency(item.price)}
      </div>
      <div className="cart-item-total">
        {formatCurrency(item.price * item.qty)}
      </div>
      <button className="cart-item-remove" onClick={handleRemove}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;

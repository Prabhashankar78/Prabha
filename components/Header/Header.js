import React from 'react';
import './Header.css';
import { useCart } from '../../context/CartContext';

const Header = ({ onNavigate }) => {
  const { cartCount } = useCart();
  return (
    <header>
      <div className="logo">SMART MOBILE</div>
      <nav>
        <a onClick={() => onNavigate('home')}>Home</a>
        <a onClick={() => onNavigate('products')}>Products</a>
        <a onClick={() => onNavigate('cart')}>Cart</a>
        <a onClick={() => onNavigate('contact')}>Contact</a>
      </nav>
      <button className="cart-btn" onClick={() => onNavigate('cart')}>
        Cart<span className="cart-count">{cartCount}</span>
      </button>
    </header>
  );
};

export default Header;

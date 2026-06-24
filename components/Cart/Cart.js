import React from 'react';
import { useCart } from '../../context/CartContext';
import CartItem from '../CartItem';
import { formatCurrency } from '../../utils/helpers';
import './Cart.css';

const Cart = ({ cartRef, onOrderClick, showToast }) => {
  const { cart, cartTotal, clearCart } = useCart();

  const deliveryFee = cart.length > 0 ? 0 : 0;
  const tax = cartTotal * 0.18;
  const finalTotal = cartTotal + deliveryFee + tax;

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear the cart?')) {
      clearCart();
      showToast('Cart cleared successfully', 'success');
    }
  };

  return (
    <section className="cart-section" ref={cartRef}>
      <div className="cart-container">
        <div className="cart-header">
          <h2 className="section-title">Shopping Cart</h2>
          {cart.length > 0 && (
            <button className="clear-cart-btn" onClick={handleClearCart}>
              <i className="fas fa-trash"></i>
              Clear Cart
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <i className="fas fa-shopping-cart"></i>
            <h3>Your cart is empty</h3>
            <p>Add some products to get started!</p>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              <div className="cart-items-header">
                <span>Product</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Total</span>
                <span></span>
              </div>
              {cart.map((item, index) => (
                <CartItem key={index} item={item} showToast={showToast} />
              ))}
            </div>

            <div className="cart-summary">
              <h3>Order Summary</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>{formatCurrency(cartTotal)}</span>
              </div>
              <div className="summary-row">
                <span>Delivery Fee</span>
                <span className="free-delivery">
                  {deliveryFee === 0 ? 'FREE' : formatCurrency(deliveryFee)}
                </span>
              </div>
              <div className="summary-row">
                <span>Tax (18%)</span>
                <span>{formatCurrency(tax)}</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row total-row">
                <span>Total</span>
                <span>{formatCurrency(finalTotal)}</span>
              </div>
              <button className="checkout-btn" onClick={onOrderClick}>
                <i className="fas fa-lock"></i>
                Proceed to Checkout
              </button>
              <div className="secure-checkout">
                <i className="fas fa-shield-alt"></i>
                <span>Secure Checkout</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;

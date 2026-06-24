import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { generateOrderId } from '../../utils/helpers';
import './OrderForm.css';

const OrderForm = ({ orderRef, showToast }) => {
  const { clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.email || !formData.address) {
      showToast('Please Fill All Customer Details', 'error');
      return;
    }
    
    const orderNumber = generateOrderId();
    showToast(`✅ Order ${orderNumber} Placed Successfully! Thank You For Shopping.`, 'success');
    
    clearCart();
    setFormData({ name: '', phone: '', email: '', address: '' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="cart-section order-form-section" ref={orderRef}>
      <h2 className="section-title">Customer Details</h2>
      <div className="order-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="address"
          placeholder="Full Address"
          value={formData.address}
          onChange={handleChange}
        ></textarea>
        <button className="order-btn" onClick={handleSubmit}>
          Place Order
        </button>
      </div>
    </section>
  );
};

export default OrderForm;

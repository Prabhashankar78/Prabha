import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/helpers';
import './ProductCard.css';

const ProductCard = ({ product, showToast }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, addToWishlist, isInWishlist } = useCart();

  const handleQuantityChange = (delta) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    showToast(`${quantity} x ${product.name} added to cart!`, 'success');
    setQuantity(1);
  };

  const handleWishlistToggle = () => {
    addToWishlist(product);
    const message = isInWishlist(product.id) 
      ? 'Removed from wishlist' 
      : 'Added to wishlist!';
    showToast(message, 'success');
  };

  return (
    <div className="product-card">
      {product.discount > 0 && (
        <div className="product-badge">{product.discount}% OFF</div>
      )}
      {!product.inStock && <div className="product-badge out-of-stock">Out of Stock</div>}
      
      <button 
        className={`wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}`}
        onClick={handleWishlistToggle}
      >
        <i className={`${isInWishlist(product.id) ? 'fas' : 'far'} fa-heart`}></i>
      </button>

      <div className="product-image">
        <img src={product.img} alt={product.name} />
      </div>

      <div className="product-info">
        <span className="product-brand">{product.brand}</span>
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <i 
                key={i} 
                className={`fas fa-star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
              ></i>
            ))}
          </div>
          <span className="rating-text">{product.rating} ({product.reviews})</span>
        </div>

        <div className="product-features">
          {product.features.slice(0, 3).map((feature, index) => (
            <span key={index} className="feature-tag">{feature}</span>
          ))}
        </div>

        <div className="product-pricing">
          <div className="prices">
            <span className="current-price">{formatCurrency(product.price)}</span>
            {product.originalPrice && (
              <span className="original-price">{formatCurrency(product.originalPrice)}</span>
            )}
          </div>
        </div>

        <div className="qty-selector">
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>

        <button 
          className="add-cart-btn" 
          onClick={handleAddToCart}
          disabled={!product.inStock}
        >
          <i className="fas fa-shopping-cart"></i>
          {product.inStock ? 'Add To Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

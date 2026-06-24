import React, { useRef } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import OrderForm from './components/OrderForm/OrderForm';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Toast from './components/Toast/Toast';
import { useToast } from './hooks/useToast';
import './styles/global.css';

function AppContent() {
  const { toast, showToast } = useToast();
  const productsRef = useRef(null);
  const cartRef = useRef(null);
  const contactRef = useRef(null);
  const orderRef = useRef(null);

  const handleNavigation = (section) => {
    const refs = {
      home: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
      products: () => productsRef.current?.scrollIntoView({ behavior: 'smooth' }),
      cart: () => cartRef.current?.scrollIntoView({ behavior: 'smooth' }),
      contact: () => contactRef.current?.scrollIntoView({ behavior: 'smooth' })
    };
    refs[section]?.();
  };

  const handleOrderClick = () => {
    orderRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header onNavigate={handleNavigation} />
      <Hero onNavigate={handleNavigation} />
      <Features />
      <Products productsRef={productsRef} showToast={showToast} />
      <Cart cartRef={cartRef} onOrderClick={handleOrderClick} showToast={showToast} />
      <OrderForm orderRef={orderRef} showToast={showToast} />
      <Contact contactRef={contactRef} />
      <Footer />
      <Toast message={toast.message} type={toast.type} isVisible={toast.isVisible} />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;

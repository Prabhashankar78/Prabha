import React from 'react';
import './Contact.css';

const Contact = ({ contactRef }) => {
  return (
    <section className="contact-section" ref={contactRef}>
      <h2 className="section-title">Contact Us</h2>
      <p className="contact-text">
        Smart Mobile Store is a trusted destination for customers who are looking for premium smartphones, 
        excellent service, and secure shopping experiences. Our store was created with the vision of making 
        smartphone shopping simple, reliable, and affordable for everyone. We offer a wide range of mobile 
        phones from globally recognized brands including Apple, Samsung, OnePlus, Vivo, Oppo, Xiaomi, 
        Google Pixel, Asus ROG, and many more.
        <br /><br />
        Our goal is to provide customers with the latest smartphones equipped with advanced technology, 
        high-performance processors, professional-grade cameras, long-lasting batteries, and modern designs. 
        Every product listed on our platform is carefully selected to ensure quality and customer satisfaction. 
        We continuously update our catalog with newly launched devices so that customers can always access 
        the latest innovations in the smartphone industry.
        <br /><br />
        At Smart Mobile Store, customer satisfaction is our highest priority. We provide detailed product 
        information, transparent pricing, secure payment options, and reliable delivery services. Our support 
        team is available to assist customers with product recommendations, order-related questions, warranty 
        guidance, and technical assistance. Whether you are a student, working professional, gamer, content 
        creator, or business user, we help you choose the smartphone that best fits your needs and budget.
        <br /><br />
        We believe that technology should be accessible and enjoyable. That is why we focus on offering 
        competitive prices, special deals, seasonal discounts, and exclusive offers throughout the year. 
        Customers can confidently shop knowing that they are receiving genuine products backed by dependable 
        customer support.
        <br /><br />
        Thank you for choosing Smart Mobile Store. We appreciate your trust and look forward to serving 
        you with the best smartphone shopping experience possible. For support, product inquiries, delivery 
        information, or partnership opportunities, feel free to contact our team. We are committed to 
        providing quality service, innovative products, and complete customer satisfaction every step of the way.
      </p>
    </section>
  );
};

export default Contact;

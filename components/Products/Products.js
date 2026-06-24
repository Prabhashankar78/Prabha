import React, { useState } from 'react';
import ProductCard from '../ProductCard';
import SearchBar from '../SearchBar';
import FilterSidebar from '../FilterSidebar';
import { products as allProducts, categories, brands, priceRanges } from '../../data/products';
import './Products.css';

const Products = ({ productsRef, showToast }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;
    const priceRange = priceRanges[selectedPriceRange];
    const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
    
    return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSelectedBrand('All');
    setSelectedPriceRange(0);
    setSearchTerm('');
    setSortBy('featured');
  };

  return (
    <section className="products-section" ref={productsRef}>
      <div className="products-container">
        <h2 className="section-title">Premium Smartphones</h2>
        
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <div className="products-layout">
          <FilterSidebar
            categories={categories}
            brands={brands}
            priceRanges={priceRanges}
            selectedCategory={selectedCategory}
            selectedBrand={selectedBrand}
            selectedPriceRange={selectedPriceRange}
            onCategoryChange={setSelectedCategory}
            onBrandChange={setSelectedBrand}
            onPriceRangeChange={setSelectedPriceRange}
            onClearFilters={handleClearFilters}
          />

          <div className="products-main">
            <div className="products-header">
              <p className="products-count">
                Showing {sortedProducts.length} of {allProducts.length} products
              </p>
              <div className="sort-dropdown">
                <label>Sort by:</label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>

            {sortedProducts.length === 0 ? (
              <div className="no-products">
                <i className="fas fa-search"></i>
                <h3>No products found</h3>
                <p>Try adjusting your filters or search terms</p>
                <button className="clear-filters-btn" onClick={handleClearFilters}>
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="product-grid">
                {sortedProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    showToast={showToast}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

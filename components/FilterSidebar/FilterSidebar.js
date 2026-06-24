import React from 'react';
import './FilterSidebar.css';

const FilterSidebar = ({
  categories,
  brands,
  priceRanges,
  selectedCategory,
  selectedBrand,
  selectedPriceRange,
  onCategoryChange,
  onBrandChange,
  onPriceRangeChange,
  onClearFilters
}) => {
  return (
    <div className="filter-sidebar">
      <div className="filter-header">
        <h3>Filters</h3>
        <button onClick={onClearFilters}>Clear All</button>
      </div>

      <div className="filter-section">
        <h4>Category</h4>
        {categories.map(cat => (
          <label key={cat} className="filter-option">
            <input
              type="radio"
              name="category"
              checked={selectedCategory === cat}
              onChange={() => onCategoryChange(cat)}
            />
            <span>{cat}</span>
          </label>
        ))}
      </div>

      <div className="filter-section">
        <h4>Brand</h4>
        {brands.map(brand => (
          <label key={brand} className="filter-option">
            <input
              type="radio"
              name="brand"
              checked={selectedBrand === brand}
              onChange={() => onBrandChange(brand)}
            />
            <span>{brand}</span>
          </label>
        ))}
      </div>

      <div className="filter-section">
        <h4>Price Range</h4>
        {priceRanges.map((range, index) => (
          <label key={index} className="filter-option">
            <input
              type="radio"
              name="price"
              checked={selectedPriceRange === index}
              onChange={() => onPriceRangeChange(index)}
            />
            <span>{range.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;

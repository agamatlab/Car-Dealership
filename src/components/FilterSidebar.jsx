import React, { useState } from 'react';

function FilterSidebar({ filters, onFilterChange }) {
  const [priceRange, setPriceRange] = useState(filters.priceRange);

  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(e.target.value);
    if (newRange[0] > newRange[1]) {
      newRange[index === 0 ? 1 : 0] = newRange[index];
    }
    setPriceRange(newRange);
    onFilterChange({ ...filters, priceRange: newRange });
  };

  const handleCheckboxChange = (e, category) => {
    const { checked, value } = e.target;
    const newFilters = { ...filters };
    if (checked) {
      newFilters[category].push(value);
    } else {
      newFilters[category] = newFilters[category].filter(item => item !== value);
    }
    onFilterChange(newFilters);
  };

  const carPrices = [45000, 50000, 42000, 55000, 48000, 47000, 60000, 52000, 53000, 49000, 51000, 46000, 44000, 43000, 54000];
  const histogramData = Array(10).fill(0);

  carPrices.forEach(price => {
    const index = Math.floor((price - 20000) / 8000);
    histogramData[index] += 1;
  });

  return (
    <div className="filter-sidebar">
      <h2>Filters</h2>
      <div className="filter-group">
        <label>Price range: ${priceRange[0]} - ${priceRange[1]}</label>
        <div className="range-inputs">
          <input
            type="range"
            min="20000"
            max="100000"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(e, 0)}
          />
          <input
            type="range"
            min="20000"
            max="100000"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(e, 1)}
          />
        </div>
        <div className="histogram">
          {histogramData.map((count, index) => (
            <div key={index} className="bar" style={{ height: `${count * 10}px` }}></div>
          ))}
        </div>
      </div>
      <div className="filter-group">
        <label>Type</label>
        <div>
          <input type="checkbox" value="Sedan" onChange={(e) => handleCheckboxChange(e, 'types')} />
          <label>Sedan</label>
        </div>
        <div>
          <input type="checkbox" value="SUV" onChange={(e) => handleCheckboxChange(e, 'types')} />
          <label>SUV</label>
        </div>
        <div>
          <input type="checkbox" value="Coupe" onChange={(e) => handleCheckboxChange(e, 'types')} />
          <label>Coupe</label>
        </div>
      </div>
      <div className="filter-group">
        <label>Color</label>
        <div>
          <input type="checkbox" value="#000000" onChange={(e) => handleCheckboxChange(e, 'colors')} />
          <span className="color-bubble" style={{ backgroundColor: '#000000' }}></span>
          <label>Black</label>
        </div>
        <div>
          <input type="checkbox" value="#ffffff" onChange={(e) => handleCheckboxChange(e, 'colors')} />
          <span className="color-bubble" style={{ backgroundColor: '#ffffff' }}></span>
          <label>White</label>
        </div>
        <div>
          <input type="checkbox" value="#3498db" onChange={(e) => handleCheckboxChange(e, 'colors')} />
          <span className="color-bubble" style={{ backgroundColor: '#3498db' }}></span>
          <label>Blue</label>
        </div>
        <div>
          <input type="checkbox" value="#e74c3c" onChange={(e) => handleCheckboxChange(e, 'colors')} />
          <span className="color-bubble" style={{ backgroundColor: '#e74c3c' }}></span>
          <label>Red</label>
        </div>
        <div>
          <input type="checkbox" value="#2ecc71" onChange={(e) => handleCheckboxChange(e, 'colors')} />
          <span className="color-bubble" style={{ backgroundColor: '#2ecc71' }}></span>
          <label>Green</label>
        </div>
      </div>
      <div className="filter-group">
        <label>Labels</label>
        <div>
          <input type="checkbox" value="New" onChange={(e) => handleCheckboxChange(e, 'labels')} />
          <label>New</label>
        </div>
        <div>
          <input type="checkbox" value="Featured" onChange={(e) => handleCheckboxChange(e, 'labels')} />
          <label>Featured</label>
        </div>
        <div>
          <input type="checkbox" value="Best Seller" onChange={(e) => handleCheckboxChange(e, 'labels')} />
          <label>Best Seller</label>
        </div>
      </div>
    </div>
  );
}

export default FilterSidebar;

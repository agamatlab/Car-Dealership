import React, {useState} from 'react';

import FilterSidebar from '../components/FilterSidebar';
import CarList from '../components/CarList';
import carData from '../data/cars.json';

function BrowseCars() {
    const [filters, setFilters] = useState({
        priceRange: [20000, 100000],
        types: [],
        colors: [],
        labels: []
      });
    
      const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
      };
    
      const filteredCars = carData.filter((car) => {
        const price = parseInt(car.price.replace(/[$,]/g, ''));
        const matchesPrice = price >= filters.priceRange[0] && price <= filters.priceRange[1];
        const matchesType = filters.types.length === 0 || filters.types.includes(car.type);
        const matchesColor = filters.colors.length === 0 || filters.colors.includes(car.color);
        const matchesLabels = filters.labels.length === 0 || car.labels.some(label => filters.labels.includes(label));
    
        return matchesPrice && matchesType && matchesColor && matchesLabels;
      });
    
  return (
    <>
        <div className="app">
            <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
            <CarList cars={filteredCars} />
        </div>
    </>

  );
}

export default BrowseCars;

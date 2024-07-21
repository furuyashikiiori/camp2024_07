import React, { useState } from 'react';
import './CategoryFilter.css';

const CategoryFilter = ({ setCategory }) => {
  const categories = ['All', 'Work', 'Personal', 'Shopping', 'Others'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setCategory(cat);
  };

  return (
    <div className="category-filter">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleCategoryClick(cat)}
          className={selectedCategory === cat ? 'selected' : ''}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;

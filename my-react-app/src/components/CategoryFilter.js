import React from 'react';

const CategoryFilter = ({ setCategory }) => {
  const categories = ['All', 'Work', 'Personal', 'Shopping', 'Others'];

  return (
    <div className="category-filter">
      {categories.map((cat) => (
        <button key={cat} onClick={() => setCategory(cat)}>
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;

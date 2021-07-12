import React from 'react';

const Category = ({categories, displaySection}) => {
    return <div className="btn-container">
      {
        categories.map((category, index) => {
            return <button className="btn" key={index} onClick={() => displaySection(category)}>{category}</button>
        })
      }
    </div>;
};

export default Category;
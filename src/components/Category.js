import React from 'react';

function Category() {
  return (
    <section className="categories">
      <div className="category">
        <img src="women-category.jpg" alt="여성 의류" />
        <p>Women</p>
      </div>
      <div className="category">
        <img src="men-category.jpg" alt="남성 의류" />
        <p>Men</p>
      </div>
      <div className="category">
        <img src="electronics-category.jpg" alt="전자 제품" />
        <p>Electronics</p>
      </div>
    </section>
  );
}

export default Category;

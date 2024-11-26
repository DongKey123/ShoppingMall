import React from 'react';

function ProductCard({ name, price }) {
  return (
    <div className="product-card">
      <img src="product-placeholder.jpg" alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <button>Buy Now</button>
    </div>
  );
}

export default ProductCard;

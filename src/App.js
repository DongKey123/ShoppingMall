import React from 'react';
import Header from './components/Header';
import Category from './components/Category';
import ProductCard from './components/ProductCard';
import PromotionBanner from './components/PromotionBanner';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <PromotionBanner />
      <Category />
      <div className="product-section">
        <h2>추천 상품</h2>
        <div className="product-list">
          <ProductCard name="상품 1" price="$29.99" />
          <ProductCard name="상품 2" price="$19.99" />
          <ProductCard name="상품 3" price="$39.99" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

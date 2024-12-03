import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Category from './components/Category';
import ProductCard from './components/ProductCard';
import PromotionBanner from './components/PromotionBanner';
import Footer from './components/Footer';
import Login from './pages/Login';
import Account from './pages/Account';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리

  return (
    <Router>
      <div>
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          {/* 메인 페이지 */}
          <Route
            path="/"
            element={
              <>
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
              </>
            }
          />
          {/* 로그인 페이지 */}
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          {/* 계정 페이지 */}
          <Route path="/account" element={<Account />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

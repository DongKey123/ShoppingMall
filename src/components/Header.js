import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ isLoggedIn }) {
  return (
    <header>
      <nav className="header-nav">
        <div className="logo">
          <img src="/assets/logo.png" alt="쇼핑몰 로고" style={{ width: '100px', height: 'auto' }} />
        </div>
        <div className="menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/women">Women</Link></li>
            <li><Link to="/men">Men</Link></li>
            <li><Link to="/electronics">Electronics</Link></li>
          </ul>
        </div>
        <div className="right-section">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="account">
            {/* 로그인 상태에 따라 버튼 변경 */}
            {isLoggedIn ? (
              <Link to="/account">
                <button>Account</button>
              </Link>
            ) : (
              <Link to="/login">
                <button>Login</button>
              </Link>
            )}
          </div>
          <div className="cart">
            <button>Cart (0)</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <nav>
                <div className="logo">
                    {/* public 폴더에서 이미지를 불러올 때는 절대 경로 사용 */}
                    <img
                        src="/assets/logo.png"
                        alt="쇼핑몰 로고"
                        style={{ width: '100px', height: 'auto' }}
                    />          </div>
                <div className="menu">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/women">Women</a></li>
                        <li><a href="/men">Men</a></li>
                        <li><a href="/electronics">Electronics</a></li>
                    </ul>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search for products..." />
                </div>
                <div className="cart">
                    <button>Cart (0)</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;

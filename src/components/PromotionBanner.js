import React, { useState } from 'react';
import './PromotionBanner.css';

function PromotionBanner() {
  const banners = [
    { title: '주말 세일! 50% 할인', description: '지금 바로 쇼핑하고 50% 할인 혜택을 받으세요!' },
    { title: '신제품 출시', description: '신제품을 가장 먼저 만나보세요!' },
    { title: '멤버십 혜택', description: '멤버십 회원만을 위한 특별 할인 혜택!' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1));
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="promotion-banner">
      <button className="nav-button left" onClick={handlePrevious}>&lt;</button>
      <button className="nav-button right" onClick={handleNext}>&gt;</button>

      <h2>{banners[currentIndex].title}</h2>
      <p>{banners[currentIndex].description}</p>

      <div className="banner-indicators">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`indicator ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)}
          ></div>
        ))}
      </div>
    </section>
  );
}

export default PromotionBanner;

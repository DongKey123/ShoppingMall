import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <a href="/terms">이용 약관</a>
        <a href="/privacy">개인정보 처리 방침</a>
        <a href="/support">고객 센터</a>
      </div>
      <div className="social-icons">
        <a href="https://facebook.com">Facebook</a>
        <a href="https://instagram.com">Instagram</a>
        <a href="https://twitter.com">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;

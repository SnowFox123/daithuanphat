import React from 'react';

export default function FooterPage() {
  return (
    <footer className="footer">
      <div>
        <p className="footer_content1">CÔNG TY TNHH CINEMA VIỆT NAM</p>
        <div className="footer-container">
          <div className="footer-left-content">
            Liên hệ:<br />
            Email: cinema@gmail.com<br />
            Điện thoại: +84 (24) 8888 9999<br />
            <br />
          </div>
          <div className="footer-mid-content">
            Trụ sở chính:<br />
            Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh<br />
            <br />
          </div>
          <img className="footer-right-content" src="https://fpt.edu.vn/Content/images/assets/Logo-FU-03.png" alt="" width="100" height="28" />
        </div>
      </div>
    </footer>
  );
}

import React, { useState, useEffect } from 'react';
import '../style/slideshow3.css';

import vp5 from '../image/vp5.jpg';
import vp7 from '../image/vp7.jpg';
import vp from '../image/vp.jpg';
import vp8 from '../image/vp8.jpg';

function Slideshow3() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextSlide = (currentSlide % 4) + 1; // Assuming you have 4 slides
      setCurrentSlide(nextSlide);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  const goToPreviousSlide = () => {
    const previousSlide = currentSlide === 1 ? 4 : currentSlide - 1;
    setCurrentSlide(previousSlide);
  };

  const goToNextSlide = () => {
    const nextSlide = currentSlide === 4 ? 1 : currentSlide + 1;
    setCurrentSlide(nextSlide);
  };

  return (
    <div className="CSSgal">
      <s id="s1"></s>
      <s id="s2"></s>
      <s id="s3"></s>
      <s id="s4"></s>

      <div className="slider" style={{ transform: `translateX(-${(currentSlide - 1) * 100}%)` }}>
        {/* Using imported images */}
        <div style={{ backgroundImage: `url(${vp5})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
          <p>KHÔNG NGỪNG VƯƠN XA & VƯỢT QUA KHÓ KHĂN</p>
        </div>
        <div style={{ backgroundImage: `url(${vp7})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
          <p>KỸ THUẬT IN LỤA</p>
        </div>
        <div style={{ backgroundImage: `url(${vp})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
          <p>TÁC NGHIỆP KỸ THUẬT & TRIỂN KHAI SẢN XUẤT</p>
        </div>
        <div style={{ backgroundImage: `url(${vp8})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
          <p>PHÒNG HỌP CHUYÊN NGHIỆP</p>
        </div>
      </div>

      <div className="prevNext">
        <div>
          <button onClick={goToPreviousSlide}>&#10094;</button>
          <button onClick={goToNextSlide}>&#10095;</button>
        </div>
      </div>
    </div>
  );
}

export default Slideshow3;

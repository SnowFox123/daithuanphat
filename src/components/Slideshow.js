import React, { useState, useEffect } from 'react';
import img1 from '../image/vp5.jpg';
import img2 from '../image/vp7.jpg';
import img3 from '../image/vp.jpg';
import img4 from '../image/vp8.jpg';

import '../style/style.css';

function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [previousSlideIndex, setPreviousSlideIndex] = useState(0); // Initialize previousSlideIndex

  const slides = [
    { imageSrc: img1, caption: "KHÔNG NGỪNG VƯƠN XA & VƯỢT QUA KHÓ KHĂN" },
    { imageSrc: img2, caption: "KỸ THUẬT IN LỤA" },
    { imageSrc: img3, caption: "TÁC NGHIỆP KỸ THUẬT & TRIỂN KHAI SẢN XUẤT" },
    { imageSrc: img4, caption: "PHÒNG HỌP CHUYÊN NGHIỆP" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousSlideIndex(slideIndex); // Update previousSlideIndex before changing slideIndex
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slideIndex, slides.length]); // Include slideIndex and slides.length in the dependency array

  const plusDivs = (n) => {
    const newIndex = (slideIndex + n + slides.length) % slides.length;
    setPreviousSlideIndex(slideIndex);
    setSlideIndex(newIndex);
  };

  // <div className="w3-content w3-display-container">
  //   {slides.map((slide, index) => (
  //     <div key={index} className={`w3-display-container mySlides ${index === slideIndex ? 'active' : ''}`}>
  //       <img className="slide-img" src={slide.imageSrc} alt={slide.caption} />
  //       <div className="w3-display-bottommiddle w3-large w3-container text-slideshow">
  //         {slide.caption}
  //       </div>
  //     </div>
  //   ))}
  //   <button className="w3-button w3-display-left w3-black" onClick={() => plusDivs(-1)}>&#10094;</button>
  //   <button className="w3-button w3-display-right w3-black" onClick={() => plusDivs(1)}>&#10095;</button>
  // </div>

  return (
    <div style={{display: 'flex'}} className="w3-content w3-display-container">
      <div className="slides-wrapper previous-slides">
        {slides.map((slide, index) => (
          <div key={index} className={`w3-display-container mySlides ${index === previousSlideIndex ? 'active' : ''} previous-slide`}>
            <img className="slide-img" src={slide.imageSrc} alt={slide.caption} />
            <div className="w3-display-bottommiddle w3-large w3-container text-slideshow">
              {slide.caption}
            </div>
          </div>
        ))}
      </div>
      <div className="slides-wrapper">
        {slides.map((slide, index) => (
          <div key={index} className={`w3-display-container mySlides ${index === slideIndex ? 'active' : ''}`}>
            <img className="slide-img" src={slide.imageSrc} alt={slide.caption} />
            <div className="w3-display-bottommiddle w3-large w3-container text-slideshow">
              {slide.caption}
            </div>
          </div>
        ))}
      </div>
      <button className="w3-button w3-display-left w3-black" onClick={() => plusDivs(-1)}>&#10094;</button>
      <button className="w3-button w3-display-right w3-black" onClick={() => plusDivs(1)}>&#10095;</button>
    </div>
  );
}

export default Slideshow;

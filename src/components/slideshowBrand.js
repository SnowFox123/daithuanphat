import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import '../style/slideshow3.css';

function SlideshowBrand() {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await axios.get(`https://65ea1a08c9bf92ae3d3b159b.mockapi.io/daithuanphat/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        getProduct();
    }, [id]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextSlide = (currentSlide % 4) + 1; // Assuming you have 4 slides
            setCurrentSlide(nextSlide);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(intervalId);
    }, [currentSlide]);

    const goToSlide = (slideNumber) => {
        setCurrentSlide(slideNumber);
    };

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
                {product ? (
                    <>
                        {/* <div>
                            {product.image1 && <img className='img-detail-brand' src={typeof product.image1 === 'string' ? product.image1 : product.image1.url} alt="Slide 1" />}
                        </div> */}
                        <div>
                            {product.image2 && <img className='img-detail-brand' src={typeof product.image2 === 'string' ? product.image2 : product.image2.url} alt="Slide 2" />}
                        </div>
                        <div>
                            {product.image3 && <img className='img-detail-brand' src={typeof product.image3 === 'string' ? product.image3 : product.image3.url} alt="Slide 3" />}
                        </div>
                        <div>
                            {product.image4 && <img className='img-detail-brand' src={typeof product.image4 === 'string' ? product.image4 : product.image4.url} alt="Slide 4" />}
                        </div>
                        <div>
                            {product.image5 && <img className='img-detail-brand' src={typeof product.image5 === 'string' ? product.image5 : product.image5.url} alt="Slide 5" />}
                        </div>
                    </>
                ) : (
                    <p className="loading">Loading...</p>
                )}
            </div>

            <div className="prevNext prevNext-2">
                <div>
                    <button onClick={goToPreviousSlide}>&#10094;</button>
                    <button onClick={goToNextSlide}>&#10095;</button>
                </div>
            </div>

            <div className="bullets">
                {[1, 2, 3, 4].map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => goToSlide(pageNumber)}
                        className={currentSlide === pageNumber ? 'active' : ''}
                    >
                        {pageNumber}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default SlideshowBrand;

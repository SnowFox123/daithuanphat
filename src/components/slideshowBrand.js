import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import '../style/slideshow3.css';

function SlideshowBrand() {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        if (!product) return; // Add this condition to prevent accessing properties of null product

        if (Object.keys(product).filter(key => key.startsWith('image')).length <= 1) {
            return; // If there's only one slide, no need to set an interval
        }

        const intervalId = setInterval(() => {
            const nextSlide = currentSlide === Object.keys(product).filter(key => key.startsWith('image')).length ? 1 : currentSlide + 1;
            setCurrentSlide(nextSlide);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(intervalId);
    }, [currentSlide, product]);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await axios.get(`https://65e177e3a8583365b3166e81.mockapi.io/daithuanphat/${id}`);
                setProduct(response.data);
                setCurrentSlide(1); // Reset currentSlide when URL changes
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        getProduct();
    }, [id]);

    const goToSlide = (slideNumber) => {
        setCurrentSlide(slideNumber);
    };

    const goToPreviousSlide = () => {
        if (!product) return; // Add this condition to prevent accessing properties of null product
        const previousSlide = currentSlide === 1 ? Object.keys(product).filter(key => key.startsWith('image')).length : currentSlide - 1;
        setCurrentSlide(previousSlide);
    };

    const goToNextSlide = () => {
        if (!product) return; // Add this condition to prevent accessing properties of null product
        const nextSlide = currentSlide === Object.keys(product).filter(key => key.startsWith('image')).length ? 1 : currentSlide + 1;
        setCurrentSlide(nextSlide);
    };

    if (!product) {
        return (
            <div className="CSSgal">
                <p className="loading">Loading...</p>
            </div>
        );
    }

    const images = Object.keys(product)
        .filter(key => key.startsWith('image'))
        .map((key, index) => (
            <img
                key={index}
                src={typeof product[key] === 'string' ? product[key] : product[key].url}
                alt={`Slide ${index + 1}`}
            />
        ));

    const slideButtons = images.map((_, index) => (
        <button
            key={index}
            onClick={() => goToSlide(index + 1)}
            className={currentSlide === index + 1 ? 'active' : ''}
        >
            {index + 1}
        </button>
    ));

    return (
        <div className="CSSgal">
            <div className="slider" style={{ transform: `translateX(-${(currentSlide - 1) * 100}%)` }}>
                <div>{images}</div>
            </div>

            <div className="prevNext prevNext-2">
                <div>
                    <button onClick={goToPreviousSlide}>&#10094;</button>
                    <button onClick={goToNextSlide}>&#10095;</button>
                </div>
            </div>

            <div className="bullets">
                {slideButtons}
            </div>
        </div>
    );
}

export default SlideshowBrand;

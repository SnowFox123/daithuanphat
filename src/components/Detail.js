import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import "../style/detail.css"

const Detail = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams(); // Use useParams hook to get the ID from the URL

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await axios.get(`https://65e177e3a8583365b3166e81.mockapi.io/daithuanphat/${id}`);
                console.log(response.data)
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        getProduct();
    }, [id]);

    return (
        <div className="detail-container">
            {product ? (
                <div>
                    <h2 className="detail-name">{product.name}</h2>
                    <img className="detail-image" src={product.image} alt={product.name} />
                    <p className="detail-description">Description: {product.brandDescription}</p>
                    {/* <p className="detail-rating">Rating: {product.rating}</p>
                    <p className="detail-category">Category: {product.category}</p>
                    <p className="detail-bestseller">Bestseller: {product.bestseller ? 'true' : 'false'}</p> */}
                </div>
            ) : (
                <p className="loading">Loading...</p>
            )}
        </div>
    );
};

export default Detail;

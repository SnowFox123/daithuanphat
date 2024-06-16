import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../style/home.css";

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import { Link } from 'react-router-dom';

const URL = 'https://65ea1a08c9bf92ae3d3b159b.mockapi.io/daithuanphat';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Image = styled('img')(({ theme }) => ({
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'scale(1.04)',
        border: 'green solid 2px',
    },
}));

export default function Home2() {
    const [products, setProducts] = useState([]);

    const getListProducts = async () => {
        const res = await axios.get(`${URL}`);
        if (res.status === 200) {
            setProducts(res.data);
        }
    };

    useEffect(() => {
        getListProducts();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,  // Slide every 5 seconds
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div style={{ backgroundColor: '#f1f1f1' }} className="container-home-page-2">
            <Slider {...settings}>
                {products && products.map((product) => (
                    <div key={product.id}>
                        <Item>
                            <Link to={`/detail/${product.id}`}>
                                <Image className='card_image' src={product.image1} alt={product.id} />
                            </Link>
                        </Item>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../style/home.css";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { Link } from 'react-router-dom'

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
        border: 'green solid 2px'
    },
}));

export default function Home() {
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

    return (
        <div style={{ backgroundColor: '#f1f1f1' }} className="container-home-page">
            <Box sx={{ flexGrow: 1 }}>
                <p className='header-title'>SẢN PHẨM NỔI BẬT</p>
                <Grid container spacing={3}>
                    {products && products
                        .map((product) => (
                            <Grid key={product.id} item xs={12} md={4}>
                                <Item>
                                    <Link to={`/detail/${product.id}`}>
                                        <Image className='card_image' src={product.image1} alt={product.id} />
                                    </Link>
                                </Item>
                            </Grid>
                        ))}
                </Grid>
            </Box>
        </div >
    );
}

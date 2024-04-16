import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../style/home.css";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { Link } from 'react-router-dom'

import '../style/BrandDetail.css'

const URL = 'https://65ea1a08c9bf92ae3d3b159b.mockapi.io/daithuanphat';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function BrandDetail() {
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
        <div style={{backgroundColor: '#f1f1f1'}} className="container-home-page">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} className='BrandDetail-container'>
                    {products && products
                        .map((product) => (
                            <Grid key={product.id} item xs={12} md={3} sm = {6}>
                                <Item >
                                    <Link to={`/detail/${product.id}`}>
                                        <img className='card_image-2' src={product.image} alt={product.id} />
                                    </Link>
                                    {/* <h3 className='title_film'>{product.brandName}</h3>
                                    <h3 className='title_film'>{product.price}</h3> */}
                                    {/* <button onClick={() => handleViewPopup(product)}>View Detail</button> */}
                                    {/* <Link to={`/detail/${product.id}`} className="button-view-detail">View Detail</Link> */}
                                </Item>
                            </Grid>
                        ))}
                </Grid>
            </Box>
        </div >
    );
}

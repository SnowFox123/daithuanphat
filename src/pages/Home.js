import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../style/home.css";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { Link } from 'react-router-dom'

const URL = 'https://65e177e3a8583365b3166e81.mockapi.io/daithuanphat';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
        <div className="container-home-page">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    {products && products
                        .map((product) => (
                            <Grid key={product.id} item xs={4}>
                                <Item>
                                    <img className='card_image' src={product.image} alt={product.id} />
                                    <h3 className='title_film'>{product.brandName}</h3>
                                    <h3 className='title_film'>{product.price}</h3>
                                    {/* <button onClick={() => handleViewPopup(product)}>View Detail</button> */}
                                    <Link to={`/detail/${product.id}`} className="button-view-detail">View Detail</Link>
                                </Item>
                            </Grid>
                        ))}
                </Grid>
            </Box>
        </div >
    );
}

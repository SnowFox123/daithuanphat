import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SlideshowInfo from './SildeshowInfo';

import "../style/detail.css"
import BrandDetail from './BrandDetail';
import SlideshowBrand from './slideshowBrand';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    overflowY: 'auto', // Ensure vertical scrolling when content overflows
    maxHeight: '400px', // Set a maximum height to trigger scrolling
}));

const Detail = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams(); // Use useParams hook to get the ID from the URL

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await axios.get(`https://65ea1a08c9bf92ae3d3b159b.mockapi.io/daithuanphat/${id}`);
                console.log(response.data)
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        getProduct();
    }, [id]);

    const mdGridItemStyle = window.innerWidth >= 960 ? { padding: '0 260px' } : {}; // Apply padding for medium (md) screen size

    return (
        <div style={{ paddingTop: '10px' }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid style={{  width:'80%', justifyContent:'center',alignItems:'center',left:'10%',position:'relative'  }} container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <SlideshowBrand />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Item>
                            {product ? (
                                <div>
                                    <h2 className="detail-name">{product.brandName}</h2>
                                    <p className="detail-description">{product.brandDescription}</p>
                                </div>
                            ) : (
                                <p className="loading">Loading...</p>
                            )}
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            <BrandDetail />
        </div>
    );
};

export default Detail;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import '../style/dashboard.css';

const URL = 'https://65ea1a08c9bf92ae3d3b159b.mockapi.io/daithuanphat';

export default function Dashboard() {
    const [products, setProducts] = useState([]);

    const getListProducts = async () => {
        try {
            const res = await axios.get(`${URL}`);
            if (res.status === 200) {
                setProducts(res.data);
            } else {
                console.error('Failed to fetch products');
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        getListProducts();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm(`Are you sure that you want to delete a toy with ID: ${id}`)) {
            try {
                const res = await axios.delete(`${URL}/${id}`);
                if (res.status === 200) {
                    getListProducts();
                    alert("Deleted Successfully");
                } else {
                    alert("Deleted: Error!");
                }
            } catch (error) {
                console.error('Error deleting product:', error);
                alert("Deleted: Error!");
            }
        }
    };

    return (
        <div className='staff-table'>
            <div className='btn-add'>
                <Link to={'/add'}>
                    <button className='add-staff-btn'>Add new toy</button>
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>BrandName</th>
                        <th>Image1</th>
                        <th>Image2</th>
                        <th>Image3</th>
                        <th>Image4</th>
                        <th>Image5</th>
                        <th>BrandDescription</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products && products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.brandName}</td>
                            <td><img src={typeof product.image1 === 'string' ? product.image1 : product.image.url} alt={product.id} /></td>
                            <td><img src={typeof product.image2 === 'string' ? product.image2 : product.image.url} alt={product.id} /></td>
                            <td><img src={typeof product.image3 === 'string' ? product.image3 : product.image.url} alt={product.id} /></td>
                            <td><img src={typeof product.image4 === 'string' ? product.image4 : product.image.url} alt={product.id} /></td>
                            <td><img src={typeof product.image5 === 'string' ? product.image5 : product.image.url} alt={product.id} /></td>
                            <td>{product.brandDescription}</td>
                            <td>{product.status ? 'true' : 'false'}</td>
                            <td>
                                <Link to={`/update/${product.id}`}><button>Edit</button></Link>
                                <button className="delete-button" style={{ backgroundColor: 'red' }} onClick={() => handleDelete(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

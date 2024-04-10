import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import '../style/dashboard.css';

const URL = 'https://65e177e3a8583365b3166e81.mockapi.io/daithuanphat';

export default function Dashboard() {

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


    const handleDelete = async (id) => {
        if (window.confirm(`Are you sure that you want to delete a toy with ID: ${id}`)) {
            const res = await axios.delete(`${URL}/${id}`);
            if (res.status === 200) {
                getListProducts();
                alert("Deleted Successfully")
                // toast.success("Deleted Successfully");
            } else {
                alert("Deleted: Error!")
                // toast.error("Deleted: Error!");
            }
        }
    }


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

                        <th>Image</th>

                        <th>BrandDescription</th>

                        {/* <th>Rating</th>

                        <th>Category</th>
                        <th>Price</th> */}
                        <th>Status</th>


                        {/* <th>Create Date</th> */}

                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products && products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>

                            <td>{product.brandName}</td>

                            <td><img src={product.image} alt={product.id} /></td>

                            <td>{product.brandDescription}</td>

                            {/* <td>{product.rating}</td> */}
{/* 
                            <td>{product.category}</td>
                            <td>{product.price}</td> */}
                            <td>{product.status ? 'true' : 'false'}</td>


                            {/* <td>{product.info}</td> */}

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

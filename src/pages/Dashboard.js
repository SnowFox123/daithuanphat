import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import '../style/dashboard.css';

const URL = 'https://65ea1a08c9bf92ae3d3b159b.mockapi.io/toys';

export default function Dashboard() {

    const [toys, setToys] = useState([]);


    const getListToys = async () => {
        const res = await axios.get(`${URL}`);
        if (res.status === 200) {
            setToys(res.data);
        }
    };

    useEffect(() => {
        getListToys();
    }, []);


    const handleDelete = async (id) => {
        if (window.confirm(`Are you sure that you want to delete a toy with ID: ${id}`)) {
            const res = await axios.delete(`${URL}/${id}`);
            if (res.status === 200) {
                getListToys();
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

                        <th>Name</th>

                        <th>Image</th>

                        <th>Description</th>

                        <th>Rating</th>

                        <th>Category</th>
                        <th>Price</th>
                        <th>Bestseller</th>


                        {/* <th>Create Date</th> */}

                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {toys && toys.map((toy) => (
                        <tr key={toy.id}>
                            <td>{toy.id}</td>

                            <td>{toy.name}</td>

                            <td><img src={toy.image} alt={toy.id} /></td>

                            <td>{toy.description}</td>

                            <td>{toy.rating}</td>

                            <td>{toy.category}</td>
                            <td>{toy.price}</td>
                            <td>{toy.bestseller ? 'true' : 'false'}</td>


                            {/* <td>{toy.info}</td> */}

                            <td>
                                <Link to={`/update/${toy.id}`}><button>Edit</button></Link>

                                <button className="delete-button" style={{ backgroundColor: 'red' }} onClick={() => handleDelete(toy.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../style/formAddEdit.css';

const URL = 'https://65ea1a08c9bf92ae3d3b159b.mockapi.io/daithuanphat';

const initialState = {
  brandName: '',
  imageURL: '', // Add imageURL field to store the URL of the uploaded image
  brandDescription: '',
  status: false,
};

const error_init = {
  brandName_err: '',
  image_err: '',
  brandDescription_err: '',
  status_err: '',
};

export default function FormAddEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const { brandName, imageURL, brandDescription, status } = state; // Use imageURL instead of image
  const [errors, setErrors] = useState(error_init);

  useEffect(() => {
    if (id) getOneProduct(id);
  }, [id]);

  const getOneProduct = async (id) => {
    const res = await axios.get(`${URL}/${id}`);
    if (res.status === 200) {
      setState(res.data);
    }
  };

  const updateProduct = async (ProductId, data) => {
    const res = await axios.put(`${URL}/${id}`, data);
    if (res.status === 200) {
      alert(`Updated Product with ID: ${ProductId} successfully ~`);
      navigate('/dashboard');
    }
  };

  const addNewProduct = async (data) => {
    // Convert the image to a Base64 string
    const reader = new FileReader();
    reader.readAsDataURL(data.image);
    reader.onloadend = async () => {
      const base64Image = reader.result.split(',')[1];

      // Include the Base64 string in the request payload
      const newData = { ...data, image1: base64Image };

      try {
        const res = await axios.post(`${URL}`, newData);
        if (res.status === 200 || res.status === 201) {
          alert('New Product has been added successfully');
          navigate('/dashboard');
        }
      } catch (error) {
        console.error('Error adding new product:', error);
      }
    };
  };


  const validateForm = () => {
    let isValid = true;
    let error = { ...error_init };

    if (brandName.trim() === '') {
      error.brandName_err = 'Brand Name is required';
      isValid = false;
    }

    // if (!imageURL) { // Check if imageURL is empty
    //   error.image_err = 'Image is required';
    //   isValid = false;
    // }

    if (typeof status !== 'boolean') {
      error.status_err = 'Status must be either True or False';
      isValid = false;
    } else {
      error.status_err = ''; // Clear the error message if validation passes
    }

    if (brandDescription.trim() === '') {
      error.brandDescription_err = 'Brand Description is required';
      isValid = false;
    }

    setErrors(error);
    return isValid;
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0]; // Get the first file from the FileList
    const reader = new FileReader();
    reader.onloadend = () => {
      // Create URL from the uploaded file
      const imageURL = reader.result;
      setState((prevState) => ({
        ...prevState,
        imageURL: imageURL, // Store the URL of the uploaded image
      }));
    };
    reader.readAsDataURL(file); // Read the file as a Data URL
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      const formData = { // Include imageURL in the formData
        brandName: state.brandName,
        image1: state.imageURL, // Send the imageURL instead of the file
        brandDescription: state.brandDescription,
        status: state.status,
      };
      if (id) updateProduct(id, formData);
      else addNewProduct(formData);
    } else {
      alert('Some information is invalid. Please check again.');
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <div className="container">
      <div className="form">
        <h2>{id ? 'Update Form' : 'Add New Toy'}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="status">Status: </label>
            <input
              type="checkbox"
              name="status"
              checked={status}
              onChange={handleCheckboxChange}
            />
            {errors.status_err && <span className="error">{errors.status_err}</span>}
          </div>
          <div>
            <label htmlFor="brandName">Brand Name: </label>
            <input type="text" name="brandName" value={brandName} onChange={handleInputChange} />
            {errors.brandName_err && <span className="error">{errors.brandName_err}</span>}
          </div>
          <div>
            <label htmlFor="image">Image: </label>
            <input type="file" name="image" onChange={handleFileInputChange} />
            {errors.image_err && <span className="error">{errors.image_err}</span>}
          </div>
          <div>
            {imageURL && <img src={imageURL} alt="Uploaded" style={{ maxWidth: '200px', marginTop: '10px' }} />} {/* Render the image */}
          </div>
          <div>
            <label htmlFor="brandDescription">Brand Description: </label>
            <input
              type="text"
              name="brandDescription"
              value={brandDescription}
              onChange={handleInputChange}
            />
            {errors.brandDescription_err && <span className="error">{errors.brandDescription_err}</span>}
          </div>
          <button type="submit" className="form-button">{id ? 'Update' : 'Submit'}</button>
        </form>
      </div>
    </div>
  );
}

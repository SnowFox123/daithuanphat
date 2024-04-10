import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
// import { toast } from 'react-toastify';
import '../style/formAddEdit.css';

const URL = 'https://65e177e3a8583365b3166e81.mockapi.io/daithuanphat';

const initialState = {
  brandName: '',
  image: '',
  brandDescription: '',
  status: false,
  // createAt: Math.floor(Date.now() / 1000)
}

const error_init = {
  brandName_err: '',
  image_err: '',
  brandDescription_err: '',
  status_err: '',
}

export default function FormAddEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const { brandName, image, brandDescription, status } = state;
  const [errors, setErrors] = useState(error_init);

  const getOneProduct = async (id) => {
    const res = await axios.get(`${URL}/${id}`);
    if (res.status === 200) {
      setState(res.data);
    }
  };

  useEffect(() => {
    if (id) getOneProduct(id);
  }, [id]);

  const updateProduct = async (ProductId, data) => {
    const res = await axios.put(`${URL}/${id}`, data);
    if (res.status === 200) {
      // toast.success(`Updated Product with ID: ${ProductId} successfully ~`)
      alert(`Updated Product with ID: ${ProductId} successfully ~`)
      navigate('/dashboard');
    }
  }

  const addNewProduct = async (data) => {
    const res = await axios.post(`${URL}`, data);
    if (res.status === 200 || res.status === 201) {
      // toast.success("New Products has been added successfully -")
      alert("New Products has been added successfully -")
      navigate('/dashboard');
    }
  }

  const validateForm = () => {
    let isValid = true;
    let error = { ...error_init };

    if (brandName.trim() === '') {
      error.brandName_err = "brandName is required";
      isValid = false;
    } 

    if (image.trim() === '') {
      error.image_err = "Image is required";
      isValid = false;
    } else if (!isValidUrl(image.trim())) {
      error.image_err = "Image must be a valid URL";
      isValid = false;
    }

    if (typeof status !== 'boolean') {
      error.status_err = "status must be either True or False";
      isValid = false;
    } else {
      error.status_err = ""; // Clear the error message if validation passes
    }

    if (brandDescription.trim() === '') {
      error.brandDescription_err = "brandDescription is required";
      isValid = false;
    }

    setErrors(error);
    return isValid;
  }

  const isValidUrl = (url) => {
    // Regular expression to check if the URL is valid
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlPattern.test(url);
  }

  // Function to validate date format
  const isValidDate = (dateString) => {
    // Regular expression to check if the date is in YYYY-MM-DD format
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    return datePattern.test(dateString);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      if (id) updateProduct(id, state);
      else addNewProduct(state);
    } else {
      // toast.error('Some info is invalid ~ Pls check again');
      alert('Some info is invalid ~ Pls check again')
    }
  }

  const handleInputChange = (event) => {
    // console.log(event.target.value)
    let { name, value } = event.target;
    setState(state => ({ ...state, [name]: value }));
  }

  const handleInputChange2 = (event) => {
    const { name, checked } = event.target; // Destructure name and checked from event.target
    setState(prevState => ({
      ...prevState,
      [name]: checked, // Update the state with the checked value
    }));
  };

  return (
    <div className='container'>
      <div className='form'>
        <h2>{id ? "Update Form" : "Add New Toy"}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='status'>status: </label>
            <input
              type="checkbox"
              name='status'
              checked={status}
              onChange={handleInputChange2}
            />
            {errors.status_err && <span className='error'>{errors.status_err}</span>}
          </div>
          <div>
            <label htmlFor='brandName'>brandName: </label>
            <input type="text" name='brandName' value={brandName} onChange={handleInputChange} />
            {errors.brandName_err && <span classbrandName='error'>{errors.brandName_err}</span>}
          </div>
          <div>
            <label htmlFor='image'>Image: </label>
            <input type="text" name='image' value={image} onChange={handleInputChange} />
            {errors.image_err && <span className='error'>{errors.image_err}</span>}
          </div>
          <div>
            <label htmlFor='brandDescription'>brandDescription: </label>
            <input type="text" name='brandDescription' value={brandDescription} onChange={handleInputChange} />
            {errors.brandDescription_err && <span className='error'>{errors.brandDescription_err}</span>}
          </div>
          <button type='submit' className='form-button'>{id ? "Update" : "Submit"}</button>
        </form>
      </div>
    </div>
  )
}

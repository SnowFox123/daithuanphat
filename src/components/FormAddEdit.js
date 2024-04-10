import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
// import { toast } from 'react-toastify';
import '../style/formAddEdit.css';

const URL = 'https://65ea1a08c9bf92ae3d3b159b.mockapi.io/toys';

const initialState = {
  name: '',
  image: '',
  description: '',
  rating: '',
  category: '',
  bestseller: false,
  price: '',
  // createAt: Math.floor(Date.now() / 1000)
}

const error_init = {
  name_err: '',
  image_err: '',
  description_err: '',
  rating_err: '',
  category_err: '',
  bestseller_err: '',
  price_err: '',
}

export default function FormAddEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const { name, image, description, rating, category, bestseller, price } = state;
  const [errors, setErrors] = useState(error_init);

  const getOneToy = async (id) => {
    const res = await axios.get(`${URL}/${id}`);
    if (res.status === 200) {
      setState(res.data);
    }
  };

  useEffect(() => {
    if (id) getOneToy(id);
  }, [id]);

  const updateToy = async (ToyId, data) => {
    const res = await axios.put(`${URL}/${id}`, data);
    if (res.status === 200) {
      // toast.success(`Updated Toy with ID: ${ToyId} successfully ~`)
      alert(`Updated Toy with ID: ${ToyId} successfully ~`)
      navigate('/dashboard');
    }
  }

  const addNewToy = async (data) => {
    const res = await axios.post(`${URL}`, data);
    if (res.status === 200 || res.status === 201) {
      // toast.success("New Toys has been added successfully -")
      alert("New Toys has been added successfully -")
      navigate('/dashboard');
    }
  }

  const validateForm = () => {
    let isValid = true;
    let error = { ...error_init };

    if (name.trim() === '') {
      error.name_err = "name is required";
      isValid = false;
    } else if (name.length < 2) {
      error.name_err = "name must be more than 2 characters";
      isValid = false;
    }

    if (image.trim() === '') {
      error.image_err = "Image is required";
      isValid = false;
    } else if (!isValidUrl(image.trim())) {
      error.image_err = "Image must be a valid URL";
      isValid = false;
    }

    if (typeof bestseller !== 'boolean') {
      error.bestseller_err = "bestseller must be either True or False";
      isValid = false;
    } else {
      error.bestseller_err = ""; // Clear the error message if validation passes
    }

    if (rating.trim() === '') {
      error.rating_err = "rating is required";
      isValid = false;
    }

    if (price.trim() === '') {
      error.price_err = "price is required";
      isValid = false;
    }

    // if (isNaN(cost) || parseInt(cost) < 1 || cost === null) {
    //   error.cost_err = "Cost must be a positive number or more than 0";
    //   isValid = false;
    // }

    // if (category.trim() === '') {
    //   error.category_err = "category is required";
    //   isValid = false;
    // } else if (!isValidDate(category.trim())) {
    //   error.category_err = "category must be in date format (YYYY-MM-DD)";
    //   isValid = false;
    // }

  //   if (dateofbirth.trim() === '') {
  //     newErrors.dateofbirth_err = "Date of birth cannot be left blank!";
  //     isValid = false;
  // }

    if (category.trim() === '') {
      error.category_err = "category is required";
      isValid = false;
    }

    if (description.trim() === '') {
      error.description_err = "Description is required";
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
      if (id) updateToy(id, state);
      else addNewToy(state);
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
            <label htmlFor='bestseller'>bestseller: </label>
            <input
              type="checkbox"
              name='bestseller'
              checked={bestseller}
              onChange={handleInputChange2}
            />
            {errors.bestseller_err && <span className='error'>{errors.bestseller_err}</span>}
          </div>
          <div>
            <label htmlFor='name'>name: </label>
            <input type="text" name='name' value={name} onChange={handleInputChange} />
            {errors.name_err && <span className='error'>{errors.name_err}</span>}
          </div>
          {/* <div>
            <label htmlFor='dateofbirth'>Date of Birth: </label>
            <input type='date' name='dateofbirth' value={dateofbirth} onChange={handleInputChange} />
            {errors.dateofbirth_err && <span className='error'>{errors.dateofbirth_err}</span>}
          </div> */}
          <div>
            <label htmlFor='image'>Image: </label>
            <input type="text" name='image' value={image} onChange={handleInputChange} />
            {errors.image_err && <span className='error'>{errors.image_err}</span>}
          </div>
          {/* <div>
            <label htmlFor='rating'>rating: </label>
            <input type="text" name='rating' value={rating} onChange={handleInputChange} />
            {errors.rating_err && <span className='error'>{errors.rating_err}</span>}
          </div> */}
          <div>
            <label htmlFor='category'>category: </label>
            <input type="text" name='category' value={category} onChange={handleInputChange} />
            {errors.category_err && <span className='error'>{errors.category_err}</span>}
          </div>
          <div>
            <label htmlFor='price'>price: </label>
            <input type="date" name='price' value={price} onChange={handleInputChange} />
            {errors.price_err && <span className='error'>{errors.price_err}</span>}
          </div>
          <div>
            <label htmlFor='description'>Description: </label>
            <input type="text" name='description' value={description} onChange={handleInputChange} />
            {errors.description_err && <span className='error'>{errors.description_err}</span>}
          </div>
          <div>
            <label htmlFor='rating'>rating: </label>
            <select name='rating' value={rating} onChange={handleInputChange}>
              <option value="">Select an option</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {errors.rating_err && <span className='error'>{errors.rating_err}</span>}
          </div>
          {/* {id && (
            <div>
              <label htmlFor='createAt'>Create At: </label>
              <input type="text" name='createAt' value={new Date(state.createAt * 1000).toLocaleDateString()} readOnly />
            </div>
          )} */}
          <button type='submit' className='form-button'>{id ? "Update" : "Submit"}</button>
        </form>
      </div>
    </div>
  )
}

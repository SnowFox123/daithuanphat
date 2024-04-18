import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../style/formAddEdit.css';

const URL = 'https://65ea1a08c9bf92ae3d3b159b.mockapi.io/daithuanphat';

const initialState = {
  brandName: '',
  imageURL1: '',
  imageURL2: '',
  imageURL3: '',
  imageURL4: '',
  imageURL5: '',
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
  const { brandName, imageURL1, imageURL2, imageURL3, imageURL4, imageURL5, brandDescription, status } = state; // Use imageURL1 instead of image
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
    try {
      const res = await axios.post(`${URL}`, data);
      if (res.status === 200 || res.status === 201) {
        alert('New Product has been added successfully');
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error adding new product:', error);
    }
  };



  const validateForm = () => {
    let isValid = true;
    let error = { ...error_init };

    if (brandName.trim() === '') {
      error.brandName_err = 'Brand Name is required';
      isValid = false;
    }

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

  const handleFileInputChange = (event, imageNumber) => {
    const file = event.target.files[0]; // Get the first file from the FileList

    // Resize the image before uploading
    resizeImage(file, (resizedImage) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageURL = reader.result;
        setState((prevState) => ({
          ...prevState,
          [`imageURL${imageNumber}`]: imageURL,
        }));
      };
      reader.readAsDataURL(resizedImage);
    });
  };


  const resizeImage = (file, callback) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 800;
        const MAX_HEIGHT = 600;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob((blob) => {
          const resizedFile = new File([blob], file.name, {
            type: 'image/jpeg',
            lastModified: Date.now(),
          });
          callback(resizedFile);
        }, 'image/jpeg', 0.7);
      };
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      const formData = { // Include imageURL1 in the formData
        brandName: state.brandName,
        image1: state.imageURL1, // Send the imageURL1 instead of the file
        image2: state.imageURL2, // Send the imageURL1 instead of the file
        image3: state.imageURL3, // Send the imageURL1 instead of the file
        image4: state.imageURL4, // Send the imageURL1 instead of the file
        image5: state.imageURL5, // Send the imageURL1 instead of the file
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
        <h2>{id ? 'Update Form' : 'Add New Product'}</h2>
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
            <label htmlFor="image1">Image1: </label>
            <input type="file" name="image1" onChange={(event) => handleFileInputChange(event, 1)} />
            {errors.image_err && <span className="error">{errors.image_err}</span>}
          </div>
          <div>
            {imageURL1 && <img src={imageURL1} alt="Uploaded" style={{ maxWidth: '200px', marginTop: '10px' }} />} {/* Render the image */}
          </div>
          <div>
            <label htmlFor="image2">Image2: </label>
            <input type="file" name="image2" onChange={(event) => handleFileInputChange(event, 2)} />
            {errors.image_err && <span className="error">{errors.image_err}</span>}
          </div>
          <div>
            {imageURL2 && <img src={imageURL2} alt="Uploaded" style={{ maxWidth: '200px', marginTop: '10px' }} />} {/* Render the image */}
          </div>
          <div>
            <label htmlFor="image3">Image 3: </label>
            <input type="file" name="image3" onChange={(event) => handleFileInputChange(event, 3)} />
          </div>
          <div>
            {imageURL3 && <img src={imageURL3} alt="Uploaded" style={{ maxWidth: '200px', marginTop: '10px' }} />}
          </div>
          <div>
            <label htmlFor="image4">Image 4: </label>
            <input type="file" name="image4" onChange={(event) => handleFileInputChange(event, 4)} />
          </div>
          <div>
            {imageURL4 && <img src={imageURL4} alt="Uploaded" style={{ maxWidth: '200px', marginTop: '10px' }} />}
          </div>
          <div>
            <label htmlFor="image5">Image 5: </label>
            <input type="file" name="image" onChange={(event) => handleFileInputChange(event, 5)} />
          </div>
          <div>
            {imageURL5 && <img src={imageURL5} alt="Uploaded" style={{ maxWidth: '200px', marginTop: '10px' }} />}
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

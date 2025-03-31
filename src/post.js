import React, { useState } from 'react';
import './post.css'; // Import CSS for styling

const Post = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    title: '',
    price: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the parent component's function to add the product
    onAddProduct(product);
    // Reset the form fields after submission
    setProduct({
      title: '',
      price: '',
      imageUrl: '',
    });
  };

  return (
    <div className="post-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} className="post-form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={product.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleChange}
            required
          />
        </div>
        {/* Display the image preview if imageUrl is provided */}
        {product.imageUrl && (
          <div className="image-preview">
            <img src={product.imageUrl} alt="Product" />
          </div>
        )}
        <button type="submit" className="add-button">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Post;

import React, { useState } from 'react';

const Modify = ({ product, onSave }) => {
  // Use local state to track modifications
  const [modifiedProduct, setModifiedProduct] = useState({ ...product });

  // Update modifiedProduct state when input fields change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModifiedProduct({
      ...modifiedProduct,
      [name]: value
    });
  };

  // Handle save button click
  const handleSave = () => {
    // Call onSave prop with modifiedProduct to save changes
    onSave(modifiedProduct);
  };

  return (
    <div>
      <h2>Modify Product</h2>
      <form>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={modifiedProduct.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={modifiedProduct.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            value={modifiedProduct.imageUrl}
            onChange={handleInputChange}
          />
        </div>
      </form>
      {/* Save button triggers handleSave function */}
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Modify;

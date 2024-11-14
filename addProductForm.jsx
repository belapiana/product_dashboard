
import React from 'react';

const AddProductForm = ({ addProduct }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const name = e.target.name.value;
    const price = parseFloat(e.target.price.value);
    const description = e.target.description.value;

    addProduct({ name, price, description });

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <br />
      <label>
        Price:
        <input type="number" name="price" required />
      </label>
      <br />
      <label>
        Description:
        <textarea name="description" required />
      </label>
      <br />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;

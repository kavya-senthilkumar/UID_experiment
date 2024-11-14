import React, { useState } from 'react';
import './ItemForm.css';

const ItemForm = () => {
  // State for form inputs
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(0);

  // State for the list of items
  const [items, setItems] = useState([]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new item object
    const newItem = {
      name,
      description,
      quantity
    };

    // Add the new item to the items array
    setItems([...items, newItem]);

    // Clear the form fields
    setName('');
    setDescription('');
    setQuantity(0);
  };

  return (
    <div className="item-form-container">
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
          />
        </div>

        <button type="submit" className="btn-submit">
          Add user
        </button>
      </form>

      <div className="items-list">
        <h2>List of users</h2>
        {items.length === 0 ? (
          <p>No items added yet.</p>
        ) : (
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <strong>{item.name}</strong> - {item.description} (Age: {item.quantity})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ItemForm;

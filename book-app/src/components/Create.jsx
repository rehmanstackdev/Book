import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
const Home = () => {
  const [inputUser, setInputUser] = useState({
    name: "",
    author: "",
    price: "",
    stock: ""
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setInputUser({
      ...inputUser,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/createbook", inputUser);
      console.log(res);
      // Redirect to read route after adding book
      navigate('/read/all');
    } catch (error) {
      console.error("Error creating book", error);
    }
  };

  return (
        <div className="w-2/3 mx-5 px-5 pt-5 mt-5 card">
          <div className='d-flex justify-content-end mb-3'>
          <NavLink
                to={`/read/all`}
                className=" btn btn-primary"
              >
              View
              </NavLink>
          </div>
      {/* Creating form */}
      <form onSubmit={handleSubmit}>
        <h1 className='text-center'>Create Book</h1>

        <div className="mb-3">
          <label className="form-label text-sm text-gray-500">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter name"
            required
            value={inputUser.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label text-sm text-gray-500">Author</label>
          <input
            type="text"
            name="author"
            className="form-control"
            placeholder="Enter Author"
            required
            value={inputUser.author}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label text-sm text-gray-500">Price</label>
          <input
            type="number"
            name="price"
            className="form-control"
            placeholder="Enter Price"
            required
            value={inputUser.price}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label text-sm text-gray-500">Stock</label>
          <input
            type="number"
            name="stock"
            className="form-control"
            placeholder="Enter Stock"
            required
            value={inputUser.stock}
            onChange={handleChange}
          />
        </div>

        <div className="d-flex justify-content-center my-4">
          <button type="submit" className="btn btn-warning">
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;

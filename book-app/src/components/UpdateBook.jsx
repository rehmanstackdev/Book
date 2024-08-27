import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const UpdateUser = () => {
  const [inputUser, setInputUser] = useState({
    name: "",
    author: "",
    price: "",
    stock: ""
  });

  const { id } = useParams();

  // Fetching single user data
  const fetchSingleUser = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/read/${id}`);
      console.log(res);
      setInputUser({
        name: res.data.name,
        author: res.data.author,
        price: res.data.price,
        stock: res.data.stock
      });
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  useEffect(() => {
    fetchSingleUser();
  }, [id]);

  const handleChange = (event) => {
    setInputUser({
      ...inputUser,
      [event.target.name]: event.target.value
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputUser);
    
    try {
      const res = await axios.put(`http://localhost:5000/updatebook/${id}`, inputUser);
      console.log(res);
      navigate('/read/all');
      // if (res.status === 200) {
      //   window.location = "/";
      // }
    } catch (error) {
      console.error("Error updating user data", error);
    }
  };

  return (
    <div className=" mx-5 px-5 py-5 mt-5 card">
      <h1>Update User</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder="Enter name"
            required
            value={inputUser.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-2">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            className="form-control"
            placeholder="Enter author"
            required
            value={inputUser.author}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-2">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            className="form-control"
            placeholder="Enter price"
            required
            value={inputUser.price}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-2">
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            id="stock"
            name="stock"
            className="form-control"
            placeholder="Enter stock"
            required
            value={inputUser.stock}
            onChange={handleChange}
          />
        </div>

        <div className="form-group text-center mt-4">
          <button type="submit" className="btn btn-warning">
            Update User
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;

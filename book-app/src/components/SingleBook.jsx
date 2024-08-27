import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReadUser = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({});

  const fetchSingleUser = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/read/${id}`);
      console.log(res);
      setUserData(res.data);
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  useEffect(() => {
   fetchSingleUser();
  },[]);

  return (
    <div className=" mx-5 px-5 py-5 mt-5 card">
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">SN.</th>
              <th scope="col">Name</th>
              <th scope="col">Author</th>
              <th scope="col">Price</th>
              <th scope="col">Stock</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{userData.name}</td>
              <td>{userData.author}</td>
              <td>{userData.price}</td>
              <td>{userData.stock}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReadUser;

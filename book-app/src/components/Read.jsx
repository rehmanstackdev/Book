
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
function Read() {
 // data fetching all
 const [userData, setUserData] = useState([]);
 const fetchAllUser = async () => {
   const res = await axios.get("http://localhost:5000/readallbook");
   console.log(res);
   setUserData(res.data);
 };
 useEffect(() => {
   fetchAllUser();
   
 }, []);

  const handleDelete = async (id) => {
   const res = await axios.delete(`http://localhost:5000/delete/${id}`);
    if (res.status === 200) {
      fetchAllUser();
    }
  };
  return (
    <div className="w-2/3 mx-5 px-5 pt-5 mt-5 card">
<div className='d-flex justify-content-end mb-3'>
          <NavLink
                to={`/`}
                className=" btn btn-primary"
              >
              Add Book
              </NavLink>
          </div>
<div className="table-responsive shadow-sm">
  <table className="table table-striped table-bordered text-center">
    <thead className="table-dark text-uppercase">
      <tr>
        <th scope="col">SN.</th>
        <th scope="col">Name</th>
        <th scope="col">Author</th>
        <th scope="col">Price</th>
        <th scope="col">Stock</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      {userData.map((item, i) => (
        <tr key={item._id}>
          <th scope="row">{i + 1}</th>
          <td>{item?.name}</td>
          <td>{item?.author}</td>
          <td>{item?.price}</td>
          <td>{item?.stock}</td>
          <td>
            <div className="d-flex justify-content-center gap-2">
              <NavLink
                to={`/readbook/${item._id}`}
                className="text-success"
              >
                Read
              </NavLink>
              <NavLink
                to={`/updatebook/${item._id}`}
                className="text-warning"
              >
                Edit
              </NavLink>
              <button
                onClick={() => handleDelete(item._id)}
                className="btn btn-link text-danger p-0"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </div>
  )
}

export default Read
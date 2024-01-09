import React, { useState } from "react";
import "./App.css";

function Admin() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    position: "",
  });

  const [dataList, setDataList] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { ...formData };
    setDataList((prevList) => [...prevList, newData]);
    setFormData({
      name: "",
      lastname: "",
      position: "",
    });
  };

  const handleDelete = (index) => {
    const updatedList = [...dataList];
    updatedList.splice(index, 1);
    setDataList(updatedList);
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="owner">Owner</a>
          </li>
        </ul>
      </nav>

      <div className="wrapper">
        <a href="user" className="btn">
          User Home Sector
        </a>
        <a href="admin" className="btn">
          Admin Home Sector
        </a>
      </div>

      <div className="container">
        <h1>Create User here</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            placeholder="Lastname"
          />
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            placeholder="Position"
          />
          <button type="submit" className="btn">
            Save
          </button>
        </form>
        {/* <hr /> */}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Lastname</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.lastname}</td>
                <td>{data.position}</td>
                <td>
                  <button onClick={() => handleDelete(index)} className="btn">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Admin;

import React, { useState } from "react";
import axios from "axios";
export default function CmsFileUpload() {
  const [uploadFile, setUploadFile] = useState();
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setFormData((prevalue) => {
      return {
        ...prevalue,   // Spread Operator               
        [name]: value
      }
    })
  }
  const submitForm = (event) => {
    event.preventDefault();
    const dataArray = new FormData();
    dataArray.append("image", uploadFile[0]);
    dataArray.append("name", formData.name);
    axios.post(`${process.env.REACT_APP_BASEURL}cms/upload `, dataArray, {
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': localStorage.getItem('auth')
        }
      })
      .then((response) => {
        console.log(response);
        // successfully uploaded response
      })
      .catch((error) => {
        console.log(error)
        // error response
      });
  };
  return (
    <div>
      <form className="form uploadForm" onSubmit={submitForm}>
        <input name="name" className="form-control" type="text" value={formData.name} placeholder="Enter Name..." onChange={handleChange} />
        <div className="custom-file-upload">
          <input type="file" className="form-control" onChange={(e) => setUploadFile(e.target.files)} />
        </div>
        <button type="submit" className="btn btn-sm btn-default">Upload</button>
      </form>
    </div>
  );
}
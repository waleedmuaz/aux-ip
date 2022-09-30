import React, { useState } from "react";
import axios from "axios";
export default function FileUpload() {
  const [uploadFile, setUploadFile] = useState();
  
  const submitForm = (event) => {
    event.preventDefault();
    const dataArray = new FormData();
    dataArray.append("csv", uploadFile[0]);
    axios
      .post(`${process.env.REACT_APP_BASEURL}imported`, dataArray, {
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': localStorage.getItem('auth')

        }
      })
      .then((response) => {
        // successfully uploaded response
      })
      .catch((error) => {
        // error response
      });
  };
  return (
    <div>
      <form className="form uploadForm" onSubmit={submitForm}>
        <div className="custom-file-upload">
          <input type="file" className="form-control" onChange={(e) => setUploadFile(e.target.files)} />
        </div>
        <button type="submit" className="btn btn-sm btn-default">Upload</button>
      </form>
    </div>
  );
}
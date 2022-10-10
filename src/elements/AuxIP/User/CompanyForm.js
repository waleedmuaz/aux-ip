import React, { useState } from 'react';
import {
  Form,
  FormGroup,
} from 'react-bootstrap';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CompanyForm = (props) => {

 const [isLoader, setIsLoader] = useState(true);
 const [formData, setFormData] = useState({
    'name':'',
 });

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

 const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    setIsLoader(false)
    let response = await fetch(`${process.env.REACT_APP_BASEURL}company/create`, {
       method: 'POST',
       body: JSON.stringify({
        "name":formData.name,
       }),
       mode: 'cors', 
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': localStorage.getItem('auth'),
       },
    });
    setIsLoader(true)
    let res=await response.json();
    if(res.status===false){
      toast.error(res.messages, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }else if(res.status==200){
      props.setCompany(res.data);
      toast.success(res.messages, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    }
 };


if(!isLoader){
  return <div className='loader'><span></span></div>;
}
    return (
    <div className="">
        <h3>Create Company</h3>
        <Form className="form" >
          <FormGroup>
            <label>Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name..."
            />
          </FormGroup>
          <div className="header-btn">
            <button onClick={e => {handleSubmit(e)}} className='btn-default btn-small'>Create</button>
          </div>
        </Form>
      </div>
    );
}

export default CompanyForm;
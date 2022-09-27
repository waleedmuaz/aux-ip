import React, {useState } from 'react';
import {
  Form,
  FormGroup,
} from 'react-bootstrap';

const UserForm = () => {
 const [isLoader, setIsLoader] = useState(true);
 const [formData, setFormData] = useState({
    'name':'',
    'email':''
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

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    fetch(`${process.env.REACT_APP_BASEURL}user/create`, {
       method: 'POST',
       body: JSON.stringify({
        "name":formData.name,
        "email":formData.email,
       }),
       mode: 'cors', 
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       },
    })
       .then((res) => res.json())
       .catch((err) => {
          console.log(err.message);
       });
 };

if(!isLoader){
    return <div>loading data...</div>;
  }
    return (
    <div className="">
        <h3>Create User</h3>
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
          <FormGroup>
            <label for="Email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              id="Email"
              placeholder="Enter Email..."
            />
            </FormGroup>
          <div className="header-btn">
            <button onClick={e => {handleSubmit(e)}} className='btn-default btn-small'>Create</button>
          </div>
        </Form>
      </div>
    );
}

export default UserForm;
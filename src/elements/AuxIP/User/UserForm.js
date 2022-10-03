import React, { useState } from 'react';
import {
  Form,
  FormGroup,
} from 'react-bootstrap';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserForm = (props) => {

 const [isLoader, setIsLoader] = useState(true);
 const [formData, setFormData] = useState({
    'name':'',
    'email':''
 });

 const handleChangeselect = (e) => {
  let name = e.target.name;
  let value = Array.from(e.target.selectedOptions, option => option.value);
  setFormData((prevalue) => {
    return {
      ...prevalue,   // Spread Operator               
      [name]: value
    }
  })
}

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
    let response = await fetch(`${process.env.REACT_APP_BASEURL}user/create`, {
       method: 'POST',
       body: JSON.stringify({
        "name":formData.name,
        "email":formData.email,
        'company_id':formData.comany_id
       }),
       mode: 'cors', 
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
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
      toast.info(res.messages, {
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


console.log(props);

if(!isLoader){
  return <div className='loader'><span></span></div>;
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
               <FormGroup>
                <select multiple required
                onChange={handleChangeselect}
                name="comany_id[]"
                >
                {(props.company.length!=null)?                
                  props.company.map((d) => {
                    return (
                        <option value={d.id}>
                              {d.name}
                        </option>
                    )
                  })
                :""}

                </select>
            </FormGroup>
          <div className="header-btn">
            <button onClick={e => {handleSubmit(e)}} className='btn-default btn-small'>Create</button>
          </div>
        </Form>
      </div>
    );
}

export default UserForm;
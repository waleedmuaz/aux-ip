import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Form,
  FormGroup,
} from 'react-bootstrap';

const FormRole = () => {
  const [formData, setFormData] = useState({
    'name': '',
    'permission': ''
  });
  const [permisionList, setpermisionList] = useState()
  const [isLoader, setIsLoader] = useState(false);
  const { id } = useParams();
  //  console.log("🚀 ~ file: FormRole.js ~ line 16 ~ FormRole ~ id", id)


  const getRolePageDataById = async () => {
    if (id) {
      const response = await fetch(`${process.env.REACT_APP_BASEURL}user/role/${id}`,
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('auth')
          },
          method: "GET",
        })
      if (!response.ok) {
        throw new Error('Data coud not be fetched!')
      } else {
        return await response.json()
      }
    }
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData.permission);
  }


  useEffect(() => {
    getRolePageDataById(id)
      .then((res) => {
        setpermisionList(res.data);
        setIsLoader(true);
      })
      .catch((e) => {
        console.log(e.message)
      })
  }, []);



  if (!isLoader) {
    return <div>loading data...</div>;
  }
  return (
    <div className="">
      <h2>Add Role</h2>
      <Form className="form" >
        <FormGroup>
          <label>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={permisionList.role.name}
            placeholder="Enter Role Name..."
          />
        </FormGroup>
        <FormGroup>
          <label for="permission">Permission</label>
          <select multiple id="permission" name='permission[]'>
            <option selected disabled>Selected</option>

            {permisionList.permission.map((item, index) => (
              <option selected={item.selected} value={item.id}>{item.name}</option>
            ))}

          </select>
        </FormGroup>
        <div className="header-btn">
          <button onClick={e => { handleSubmit(e) }} className='btn-default btn-small'>Submit</button>
        </div>
      </Form>
    </div>
  );
}

export default FormRole;
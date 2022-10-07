import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo_light from '../../../assets/images/logo/logo_light.png'
import FooterBottom from '../../../elements/AuxIP/FooterBottom';

const AdminLogin = () => {
    let history = useHistory();

    const [isLoader, setIsLoader] = useState(true);
    const [formData, setFormData] = useState({
        'email': '',
        'password': ''
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
        let response = await fetch(`${process.env.REACT_APP_BASEURL}admin/login`, {
            method: 'POST',
            body: JSON.stringify({
                "email": formData.email,
                "password": formData.password,
            }),
            mode: 'cors',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        setIsLoader(true)
        let res = await response.json();
        console.log(res)
        if (res.status === 419) {
            toast.error(res.messages, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        if (res.status === false) {
            toast.error(res.messages, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (res.status == 200) {
            toast.info(res.messages, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            localStorage.setItem("user", JSON.stringify(res.data));
            localStorage.setItem("auth", "Bearer " + JSON.stringify(res.data.token).replaceAll('"', ''));
            history.push("/dashboard");
        }
    };



    if (!isLoader) {
        return <div className='loader'><span></span></div>;
    }

    return (
        <>
            <div className="admin_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="full">
                                <div className="pmx-auto d-block">
                                    <Link to={"/"}>
                                        <img src={logo_light} width="100%" className='mx-auto d-block my-3' alt=""/>
                                    </Link>
                                </div>
                                <form className='form'>
                                    <div className="card">
                                        <div className="card-header text-center">
                                            <h5 className='float-left'>Admin Login</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="emailId"
                                                    placeholder="Enter Your Email..."
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => {
                                                        handleChange(e);
                                                    }} />
                                            </div>
                                            <div className="form-group">
                                                <label for="Password">Password</label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="Password"
                                                    required
                                                    placeholder="********"
                                                    value={formData.password}
                                                    onChange={(e) => handleChange(e)}
                                                />
                                            </div>
                                            <div className="sub_btn">
                                                <button onClick={e => { handleSubmit(e) }} type='submit' className='btn btn-default'>Login</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterBottom />
            </div>
        </>
    )
}

export default AdminLogin;
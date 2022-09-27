import React from 'react';
import logo_light  from '../../../assets/images/logo/logo_light.png'

const AdminLogin = () => {
    return (
        <>
            <div className="admin_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="full">
                            <div className="logo mx-auto d-block">
                                <img src={logo_light} width="100%" className='mx-auto d-block my-3' alt=""  />
                            </div>
                                <form>
                                    <div className="card">
                                        <div className="card-header text-center">
                                            <h5 className='float-left'>Admin Login</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input type="email" name='email' className="form-control" id="email" autoComplete='off' placeholder='Enter your Email' />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password">Password</label>
                                                <input type="password" name='password' className="form-control" autoComplete='off' id="password" placeholder='Enter your password' />
                                            </div>
                                            <div className="sub_btn">
                                            <button type='submit' className='btn btn-default'>Login</button>
                                        </div>
                                        </div>           
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLogin;
import React from 'react';
import { FaGlobe, FaSearch, FaUser } from 'react-icons/fa';
import {Link} from "react-router-dom";
import {Redirect} from 'react-router-dom';

const HeaderTopBar = () => {

const deleteItem = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
    <Redirect to="/login" />
};

    return (
        <div className="header-top-bar">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="header-left">
                            {/* <ul className="social-default ">
                                <li>
                                    <p>IP Group</p>
                                </li>
                                <li>
                                    <p>IP Law Firm</p>
                                </li>
                                <li>
                                    <p>IP Consulting</p>
                                </li>
                                <li>
                                    <p>IP Octimine</p>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="header-right">
                            <div className="address-content">
                                {
                                        (!localStorage.getItem('auth'))?<p><FaUser />
                                        <Link to="login"><span>Login</span></Link></p>:<p><i className="fa fa-sign-out" aria-hidden="true"></i><Link to="/login" onClick={deleteItem}><span>Logout</span></Link>
                                        </p>
                                }
                                {
                                        (!localStorage.getItem('auth'))?"":<p><Link to="/dashboard" ><span>Dashboard</span></Link></p>
                                }
                                        <p><Link to="admin"><span>Admin</span></Link></p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopBar;

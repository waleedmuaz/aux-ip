import React from 'react';
import { FaGlobe, FaSearch, FaUser } from 'react-icons/fa';
import {Link} from "react-router-dom";

const HeaderTopBar = () => {
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
                                <p><FaUser /><Link to="login"><span>Login</span></Link></p>
                                <p><FaGlobe /><span><a href="#">Language : English</a></span></p>
                                <p><FaSearch /><span>Search</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopBar;

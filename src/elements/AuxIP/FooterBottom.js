import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const FooterBottom = () => {
    return (
        <>
            <div>
            <ToastContainer
                theme="dark"
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            /> 
              <div className="copyright-area copyright-style-one no-border"><div className="container"><div className="row align-items-center"><div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="copyright-left">
                    <ul className="ft-menu link-hover">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/ip-software">IP Service</Link>
                        </li>
                        <li>
                            <Link to="/about-us">Company</Link>
                        </li>

                    </ul>
                </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="copyright-right text-center text-md-right">
                        <p className="copyright-text">
                            © SA 2022
                        </p>
                    </div>
                </div>
                </div>
                </div>
                </div> 
              </div>
        </>
    )
}

export default FooterBottom;

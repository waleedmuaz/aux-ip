import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import customer from '../../assets/images/customer.webp';

const TheIpGroup = () => {
    return (
        <div className="rwt-about-area about-style-2 mt-0 rn-section-gap">
            <div className="container">
                <div className="row row--30 align-items-center">
                    <div className="col-lg-6 mt_md--30 mt_sm--30">
                        <div className="content">
                            <div className="section-title">

                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    {/* ========= Edit This Button On Hover Mouse ========= */}
                                    <div class="mydivouter">
                                        <button type="button" class="mybuttonoverlap btn btn-primary"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                                        <h3 className="title mt--10">Global Intellectual Property management</h3>
                                    </div> {/* ========= Close This Button On Hover Mouse ========= */}

                                </ScrollAnimation>

                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    {/* ========= Edit This Button On Hover Mouse ========= */}
                                    <div class="mydivouter">
                                        <button type="button" class="mybuttonoverlap btn btn-primary"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                                        <p>Combining expertise in local IP procedures with the scope of a worldwide full-service provider, the Dennemeyer Group is your<strong> Intellectual Property management</strong> partner wherever you do business. </p>
                                    </div> {/* ========= Close This Button On Hover Mouse ========= */}

                                </ScrollAnimation>
                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <div className="read-more-btn mt--40">
                                        {/* ========= Edit This Button On Hover Mouse ========= */}
                                        <div class="mydivouters">
                                            <h4><storng>Help?</storng> Talk to our experts.</h4>
                                            <button type="button" class="mybuttonoverlaps btn btn-primary"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                                            <Link className="btn-default btn-icon mb-4" to="#">Contact Sales</Link>
                                        </div> {/* ========= Close This Button On Hover Mouse ========= */}

                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="thumbnail">
                            <div className='row justify-content-center'>
                                <div className='col-8'>
                                    <div className='card shadow-lg rounded'>
                                    <div className='img-box'>
                                    <img className="w-100 mt-0" src={customer} alt="About Images" />
                                    </div>
                                    <div className='text-box p-4 pb-5 mb-5'>
                                        <h4>Hello wolrd</h4>
                                        {/* <p>assadsadsdsaddsd</p> */}
                                        {/* <p>dssadsadsadsadsad</p> */}
                                    </div>
                                    </div>
                                    
                                </div>

                            </div>

                                {/* <img className="w-100" src={customer} alt="About Images" /> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TheIpGroup;

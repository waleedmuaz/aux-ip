import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import customer from '../../assets/images/customer.webp';

const ConvenientApp = () => {
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
                                    <h3 className="title mt--10">Convenient central access to all apps</h3>
                                </ScrollAnimation>

                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p>IP Lounge customer center simplifies the <strong>access to all booked digital tools and apps </strong>  such as Portfolio Management, EP Validation, TM Filing, and other advanced IP <strong>management systems. </strong>  Check personalized dashboard graphs, news, and status, manage user data or perform searches. Are you already a Dennemeyer client? <strong>Welcome to the IP Lounge! </strong> </p>
                                </ScrollAnimation>
                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <div className="read-more-btn mt--40">
                                        <Link className="btn-default btn-icon mb-4" to="#">Register your customer account</Link>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="thumbnail">
                            <img className="w-100" src={customer} alt="About Images" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConvenientApp;

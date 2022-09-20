import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import {Link} from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import secondary from '../../assets/images/secondary-transformed1.png';

const PatentDeep = () => {
    return (
        <div className="rwt-about-area about-style-2  rn-section-gap">
            <div className="container">
                <div className="row row--30 align-items-cente">
                    <div className="col-lg-5">
                        <div className="thumbnail">
                            <img className="w-100" src={secondary} alt="About Images" />
                        </div>
                    </div>

                    <div className="col-lg-7 mt_md--30 mt_sm--30">
                        <div className="content">
                            <div className="section-title">

                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <h3 className="title mt--10">Patent deep search and monitoring tools.</h3>
                                </ScrollAnimation>

                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <p>Automated <strong> patent analysis and monitoring tools </strong>based on Deep Learning improve sharpness and quality of patent searches. Octimine also features patent landscaping, regular checks help you staying on top of trends and budget for your <strong> Intellectual Property assets. </strong></p>
                                </ScrollAnimation>
                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <div className="read-more-btn mt--40">
                                        <Link className="btn-default btn-icon" to="#">Explore Octimine Search</Link>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default PatentDeep;

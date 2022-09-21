import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import customer from '../../assets/images/customer.webp';

const Modular = () => {
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
                                    <h3 className="title mt--10">Modular and scalable IP solutions</h3>
                                </ScrollAnimation>

                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <p>The IP Group uses the acquired global know-how and network to constantly push the boundaries of its modular tool system for Intellectual Property management. Custom and standardized digital services serve the R&D-driven industry segments, all company or portfolio sizes, budgets and global regions. Application packages can be combined and cover large areas of the Intellectual Property life cycle.</p>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 my-1">
                        <div className="thumbnail">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/vyMXy9hW8nQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modular;

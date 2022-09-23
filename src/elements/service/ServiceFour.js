import React from 'react';
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        icon: '%',
        title: '100% cover',
        description: 'Stay modular and future compatible within a rich landscape of digital tools.'
    },
    {
        icon: 'DL',
        title: 'Access technology',
        description: 'Up-to-date technology such as deep learning increases efficiency.'
    },
    {
        icon: 'o',
        title: '360° perspective',
        description: 'Solutions cover the IP life cycle and your global needs.'
    },
    {
        icon: '=',
        title: 'Results',
        description: 'Accuracy, stability and timely delivery create the DNA of our legal business'
    },
]

const ServiceFour = ({ textAlign, serviceStyle, getData }) => {
    return (
        <div className="row row--15 service-wrapper mt-4">
            {ServiceList.map((val, i) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="icon">
                                <div className="line"></div>
                                {/* ========= Edit This Button On Hover Mouse ========= */}
                                <div className="mydivouter">
                                    <button type="button" className="mybuttonoverlap btn btn-primary" onClick={getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                    {val.icon}
                                </div> {/* ========= Close This Button On Hover Mouse ========= */}

                            </div>
                            <div className="content">
                                {/* ========= Edit This Button On Hover Mouse ========= */}
                                <div className="mydivouter">
                                    <button type="button" className="mybuttonoverlap btn btn-primary" onClick={getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                    <h4 className="title"><Link to="#service" dangerouslySetInnerHTML={{ __html: val.title }}></Link></h4>
                                </div> {/* ========= Close This Button On Hover Mouse ========= */}
                                {/* ========= Edit This Button On Hover Mouse ========= */}
                                <div className="mydivouter">
                                    <button type="button" className="mybuttonoverlap btn btn-primary" onClick={getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                    <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{ __html: val.description }}></p>
                                </div> {/* ========= Close This Button On Hover Mouse ========= */}

                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceFour;
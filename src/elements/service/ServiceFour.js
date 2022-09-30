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

const ServiceFour = ({ textAlign, serviceStyle, getData, setContetId ,content }) => {
    const setData = (sliderList) => {
        let slider_key =  Object.keys(sliderList);
        let arrayList=[];
        for(let i=0; i<slider_key.length;i++){
            arrayList[i]=sliderList[slider_key[i]]
        }
        return arrayList;
    }

    const showPopUp = (id) => {
        setContetId(id);
        getData();
    }

    return (

        <div className="row row--15 service-wrapper mt-4">
        
        {setData(content.ServiceProvideService).map((data, index) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={index}>
                    <ScrollAnimation
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="icon">
                                <div className="line"></div>
                                {/* ========= Edit This Button On Hover Mouse ========= */}
                                <div className="mydivouter">
                                    <button type="button" className="mybuttonoverlap btn btn-primary"  onClick={() => showPopUp(data.service_provide_service_icon[0].id)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                    { data.service_provide_service_icon[0].content_detail}
                                </div> {/* ========= Close This Button On Hover Mouse ========= */}

                            </div>
                            <div className="content">
                                {/* ========= Edit This Button On Hover Mouse ========= */}
                                <div className="mydivouter">
                                    <button type="button" className="mybuttonoverlap btn btn-primary" onClick={() => showPopUp(data.service_provide_service_title[0].id)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                    <h4 className="title"><Link to="#service" dangerouslySetInnerHTML={{ __html: data.service_provide_service_title[0].content_detail }}></Link></h4>
                                </div> {/* ========= Close This Button On Hover Mouse ========= */}
                                {/* ========= Edit This Button On Hover Mouse ========= */}
                                <div className="mydivouter">
                                    <button type="button" className="mybuttonoverlap btn btn-primary" onClick={() => showPopUp(data.service_provide_service_description[0].id)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                    <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{ __html: data.service_provide_service_description[0].content_detail }}></p>
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
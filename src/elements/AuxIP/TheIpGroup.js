import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import Slider from 'react-slick';

const TheIpGroup = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };
    const setGlobalIntellectualData = (sliderList) => {
        let slider_key =  Object.keys(sliderList);
        let arrayList=[];
        for(let i=0; i<slider_key.length;i++){
            arrayList[i]=sliderList[slider_key[i]]
        }
        return arrayList;
    }
    return (
        <>
        <div className="rwt-about-area about-style-2 mt-0 rn-section-gap">
            <div className="container">
                <div className="row row--30 align-items-center">
                    <div className="col-lg-6 mt_md--30 mt_sm--30">
                        <div className="content">

                        {setGlobalIntellectualData(props.content.GlobalIntellectual).map((data, index) => (
                            <div className="section-title">
                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    {/* ========= Edit This Button On Hover Mouse ========= */}
                                    <div className="mydivouter">
                                        <button type="button" className="mybuttonoverlap btn btn-primary" onClick={props.getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                        <h3 className="title mt--10">{data.global_intellectual_title[0].content_detail}</h3>
                                    </div> {/* ========= Close This Button On Hover Mouse ========= */}

                                </ScrollAnimation>

                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    {/* ========= Edit This Button On Hover Mouse ========= */}
                                    <div className="mydivouter">
                                        <button type="button" className="mybuttonoverlap btn btn-primary" onClick={props.getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                        {data.global_intellectual_description[0].content_detail}
                                    </div> {/* ========= Close This Button On Hover Mouse ========= */}

                                </ScrollAnimation>
                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <div className="read-more-btn mt--40">
                                           {/* ========= Edit This Button On Hover Mouse ========= */}
                                           <div className="mydivouters">
                                            <h4>{data.global_intellectual_help_text[0].content_detail}</h4>
                                            <button type="button" className="mybuttonoverlaps btn btn-primary" onClick={props.getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                        </div> {/* ========= Close This Button On Hover Mouse ========= */}
                                        {/* ========= Edit This Button On Hover Mouse ========= */}
                                        <div className="mydivouters">
                                         
                                            <button type="button" className="mybuttonoverlaps btn btn-primary" onClick={props.getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                            <Link className="btn-default btn-icon mb-4" to="#">{data.global_intellectual_button[0].content_detail}</Link>
                                        </div> {/* ========= Close This Button On Hover Mouse ========= */}

                                    </div>
                                </ScrollAnimation>
                            </div>
                            ))}
                            </div>
                    </div>
                    <div className="col-lg-6">
                    <Slider className="slider-area slider-style-4 slider-dot rn-slick-dot rn-slick-arrow" {...settings}>
                    {setGlobalIntellectualData(props.content.GlobalIntellectualSlider).map((data, index) => (
                        <div className="thumbnail">

                            <div className='row justify-content-center'>
                                <div className='col-8'>
                                    <div className='card shadow-lg rounded'>

                                    <div className='img-box'>
                                    <img className="w-100 mt-0" src={data.global_intellectual_img[0].content_detail} alt="About Images" />
                                    </div>
                                    <div className='text-box p-4 pb-5 mb-5'>
                                        <h4>{data.global_intellectual_title[0].content_detail}</h4>
                                        <p>{data.global_intellectual_description[0].content_detail}</p>
                                    </div>
                                </div>

                                </div>

                            </div>
                        </div>
                    ))}
                    </Slider>

                        </div>
                </div>
            </div>
        </div>
    </>

    )
}

export default TheIpGroup;

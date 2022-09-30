import React, { useState } from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const Modular = (props) => {

    const setData = (sliderList) => {
        let slider_key =  Object.keys(sliderList);
        let arrayList=[];
        for(let i=0; i<slider_key.length;i++){
            arrayList[i]=sliderList[slider_key[i]]
        }
        return arrayList;
    }


    const showPopUp = (id) => {
        props.setContetId(id);
        props.getData();
    }

    return (
        
        <div className="rwt-about-area about-style-2 mt-0 rn-section-gap">
            <div className="container">
                <div className="row row--30 align-items-center">
                    <div className="col-lg-6 mt_md--30 mt_sm--30">
                        <div className="content">
                        {setData(props.content.ScalableIP).map((data, index) => (
                            <div className="section-title">

                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    {/* ========= Edit This Button On Hover Mouse ========= */}
                                    <div className="mydivouter">
                                        <button type="button" className="mybuttonoverlap btn btn-primary" onClick={() => showPopUp(data.scalable_ip_title[0].id)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                        <h3 className="title mt--10">{ data.scalable_ip_title[0].content_detail}</h3>
                                    </div> {/* ========= Close This Button On Hover Mouse ========= */}

                                </ScrollAnimation>

                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    {/* ========= Edit This Button On Hover Mouse ========= */}
                                    <div className="mydivouter">
                                        <button type="button" className="mybuttonoverlap btn btn-primary"  onClick={() => showPopUp(data.scalable_ip_description[0].id)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                        { data.scalable_ip_description[0].content_detail}
                                    </div> {/* ========= Close This Button On Hover Mouse ========= */}
                                </ScrollAnimation>
                            </div>
                            ))}
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

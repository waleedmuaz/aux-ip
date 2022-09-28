import React , {useState} from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import secondary from '../../assets/images/secondary-transformed1.png';
import PopupModel from './PopupModel';

const PatentDeep = (props) => {
    
    const setPatentData = (sliderList) => {
        let slider_key =  Object.keys(sliderList);
        let arrayList=[];
        for(let i=0; i<slider_key.length;i++){
            arrayList[i]=sliderList[slider_key[i]]
        }
        return arrayList;
    }
    
    return (
        <>
        {setPatentData(props.content.PatentDeep).map((data, index) => (

        <div className="rwt-about-area about-style-2  rn-section-gap">
            <div className="container">
                <div className="row row--30 align-items-cente">
                    <div className="col-lg-5">
                        <div className="thumbnail">
                            <img className="w-100" src={data.patent_deep_img[0].content_detail} alt="About Images" />
                        </div>
                    </div>

                    <div className="col-lg-7 mt_md--30 mt_sm--30">
                        <div className="content">
                            <div className="section-title">
                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    {/* ========= Edit This Button On Hover Mouse ========= */}
                                    <div className="mydivouter">
                                        <button type="button" className="mybuttonoverlap btn btn-primary" onClick={props.getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                        <h3 className="title mt--10">{ data.patent_deep_title[0].content_detail }</h3>
                                    </div> {/* ========= Close This Button On Hover Mouse ========= */}
                                </ScrollAnimation>

                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    {/* ========= Edit This Button On Hover Mouse ========= */}
                                    <div className="mydivouter">
                                        <button type="button" className="mybuttonoverlap btn btn-primary" onClick={props.getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                        {data.patent_deep_description[0].content_detail}
                                    </div> {/* ========= Close This Button On Hover Mouse ========= */}

                                </ScrollAnimation>
                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                                    <div className="read-more-btn mt--40">
                                        {/* ========= Edit This Button On Hover Mouse ========= */}
                                        <div className="mydivouters">
                                            <button type="button" className="mybuttonoverlaps btn btn-primary" onClick={props.getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                            <Link className="btn-default btn-icon" to="#">{data.patent_deep_btn[0].content_detail}</Link>
                                        </div> {/* ========= Close This Button On Hover Mouse ========= */}

                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ))}

        </>
    )
}

export default PatentDeep;

import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const ImageTextSlider = ( props ) => {


    const setBlogListData = (sliderList) => {
        let slider_key =  Object.keys(sliderList);
        let arrayList=[];
        for(let i=0; i<slider_key.length;i++){
            arrayList[i]=sliderList[slider_key[i]]
        }
        return arrayList;
    }
    

    return (
        <>
        {setBlogListData(props.content.BlogListSection).map((data, index) => (
        <div className="col-lg-4 col-md-6 col-12 mt--30">
            <div className={`rn-card `}>
                <div className="inner">
                    <div className="thumbnail">
                        <Link to="/" className="image">
                            <img src={data.blog_list_img[0].content_detail} alt="Blog Image" />
                        </Link>
                    </div>
                    <div className="content">
                        <h4 className="title ">
                            {/* ========= Edit This Button On Hover Mouse ========= */}
                            <div className="mydivouter">
                                <button type="button" className="mybuttonoverlap btn btn-primary" onClick={props.getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                <Link to="#">
                                    {data.blog_list_title[0].content_detail}
                                </Link>
                            </div> {/* ========= Close This Button On Hover Mouse ========= */}
                        </h4>
                        <ul className="rn-meta-list">
                            {/* ========= Edit This Button On Hover Mouse ========= */}
                            <div className="mydivouter">
                                <button type="button" className="mybuttonoverlap btn btn-primary" onClick={props.getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                <li className="separator">{data.blog_list_title[0].content_detail}</li>
                            </div> {/* ========= Close This Button On Hover Mouse ========= */}
                        </ul>
                    </div>
                    {/* {
                        model === true ? <PopupModel hide={() => setModel(false)} /> : ""
                    } */}
                </div>
            </div>
        </div>

    ))}
    </>
)
}
export default ImageTextSlider;


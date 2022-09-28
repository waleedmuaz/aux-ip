import React from 'react';
import aboutBg from '../../assets/images/apsoftware.webp';

const Banner = (props) => {

    const setBannerData = (sliderList) => {
        let slider_key =  Object.keys(sliderList);
        let arrayList=[];
        for(let i=0; i<slider_key.length;i++){
            arrayList[i]=sliderList[slider_key[i]]
        }
        return arrayList;
    }

    return (
        <>
        {setBannerData(props.content.IPServicePage).map((data, index) => (
            <div className="slider-area Ipadress slider-style-1 variation-default height-850 bg_image" data-black-overlay="7" style={{ backgroundImage: `url(${aboutBg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-center">
                                    {/* ========= Edit This Button On Hover Mouse ========= */}
                                    <div className="mydivouter">
                                        <button type="button" className="mybuttonoverlap btn btn-primary" onClick={props.getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                        <h6 className="title display-one property">
                                        {data.ip_serivce_title[0].content_detail}</h6>
                                    </div> {/* ========= Close This Button On Hover Mouse ========= */}
                                    {/* ========= Edit This Button On Hover Mouse ========= */}
                                    <div className="mydivouter">
                                        <button type="button" className="mybuttonoverlap btn btn-primary" onClick={props.getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                        <p className="description description1">{data.ip_serivce_description[0].content_detail}</p>
                                    </div> {/* ========= Close This Button On Hover Mouse ========= */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}

export default Banner;

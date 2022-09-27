import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ModuleBanner = (props) => {


    const setCardData = (sliderList) => {
        let slider_key =  Object.keys(sliderList);
        let arrayList=[];
        for(let i=0; i<slider_key.length;i++){
            arrayList[i]=sliderList[slider_key[i]]
        }
        return arrayList;
    }

    return (
        <>
                {setCardData(props.content.ModuleBanner).map((data, index) => (

            <div className="col-md-6 col-12 my-3">
                <NavLink to="#"> <div className="full" style={{ backgroundImage: `url(${ data.module_banner_img[0].content_detail})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className="title">
                        {/* ========= Edit This Button On Hover Mouse ========= */}
                        <div className="mydivouter">
                            <button type="button" className="mybuttonoverlap btn btn-primary" onClick={props.getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                            <h4 className="text-white">{ data.module_banner_title[0].content_detail}</h4>
                        </div> {/* ========= Close This Button On Hover Mouse ========= */}

                    </div>
                    <div className="des text-white">
                        {/* ========= Edit This Button On Hover Mouse ========= */}
                        <div className="mydivouter">
                            <button type="button" className="mybuttonoverlap btn btn-primary" onClick={props.getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                            <p className="text-white">{ data.module_banner_description[0].content_detail}</p>
                        </div> {/* ========= Close This Button On Hover Mouse ========= */}

                    </div> 
                </div>
                </NavLink>
            </div>
            ))}

        </>
    )
}

export default ModuleBanner;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { authenticiation } from '../../utils/AuxIP/helper';

const HelpSection = (props) => {


    const setData = (sliderList) => {
        let slider_key = Object.keys(sliderList);
        let arrayList = [];
        for (let i = 0; i < slider_key.length; i++) {
            arrayList[i] = sliderList[slider_key[i]]
        }
        return arrayList;
    }

    const showPopUp = (id) => {
        props.setContetId(id);
        props.getData();
    }


    return (
        <>
            {setData(props.content.HelpSection).map((data, index) => (
                <div className="help_section bg-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="full text-center">
                                    <div className="title text-white">
                                        {/* ========= Edit This Button On Hover Mouse ========= */}
                                        <div className="mydivouter">
                                            {(authenticiation()) ?

                                                <button type="button" className="mybuttonoverlap btn btn-primary" onClick={() => showPopUp(data.help_section_title[0].id)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                                : ""}
                                            <h3 className="text-white">{data.help_section_title[0].content_detail}</h3>
                                        </div> {/* ========= Close This Button On Hover Mouse ========= */}

                                    </div>
                                    <div className="btn_help">
                                        {/* ========= Edit This Button On Hover Mouse ========= */}
                                        <div className="mydivouter">
                                            {(authenticiation()) ?

                                                <button type="button" className="mybuttonoverlap btn btn-primary" onClick={() => showPopUp(data.help_section_btn[0].id)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                                : ""}
                                            <NavLink to="#" className="white-pill-outline-button normal-button  js_hubspotdlg" data-hubspotid="93b8811a-3244-4fa4-9a4d-5b3fa050bf9a">
                                                {data.help_section_btn[0].content_detail}
                                            </NavLink>
                                        </div> {/* ========= Close This Button On Hover Mouse ========= */}

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

export default HelpSection;

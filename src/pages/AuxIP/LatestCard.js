import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PopupModel from '../../elements/AuxIP/PopupModel';

const LatestCard = (props) => {

    const setCardData = (sliderList) => {
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
        <>
        {setCardData(props.content.Card).map((data, index) => (
            <div className="col-lg-3 col-md-6 col-12 my-3">
                <div className="full">
                    <div className="title">
                        {/* ========= Edit This Button On Hover Mouse ========= */}
                        <div className="mydivouter">
                            <button type="button" className="mybuttonoverlap btn btn-primary" onClick={() => showPopUp(data.card_title[0].id)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                            <NavLink to="/">
                                <h4>{ data.card_title[0].content_detail }</h4>
                            </NavLink>
                        </div> {/* ========= Close This Button On Hover Mouse ========= */}

                    </div>
                    <div className="calender">
                        {/* ========= Edit This Button On Hover Mouse ========= */}
                        <div className="mydivouter">
                            <button type="button" className="mybuttonoverlap btn btn-primary" onClick={() => showPopUp(data.card_calender[0].id)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                            <NavLink to="/">
                                <i className="fa fa-calendar" aria-hidden="true"></i>
                       &nbsp;{ data.card_calender[0].content_detail }
                            </NavLink>
                        </div> {/* ========= Close This Button On Hover Mouse ========= */}
                    </div>
                </div>
            </div>
            ))}
        </>
    )
}

export default LatestCard;

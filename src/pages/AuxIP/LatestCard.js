import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PopupModel from '../../elements/AuxIP/PopupModel';

const LatestCard = (props) => {

    const [model, setModel] = useState(false);
    const getData = () => {
        return setModel(true);
    }

    return (
        <>
            <div className="col-lg-3 col-md-6 col-12 my-3">
                <div className="full">
                    <div className="title">
                        {/* ========= Edit This Button On Hover Mouse ========= */}
                        <div class="mydivouter">
                            <button type="button" class="mybuttonoverlap btn btn-primary" onClick={getData}><i class="fa fa-pencil" aria-hidden="true"></i></button>
                            <NavLink to="/">
                                <h4>{props.title}</h4>
                            </NavLink>
                        </div> {/* ========= Close This Button On Hover Mouse ========= */}

                    </div>
                    <div className="calender">
                        {/* ========= Edit This Button On Hover Mouse ========= */}
                        <div class="mydivouter">
                            <button type="button" class="mybuttonoverlap btn btn-primary" onClick={getData}><i class="fa fa-pencil" aria-hidden="true"></i></button>
                            <NavLink to="/">
                                <i className="fa fa-calendar" aria-hidden="true"></i>
                       &nbsp;{props.calender}
                            </NavLink>
                        </div> {/* ========= Close This Button On Hover Mouse ========= */}
                    </div>
                </div>
            </div>
            {
                        model === true ? <PopupModel hide={() => setModel(false)} /> : ""
                    }
        </>
    )
}

export default LatestCard;

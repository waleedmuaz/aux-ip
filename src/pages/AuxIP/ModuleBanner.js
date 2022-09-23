import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PopupModel from '../../elements/AuxIP/PopupModel';

const ModuleBanner = (props) => {

    const [model, setModel] = useState(false);
    const getData = () => {
        return setModel(true);
    }

    return (
        <>
            <div className="col-md-6 col-12 my-3">
                <NavLink to="#"> <div className="full" style={{ backgroundImage: `url(${props.bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className="title">
                        {/* ========= Edit This Button On Hover Mouse ========= */}
                        <div class="mydivouter">
                            <button type="button" class="mybuttonoverlap btn btn-primary" onClick={getData}><i class="fa fa-pencil" aria-hidden="true"></i></button>
                            <h4 className="text-white">{props.title}</h4>
                        </div> {/* ========= Close This Button On Hover Mouse ========= */}

                    </div>
                    <div className="des text-white">
                        {/* ========= Edit This Button On Hover Mouse ========= */}
                        <div class="mydivouter">
                            <button type="button" class="mybuttonoverlap btn btn-primary" onClick={getData}><i class="fa fa-pencil" aria-hidden="true"></i></button>
                            <p className="text-white">{props.des}</p>
                        </div> {/* ========= Close This Button On Hover Mouse ========= */}

                    </div> 
                </div>
                </NavLink>
            </div>
            {
                        model === true ? <PopupModel hide={() => setModel(false)} /> : ""
                    }
        </>
    )
}

export default ModuleBanner;

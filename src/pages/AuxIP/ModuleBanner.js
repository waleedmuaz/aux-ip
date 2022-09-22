import React from 'react'
import { NavLink } from 'react-router-dom';

const ModuleBanner = (props) => {
    return (
        <>
            <div className="col-md-6 col-12 my-3">
                <NavLink to="#"> <div className="full" style={{ backgroundImage: `url(${props.bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className="title">
                        {/* ========= Edit This Button On Hover Mouse ========= */}
                        <div class="mydivouter">
                            <button type="button" class="mybuttonoverlap btn btn-primary"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                            <h4 className="text-white">{props.title}</h4>
                        </div> {/* ========= Close This Button On Hover Mouse ========= */}

                    </div>
                    <div className="des text-white">
                        {/* ========= Edit This Button On Hover Mouse ========= */}
                        <div class="mydivouter">
                            <button type="button" class="mybuttonoverlap btn btn-primary"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                            <p className="text-white">{props.des}</p>
                        </div> {/* ========= Close This Button On Hover Mouse ========= */}

                    </div>
                </div>
                </NavLink>
            </div>
        </>
    )
}

export default ModuleBanner;

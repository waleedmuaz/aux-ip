import React from 'react'
import { NavLink } from 'react-router-dom';

const ModuleBanner = (props) => {
    return (
        <>
            <div className="col-md-6 col-12 my-3">
            <NavLink to="/"> <div className="full" style={{ backgroundImage:`url(${props.bg})` ,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
                    <div className="title">
                        <h4 className="text-white">{props.title}</h4>
                    </div>
                        <div className="des text-white">
                            <p className="text-white">{props.des}</p>
                        </div>    
                </div>
                </NavLink>
            </div>
        </>
    )
}

export default ModuleBanner;

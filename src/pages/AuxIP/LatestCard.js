import React from 'react'
import { NavLink } from 'react-router-dom';

const LatestCard = (props) => {
    return (
        <>
            <div className="col-lg-3 col-md-6 col-12 my-3">
                <div className="full">
                    <div className="title">
                       <NavLink to="/"> <h4>{props.title}</h4> </NavLink>
                    </div>
                    <div className="calender">
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                       &nbsp;{props.calender}
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestCard;

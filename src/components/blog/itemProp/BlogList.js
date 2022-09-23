import React, { useState } from 'react';
import { slugify } from "../../../utils";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PopupModel from '../../../elements/AuxIP/PopupModel';


const BlogList = ({ data }) => {

    const [model, setModel] = useState(false);
    const getData = () => {
        return setModel(true);
    }

    console.log(data);
    return (
        <div className="col-lg-4 col-md-6 col-12 mt--30">
            <div className={`rn-card `}>
                <div className="inner">
                    <div className="thumbnail">
                        <Link to="/" className="image">
                            <img src={data.image} alt="Blog Image" />
                        </Link>
                    </div>
                    <div className="content">
                        <h4 className="title ">
                            {/* ========= Edit This Button On Hover Mouse ========= */}
                            <div className="mydivouter">
                                <button type="button" className="mybuttonoverlap btn btn-primary" onClick={getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                <Link to="#">
                                    {data.title}
                                </Link>
                            </div> {/* ========= Close This Button On Hover Mouse ========= */}
                        </h4>
                        <ul className="rn-meta-list">
                            {/* ========= Edit This Button On Hover Mouse ========= */}
                            <div className="mydivouter">
                                <button type="button" className="mybuttonoverlap btn btn-primary" onClick={getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                <li className="separator">{data.text}</li>
                            </div> {/* ========= Close This Button On Hover Mouse ========= */}
                        </ul>
                    </div>
                    {
                        model === true ? <PopupModel hide={() => setModel(false)} /> : ""
                    }
                </div>
            </div>
        </div>


    )
}
BlogList.propTypes = {
    data: PropTypes.object
};
export default BlogList;


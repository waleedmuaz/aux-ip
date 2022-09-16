import React from 'react';
import {slugify} from "../../../utils";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


const BlogList = ({ data }) => {
   
    console.log(data);
    return (
        <div className={`rn-card `}>
            <div className="inner">
                <div className="thumbnail">
                    <Link to="/" className="image">
                        <img src={`${process.env.PUBLIC_URL}/${data.image}`} alt="Blog Image" />
                    </Link>
                </div>
                <div className="content">
                <h4 className="title">
                        <Link to="">
                            {data.title}
                        </Link>
                </h4>
                    <ul className="rn-meta-list">
                        {/* <li><Link to="">{data.author}</Link></li> */}
                        <li className="separator">{data.text}</li>
                        <li>{data.date}</li>
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}
BlogList.propTypes = {
    data: PropTypes.object
};
export default BlogList;

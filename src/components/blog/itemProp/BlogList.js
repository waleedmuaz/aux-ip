import React, { useState } from "react";
import { slugify } from "../../../utils";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const BlogList = ({ data }) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

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
                        <h4 className="title" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                            <Link to="">
                                {data.title}
                                {/* {isHovering &&  <button className="btn btn-primary hoverButton text-white text-center ">Edit</button>} */}
                            </Link>
                        </h4>
                        {isHovering ? <button className="btn btn-primary hoverButton text-white text-center ">Edit</button>: null}
                        <ul className="rn-meta-list">
                            {/* <li><Link to="">{data.author}</Link></li> */}
                            <li className="separator">{data.text}</li>
                            <li>{data.date}</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}
BlogList.propTypes = {
    data: PropTypes.object
};
export default BlogList;

import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <ul className="mainmenu">
                <li className="has-droupdown"><Link to="/">Home</Link></li>
                <li><Link to="/ip-software">IP Services</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li className="ml-auto"><Link to="/contact-us"> <button type='button' className="btn btn-primary">Contact</button> </Link></li>
            </ul>
        </>

    )
}
export default Nav;


import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <ul className="mainmenu">
            <li className="has-droupdown"><Link to="/">Home</Link></li>
            <li><Link to="/ip-software">IP Service</Link></li>
            <li><Link to="/about-us">Company</Link></li>
        </ul>
    )
}
export default Nav;

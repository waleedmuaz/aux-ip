import React from 'react'
import { NavLink } from 'react-router-dom';
// import '../Bar/sidebar.css';

const SideBar = () => {
return (
    <>
    <nav id="sidebar" className="sidebar-wrapper toggled">
    <div className="sidebar-content">
      <div className="sidebar-menu">
        <ul>
          <li className="header-menu">
           <NavLink to="/dashboard" exact ><span>Dashboard</span></NavLink> 
          </li>
          <li className="header-menu">
           <NavLink to="/user" exact ><span>User</span></NavLink> 
          </li>
          <li className="header-menu">
           <NavLink to="/role" exact ><span>Role</span></NavLink> 
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </>
)
}
export default SideBar;
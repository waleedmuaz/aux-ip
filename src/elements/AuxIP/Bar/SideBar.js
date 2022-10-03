import React from 'react'
import { NavLink } from 'react-router-dom';
// import '../Bar/sidebar.css';

const SideBar = () => {
  function renderElement() {
    let role = JSON.parse(localStorage.getItem('user')).role[0];
    if (role === 'Admin')
      return (
        <>
          <div className="col-md-2 sideBarLine">
            <nav id="sidebar" className="sidebar-wrapper toggled">
              <div className="sidebar-content">
                <div className="sidebar-menu">
                  <ul>
                    <li className="header-menu">
                      <NavLink to="/dashboard" exact ><span>Dashboard</span></NavLink>
                    </li>
                    <li className="header-menu">
                      <NavLink to="/user" exact >
                        <span>User</span>
                      </NavLink>
                    </li>
                    <li className="header-menu">
                      <NavLink to="/role" exact >
                        <span>Role</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div></>
      );
    return (
      <>
        <div className="col-md-2 sideBarLineUser">
          <nav id="sidebar" className="sidebar-wrapper toggled">
            <div className="sidebar-content">
              <div className="sidebar-menu">
                <ul>
                <li className="header-menu">
                    <NavLink to="/dashboard" exact ><span>Dashboard</span></NavLink>
                  </li>
                  <li className="header-menu">
                    <NavLink to="/profile" exact ><span>Profile</span></NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
  return (
    <>

      {renderElement()}


    </>
  )
}
export default SideBar;
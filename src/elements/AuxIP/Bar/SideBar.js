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
                      <NavLink to="/dashboard" exact ><i className="fa fa-columns mr-2" aria-hidden="true"></i><span>Dashboard</span></NavLink>
                      <ul>
                        <li className="header-menu">
                          <NavLink to="/role" exact >
                            <span><i className="fa fa-clock-o mr-2" aria-hidden="true"></i>
                              Pending Renewal</span>
                          </NavLink>
                        </li>
                        <li className="header-menu">
                          <NavLink to="/role" exact >
                            <span><i className="fa fa-exclamation-circle mr-2" aria-hidden="true"></i>Previous Renewal</span>
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="header-menu">
                      <NavLink to="/user" exact >
                        <span><i className="fa fa-user mr-2" aria-hidden="true"></i>User</span>
                      </NavLink>
                    </li>
                    <li className="header-menu">
                      <NavLink to="/user" exact >
                        <span><i className="fa fa-list" aria-hidden="true"></i>Add Listing</span>
                      </NavLink>
                    </li>
                    <li className="header-menu">
                      <NavLink to="/parent-dashboard" exact >
                        <span><i className="fa fa-table mr-2" aria-hidden="true"></i>Datatable</span>
                      </NavLink>
                    </li>
                    <li className="header-menu">
                      <NavLink to="/user" exact >
                        <span><i className="fa fa-users mr-2" aria-hidden="true"></i>User Managment</span>
                      </NavLink>
                      <ul>
                        <li className="header-menu">
                          <NavLink to="/role" exact >
                            <span><i className="fa fa-user-o mr-2" aria-hidden="true"></i>Role</span>
                          </NavLink>
                        </li>
                      </ul>
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
                    <NavLink to="/dashboard" exact ><i className="fa fa-columns mr-2" aria-hidden="true"></i><span>Dashboard</span></NavLink>
                  </li>
                  <li className="header-menu">
                    <NavLink to="/profile" exact ><i className="fa fa-user mr-2" aria-hidden="true"></i><span>Profile</span></NavLink>
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
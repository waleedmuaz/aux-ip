import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PageScrollTop from './components/pageToTop/PageScrollTop'

// Pages import Here 
import HomeDefault from "./pages/HomeDefault";
import Company from "./pages/Company";
import IPSoftware from "./pages/IPSoftware";
import AboutUs from "./pages/About";



// Elements import Here 

import Login from './pages/AuxIP/Auth/Login';
import Error from "./pages/Error";


// Import Css Here 
import './assets/scss/style.scss';
import Home from './pages/AuxIP/Home';
import Dashboard from './elements/AuxIP/Dasboard';
import Role from './elements/AuxIP/RolePermission/Role';
import AddEditRole from './elements/AuxIP/Role/AddEditRole';
import User from './pages/AuxIP/Auth/User';
import Profile from './pages/AuxIP/Auth/Profile';
import DashboardHeader from './common/header/AuxIP/DashboardHeader';
    

const App = () => {
    return (
        <Router>
      
            <PageScrollTop>
                <Switch>
                    <Route path={`${process.env.PUBLIC_URL + "/"}`} exact component={Home}/>
                    <Route path={`${process.env.PUBLIC_URL + "/business-consulting"}`} exact component={HomeDefault}/>
                    <Route path={`${process.env.PUBLIC_URL + "/company"}`} exact component={Company}/>
                    <Route path={`${process.env.PUBLIC_URL + "/dashboard"}`} exact component={Dashboard}/>
                    <Route path={`${process.env.PUBLIC_URL + "/ip-software"}`} exact component={IPSoftware}/>
                    <Route path={`${process.env.PUBLIC_URL + "/about-us"}`} exact component={AboutUs}/>
                    {/* Auth */}
                    <Route path={`${process.env.PUBLIC_URL + "/login"}`} exact component={Login}/>
                    <Route path={`${process.env.PUBLIC_URL + "/role"}`} exact component={Role}/>
                    <Route path={`${process.env.PUBLIC_URL + "/role/edit_create/:id"}`} exact component={AddEditRole}/>
                    <Route path={`${process.env.PUBLIC_URL + "/role/edit_create"}`} exact component={AddEditRole}/>

                    <Route path={`${process.env.PUBLIC_URL + "/user"}`} exact component={User}/>
                    <Route path={`${process.env.PUBLIC_URL + "/profile"}`} exact component={Profile}/>
                    
                    {/* <Route path={`${process.env.PUBLIC_URL + "/DashboardHeader"}`} exact component={DashboardHeader}/> */}
                </Switch>
            </PageScrollTop>
        </Router>
    )
}


export default App

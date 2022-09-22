import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link, NavLink } from "react-router-dom";

const AdvanceTabOne = () => {
    return (
        <div>
            <Tabs>
                <div className="row row--30">
                    <div className="order-2 order-lg-1 col-lg-4 col-md-12 col-sm-12 col-12 mt_md--30 mt_sm--30">
                        <div className="advance-tab-button advance-tab-button-1">
                            <TabList className="tab-button-list">
                                <Tab>
                                    <div className="tab-button">
                                        {/* ========= Edit This Button On Hover Mouse ========= */}
                                        <div class="mydivouter">
                                            <button type="button" class="mybuttonoverlap btn btn-primary"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                                            <h4 className="title mb-0 ">Portfolio Management</h4>
                                            <p className="description">Manage renewals and more</p>
                                        </div> {/* ========= Close This Button On Hover Mouse ========= */}
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="tab-button">
                                        {/* ========= Edit This Button On Hover Mouse ========= */}
                                        <div class="mydivouter">
                                            <button type="button" class="mybuttonoverlap btn btn-primary"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                                            <h4 className="title mb-0">EP Validation</h4>
                                            <p className="description">Obtain European patents</p>
                                        </div> {/* ========= Close This Button On Hover Mouse ========= */}
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="tab-button">
                                        {/* ========= Edit This Button On Hover Mouse ========= */}
                                        <div class="mydivouter">
                                            <button type="button" class="mybuttonoverlap btn btn-primary"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                                            <h4 className="title mb-0">Trademark Filing</h4>
                                            <p className="description">Smart global TM filing</p>
                                        </div> {/* ========= Close This Button On Hover Mouse ========= */}
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="tab-button">
                                        {/* ========= Edit This Button On Hover Mouse ========= */}
                                        <div class="mydivouter">
                                            <button type="button" class="mybuttonoverlap btn btn-primary"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                                            <h4 className="title mb-0">IP Lounge</h4>
                                            <p className="description">Customer center</p>
                                        </div> {/* ========= Close This Button On Hover Mouse ========= */}
                                    </div>
                                </Tab>
                            </TabList>
                        </div>
                    </div>
                    <div className="order-1 order-lg-2 col-lg-8 col-md-12 col-sm-12 col-12">
                        <div className="advance-tab-content advance-tab-content-1">
                            <TabPanel>
                                <div className="tab-content">
                                    <div className="inner">
                                        <div className="title">
                                            {/* ========= Edit This Button On Hover Mouse ========= */}
                                            <div class="mydivouter">
                                                <button type="button" class="mybuttonoverlap btn btn-primary"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                                                <h4>Portfolio Management</h4>
                                            </div> {/* ========= Close This Button On Hover Mouse ========= */}

                                        </div>
                                        <div className="para">
                                            {/* ========= Edit This Button On Hover Mouse ========= */}
                                            <div class="mydivouter">
                                                <button type="button" class="mybuttonoverlap btn btn-primary"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                                                <p>The stakes are high when you manage IP rights, whether you are a small business trying to protect your newly registered symbol or a multinational company with an extensive portfolio. Dennemeyer IP Group provides services and digital tools for all aspects of Intellectual Property rights management. <br /> <br /> You can take advantage of the Portfolio Management app that handles these issues without slowing you down. It covers due case overviews, renewal data, pricing info, portfolio reporting, budget tracking, customized notifications and a single sign-on via IP Lounge customer interface — all the essentials for keeping your genius protected.</p>
                                            </div> {/* ========= Close This Button On Hover Mouse ========= */}

                                        </div>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="tab-content">
                                    <div className="inner">
                                        <div className="title">
                                            {/* ========= Edit This Button On Hover Mouse ========= */}
                                            <div class="mydivouter">
                                                <button type="button" class="mybuttonoverlap btn btn-primary"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                                                <h4>EP Validation</h4>
                                            </div> {/* ========= Close This Button On Hover Mouse ========= */}

                                        </div>
                                        <div className="para">
                                            {/* ========= Edit This Button On Hover Mouse ========= */}
                                            <div class="mydivouter">
                                                <button type="button" class="mybuttonoverlap btn btn-primary"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                                                <p>Successfully going through the prosecution and grant stage has allowed you to obtain your European Patent (EP). The next step is to get it validated in each country where you seek protection, which requires time-consuming and burdensome translations formalities. Dennemeyer will take over and help you complete the procedures in one single instruction. With the help of our EP web app, you can fully administrate the process and, for example, generate orders.</p>
                                            </div> {/* ========= Close This Button On Hover Mouse ========= */}

                                        </div>
                                        <div className="btn_help">
                                            {/* ========= Edit This Button On Hover Mouse ========= */}
                                            <div class="mydivouters">
                                                <button type="button" class="mybuttonoverlaps btn btn-primary"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                                                <NavLink to="#" class="white-pill-outline-button normal-button  js_hubspotdlg" data-hubspotid="93b8811a-3244-4fa4-9a4d-5b3fa050bf9a">Get an EP Validation service and app
                                        </NavLink>
                                            </div> {/* ========= Close This Button On Hover Mouse ========= */}

                                        </div>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="tab-content">
                                    <div className="inner">
                                        <div className="title">
                                            {/* ========= Edit This Button On Hover Mouse ========= */}
                                            <div class="mydivouter">
                                                <button type="button" class="mybuttonoverlap btn btn-primary"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                                                <h4>Trademark Filing</h4>
                                            </div> {/* ========= Close This Button On Hover Mouse ========= */}

                                        </div>
                                        <div className="para">
                                            {/* ========= Edit This Button On Hover Mouse ========= */}
                                            <div class="mydivouter">
                                                <button type="button" class="mybuttonoverlap btn btn-primary"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                                                <p>No more worrying about the filing status or fee payments associated with your trademark filings. The IP Group provides an efficient and complication-free filing procedure. Profit from global efficiency with, e.g., easy and fast price quotes, quick filings, regular updates on the status of your pending registrations. <br /> A simple invoice process allows for frustration-free bulk filings on a global scale. TM Filing web app is the digital platform giving you the full power to oversee, trigger, and administrate processes and all actions for your trademark folio.</p>
                                            </div> {/* ========= Close This Button On Hover Mouse ========= */}
                                        </div>
                                        <div className="btn_help">
                                            {/* ========= Edit This Button On Hover Mouse ========= */}
                                            <div class="mydivouters">
                                                <button type="button" class="mybuttonoverlaps btn btn-primary"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                                                <NavLink to="#" class="white-pill-outline-button normal-button  js_hubspotdlg" data-hubspotid="93b8811a-3244-4fa4-9a4d-5b3fa050bf9a">Get an TM Filing app at a glance
                                        </NavLink>
                                            </div> {/* ========= Close This Button On Hover Mouse ========= */}

                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="tab-content">
                                    <div className="inner">
                                        <div className="title">
                                            {/* ========= Edit This Button On Hover Mouse ========= */}
                                            <div class="mydivouter">
                                                <button type="button" class="mybuttonoverlap btn btn-primary"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                                                <h4>IP Lounge</h4>
                                            </div> {/* ========= Close This Button On Hover Mouse ========= */}
                                        </div>
                                        <div className="para">
                                            {/* ========= Edit This Button On Hover Mouse ========= */}
                                            <div class="mydivouter">
                                                <button type="button" class="mybuttonoverlap btn btn-primary"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                                                <p>The IP Lounge is the single sign-on, 2-factor authenticated entry point to your world of IP at Dennemeyer. It offers you insights into your portfolio, a news feed with the latest articles of our IP Blog, the document exchange feature, where you can share and upload your documents and the possibility to contact your Dennemeyer IP expert.</p>
                                            </div> {/* ========= Close This Button On Hover Mouse ========= */}

                                        </div>
                                        <div className="btn_help">
                                            {/* ========= Edit This Button On Hover Mouse ========= */}
                                            <div class="mydivouters">
                                                <button type="button" class="mybuttonoverlaps btn btn-primary"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                                                <NavLink to="#" class="white-pill-outline-button normal-button  js_hubspotdlg" data-hubspotid="93b8811a-3244-4fa4-9a4d-5b3fa050bf9a">Get an TM Filing app at a glance
                                        </NavLink>
                                            </div> {/* ========= Close This Button On Hover Mouse ========= */}

                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </div>
                    </div>
                </div>
            </Tabs>
        </div>
    )
}
export default AdvanceTabOne;
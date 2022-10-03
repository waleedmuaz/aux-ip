import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { authenticiation } from '../../utils/AuxIP/helper';

const AdvanceTabOne = (props) => {

    const setData = (sliderList) => {
        let slider_key = Object.keys(sliderList);
        let arrayList = [];
        for (let i = 0; i < slider_key.length; i++) {
            arrayList[i] = sliderList[slider_key[i]]
        }
        return arrayList;
    }


    const showPopUp = (id) => {
        props.setContetId(id);
        props.getData();
    }

    return (
        <div>
            <Tabs>

                <div className="row row--30">
                    <div className="order-2 order-lg-1 col-lg-4 col-md-12 col-sm-12 col-12 mt_md--30 mt_sm--30">
                        <div className="advance-tab-button advance-tab-button-1">
                            <TabList className="tab-button-list">
                                {setData(props.content.ComplementaryServiceTabs).map((data, index) => (
                                    <Tab>
                                        <div className="tab-button">
                                            {/* ========= Edit This Button On Hover Mouse ========= */}
                                            <div className="mydivouter">
                                                {(authenticiation()) ?

                                                    <button type="button" className="mybuttonoverlap btn btn-primary" onClick={() => showPopUp(data.complementary_service_tabs_title[0].id)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                                    : ""}

                                                <h4 className="title mb-0 ">{data.complementary_service_tabs_title[0].content_detail}</h4>
                                            </div> {/* ========= Close This Button On Hover Mouse ========= */}
                                            <div className="mydivouter">
                                                {(authenticiation()) ?

                                                    <button type="button" className="mybuttonoverlap btn btn-primary" onClick={() => showPopUp(data.complementary_service_tabs_title[0].id)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                                    : ""}
                                                <p className="description">{data.complementary_service_tabs_description[0].content_detail}</p>
                                            </div> {/* ========= Close This Button On Hover Mouse ========= */}


                                        </div>
                                    </Tab>
                                ))}
                            </TabList>
                        </div>
                    </div>

                    <div className="order-1 order-lg-2 col-lg-8 col-md-12 col-sm-12 col-12">
                        <div className="advance-tab-content advance-tab-content-1">
                            {setData(props.content.ComplementaryServiceTabs).map((data, index) => (
                                <TabPanel>
                                    <div className="tab-content">
                                        <div className="inner">
                                            <div className="title">
                                                {/* ========= Edit This Button On Hover Mouse ========= */}
                                                <div className="mydivouter">
                                                    {(authenticiation()) ?

                                                        <button type="button" className="mybuttonoverlap btn btn-primary" onClick={() => showPopUp(data.complementary_service_tabs_content_title[0].id)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                                        : ""}
                                                    <h4>{data.complementary_service_tabs_content_title[0].content_detail}</h4>
                                                </div> {/* ========= Close This Button On Hover Mouse ========= */}

                                            </div>
                                            <div className="para">
                                                {/* ========= Edit This Button On Hover Mouse ========= */}
                                                <div className="mydivouter">
                                                    {(authenticiation()) ?

                                                        <button type="button" className="mybuttonoverlap btn btn-primary" onClick={() => showPopUp(data.complementary_service_tabs_content_description[0].id)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                                        : ""}
                                                    <p>{data.complementary_service_tabs_content_description[0].content_detail}</p>

                                                </div> {/* ========= Close This Button On Hover Mouse ========= */}

                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            ))}
                        </div>
                    </div>
                </div>
            </Tabs>

        </div>
    )
}
export default AdvanceTabOne;
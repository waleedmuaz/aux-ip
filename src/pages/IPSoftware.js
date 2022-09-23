import React, { useState } from 'react';
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import HeaderTopBar from '../common/header/HeaderTopBar';
import FooterThree from '../common/footer/FooterThree';
import HeaderTwo from '../common/header/HeaderTwo';
import Typed from 'react-typed';
import { Link, NavLink } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import ServiceFour from '../elements/service/ServiceFour';
import AdvanceTabOne from '../elements/advancetab/AdvanceTabOne';
import AdvancePricingOne from '../elements/advancePricing/AdvancePricingOne';
import BrandTwo from '../elements/brand/BrandTwo';
import aboutBg from '../assets/images/apsoftware.webp';
import Separator from "../elements/separator/Separator";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import ModuleBanner from './AuxIP/ModuleBanner';
import ConvenientApp from '../elements/AuxIP/ConvenientApp';
import Modular from './AuxIP/Modular';
import FooterFour from '../common/footer/FooterFour';
import FooterOne from '../common/footer/FooterOne';
import FooterTwo from '../common/footer/FooterTwo';
import FooterBottom from '../elements/AuxIP/FooterBottom';
import PopupModel from '../elements/AuxIP/PopupModel';



const IpSoftwareData = [
    {
        id: 1,
        title: "For corporations and law firms",
        des: "DIAMS delivers robust modular IP management solutions for corporations, law firms and R&D-oriented tech.",
        bgImage: "IPSoftware-Hero/hero-diams1.webp",
    },
    {
        id: 2,
        title: "Deep search and analyze patents",
        des: "Octimine Search app produces extremely fast and detailed insights into patents based on deep learning technology.",
        bgImage: "IPSoftware-Hero/hero-semantic.webp",
    },
];



const IPSoftware = (props) => {

    const [model, setModel] = useState(false);
    const getData = () => {
        return setModel(true);
    }

    return (
        <>
            <SEO title="IPSoftware" />
            <main className="page-wrapper">

                <HeaderTopBar />
                <HeaderTwo btnStyle="btn-small btn-icon" />


                {/* Start Slider Area  */}
                <div className="slider-area Ipadress slider-style-1 variation-default height-850 bg_image" data-black-overlay="7" style={{ backgroundImage: `url(${aboutBg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-center">
                                    {/* ========= Edit This Button On Hover Mouse ========= */}
                                    <div className="mydivouter">
                                        <button type="button" className="mybuttonoverlap btn btn-primary" onClick={getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                        <h6 className="title display-one property">
                                            Intellectual Property Software<br /></h6>
                                    </div> {/* ========= Close This Button On Hover Mouse ========= */}
                                    {/* ========= Edit This Button On Hover Mouse ========= */}
                                    <div className="mydivouter">
                                        <button type="button" className="mybuttonoverlap btn btn-primary" onClick={getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                        <p className="description description1">Intellectual Property Management applications centralize and simplify the live administration of IP rights. Tailored to your industry, company size or law firm, and numbers of IP assets.</p>
                                    </div> {/* ========= Close This Button On Hover Mouse ========= */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                {/* ========= Start Module_banner ========= */}
                <div className="module_banner my-5">
                    <div className="container">
                        <div className="row">
                            {
                                IpSoftwareData.map((data, index) => {
                                    return (
                                        <ModuleBanner
                                            key={index}
                                            title={data.title}
                                            des={data.des}
                                            bg={data.bgImage}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div> {/* ========= End Module_banner ========= */}
                <Separator />
                <br /> <br />
                {/* ========= Start Help_section ========= */}
                <div className="help_section bg-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="full text-center">
                                    <div className="title text-white">
                                        {/* ========= Edit This Button On Hover Mouse ========= */}
                                        <div className="mydivouter">
                                            <button type="button" className="mybuttonoverlap btn btn-primary" onClick={getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                            <h3 className="text-white">How can we help?</h3>
                                        </div> {/* ========= Close This Button On Hover Mouse ========= */}

                                    </div>
                                    <div className="btn_help">
                                        {/* ========= Edit This Button On Hover Mouse ========= */}
                                        <div className="mydivouter">
                                            <button type="button" className="mybuttonoverlap btn btn-primary" onClick={getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                            <NavLink to="#" className="white-pill-outline-button normal-button  js_hubspotdlg" data-hubspotid="93b8811a-3244-4fa4-9a4d-5b3fa050bf9a">Get an expert analysis
                                        </NavLink>
                                        </div> {/* ========= Close This Button On Hover Mouse ========= */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* ========= End Help_section ========= */}
                <br /><br />
                {/* Start Elements Area  */}
                <div className="rwt-advance-tab-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--40">
                            <div className="col-lg-12">
                                {/* ========= Edit This Button On Hover Mouse ========= */}
                                <div className="mydivouter">
                                    <button type="button" className="mybuttonoverlap btn btn-primary" onClick={getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                    <SectionTitle
                                        textAlign="text-center"
                                        radiusRounded=""
                                        subtitle="SERVICE APPS"
                                        title="Complementary web apps for <br /> IP management"
                                    />
                                </div> {/* ========= Close This Button On Hover Mouse ========= */}

                            </div>
                        </div>
                        <AdvanceTabOne />
                    </div>
                </div> {/* End Elements Area  */}
                <Separator />
                <br /> <br />

                {/* ========= Start ConvenientApp ========= */}
                <Modular />
                <Separator />
                {/* ========= End ConvenientApp ========= */}

                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* ========= Edit This Button On Hover Mouse ========= */}
                                <div className="mydivouter">
                                    <button type="button" className="mybuttonoverlap btn btn-primary" onClick={getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                    <SectionTitle className="mb-4"
                                        textAlign="text-center"
                                        radiusRounded=""
                                        title="Services provide for you."
                                    />
                                </div> {/* ========= Close This Button On Hover Mouse ========= */}
                            </div>
                        </div>
                        <ServiceFour 
                            getData={getData} 
                            serviceStyle="service__style--1 icon-circle-style with-working-process"
                            textAlign="text-center"
                        />
                    </div>
                </div>
                {/* End Service Area  */}
                <Separator />

                <FooterBottom />

            </main>


            {
                model === true ? <PopupModel hide={() => setModel(false)} /> : ""
            }
        </>
    )
}

export default IPSoftware;

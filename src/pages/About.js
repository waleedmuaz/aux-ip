import React  , {useState} from 'react';
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SEO from "../common/SEO";
import HeaderTwo from '../common/header/HeaderTwo';
import TabThree from '../elements/tab/TabThree';
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import SlipFour from "../elements/split/SlipFour";
import SlpitOne from "../elements/split/SlpitOne";
import AdvancePricingOne from "../elements/advancePricing/AdvancePricingOne";
import FooterTwo from '../common/footer/FooterTwo';
import Copyright from '../common/footer/Copyright';
import Separator from "../elements/separator/Separator";
import PortfolioOne from "../elements/portfolio/PortfolioOne";

import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from '../data/blog/BlogList.json';
import aboutBg from '../assets/images/hero-about-main.webp';
import aboutLine from '../assets/images/about_timeline.webp';
import aboutLine1 from '../assets/images/about_timeline1.webp';
import aboutLine2 from '../assets/images/about_timeline2.webp';
import aboutLine3 from '../assets/images/about_timeline3.webp';
import aboutLine4 from '../assets/images/about_timeline4.webp';
import aboutLine5 from '../assets/images/about_timeline5.webp';
import AboutPara from './AuxIP/AboutPara';
import TimeLine from './AuxIP/TimeLine';
import FooterBottom from '../elements/AuxIP/FooterBottom';
import HeaderTopBar from '../common/header/HeaderTopBar';
import PopupModel from '../elements/AuxIP/PopupModel';
import Button from 'react-bootstrap/esm/Button';
var BlogListData = BlogClassicData.slice(0, 3);

//   Question and parargraph

const AboutData = [
    {
        id: 1,
        question: "Where we are",
        para: "Over more than 60 years, our global presence has developed into more than 20 offices on all continents. Since 1962, we have continued to open offices to better serve our customers. We believe that our customers deserve the best representation wherever they want to protect their IP; in their language and in their time zone.",
    },
    {
        id: 2,
        question: "What you can expect from us",
        para: "We believe that quality is a prerequisite when working with a service provider. Every provider or IP law firm will agree on this; but, only a few have evidence. This proof of quality is why years ago we invested in an effective Quality Management program to plan, conduct and constantly monitor our service quality and guarantee customer satisfaction. Furthermore, the security of information and other assets is fundamental to our business success. Our information security management system conforms to the internationally accepted best practices as defined in relevant security standards, procedures and guidelines, following ISO 27001 and BSI IT security baselines.",
    },
];


//   All timeLine
const TimeLineData = [
    {
        id: 1,
        sign: "1962 - 1973",
        title: "Beginnings in Luxembourg",
        para: " The story begins. John. J. Dennemeyer establishes a patent law firm in Luxembourg Business is flourishing, the patents world is in full bloom. <br/>  <br/>  <br/>   It is the time for new inventions, new technologies and new beginnings. Soon, the Luxembourgish patent law firm is becoming a familiar name in the industry, as big clients make it their go-to company for patent-related issues.",
    },
    {
        id: 2,
        image: aboutLine,
    },
    {
        id: 3,
        sign: "1973 - 1984",
        title: "Seeing the future",
        para: "The company is extending. A first foreign office Dennemeyer & Co. Ltd. is established in Stockport (UK) and the first computer-based patent annuity payments in the world begin here. The electronic age is making its rise and Dennemeyer & Co. sees what the future needs. <br/>  <br/>  <br/>   In 1984 the first patent and trademark administration software is released. The world of IP welcomes the new arrival, workflows are being streamlined and processes are simplified.",
    },
    {
        id: 4,
        image: aboutLine1,
    },
    {
        id: 5,
        sign: "1984 - 2008",
        title: "Seeing the future",
        para: "New offices are opened all over the world for what is starting to turn into a global company. Tokyo (Japan) in 1987, Paris (France) in 1997, Somerset (New Jersey) and in Chicago (Illinois) both in the United States in 2004, Munich (Germany) in 2006, all become homes to Dennemeyer offices. <br/>  <br/>   Also, in 1997 the trademark administration software Hypermark, the precursor of modern DIAMS, is acquired, laying the foundation for what is going to become one of the most powerful IP management systems of today.",
    },
    {
        id: 6,
        image: aboutLine2,
    },
    {
        id: 7,
        sign: "2009 - 2017",
        title: "Growing further",
        para: "The Dennemeyer Family grows and is now present on almost all continents. Dennemeyer & Associates is established in Brasov (Romania) in 2009, in Munich (Germany) in 2010, the joint venture PAN Asia IP Services Ltd. is created in Beijing (China) in 2010, new Dennemeyer & Associates offices in Chicago (USA) in 2010, Tokyo (Japan) and Warsaw (Poland) in 2011, 2012 in Melbourne (Australia), 2013 in Zagreb (Croatia), Dubai (UAE) in 2014 and Rio de Janeiro (Brazil) in 2015.<br/>  <br/>   In 2011 the first version of DIAMS iQ is released, making the work of countless people an activity a lot less stressful. In the same year Dennemeyer is awarded the quality management certification ISO 9001. Since 2018, our information security management system conforms to the internationally accepted best practices as defined in relevant security standards, procedures and guidelines, following ISO 27001 and BSI IT security baselines. <br/>  <br/>   In January 2017 Dennemeyer IP Solutions opened a new office in Singapore, followed two weeks later by the new Dennemeyer & Associates office in Moscow. Only another few months later Dennemeyer & Associates closed the last remaining white space on Dennemeyer’s world map with the opening of its office in Johannesburg.",
    },
    {
        id: 8,
        image: aboutLine3,
    },
    {
        id: 9,
        sign: "2018-2020",
        title: "New developments",
        para: "In January 2018, Dennemeyer & Associates increased its global presence with a new office in Paris. <br/>  <br/>   In October 2018, Dennemeyer acquired Octimine, an innovative startup company that provides cutting-edge patent searching and patent analysis technology using artificial intelligence (AI). The search software is used for prior-art, freedom-to-operate and opposition searches. <br/>  <br/>   December 2019 brings along a new member of the Dennemeyer Group: the well-established Italian IP law firm De Simone & Partners. Continuing Dennemeyer's glocal approach, the De Simone  brand remains the face of the Italian market while serving as a gateway to Dennemeyer's international legal and administrative backbone.",
    },
    {
        id: 10,
        image: aboutLine5,
    },
];

const updateBool = ()=>{
}

const About = () => {

    const [model, setModel] = useState(false);
    const getData = () => {
        return setModel(true);
    }
    
    return (
        <>
            <SEO title="International Consulting" />
            <main className="page-wrapper">
            <HeaderTopBar />
                <HeaderTwo btnStyle="btn-small btn-icon" />

                {/* Start Slider Area  */}
                <div className="slider-area slider-style-1 variation-default height-850 bg_image" data-black-overlay="7" style={{ backgroundImage: `url(${aboutBg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-center">
                                   {/* ========= Edit This Button On Hover Mouse ========= */}
                                   <div className="mydivouter">
                                    <button type="button" className="mybuttonoverlap btn btn-primary" onClick={getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                    <h6 className="title display-one">Protecting IP for over 60 years<br /></h6>
                                </div> {/* ========= Close This Button On Hover Mouse ========= */}
                                    {/* ========= Edit This Button On Hover Mouse ========= */}
                                    <div className="mydivouter">
                                    <button type="button" class="mybuttonoverlap btn btn-primary" onClick={getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                    <p className="description">In the past decades Dennemeyer Group, founded as a patent law firm in Luxembourg, has developed into the leading global full service provider for the IP management.</p>
                                </div> {/* ========= Close This Button On Hover Mouse ========= */}
                              
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                {/* ====== Start paragraph ==== */}
                <div className="para my-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="full">
                                   {/* ========= Edit This Button On Hover Mouse ========= */}
                                   <div class="mydivouter">
                                    <button type="button" class="mybuttonoverlap btn btn-primary" onClick={getData}><i class="fa fa-pencil" aria-hidden="true"></i></button>
                                    <p>Dennemeyer has a unique position on the global IP market. The combination of our global IP law firm – Dennemeyer & Associates –, the IP management service provider – Dennemeyer IP Solutions –, Dennemeyer Consulting; as well as our state-of-the-art IP management software – DIAMS iQ – makes us the sole “full service provider” for global IP management. Our customers benefit from our broad range of expertise – all within one provider.</p>
                                </div> {/* ========= Close This Button On Hover Mouse ========= */}
                               
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  {/* ====== End paragraph ==== */}
                {/* ====== Start Question ==== */}
                <div className="question_section my-5">
                    <div className="container">
                        <div className="row">
                            {
                                AboutData.map((data, ind) => {
                                    return (
                                        <AboutPara
                                            question={data.question}
                                            para={data.para}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>  {/* ====== End question_section ==== */}

                {/* ====== Start history ==== */}
                <div className="history my-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="full">
                                    <div className="title">
                                     {/* ========= Edit This Button On Hover Mouse ========= */}
                                   <div class="mydivouters">
                                    <button type="button" class="mybuttonoverlaps btn btn-primary" onClick={getData}><i class="fa fa-pencil" aria-hidden="true"></i></button>
                                    <h4>Our history</h4>
                                </div> {/* ========= Close This Button On Hover Mouse ========= */}
                                        
                                    </div>
                                          {/* ========= Edit This Button On Hover Mouse ========= */}
                                   <div class="mydivouter">
                                    <button type="button" class="mybuttonoverlap btn btn-primary" onClick={getData}><i class="fa fa-pencil" aria-hidden="true"></i></button>
                                    <p>Dennemeyer has a unique position on the global IP market. The combination of our global IP law firm – Dennemeyer & Associates –, the IP management service provider – Dennemeyer IP Solutions –, Dennemeyer Consulting; as well as our state-of-the-art IP management software – DIAMS iQ – makes us the sole “full service provider” for global IP management. Our customers benefit from our broad range of expertise – all within one provider.</p>
                                </div> {/* ========= Close This Button On Hover Mouse ========= */}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  {/* ====== End history ==== */}

                {/* ========== Start Luxembourg_section =========== */}
                <div className="luxembourg_section my-5">
                    <div className="container">
                        <div className="row">
                            {
                                TimeLineData.map((data, ind) => {
                                    return (
                                        <TimeLine
                                            key={ind}
                                            sign={data.sign}
                                            title={data.title}
                                            para={data.para}
                                            image={data.image}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>  {/* ====== End Luxembourg_section ==== */}

                <Copyright />
            </main>
           
            {
                model === true ?   <PopupModel hide={()=> setModel(false)} /> : ""
            }
        </>
    )
}

export default About;

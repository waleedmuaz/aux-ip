import React from 'react'
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import HeaderTopBar from '../common/header/HeaderTopBar';
import AboutFour from '../elements/about/AboutFour';
import AdvanceTabTwo from '../elements/advancetab/AdvanceTabTwo';
import CounterUpFour from '../elements/counterup/CounterUpFour';
import CalltoActionFive from '../elements/calltoaction/CalltoActionFive';
import TeamFour from '../elements/team/TeamFour';
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import Separator from "../elements/separator/Separator";
import FooterOne from '../common/footer/FooterOne';
import Copyright from '../common/footer/Copyright';



const Consulting = () => {
    return (
        <>
            <SEO title="Consulting" />
            <main className="page-wrapper">
                <HeaderTopBar />
                <HeaderOne btnStyle="btn-small" HeaderSTyle="header-transparent" />

                {/* Start Slider area  */}
                <div className="slider-area slider-style-2 variation-2  height-850 bg_image" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/bg-image-10.jpg)`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-xl-6">
                                <div className="inner text-left">
                                    <h1 className="title display-one">We provide <br /> reliable business <br /> consulting help.</h1>
                                    <h6 className="tag-title">SOLUTION FOR YOUR BUSINESS</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider area  */}

                <AboutFour image="./images/about/contact-image.jpg" />

                {/* Start Elements Area  */}
                <div className="rwt-counterup-area rn-section-gapBottom mt_dec--30">
                    <div className="container">
                        <CounterUpFour column="col-lg-3 col-md-6 col-sm-6 col-12" counterStyle="counter-style-4" textALign="text-center" />   
                    </div>
                </div>
                {/* End Elements Area  */}


                <Separator />

                {/* Start Elements Area  */}
                <div className="rwt-advance-tab-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--40">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Consulting Report"
                                    title = "Report Our Consulting Business."
                                    description = ""
                                />
                            </div>
                        </div>
                        <AdvanceTabTwo />
                    </div>
                </div>
                {/* End Elements Area  */}


                <Separator />

                {/* Start Elements Area  */}
                <div className="rwt-team-area rn-section-gap">
                    <div className="wrapper plr--65 plr_sm--15">
                        <div className="row mb--20">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Our Experts."
                                    title = "Our Experts"
                                    description = ""
                                />
                            </div>
                        </div>
                        <TeamFour column="col-lg-6 col-xl-3 col-md-6 col-12 mt--30" teamStyle="team-style-three" />
                    </div>
                </div>
                {/* End Elements Area  */}


                {/* Start Elements Area  */}
                <div className="rwt-callto-action-area rn-section-gapBottom">
                    <div className="wrapper">
                        <CalltoActionFive />
                    </div>
                </div>
                {/* End Elements Area  */}

                <FooterOne />
                <Copyright />
            </main>

        </>
    )
}

export default Consulting

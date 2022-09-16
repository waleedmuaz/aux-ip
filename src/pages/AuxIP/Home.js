import React from 'react'
import SEO from "../../common/SEO";
import {Link} from "react-router-dom";
import HeaderTwo from '../../common/header/HeaderTwo';
import FooterFour from '../../common/footer/FooterFour';
import HeaderTopBar from '../../common/header/HeaderTopBar';
import Slider from "react-slick";
import { BannerActivation } from "../../utils/script";
import Separator from "../../elements/separator/Separator";
import ServiceFive from '../../elements/service/ServiceFive';
import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import PortfolioOne from "../../elements/portfolio/PortfolioOne";
import CircleProgress from "../../elements/progressbar/CircleProgress";
import TestimonialOne from "../../elements/testimonial/TestimonialOne";
import BlogList from "../../components/blog/itemProp/BlogList";
import MainBestAuxIPSection from '../../data/AuxIp/MainHomeJson.json';
import BrandsBar from '../../common/header/AuxIP/BrandsBar';
import PatentDeep from '../../elements/AuxIP/PatentDeep';
var BlogListData = MainBestAuxIPSection.slice(0, 3);



const BannerData = [
    {
        image: "/images/bg/bg-image-6.jpg",
        title: "Global Intellectual Property Management.",
        description: "Protecting and managing IP rights: full service and software for trademarks, patents, designs, IP performance, IP defense.",
        button:[{
            TXT:"Trademark Protection",
            link:"https://www.dennemeyer.com/trademark-protection/",
        },{
            TXT:"Petent Service",
            link:"https://www.dennemeyer.com/trademark-protection/",
        }]
    },
    {
        image: "/images/bg/bg-image-14.jpg",
        title: "Optimize costs and value of your IP portfoli",
        description: "Reduce Intellectual Property costs smartly and extract maximum value from your intangible asset portfolio.",
        button:[{
            TXT:"Discover IP Consulting",
            link:"https://www.dennemeyer.com/trademark-protection/",
        }]
    },
    {
        image: "/images/bg/bg-image-15.jpg",
        title: "Innovation is our DNA since 1962.",
        description: "Our story began 60 years ago in Luxembourg. What began as a patent law firm has evolved into an IP full-service provider globally, with legal, business and technology experts supporting the entire chain of IP management. A series of innovations has transformed us into one of the world'\s foremost IP service providers.",
        button:[{
            TXT:"Your 360 IP Partner",
            link:"https://www.dennemeyer.com/trademark-protection/",
        },{
            TXT:"Dennemeyer Overview",
            link:"https://www.dennemeyer.com/trademark-protection/",
        }]
    },
]


const Home = () => {
    return (
        <>
            <SEO title="Home" />
            <main className="page-wrapper">
                <HeaderTopBar />
                <HeaderTwo btnStyle="btn-small"  />

                {/* Start Slider Area  */}
                <Slider className="slider-area slider-style-4 slider-dot rn-slick-dot rn-slick-arrow" {...BannerActivation}>
                    {BannerData.map((data, index) => (
                        <div key={index} className="single-slide">
                            
                            <div className="height-950 bg-overlay bg_image" style={{backgroundImage: `url(${process.env.PUBLIC_URL} ${data.image})`}}>
                                <div className="container">
                                {/* <div class="top_banner ">
                                    <div class="top_banner_inner">
                                        <div class="top_banner_text">
                                            <p><strong>Live events</strong> — Global events, expert speakers, and webinar talks</p>
                                            
                                                <a href="#" target="_top" class="unstyled_link">Meet us here</a>
                                            
                                        </div>
                                        <div class="close_icon js_close_icon">×</div>
                                    </div>
                                </div> */}
                                    <div className="row row--30 align-items-center">
                                        <div className="order-2 order-lg-1 col-lg-7">
                                            <div className="inner text-left">
                                                <h1 className="title" dangerouslySetInnerHTML={{__html: data.title}}></h1>
                                                <p className="description" dangerouslySetInnerHTML={{__html: data.description}}></p>
                                                <div className="button-group mt--30">
                                                {data.button.map((buttomData, BTNindex) => (
                                                    <a className="btn-default" target="_blank" href={{__html:buttomData.link}}>{buttomData.TXT}</a>
                                                ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                {/* End Slider Area  */}
                {/* First Home 3 Div */}
                <div className="blog-area">
                    <div className="container">
                        <div className="row row--15">
                            {MainBestAuxIPSection.map((item) => (
                                <div key={item.id} className="col-lg-4 col-md-6 col-12 mt--30">
                                    <BlogList StyleVar="box-card-style-default" data={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div> 
                {/* End First Home 3 Div */}
                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    title = "Match the IP solution to your company"
                                    description = "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                    />
                            </div>
                        </div>
                        <ServiceFive 
                            serviceStyle = "gallery-style"
                            textAlign = "text-left"
                        />
                    </div>
                </div>
                {/* End Service Area  */}

                <BrandsBar />
                <Separator />            

                <PatentDeep/>
                <Separator />            

                {/* Start Testimonial Area  */}
                <div className="rwt-testimonial-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Client Feedback"
                                        title = "What People Are Saying."
                                        description = "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                    />
                            </div>
                        </div>
                        <TestimonialOne column="col-lg-4 col-md-6 col-sm-6 col-12 mt--30" teamStyle="card-style-default testimonial-style-one style-two" />
                    </div>
                </div>
                {/* End Testimonial Area  */}
                <Separator />            

                <div className="rwt-progressbar-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--25">
                            <div className="col-lg-10 offset-lg-1">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Our Expertise."
                                    title = "Compnanies Expertise."
                                    description = "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                />
                            </div>
                        </div>
                        <div className="col-lg-10 offset-lg-1">
                            <CircleProgress />
                        </div>
                    </div>
                </div>

                <Separator />          
                <FooterFour />
            </main>
        </>
    )
}
export default Home;
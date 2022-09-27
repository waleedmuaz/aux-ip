import React , {useState , useEffect} from 'react';
import SEO from "../../common/SEO";
import HeaderTwo from '../../common/header/HeaderTwo';
import HeaderTopBar from '../../common/header/HeaderTopBar';
import Slider from "react-slick";
import { BannerActivation } from "../../utils/script";
import Separator from "../../elements/separator/Separator";
import BlogList from "../../components/blog/itemProp/BlogList";
import MainBestAuxIPSection from '../../data/AuxIp/MainHomeJson';
import BrandsBar from '../../common/header/AuxIP/BrandsBar';
import PatentDeep from '../../elements/AuxIP/PatentDeep';
import LatestCard from './LatestCard';
import LatestInsightData from './LatestInsightData';
import ModuleBanner from './ModuleBanner';
import ModuleBannerData from './ModuleBannerData';
import ConvenientApp from '../../elements/AuxIP/ConvenientApp';
import TheIpGroup from '../../elements/AuxIP/TheIpGroup';
import FooterBottom from '../../elements/AuxIP/FooterBottom';
import PopupModel from '../../elements/AuxIP/PopupModel';
import axios from 'axios';
import Card from '../../elements/AuxIP/Card';


// import hero1 from '/aux-ip/src/assets/images/home/hero-quantum-innovation.webp';


const BannerData = [
    {
        image: "slider/slide1.webp",
        title: "Global Intellectual Property Management.",
        description: "Protecting and managing IP rights: full service and software for trademarks, patents, designs, IP performance, IP defense.",
        button: [{
            TXT: "Trademark Protection",
            link: "https://www.dennemeyer.com/trademark-protection/",
        }, {
            TXT: "Petent Service",
            link: "https://www.dennemeyer.com/trademark-protection/",
        }]
    },
    {
        image: "slider/slide2.webp",
        title: "Optimize costs and value of your IP portfoli",
        description: "Reduce Intellectual Property costs smartly and extract maximum value from your intangible asset portfolio.",
        button: [{
            TXT: "Discover IP Consulting",
            link: "https://www.dennemeyer.com/trademark-protection/",
        }]
    },
    {
        image: "slider/slide3.webp",
        title: "Innovation is our DNA since 1962.",
        description: "Our story began 60 years ago in Luxembourg. What began as a patent law firm has evolved into an IP full-service provider globally, with legal, business and technology experts supporting the entire chain of IP management. A series of innovations has transformed us into one of the world'\s foremost IP service providers.",
        button: [{
            TXT: "Your 360 IP Partner",
            link: "https://www.dennemeyer.com/trademark-protection/",
        }, {
            TXT: "Dennemeyer Overview",
            link: "https://www.dennemeyer.com/trademark-protection/",
        }]
    },
]
const getHomePageData = async () => {
    const response = await fetch(`${process.env.REACT_APP_BASEURL}content?page=Home`)
    if (!response.ok) {
      throw new Error('Data coud not be fetched!')
    } else {
      return response.json()
    }
  }

const Home = () => {
    const [isLoader, setIsLoader] = useState(false);


    const [sliderContent, setSliderContent] = useState([]);

    const [model, setModel] = useState(false);
    const getData = () => {
        return setModel(true);
    }
    const [content,setContent]=useState();

    useEffect(() => {
        getHomePageData()
          .then((res) => {
            setContent(res.data)
            setIsLoader(true);
          })
          .catch((e) => {
            console.log(e.message)
          })
      }, []);


      if(!isLoader){
        return <div>loading data...</div>;
    }


    // useEffect(() => {         // create .env file
    //     fetch(`https://fakestoreapi.com/products`).then((result) => {
    //         result.json().then((response) => {
    //             console.log("🚀 ~ file: Home.jsx ~ line 22 ~ result.json ~ response", response)
    //             setSliderContent(response);
    //         })
    //     })

    // }, []);




    return (
        <>


            <SEO title="Home" />
            <main className="page-wrapper">
                <HeaderTopBar />
                <HeaderTwo btnStyle="btn-small" />
                {/* {console.log("sliderContent" , sliderContent)} */}
                {/* Start Slider Area  */}
                <Slider className="slider-area slider-style-4 slider-dot rn-slick-dot rn-slick-arrow" {...BannerActivation}>
                
                    
                    {Object.keys(content.Slider).map(function(d, idx){
                        {console.log(content.Slider[idx])}
                    // <div key={content.Slider[idx]} className="single-slide">

                    //     Object.keys(content.Slider[d]).map(function(data,index){
                    //         Object.keys(content.Slider[d][data]).map(function(da,i){

                                
                    //         <div className="sliders height-950 bg-overlay bg_image" 
                    //             style={{ backgroundImage: content.Slider[d][data][i].slider_slider_img, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
                    //         >
                    //             <div className="container">
                    //                 <div className="row row--30 align-items-center">
                    //                     <div className="order-2 order-lg-1 col-lg-7">
                    //                         <div className="inner text-left">
                    //                             {/* ========= Edit This Button On Hover Mouse ========= */}
                    //                             <div className="mydivouter">
                    //                                 <button type="button" className="mybuttonoverlap btn btn-primary" onClick={getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                    //                                 {/* <h1 className="title" dangerouslySetInnerHTML={{ __html: content.Slider[d][data][i].key}}></h1> */}
                    //                             </div> {/* ========= Close This Button On Hover Mouse ========= */}
                    //                             {/* ========= Edit This Button On Hover Mouse ========= */}
                    //                             <div className="mydivouter">
                    //                                 <button type="button" className="mybuttonoverlap btn btn-primary" onClick={getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                    //                                 {/* <p className="description" dangerouslySetInnerHTML={{ __html: content.context[1].content_detail }}></p> */}
                    //                             </div> {/* ========= Close This Button On Hover Mouse ========= */}

                    //                             <div className="button-group mt--30">
                    //                                 {/* ========= Edit This Button On Hover Mouse ========= */}
                    //                                 <div className="mydivouter">
                    //                                     <button type="button" className="mybuttonoverlap btn btn-primary  text-center" onClick={getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                    //                                     {/* {data.button.map((buttomData, BTNindex) => (
                    //                                         <a key={BTNindex} className="btn-default" target="_blank" href={{ __html: buttomData.link }} rel="noreferrer">{buttomData.TXT}</a>
                    //                                     ))} */}
                    //                                 </div> {/* ========= Close This Button On Hover Mouse ========= */}

                    //                             </div>
                    //                         </div>
                    //                     </div>
                    //                 </div>
                    //             </div>
                    //         </div>
                            // })
                        // });
                        // </div>
                    })} 
                </Slider>



             {/* 

            <div className="work-section py-5">
                <div className="container">
                    <div className="title text-center">
                        <h2> All PRODUCTS </h2>
                    </div>
                    { <div className="row">
                        {
                            sliderContent.map((currData, index) => {
                                console.log("🚀 ~ file: Home.js ~ line 197 ~ content.map ~ currData", currData)
                                return (
                                    <Card
                                        key={index}
                                        content_detail={currData.content_detail}
                                    />
                                )
                            })
                        }
                    </div> }
                </div>
            </div> */}


                {/* End Slider Area  */}
                {/* First Home 3 Div */}
                <div className="blog-area my-5">
                    <div className="container">
                        <div className="row row--15">

                            {
                                MainBestAuxIPSection.map((item, index) => {
                                    return (
                                        <BlogList StyleVar="box-card-style-default" data={item}
                                            key={index}
                                            image={item.image}
                                            title={item.title}
                                            text={item.text}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                {/* End First Home 3 Div */}
                <Separator />
                <BrandsBar />
                <Separator />
                <PatentDeep />
                <Separator />
                {/* ========= Start Latest-insights ========= */}
                <div className="latest_insight">
                    <div className="container">
                        <div className="row">
                            {
                                LatestInsightData.map((data, index) => {
                                    return (
                                        <LatestCard StyleVar="box-card-style-default"
                                            key={index}
                                            title={data.title}
                                            calender={data.calender}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div> {/* ========= End Latest-insights ========= */}
                <Separator />
                {/* ========= Start Module_banner ========= */}
                <div className="module_banner my-5">
                    <div className="container">
                        <div className="row">
                            {
                                ModuleBannerData.map((data, index) => {
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
                </div> {/* ========= End Latest-insights ========= */}
                <Separator />

                {/* ========= Start ConvenientApp ========= */}
                <ConvenientApp />
                <Separator />
                {/* ========= End ConvenientApp ========= */}


                {/* ========= Slider ========= */}
                <TheIpGroup />
                <Separator />
                {/* ========= Slider End  ========= */}
                <Separator />
               <FooterBottom />
            </main>

            {
                model === true ?   <PopupModel hide={()=> setModel(false)} /> : ""
            }
        </>
    )
}
export default Home;
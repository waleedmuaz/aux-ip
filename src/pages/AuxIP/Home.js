import React , {useEffect, useState} from 'react';
import SEO from "../../common/SEO";
import HeaderTwo from '../../common/header/HeaderTwo';
import HeaderTopBar from '../../common/header/HeaderTopBar';

import Separator from "../../elements/separator/Separator";
import ImageTextSlider from "../../components/AuxIP/blog/itemProp/ImageTextSlider";
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
import SliderData from '../../pages/AuxIP/SliderData';

// import hero1 from '/aux-ip/src/assets/images/home/hero-quantum-innovation.webp';


const Home = () => {

    const [model, setModel] = useState(false);
    const [content,setContent]=useState();
    const [isLoader,setIsLoader]=useState(false);

    const getData = () => {
        return setModel(true);
    }

    const getHomePageData = async () => {
        const response = await fetch(`${process.env.REACT_APP_BASEURL}content?page=Home`)
        if (!response.ok) {
          throw new Error('Data coud not be fetched!')
        } else {
          return response.json()
        }
      }

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





    return (
        <>

            <SEO title="Home" />
            <main className="page-wrapper">
                <HeaderTopBar />
                <HeaderTwo btnStyle="btn-small" />

                {/* Start Slider Area  */}
                    <SliderData  content={content} getData={getData}/>                {/* End Slider Area  */}
                {/* First Home 3 Div */}
                <div className="blog-area my-5">
                    <div className="container">
                        <div className="row row--15">
                            <ImageTextSlider  content={content} getData={getData} StyleVar="box-card-style-default"
                            />
                        </div>
                    </div>
                </div>
                {/* End First Home 3 Div */}
                <Separator />
                <BrandsBar />
                <Separator />
                    <PatentDeep content={content} getData={getData} />  
                <Separator />
                {/* ========= Start Latest-insights ========= */}
                <div className="latest_insight">
                    <div className="container">
                        <div className="row">
                            <LatestCard StyleVar="box-card-style-default" content={content}   getData={getData} />
                        </div>
                    </div>
                </div> {/* ========= End Latest-insights ========= */}
                <Separator />
                {/* ========= Start Module_banner ========= */}
                <div className="module_banner my-5">
                    <div className="container">
                        <div className="row">
                                <ModuleBanner
                                    content={content}   getData={getData}
                                />
                        </div>
                    </div>
                </div> {/* ========= End Latest-insights ========= */}
                <Separator />

                {/* ========= Start ConvenientApp ========= */}
                <ConvenientApp  content={content}   getData={getData} />
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
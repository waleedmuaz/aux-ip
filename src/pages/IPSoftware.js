import React, { useState } from 'react';
import SEO from "../common/SEO";
import HeaderTopBar from '../common/header/HeaderTopBar';
import HeaderTwo from '../common/header/HeaderTwo';
import ServiceFour from '../elements/service/ServiceFour';
import AdvanceTabOne from '../elements/advancetab/AdvanceTabOne';
import Separator from "../elements/separator/Separator";
import SectionTitle from "../elements/AuxIP/SectionTitle";
import ModuleBanner from './IpService/ModuleBanner';
import Modular from './AuxIP/Modular';
import FooterBottom from '../elements/AuxIP/FooterBottom';
import PopupModel from '../elements/AuxIP/PopupModel';
import { useEffect } from 'react';
import Banner from './IpService/Banner';
import HelpSection from './IpService/HelpSection';





const IPSoftware = (props) => {
    const [model, setModel] = useState(false);
    const [content, setContent]=useState();
    const [isLoader, setIsLoader]=useState(false);
    const [contetId, setContetId ]=useState(false);

    const getData = () => {
        return setModel(true);
    }
    const getIpServicePageData = async () => {
        const response = await fetch(`${process.env.REACT_APP_BASEURL}content?page=IP Service`)
        if (!response.ok) {
          throw new Error('Data coud not be fetched!')
        } else {
          return response.json()
        }
      }

    useEffect(() => {
        getIpServicePageData().then((res) => {
            setContent(res.data)
            setIsLoader(true);
        })
        .catch((e) => {
        console.log(e.message)
        })
    }, []);    
     
    if(!isLoader){
        return <div className='loader'><span></span></div>;
    }


    const showPopUp = (id) => {
        props.setContetId(id);
        props.getData();
    }


    return (
        <>

            <SEO title="IPSoftware" />
            <main className="page-wrapper">

                <HeaderTopBar />
                <HeaderTwo btnStyle="btn-small btn-icon" />


                {/* Start Slider Area  */}
                    <Banner setContetId={setContetId}  content={content}   getData={getData} />
                {/* End Slider Area  */}

                {/* ========= Start Module_banner ========= */}
                <div className="module_banner my-5">
                    <div className="container">
                        <div className="row">
                            <ModuleBanner setContetId={setContetId}   content={content}   getData={getData} />
                        </div>
                    </div>
                </div> {/* ========= End Module_banner ========= */}
                <Separator />
                <br /> <br />
                {/* ========= Start Help_section ========= */}
                    <HelpSection setContetId={setContetId}   content={content}   getData={getData}/>
                {/* ========= End Help_section ========= */}
                <br /><br />
                {/* Start Elements Area  */}
                <div className="rwt-advance-tab-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--40">
                            <div className="col-lg-12">
                                {/* ========= Edit This Button On Hover Mouse ========= */}
                                <div className="mydivouter">
                                
                                    <SectionTitle
                                        textAlign="text-center"
                                        radiusRounded=""
                                        setContetId={setContetId}
                                        content={content.ComplementaryService}
                                        getData={getData}
                                    />
                                </div> {/* ========= Close This Button On Hover Mouse ========= */}

                            </div>
                        </div>
                        <AdvanceTabOne setContetId={setContetId}   content={content}   getData={getData} />
                    </div>
                </div> {/* End Elements Area  */}
                <Separator />
                <br /> <br />

                {/* ========= Start ConvenientApp ========= */}
                <Modular  setContetId={setContetId}   content={content}   getData={getData}  />
                <Separator />
                {/* ========= End ConvenientApp ========= */}

                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* ========= Edit This Button On Hover Mouse ========= */}
                                <div className="mydivouter">
                                   
                                    <SectionTitle className="mb-4"
                                        textAlign="text-center"
                                        radiusRounded=""
                                        getData={getData}
                                        setContetId={setContetId}
                                        content={content.ServiceProvideForYou}
                                    />
                                </div> {/* ========= Close This Button On Hover Mouse ========= */}
                            </div>
                        </div>
                        <ServiceFour 
                           setContetId={setContetId}   content={content}   getData={getData}
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
                model === true ?   <PopupModel contentId={contetId} hide={()=> setModel(false)} /> : ""
            }
        </>
    )
}

export default IPSoftware;

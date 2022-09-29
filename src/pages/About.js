import React  , {useState} from 'react';
import SEO from "../common/SEO";
import HeaderTwo from '../common/header/HeaderTwo';
import Copyright from '../common/footer/Copyright';

import aboutBg from '../assets/images/hero-about-main.webp';
import AboutPara from './AuxIP/AboutPara';
import TimeLine from './AuxIP/TimeLine';
import HeaderTopBar from '../common/header/HeaderTopBar';
import PopupModel from '../elements/AuxIP/PopupModel';
import { useEffect } from 'react';
import FooterBottom from '../elements/AuxIP/FooterBottom';

//   Question and parargraph


const About = () => {
    const [model, setModel] = useState(false);
    const [content,setContent]=useState();
    const [isLoader,setIsLoader]=useState(false);
    const getData = () => {
        return setModel(true);
    }
    const getIpServicePageData = async () => {
        const response = await fetch(`${process.env.REACT_APP_BASEURL}content?page=Company`)
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
    const setCardData = (sliderList) => {
        let slider_key =  Object.keys(sliderList);
        let arrayList=[];
        for(let i=0; i<slider_key.length;i++){
            arrayList[i]=sliderList[slider_key[i]]
        }
        return arrayList;
    }
    if(!isLoader){
        return <div className='loader'><span></span></div>;
    }
    return (
        <>
            <SEO title="International Consulting" />
            <main className="page-wrapper">
                <HeaderTopBar />
                <HeaderTwo btnStyle="btn-small btn-icon" />
                {setCardData(content.Company).map((data, index) => (
                <div className="slider-area slider-style-1 variation-default height-850 bg_image" data-black-overlay="7" style={{ backgroundImage: `url(${aboutBg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-center">
                                   {/* ========= Edit This Button On Hover Mouse ========= */}
                                   <div className="mydivouter">
                                    <button type="button" className="mybuttonoverlap btn btn-primary" onClick={getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                    <h6 className="title display-one">{ data.company_title[0].content_detail}<br /></h6>
                                </div> {/* ========= Close This Button On Hover Mouse ========= */}
                                    {/* ========= Edit This Button On Hover Mouse ========= */}
                                    <div className="mydivouter">
                                    <button type="button" className="mybuttonoverlap btn btn-primary" onClick={getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                    <p className="description">
                                        { data.company_description[0].content_detail}
                                    </p>
                                </div> {/* ========= Close This Button On Hover Mouse ========= */}
                              
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}

                {/* End Slider Area  */}

                {/* ====== Start paragraph ==== */}
                {setCardData(content.Company).map((data, index) => (
                    <div className="para my-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="full">
                                    {/* ========= Edit This Button On Hover Mouse ========= */}
                                    <div className="mydivouter">
                                        <button type="button" className="mybuttonoverlap btn btn-primary" onClick={getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                        <p>
                                            { data.company_description_12_col_1[0].content_detail}
                                        </p>
                                    </div> {/* ========= Close This Button On Hover Mouse ========= */}
                                
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                ))}
                
                {/* ====== End paragraph ==== */}
                {/* ====== Start Question ==== */}
                <div className="question_section my-5">
                    <div className="container">
                        <div className="row">
                            <AboutPara
                                content={content}
                                getData={getData}
                            />
                        </div>
                    </div>
                </div>  {/* ====== End question_section ==== */}

                {/* ====== Start history ==== */}
                {setCardData(content.Company).map((data, index) => (

                <div className="history my-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="full">
                                    <div className="title">
                                     {/* ========= Edit This Button On Hover Mouse ========= */}
                                   <div className="mydivouters">
                                    <button type="button" className="mybuttonoverlaps btn btn-primary" onClick={getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                    <h4>
                                        { data.company_description_12_col_2_title[0].content_detail}
                                    </h4>
                                </div> {/* ========= Close This Button On Hover Mouse ========= */}
                                        
                                    </div>
                                          {/* ========= Edit This Button On Hover Mouse ========= */}
                                   <div className="mydivouter">
                                    <button type="button" className="mybuttonoverlap btn btn-primary" onClick={getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                    { data.company_description_12_col_2_desctiption[0].content_detail}
                                </div> {/* ========= Close This Button On Hover Mouse ========= */}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                ))}
                
                {/* ====== End history ==== */}

                {/* ========== Start Luxembourg_section =========== */}
                <div className="luxembourg_section my-5">
                    <div className="container">
                        <div className="row">
                            <TimeLine
                                content={content}
                                getData={getData}
                            />
                        </div>
                    </div>
                </div>  {/* ====== End Luxembourg_section ==== */}

                {/* <Copyright /> */}
               <FooterBottom />

            </main>
           
            {
                model === true ?   <PopupModel hide={()=> setModel(false)} /> : ""
            }
        </>
    )
}

export default About;

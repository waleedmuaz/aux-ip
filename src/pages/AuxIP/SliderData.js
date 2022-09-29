import React from 'react';
import Slider from "react-slick";
import { BannerActivation } from "../../utils/script";


const SliderData = (props) => {
    


    const setSliderData = (sliderList) => {
        let slider_key =  Object.keys(sliderList);
        let arrayList=[];
        for(let i=0; i<slider_key.length;i++){
            arrayList[i]=sliderList[slider_key[i]]
        }
        return arrayList;
    }
    
    const showPopUp = (id) => {
        props.setContetId(id);
        props.getData();
    }


return (
    <Slider className="slider-area slider-style-4 slider-dot rn-slick-dot rn-slick-arrow" {...BannerActivation}>

        {setSliderData(props.content.Slider).map((data, index) => (
        <div key={index} className="single-slide">
            <div className="sliders height-950 bg-overlay bg_image" style={{ backgroundImage: `url(${data.slider_slider_img[0].content_detail})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                 <div className="container">
                    <div className="row row--30 align-items-center">
                        <div className="order-2 order-lg-1 col-lg-7">
                            <div className="inner text-left">
                                <div className="mydivouter">
                                    <button type="button" className="mybuttonoverlap btn btn-primary"  onClick={() => showPopUp(data.slider_heading[0].id)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                    <h1 className="title" dangerouslySetInnerHTML={{ __html: data.slider_heading[0].content_detail }}></h1>
                                </div>
                                <div className="mydivouter">
                                    <button type="button" className="mybuttonoverlap btn btn-primary" onClick={() => showPopUp(data.slider_description[0].id)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                    <p className="description" dangerouslySetInnerHTML={{ __html: data.slider_description[0].content_detail }}></p>
                                </div>

                                <div className="button-group mt--30">
                                    <div className="mydivouter">
                                        {data.slider_button.map((buttomData, BTNindex) => (
                                            <>
                                            <button type="button" className="mybuttonoverlap btn btn-primary  text-center" onClick={() => showPopUp(buttomData.id)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                            <a key={BTNindex} className="btn-default" target="_blank" href={ buttomData.extra_detail_content } rel="noreferrer">{buttomData.content_detail}</a>
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            </div>
        ))}
    </Slider>
    )
}

export default SliderData;
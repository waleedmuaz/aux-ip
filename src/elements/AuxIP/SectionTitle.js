import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";


const SectionTitle = (props) => {
    const setData = (sliderList) => {
        let slider_key =  Object.keys(sliderList);
        let arrayList=[];
        for(let i=0; i<slider_key.length;i++){
            arrayList[i]=sliderList[slider_key[i]]
        }
        return arrayList;
    }

    return (
        <>
        {setData(props.content).map((data, index) => (
                <div className={`section-title text-center`}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <h3 className="title w-600 mb--20" dangerouslySetInnerHTML={{__html:  data.title[0].content_detail}}></h3>
                    </ScrollAnimation>
                </div>
        ))}
        </>
    )
}
export default SectionTitle;
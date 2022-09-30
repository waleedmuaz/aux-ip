import React from 'react';

const AboutPara = (props) => {

    const setData = (sliderList) => {
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
        <>
        {setData(props.content.CompanyPara).map((data, index) => (
            <div className="col-md-6 col-12 my-2">
                <div className="full">
                    <div className="title">
                        {/* ========= Edit This Button On Hover Mouse ========= */}
                        <div className="mydivouter">
                            <button type="button" className="mybuttonoverlap btn btn-primary" onClick={() => showPopUp(data.company_description_6_col_title[0].id)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                            <h4>
                                { data.company_description_6_col_title[0].content_detail}
                            </h4>
                        </div> {/* ========= Close This Button On Hover Mouse ========= */}
                    </div>
                    <div className="para">
                        {/* ========= Edit This Button On Hover Mouse ========= */}
                        <div className="mydivouter">
                            <button type="button" className="mybuttonoverlap btn btn-primary" onClick={() => showPopUp(data.company_description_6_col_description[0].id)}><i className="fa fa-pencil" aria-hidden="true" ></i></button>
                            <p>
                                { data.company_description_6_col_description[0].content_detail}
                            </p>
                        </div> {/* ========= Close This Button On Hover Mouse ========= */}
                    </div>
                </div>
            </div>
        ))}
        </>
    )
}

export default AboutPara;

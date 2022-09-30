import React from 'react';

const TimeLine = (props) => {
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
        {setData(props.content.CompanyBlog).map((data, index) => (
            <div className="col-lg-12 col-12 my-5">
                <div className="full row">
                   <div className='col-lg-6 col-12 my-5'>
                   <div className="sign mt-4">
                        {/* ========= Edit This Button On Hover Mouse ========= */}
                        <div className="mydivouters">
                            <button type="button" className="mybuttonoverlaps btn btn-primary" onClick={() => showPopUp(data.company_blog_date[0].id)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                            <h6 className="mb-0">
                                { data.company_blog_date[0].content_detail}
                                </h6>
                        </div> {/* ========= Close This Button On Hover Mouse ========= */}

                    </div>
                    <div className="title">
                        {/* ========= Edit This Button On Hover Mouse ========= */}
                        <div className="mydivouter">
                            <button type="button" className="mybuttonoverlap btn btn-primary" onClick={() => showPopUp(data.company_blog_title[0].id)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                            <h3>
                                { data.company_blog_title[0].content_detail}
                            </h3>
                        </div> {/* ========= Close This Button On Hover Mouse ========= */}

                    </div>
                    <div className="para">
                        {/* ========= Edit This Button On Hover Mouse ========= */}
                        <div className="mydivouter">
                            <button type="button" className="mybuttonoverlap btn btn-primary" onClick={() => showPopUp(data.company_blog_description[0].id)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                            <p dangerouslySetInnerHTML={{ __html: data.company_blog_description[0].content_detail }}></p>
                        </div> {/* ========= Close This Button On Hover Mouse ========= */}

                    </div>
                   </div>
                   <div className='col-lg-6 col-12 my-5'>
                   <div className="img">
                    {/* ========= Edit This Button On Hover Mouse ========= */}
                    <div className="mydivouter">
                            <button type="button" className="mybuttonoverlap btn btn-primary" onClick={() => showPopUp(data.company_blog_img[0].id)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                        <img src={data.company_blog_img[0].content_detail} alt="" />
                        </div> {/* ========= Close This Button On Hover Mouse ========= */}
                    </div>
                   </div>
                </div>
            </div>
        ))}

        </>
    )
}

export default TimeLine;

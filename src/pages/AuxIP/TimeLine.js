import React from 'react';

const TimeLine = (props) => {
    return (
        <>
            <div className="col-lg-6 co-12 my-5">
                <div className="full">
                    <div className="sign mt-4">
                        <h6 className="mb-0">{props.sign}</h6>
                    </div>
                    <div className="title">
                        <h3>{props.title}</h3>
                    </div>
                    <div className="para">
                        <p dangerouslySetInnerHTML={{ __html: props.para }}></p>
                    </div>
                    <div className="img">
                        <img src={props.image} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TimeLine;

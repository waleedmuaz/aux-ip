import React from 'react';

const AboutPara = (props) => {
    return (
        <>
            <div className="col-md-6 col-12 my-2">
                <div className="full">
                    <div className="title">
                        <h4>{props.question}</h4>
                    </div>
                    <div className="para">
                        <p>{props.para}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPara;

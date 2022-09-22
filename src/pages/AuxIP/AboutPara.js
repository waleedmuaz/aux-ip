import React from 'react';

const AboutPara = (props) => {
    return (
        <>
            <div className="col-md-6 col-12 my-2">
                <div className="full">
                    <div className="title">
                        {/* ========= Edit This Button On Hover Mouse ========= */}
                        <div class="mydivouter">
                            <button type="button" class="mybuttonoverlap btn btn-primary"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                            <h4>{props.question}</h4>
                        </div> {/* ========= Close This Button On Hover Mouse ========= */}
                    </div>
                    <div className="para">
                        {/* ========= Edit This Button On Hover Mouse ========= */}
                        <div class="mydivouter">
                            <button type="button" class="mybuttonoverlap btn btn-primary"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                            <p>{props.para}</p>
                        </div> {/* ========= Close This Button On Hover Mouse ========= */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPara;

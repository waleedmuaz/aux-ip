import React, {useState} from 'react';
import PopupModel from '../../elements/AuxIP/PopupModel';

const TimeLine = (props) => {

    const [model, setModel] = useState(false);
    const getData = () => {
        return setModel(true);
    }

    return (
        <>
            <div className="col-lg-6 co-12 my-5">
                <div className="full">
                    <div className="sign mt-4">
                        {/* ========= Edit This Button On Hover Mouse ========= */}
                        <div class="mydivouters">
                            <button type="button" class="mybuttonoverlaps btn btn-primary" onClick={getData}><i class="fa fa-pencil" aria-hidden="true"></i></button>
                            <h6 className="mb-0">{props.sign}</h6>
                        </div> {/* ========= Close This Button On Hover Mouse ========= */}

                    </div>
                    <div className="title">
                        {/* ========= Edit This Button On Hover Mouse ========= */}
                        <div class="mydivouter">
                            <button type="button" class="mybuttonoverlap btn btn-primary" onClick={getData}><i class="fa fa-pencil" aria-hidden="true"></i></button>
                            <h3>{props.title}</h3>
                        </div> {/* ========= Close This Button On Hover Mouse ========= */}

                    </div>
                    <div className="para">
                        {/* ========= Edit This Button On Hover Mouse ========= */}
                        <div class="mydivouter">
                            <button type="button" class="mybuttonoverlap btn btn-primary" onClick={getData}><i class="fa fa-pencil" aria-hidden="true"></i></button>
                            <p dangerouslySetInnerHTML={{ __html: props.para }}></p>
                        </div> {/* ========= Close This Button On Hover Mouse ========= */}

                    </div>
                    <div className="img">
                        <img src={props.image} alt="" />
                    </div>
                </div>
            </div>
            {
                model === true ?   <PopupModel hide={()=> setModel(false)} /> : ""
            }
        </>
    )
}

export default TimeLine;

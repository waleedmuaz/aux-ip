import React,{useState} from 'react';
import PopupModel from '../../elements/AuxIP/PopupModel';

const AboutPara = (props) => {

    const [model, setModel] = useState(false);
    const getData = () => {
        return setModel(true);
    }
    
    return (
        <>
            <div className="col-md-6 col-12 my-2">
                <div className="full">
                    <div className="title">
                        {/* ========= Edit This Button On Hover Mouse ========= */}
                        <div className="mydivouter">
                            <button type="button" className="mybuttonoverlap btn btn-primary" onClick={getData}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                            <h4>{props.question}</h4>
                        </div> {/* ========= Close This Button On Hover Mouse ========= */}
                    </div>
                    <div className="para">
                        {/* ========= Edit This Button On Hover Mouse ========= */}
                        <div className="mydivouter">
                            <button type="button" className="mybuttonoverlap btn btn-primary" onClick={getData}><i className="fa fa-pencil" aria-hidden="true" ></i></button>
                            <p>{props.para}</p>
                        </div> {/* ========= Close This Button On Hover Mouse ========= */}
                    </div>
                </div>
            </div>
            {
                model === true ?   <PopupModel hide={()=> setModel(false)} /> : ""
            }
        </>
    )
}

export default AboutPara;

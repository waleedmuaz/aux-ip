
import React, { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';


const PopupModel = (props) => {
    
    const [text, setText] = useState();
    let modelStyle = {
        display: 'block',
    }
    
    const getContentInformation = async () =>{
        let contextId=props.contentId;
        let data={
            'id':contextId,
        }
        const response = await fetch(`${process.env.REACT_APP_BASEURL}content/context`,
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            method: "POST",
            body: JSON.stringify(data),
            })
            if (!response.ok) {
            throw new Error('Data Get!')
            } else {
                let textData =await response.json();
                setText(textData.data.content_detail);
                return textData
            }  
    }

    useEffect(() => {
        getContentInformation()
    }, []);    

    const  updateData = async () => {
        
        let data={
            'id':props.contentId,
            'content_detail':text
        }
        const response = await fetch(`${process.env.REACT_APP_BASEURL}content/update`,
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            method: "POST",
            body: JSON.stringify(data),
        });
        if (!response.ok) {
          throw new Error('Data Not!')
        } else {
            let res= await response.json();
            console.log(res);
            if(res.status===false){
                toast.error(res.errors.content_detail, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            // return await response.json()

        }  
      }

    return (
        <>
            {/* <!-- Modal --> */}
            <div className="modal show  fade"  style={modelStyle}>
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Update Content</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.hide}> <i className="fa fa-times" aria-hidden="true"></i></button>
                        </div>
                        <div className="modal-body">
                            <textarea name='context' onChange={e => setText(e.target.value)} value={text} rows={10} col={50}>

                            </textarea>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={props.hide}>Close</button>
                            <button type="button" onClick={updateData} className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )



}
export default PopupModel;

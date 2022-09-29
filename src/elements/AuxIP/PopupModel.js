
import React from 'react';


const PopupModel = (props) => {
    let modelStyle = {
        display: 'block',
    }
    
    const  updateData = async () => {
        let context_id=1;
        let data={
            'id':context_id,
            'content_detail':"Global Intellectual Property Management."
        }
        const response = await fetch(`${process.env.REACT_APP_BASEURL}content/update`,
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            method: "POST",
            body: JSON.stringify(data),
            })
        if (!response.ok) {
          throw new Error('Data Not!')
        } else {
            return await response.json()
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
                            <textarea name='context' rows={10} col={50}>

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

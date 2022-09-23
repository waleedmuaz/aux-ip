
import React, { Component } from 'react';

export class PopupModel extends Component {
    render() {

        let modelStyle = {
            display: 'block',
        }

        return (
            <>
                {/* <!-- Modal --> */}
                <div className="modal show  fade"  style={modelStyle}>
                    <div className="modal-dialog  modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Global IP Market</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.props.hide}> <i class="fa fa-times" aria-hidden="true"></i></button>

                            </div>
                            <div className="modal-body">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quidem sed, neque, atque fuga repellendus iure minus illo labore culpa ipsa libero vitae suscipit quos dolore ad. Sit, perspiciatis quaerat.</p>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={this.props.hide}>Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default PopupModel;

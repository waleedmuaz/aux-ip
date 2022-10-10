import React, { useEffect, useState } from 'react';

import HeaderTopBar from '../../common/header/HeaderTopBar';
import HeaderTwo from '../../common/header/HeaderTwo';
import SEO from '../../common/SEO';
import FooterBottom from '../../elements/AuxIP/FooterBottom';
import Separator from '../../elements/separator/Separator';
import SideBar from '../../elements/AuxIP/Bar/SideBar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const AddListing = () => {

    const [reference, setReference] = useState("");
    const [type , setType] = useState("");
    const [application , setApplication] = useState("");
    const [applicationNumer , setApplicationNumer] = useState("");
    const [applicationDate , setApplicationDate] = useState("");

  

    return (
        <>
            <SEO title="Home" />
            <main className="page-wrapper">
                <HeaderTopBar />
                <HeaderTwo btnStyle="btn-small" />
                <Separator />
                <main id="main">
                    <section>
                        <div className="container-fluid">
                            <div className="row mb-5">
                                <SideBar />
                                <div className="col-md-10">
                                    <Separator />
                                    <div className="parent_dashboard_section my-5">
                                        <div className="container">
                                        <div className="title my-3">
                                        <h5>Listing</h5>
                                        </div><Separator />
                                          <form onSubmit={handleSubmit}>
                                          <div className="row my-5">
                                                <div className="col-md-6 col-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="reference" 
                                                        value={reference}
                                                        onChange={(e) => setReference(e.target.value)}
                                                        placeholder='Enter reference' />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="ip_type" 
                                                         value={type}
                                                        onChange={(e) => setType(e.target.value)}
                                                        placeholder='Enter ip_type' />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="application" 
                                                         value={application}
                                                        onChange={(e) => setApplication(e.target.value)}
                                                        placeholder='Enter application' />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="application_numbers"
                                                          value={applicationNumer}
                                                        onChange={(e) => setApplicationNumer(e.target.value)}
                                                         placeholder='Enter application_numbers' />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="application_date"
                                                         value={applicationDate}
                                                        onChange={(e) => setApplicationDate(e.target.value)}
                                                         placeholder='Enter application_filing_date' />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="patent_numbers" placeholder='Enter patent_numbers' />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="grant_date" placeholder='Enter grant_date' />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="country" placeholder='Enter country' />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="due_date" placeholder='Enter due_date' />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="last_date" placeholder='Enter last_instruction_date' />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="action_type" placeholder='Enter action_type' />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="estimated_cost" placeholder='Enter estimated_cost' />
                                                    </div>
                                                </div>
                                                <div className="btn_sec ml-auto">
                                                <button type='submit' className="btn btn-default">Submit</button>
                                                </div>
                                            </div>
                                          </form>
                                        </div>
                                    </div>
                              
                                </div>
                            </div>
                        </div>


                    </section>
                </main>
                <Separator />
                <FooterBottom />
            </main>

        </>
    )
}
export default AddListing;


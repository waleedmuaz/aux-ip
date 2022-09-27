import React from 'react';
import HeaderTopBar from '../../common/header/HeaderTopBar';
import HeaderTwo from '../../common/header/HeaderTwo';
import Separator from '../../elements/separator/Separator';

const ContactUs = () => {


    return (
        <>
            <HeaderTopBar />
            <HeaderTwo btnStyle="btn-small btn-icon" />
            <Separator />
            <div className="contact_section">
                <div className="container my-4">
                    <div className="title mb-4 text-center">
                        <h3>Contact Us</h3>
                    </div>
              <form>
              <div className="row my-5">
                        <div className="col-md-4 col-12">
                            <div className="form-group mt-5">
                                <label>First Name*</label>
                                <input type="text" className="form-control" id="fname" />
                            </div>
                        </div>
                        <div className="col-md-4 col-12 mt-5">
                            <div className="form-group">
                                <label>Last Name*</label>
                                <input type="text" className="form-control" id="lname" />
                            </div>
                        </div>
                        <div className="col-md-4 col-12 mt-5">
                            <div className="form-group">
                                <label>Business Email*</label>
                                <input type="email" className="form-control" id="email" />
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="form-group">
                                <label>Company name*</label>
                                <input type="text" className="form-control mb-0" id="company" />
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="form-group">
                                <label>Phone number</label>
                                <input type="text" className="form-control" id="phone" />
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="form-group">
                                <label>Country*</label>
                                <select className="form-select form-control" id="select-country" aria-label="Default select example">
                                    <option selected>Select Country</option>
                                    <option value="china">China</option>
                                    <option value="malayasia">Malayasia</option>
                                    <option value="singapore">Singapore</option>
                                </select>
                            </div>

                        </div> <br /> <br />
                                 {/* CHECKBOX Area */}
                        <div className="col-12">
                            <div class="form-check my-3">
                             <h5>Area of Interest</h5>
                            </div>
                        </div>
                        <div className="col-md-4 col-6">
                            <div class="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="check1" />
                                <label className="form-check-label" for="check1">
                                    Designs
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4 col-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="check2" />
                                <label className="form-check-label" for="check2">
                                    Law Firm Services
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4 col-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="check3" />
                                <label className="form-check-label" for="check3">
                                    DIAMS
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4 col-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="check4" />
                                <label className="form-check-label" for="check4">
                                    Octimine Search
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4 col-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="check5" />
                                <label className="form-check-label" for="check5">
                                    IP Consulting
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4 col-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="check6" />
                                <label className="form-check-label" for="check6">
                                    Patents
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4 col-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="check7" />
                                <label className="form-check-label" for="check7">
                                    IP Software
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4 col-6">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="check8" />
                                <label className="form-check-label" for="check8">
                                    IP Software
                                </label>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div class="form mt-4">
                                <label>Message*</label>
                                <textarea class="form-control"  rows="2" />
                            </div>
                        </div>
                        <div className="submit my-3 ml-auto">
                        <button type='submit' className='btn btn-default'>Submit</button>
                    </div>
                    </div>               
              </form>
                </div>
            </div>
        </>
    )
}

export default ContactUs;
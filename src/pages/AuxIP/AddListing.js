import React, { useEffect, useState } from 'react';

import HeaderTopBar from '../../common/header/HeaderTopBar';
import HeaderTwo from '../../common/header/HeaderTwo';
import SEO from '../../common/SEO';
import FooterBottom from '../../elements/AuxIP/FooterBottom';
import Separator from '../../elements/separator/Separator';
import SideBar from '../../elements/AuxIP/Bar/SideBar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import { roleUser } from '../../utils/AuxIP/helper';
import FileUpload from '../../elements/AuxIP/FileUpload';


const AddListing = () => {
    const [formData, setFormData] = useState({});

    const handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        setFormData((prevalue) => {
            return {
                ...prevalue,   // Spread Operator               
                [name]: value
            }
        })
    }
    const submitForm = (event) => {
        event.preventDefault();
        const dataArray = formData;
        axios.post(`${process.env.REACT_APP_BASEURL}company/form/store `, dataArray, {
            headers: {
                "Content-Type": "multipart/form-data",
                'Authorization': localStorage.getItem('auth')
            }
        })
            .then((response) => {
                console.log(response);
                // successfully uploaded response
            })
            .catch((error) => {
                console.log(error)
                // error response
            });
    };


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
                                            <form onSubmit={submitForm}>
                                                <div className="row my-5">
                                                    <div className="col-md-6 col-12">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="reference"
                                                                value={formData.reference}
                                                                onChange={handleChange}
                                                                placeholder='Enter reference' />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="ip_type"
                                                                value={formData.ip_type}
                                                                onChange={handleChange}
                                                                placeholder='Enter ip_type' />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="application"
                                                                value={formData.application}
                                                                onChange={handleChange}
                                                                placeholder='Enter application' />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="application_numbers"
                                                                value={formData.application_numbers}
                                                                onChange={handleChange}
                                                                placeholder='Enter application_numbers' />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="application_filing_date"
                                                                value={formData.application_filing_date}
                                                                onChange={handleChange}
                                                                placeholder='Enter application_filing_date' />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="patent_numbers" placeholder='Enter patent_numbers'
                                                                onChange={handleChange}
                                                                value={formData.patent_numbers}

                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="grant_date" placeholder='Enter grant_date'
                                                                value={formData.grant_date}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="country" placeholder='Enter country'
                                                                value={formData.country}
                                                                onChange={handleChange}

                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="due_date" placeholder='Enter due_date'
                                                                value={formData.due_date}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className="form-group">
                                                            <input type="datetime-local" className="form-control" name="last_instruction_date" placeholder='Enter last_instruction_date'
                                                                value={formData.last_instruction_date}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="instruction" placeholder='Enter instruction'
                                                                value={formData.instruction}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="action_type" placeholder='Enter action_type'
                                                                value={formData.action_type}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="estimated_cost" placeholder='Enter estimated_cost'
                                                                value={formData.estimated_cost}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="btn_sec ml-auto">
                                                        <button type='submit' className="btn btn-default">Submit</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div>
                                        {(roleUser() && roleUser() === "Admin") ?
                                            <FileUpload />
                                            : ""}
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


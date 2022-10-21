import React, { useState } from 'react';

import HeaderTopBar from '../../common/header/HeaderTopBar';
import HeaderTwo from '../../common/header/HeaderTwo';
import SEO from '../../common/SEO';
import FooterBottom from '../../elements/AuxIP/FooterBottom';
import Separator from '../../elements/separator/Separator';
import SideBar from '../../elements/AuxIP/Bar/SideBar';
import axios from 'axios';
import { roleUser } from '../../utils/AuxIP/helper';
import FileUpload from '../../elements/AuxIP/FileUpload';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify';
// import moment from 'moment';

const AddListing = () => {
    const [formData, setFormData] = useState({
        // application_filing_date: new Date()
    });

    const handleChangeDate = (events, name) => {
        let target = {
            value: events,
            name: name,
        }
        handleChange({ target })
    }

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

                if (response.data.status === false) {
                    toast.error('The given data was invalid', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                } else if (response.data.status === 200) {
                    setFormData("");
                    event.target.reset();
                    toast.success('Instructions Submit Successfully!', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }

                console.log(response.data);
                // successfully uploaded response
            })
            .catch((error) => {
                console.log("🚀 ~ file: AddListing.js ~ line 66 ~ submitForm ~ error", error)

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
                                                            <label>Reference</label>
                                                            <input type="text" className="form-control" name="reference"
                                                                value={formData.reference}
                                                                onChange={handleChange}
                                                                autoComplete="off"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className="form-group">
                                                            <label>Ip Type</label>
                                                            <input type="text" className="form-control" name="ip_type"
                                                                value={formData.ip_type}
                                                                onChange={handleChange}
                                                                autoComplete="off"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className="form-group">
                                                            <label>Application</label>
                                                            <input type="text" className="form-control" name="application"
                                                                value={formData.application}
                                                                onChange={handleChange}
                                                                autoComplete="off"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className="form-group">
                                                            <label>Application Numbers</label>
                                                            <input type="text" className="form-control" name="application_numbers"
                                                                value={formData.application_numbers}
                                                                onChange={handleChange}
                                                                autoComplete="off"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className="form-group">
                                                            <label>Application Filing Date</label>
                                                            <DatePicker
                                                                name="application_filing_date"
                                                                selected={formData.application_filing_date}
                                                                onChange={(date) => handleChangeDate(date, 'application_filing_date')} //pass name as string
                                                                dateFormat="MMMM d yyyy"
                                                                className='form-control'
                                                                autoComplete="off"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className="form-group">
                                                            <label>Patent Numbers</label>
                                                            <input type="text" className="form-control" name="patent_numbers"
                                                                onChange={handleChange}
                                                                value={formData.patent_numbers}
                                                                autoComplete="off"

                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className="form-group">
                                                            <label>Grant Date</label>
                                                            <DatePicker
                                                                name="grant_date"
                                                                selected={formData.grant_date}
                                                                onChange={(date) => handleChangeDate(date, 'grant_date')} //pass name as string
                                                                dateFormat="MMMM d yyyy"
                                                                className='form-control'
                                                                autoComplete="off"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className="form-group">
                                                            <label>Country</label>
                                                            <input type="text" className="form-control" name="country"
                                                                value={formData.country}
                                                                onChange={handleChange}
                                                                autoComplete="off"

                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className="form-group">
                                                            <label>Due Date</label>
                                                            <DatePicker
                                                                name="due_date"
                                                                selected={formData.due_date}
                                                                onChange={(date) => handleChangeDate(date, 'due_date')} //pass name as string
                                                                dateFormat="MMMM d yyyy"
                                                                className='form-control'
                                                                autoComplete="off"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className="form-group">
                                                            <label>Last Instruction Date</label>
                                                            <DatePicker
                                                                name="last_instruction_date"
                                                                selected={formData.last_instruction_date}
                                                                onChange={(date) => handleChangeDate(date, 'last_instruction_date')} //pass name as string
                                                                dateFormat="MMMM d yyyy"
                                                                className='form-control'
                                                                autoComplete="off"
                                                            />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className="form-group">
                                                            <label>Instruction</label>
                                                            <input type="text" className="form-control" name="instruction"
                                                                value={formData.instruction}
                                                                onChange={handleChange}
                                                                autoComplete="off"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className="form-group">
                                                            <label>Action Type</label>
                                                            <input type="text" className="form-control" name="action_type"
                                                                value={formData.action_type}
                                                                onChange={handleChange}
                                                                autoComplete="off"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className="form-group">
                                                            <label>Estimated Cost</label>
                                                            <input type="text" className="form-control" name="estimated_cost"
                                                                value={formData.estimated_cost}
                                                                onChange={handleChange}
                                                                autoComplete="off"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className="form-group">
                                                            <label>User Id</label>
                                                            <input type="number" className="form-control" name="user_id"
                                                                value={formData.user_id}
                                                                onChange={handleChange}
                                                                autoComplete="off"
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


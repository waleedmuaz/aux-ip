import React, { useEffect, useState } from 'react';

import HeaderTopBar from '../../common/header/HeaderTopBar';
import HeaderTwo from '../../common/header/HeaderTwo';
import SEO from '../../common/SEO';
import FooterBottom from '../../elements/AuxIP/FooterBottom';
import Separator from '../../elements/separator/Separator';
import { Button, Table } from 'react-bootstrap';
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';
import SideBar from '../../elements/AuxIP/Bar/SideBar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useParams } from 'react-router-dom';
import PendingTable from '../../elements/AuxIP/CustomTable/PendingTable';


const PreviousRenewal = () => {
    let history = useHistory();
    const [isLoader, setIsLoader] = useState(false);
    // const [search, setSearch] = useState('');
    const [content, setContent] = useState('');
    const [selectedData, setSelectedData] = useState([]);
    const [filterConstraints, setfilterConstraints] = useState();

    const { id } = useParams();

    const getInstructionData = async () => {
        setIsLoader(true);
        const response = await fetch(`${process.env.REACT_APP_BASEURL}instruction/logs/list`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('auth'),
                },
                method: "POST",
            })
        if (!response.ok) {
            throw new Error('Data coud not be fetched!')
        } else {
            let res = await response.json();
            setContent(res.data);
            return res;
        }
    }

    useEffect(() => {
        if (!localStorage.getItem("auth")) {
            history.push("/login");
            setIsLoader(true);
        }

        getInstructionData();
        setIsLoader(true);

    }, [])


    if (!isLoader || content.length <= 0)
        return <div className='loader'><span></span></div>;


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
                                <div className="col-md-10 overflow">
                                    <Separator />
                                    <div className="parent_dashboard_section my-5">
                                        <div className="container">
                                            <div className="row mb-4">
                                                <div className="col-12">
                                                    <div className="full role">
                                                        <h5>Instruction Received Logs</h5>
                                                        <Form>
                                                            <InputGroup className='my-3'>

                                                                {/* onChange for search */}
                                                                {/* <Form.Control
                                                                    onChange={(e) => setSearch(e.target.value)}
                                                                    placeholder='Search Name...'
                                                                /> */}
                                                            </InputGroup>
                                                        </Form>
                                                        <PendingTable
                                                            content={content}
                                                            isLoader={isLoader}
                                                            setIsLoader={setIsLoader}
                                                            selectedData={selectedData}
                                                            setSelectedData={setSelectedData}
                                                            filterConstraints={filterConstraints}
                                                            setfilterConstraints={setfilterConstraints}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Separator />
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
export default PreviousRenewal;


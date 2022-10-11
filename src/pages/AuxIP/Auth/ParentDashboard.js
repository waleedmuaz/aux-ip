import React, { useEffect, useState } from 'react';

import HeaderTopBar from '../../../common/header/HeaderTopBar';
import HeaderTwo from '../../../common/header/HeaderTwo';
import SEO from '../../../common/SEO';
import FooterBottom from '../../../elements/AuxIP/FooterBottom';
import Separator from '../../../elements/separator/Separator';
import { Button, Table } from 'react-bootstrap';
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';
import SideBar from '../../../elements/AuxIP/Bar/SideBar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useParams } from 'react-router-dom';


const ParentDashboard = () => {
    let history = useHistory();
    const [isLoader, setIsLoader] = useState(false);
    const [search, setSearch] = useState('');
    const [content, setContent] = useState('');
    const [formData,setFormData]= useState('');
    const handleChange = (e) => {
        console.log(e);
        setFormData({ [e.target.name]: e.target.value });
    } 
    const getInstructionData = async () => {
        setIsLoader(true);
        const response = await fetch(`${process.env.REACT_APP_BASEURL}instruction/get`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('auth'),
                },
                method: "GET",
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


    if (!isLoader )
        return <div className='loader'><span></span></div>;



    const formatData = (list) => {
        let key = Object.keys(list);
        let arrayList = [];
        for (let i = 0; i < key.length; i++) {
            arrayList[i] = list[key[i]]
        }
        console.log(arrayList)
        return arrayList;
    }


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
                                            <div className="row mb-4">
                                                <div className="col-12">
                                                    <div className="full role">
                                                        <h5>Instruction Received</h5>


                                                        <Form>
                                                            <InputGroup className='my-3'>

                                                                {/* onChange for search */}
                                                                <Form.Control
                                                                    onChange={(e) => setSearch(e.target.value)}
                                                                    placeholder='Search Name...'
                                                                />
                                                            </InputGroup>
                                                        </Form>
                                                        <Table striped bordered hover>
                                                            <thead>
                                                                <tr>
                                                                    <th>Instruction #</th>
                                                                    <th>Name</th>
                                                                    <th>Email</th>
                                                                    <th>Company</th>
                                                                    {/* <th>Instruction</th> */}
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {formatData(content).map((item, index) => (
                                                                     <tr key={index}> 
                                                                        <td>{item.id}</td>
                                                                        <td>{item.name}</td>
                                                                        <td>{item.email}</td>
                                                                         <td> {(item.companies.length > 0) ?
                                                                            item.companies.map((d) => {
                                                                                return (
                                                                                    <span>
                                                                                        {d.company.name},
                                                                                    </span>
                                                                                )
                                                                            })
                                                                            : ""}
                                                                        </td>
                                                                        <td>
                                                                            <Link to={`/pending/${item.id}`}><button type='button' className='btn btn-primary'>View</button></Link>
                                                                        </td>
                                                                    </tr>
                                                                ))} 
                                                            </tbody>
                                                        </Table>
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
export default ParentDashboard;


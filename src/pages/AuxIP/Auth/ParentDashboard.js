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

export const data = [
    {
        id: 1,
        name: 'Wilmette',
        last_name: 'Maasz',
        email: 'wmaasz0@jalbum.net',
        phone: '130-309-6439',
    },
    {
        id: 2,
        name: 'Morry',
        last_name: 'Heater',
        email: 'mheater1@yale.edu',
        phone: '814-809-2958',
    },
    {
        id: 3,
        name: 'Laverne',
        last_name: 'MacMorland',
        email: 'lmacmorland2@webnode.com',
        phone: '271-342-7249',
    },
    {
        id: 4,
        name: 'Cindee',
        last_name: 'De Freitas',
        email: 'cdefreitas3@privacy.gov.au',
        phone: '617-624-6967',
    },
    {
        id: 5,
        name: 'Carole',
        last_name: 'Reffe',
        email: 'creffe4@nih.gov',
        phone: '738-966-3137',
    },
    {
        id: 6,
        name: 'Ansel',
        last_name: 'Iwanicki',
        email: 'aiwanicki5@pagesperso-orange.fr',
        phone: '716-371-2467',
    },
    {
        id: 7,
        name: 'Herold',
        last_name: 'Mungham',
        email: 'hmungham6@goodreads.com',
        phone: '659-298-5396',
    },
    {
        id: 8,
        name: 'Sibeal',
        last_name: 'Andreacci',
        email: 'sandreacci7@bloomberg.com',
        phone: '508-876-5450',
    },
];


const ParentDashboard = () => {

    const [contacts, setContacts] = useState(data);
    const [search, setSearch] = useState('');
    // const [user, setUser] = useState([]);

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
                                                                    <th>ID</th>
                                                                    <th>Name</th>
                                                                    <th>Email</th>
                                                                    <th>Company</th>
                                                                    <th>Instruction</th>
                                                                    <th>Inspect</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {data
                                                                    .filter((item) => {
                                                                        return search.toLowerCase() === ''
                                                                            ? item
                                                                            : item.name.
                                                                            toLowerCase().includes(search);
                                                                    })
                                                                    .map((item, index) => (
                                                                        <tr key={index}>
                                                                            <td>{item.id}</td>
                                                                            <td>{item.name}</td>
                                                                            <td>{item.email}</td>
                                                                            <td>{item.phone}</td>
                                                                            <td>{item.phone}</td>
                                                                            <td>
                                                                                <Link to={`/parent-dashboard/${item.id}`}><button type='button' className='btn btn-primary'>View</button></Link>
                                                                            </td>
                                                                        </tr>
                                                                    ))}
                                                            </tbody>
                                                        </Table>


                                                        {/* <Table striped bordered hover>
                                                            <thead>
                                                                <tr>
                                                                    <th>Id</th>
                                                                    <th>Role</th>
                                                                    <th>Guard Name</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {content.map((item, index) => (
                                                                    <tr key={index}>
                                                                        <td>{item.id}</td>
                                                                        <td>{item.name}</td>
                                                                        <td>{item.guard_name}</td>
                                                                        <td>
                                                                            <Link to={`/role/edit_create/${item.id}`} className='btn btn-success'>Edit</Link>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </Table> */}
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


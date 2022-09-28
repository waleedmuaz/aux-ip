import React, { useEffect, useState } from 'react';

import HeaderTopBar from '../../../common/header/HeaderTopBar';
import HeaderTwo from '../../../common/header/HeaderTwo';
import SEO from '../../../common/SEO';
import FooterBottom from '../../../elements/AuxIP/FooterBottom';
import Separator from '../../../elements/separator/Separator';
import { Button, Form, InputGroup, Table } from 'react-bootstrap';
import { TableData } from './TableData';
import { Link } from 'react-router-dom';
import SideBar from '../Bar/SideBar';
import axios from 'axios';

const Role = () => {

    const [content, setContent] = useState();
    const [isLoader, setIsLoader] = useState(false);
    const [user, setUser] = useState([]);

    const getRolePageData = async () => {
        const response = await fetch(`${process.env.REACT_APP_BASEURL}user/roles`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 29|TJ9x4T0FndtUmt8Z9xBu6J9vjF7xgTG7J5WdTUuC'
                },
                method: "GET",
            })
        if (!response.ok) {
            throw new Error('Data coud not be fetched!')
        } else {
            return await response.json()
        }
    }


    // const checkUser = async () => {
    //     const result = await axios.post(`${process.env.REACT_APP_BASEURL}login`);
    //     console.log("🚀 ~ file: Home.jsx ~ line 16 ~ loadUsers ~ result", result.data);
    //     setUser(result.data);
    // }

    // useEffect(() => {
    //     checkUser();
    // }, [])

    

    // if(){
    //    return  
    // }




    useEffect(() => {
        getRolePageData()
            .then((res) => {
                setContent(res.data);
                setIsLoader(true);
            })
            .catch((e) => {
                console.log(e.message)
            })
    }, []);



    if (!isLoader) {
        return <div>loading data...</div>;
    }





    return (

        <>
            <SEO title="Home" />
            <main className="page-wrapper">
                <HeaderTopBar />
                <HeaderTwo btnStyle="btn-small" />
                <Separator />
                <main id="mian">
                    <section>
                        <div className="container-fluid">
                            <div className="row mb-5">
                                <div className="col-md-2 sideBarLine">
                                   <SideBar />  
                                </div>
                                <div className="col-md-10">

                                    <Separator />
                                    <div className="dashboard_section my-5">
                                        <div className="container">
                                            <div className="row mb-4">
                                                <div className="col-12">
                                                    <div className="full role">
                                                        <Link to="role/edit_create"><Button type="submit" className="btn my-3 btn-primary">Add Role</Button></Link>
                                                        <Table striped bordered hover>
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
export default Role;


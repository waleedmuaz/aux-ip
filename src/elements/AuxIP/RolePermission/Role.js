import React, { useEffect, useState } from 'react';

import HeaderTopBar from '../../../common/header/HeaderTopBar';
import HeaderTwo from '../../../common/header/HeaderTwo';
import SEO from '../../../common/SEO';
import FooterBottom from '../../../elements/AuxIP/FooterBottom';
import Separator from '../../../elements/separator/Separator';
import { Button, Table } from 'react-bootstrap';
import SideBar from '../Bar/SideBar';
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';

const Role = () => {

    const [content, setContent] = useState();
    const [isLoader, setIsLoader] = useState(false);

    async function fetchData() {
        try {
          const response = await axios.get(`${process.env.REACT_APP_BASEURL}users`)
          setContent(response.data)
          console.log("Data has been successfully", response.data);
        } catch (error) {
          console.log("Data coud not be fetched!", error);
        }
      }
    
      useEffect(() => {
        fetchData();
      },[])
      
      

    let history = useHistory();


    useEffect(() => {
        if(!localStorage.getItem("auth")){
            history.push("/login");
          }
     }, [])


    if (!isLoader) {
        return <div className='loader'><span></span></div>;
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
                                   <SideBar />  
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


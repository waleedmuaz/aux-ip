import React, { useEffect } from 'react';

import HeaderTopBar from '../../../common/header/HeaderTopBar';
import HeaderTwo from '../../../common/header/HeaderTwo';
import SEO from '../../../common/SEO';
import FooterBottom from '../../../elements/AuxIP/FooterBottom';
import Separator from '../../../elements/separator/Separator';
import UserForm from '../../../elements/AuxIP/User/UserForm';
import SideBar from '../../../elements/AuxIP/Bar/SideBar';
import { useHistory } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
const User = () => {


    let history = useHistory();

    useEffect(() => {
        if (!localStorage.getItem("auth")) {
            history.push("/login");
        }
    }, [])

    return (
        <>
            <SEO title="User" />
            <main className="page-wrapper">
                <HeaderTopBar />
                <HeaderTwo btnStyle="btn-small" />
                <Separator />
                <main id="mian">
                    <section>
                        <div className="container-fluid mt-0">
                            <div className="row mt-0">
                                <div className="col-md-2 sideBarLine">
                                    <SideBar />
                                </div>
                                <div className="col-md-10">
                                    <Separator />
                                    <div className="row mb-5">
                                        <div className='col-md-12'>
                                            {/* <div className='row'> */}
                                            {/* <div className='col-md-4'>
                                                </div> */}
                                            {/* <div className='col-md-4'> */}

                                            <div className='card-body'>
                                                <UserForm formStyle="formRegister" />
                                            </div>
                                            {/* </div> */}
                                            <div className='col-md-4 top-50 start-50 '>
                                            </div>
                                            {/* </div> */}
                                        </div>

                                    </div>
                                    <Separator />

                                    {/* user table */}

                                    <div className="user_table">
                                        <div className="full">
                                            <Table striped responsive bordered hover>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>Username</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Jacob</td>
                                                        <td>Thornton</td>
                                                        <td>@fat</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td colSpan={2}>Larry the Bird</td>
                                                        <td>@twitter</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
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
export default User;





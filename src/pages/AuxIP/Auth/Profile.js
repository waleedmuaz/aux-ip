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


                                   <SideBar />
                                <div className="col-md-10">
                                    <Separator />
                                    <div className="row mb-5">
                                        <div className='col-md-12'>
                                            <div className='card-body'>
                                                <table>
                                                <tr>
                                                       <td>Name</td> 
                                                       <td>Waleed</td> 
                                                    </tr>
                                                    <tr>
                                                       <td>Email</td> 
                                                       <td>Waleed</td> 
                                                    </tr>
                                                    <tr>
                                                       <td>Role</td> 
                                                       <td>Waleed</td> 
                                                    </tr>
                                                    <tr>
                                                       <td>Created At</td> 
                                                       <td>Waleed</td> 
                                                    </tr>
                                                </table>
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
export default User;





import React, { useEffect, useState } from 'react';

import HeaderTopBar from '../../common/header/HeaderTopBar';
import HeaderTwo from '../../common/header/HeaderTwo';
import SEO from '../../common/SEO';
import FooterBottom from '../../elements/AuxIP/FooterBottom';
import Separator from '../../elements/separator/Separator';
import SideBar from '../../elements/AuxIP/Bar/SideBar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const AddListing = () => {
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
                                                        <h5>Listing</h5>
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
export default AddListing;


import React, { useEffect, useState } from 'react';

import HeaderTopBar from '../../../common/header/HeaderTopBar';
import HeaderTwo from '../../../common/header/HeaderTwo';
import SEO from '../../../common/SEO';
import FooterBottom from '../../../elements/AuxIP/FooterBottom';
import Separator from '../../../elements/separator/Separator';
import { Table } from 'react-bootstrap';
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';
import SideBar from '../../../elements/AuxIP/Bar/SideBar';
import FileUpload from '../../../elements/AuxIP/FileUpload';
import CmsFileUpload from '../../../elements/AuxIP/User/CmsFileUpload';

const Cms = () => {

    const [content, setContent] = useState();
    const [isLoader, setIsLoader] = useState(false);

    async function fetchData() {
        const response = await fetch(`${process.env.REACT_APP_BASEURL}cms`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('auth'),
                },
                method: "GET",
            });
        if (!response.ok) {
            throw new Error('Data coud not be fetched!')
        } else {

            let res = await response.json();
            setContent(res.data);
            setIsLoader(true)
            console.log(res.data);
            return res;
        }
    }

    let history = useHistory();

    useEffect(() => {
        if (!localStorage.getItem("auth")) {
            history.push("/login");
        }
        fetchData();
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
                                    <div className="cms_section my-5">
                                        <div className="container">
                                            <div className="file-upload my-5">
                                                <CmsFileUpload />
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-12">
                                                    <div className="full">
                                                        <Table striped bordered hover className='mt-5'>
                                                            <thead>
                                                                <tr>
                                                                    <th>ID</th>
                                                                    <th>Name</th>
                                                                    <th>Url</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {content.map((item, index) => (
                                                                    <tr key={index}>
                                                                        <td>{item.id}</td>
                                                                        <td>{item.name}</td>
                                                                        <td>{item.image}</td>
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
export default Cms;


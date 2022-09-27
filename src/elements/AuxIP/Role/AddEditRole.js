import React, { useEffect, useState } from 'react';

import HeaderTopBar from '../../../common/header/HeaderTopBar';
import HeaderTwo from '../../../common/header/HeaderTwo';
import SEO from '../../../common/SEO';
import FooterBottom from '../FooterBottom';
import Separator from '../../separator/Separator';
import { Button, Form, InputGroup, Table } from 'react-bootstrap';
import FormRole from './FormRole';

const AddEditRole = () => {

    const [content,setContent]=useState();
    const [isLoader, setIsLoader] = useState(true);

    useEffect(() => {
        // setIsLoader(false);
      }, []);

      
    if(!isLoader){
        return <div>loading data...</div>;
    }





    return (
        
        <>
            <SEO title="Home" />
            <main className="page-wrapper">
                <HeaderTopBar />
                <HeaderTwo btnStyle="btn-small" />
                <Separator />
                <div className="dashboard_section my-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="full">
                                    <FormRole/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator />
                <FooterBottom />
            </main>

        </>
    )
}
export default AddEditRole;
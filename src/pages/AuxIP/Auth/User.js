import React from 'react';

import HeaderTopBar from '../../../common/header/HeaderTopBar';
import HeaderTwo from '../../../common/header/HeaderTwo';
import SEO from '../../../common/SEO';
import FooterBottom from '../../../elements/AuxIP/FooterBottom';
import Separator from '../../../elements/separator/Separator';
import UserForm from '../../../elements/AuxIP/User/UserForm';

const User = () => {
    return (
        <>
            <SEO title="User" />
            <main className="page-wrapper">
                <HeaderTopBar />
                <HeaderTwo btnStyle="btn-small" />
                <Separator />

                <div className="row">
                    <div className='col-md-12'>
                        <div className='row'>
                            <div className='col-md-4'>
                            </div>
                            <div className='col-md-4'>

                                <div className='card-body'>
                                    <UserForm formStyle="formRegister" />
                                </div>
                            </div>
                            <div className='col-md-4 top-50 start-50 '>
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
export default User;
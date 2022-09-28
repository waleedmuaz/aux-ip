import React from 'react';

import HeaderTopBar from '../../../common/header/HeaderTopBar';
import HeaderTwo from '../../../common/header/HeaderTwo';
import SEO from '../../../common/SEO';
import FooterBottom from '../../../elements/AuxIP/FooterBottom';
import Separator from '../../../elements/separator/Separator';
import UserForm from '../../../elements/AuxIP/User/UserForm';
import SideBar from '../../../elements/AuxIP/Bar/SideBar';

const User = () => {
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





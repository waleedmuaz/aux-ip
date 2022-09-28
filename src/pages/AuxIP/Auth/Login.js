import React ,{useEffect} from 'react';
import { Redirect, Route, Switch, Link, useHistory } from 'react-router-dom';
import HeaderTopBar from '../../../common/header/HeaderTopBar';
import HeaderTwo from '../../../common/header/HeaderTwo';
import SEO from '../../../common/SEO';
import ContactForm from "../../../elements/AuxIP/LoginForm/ContactForm";
import FooterBottom from '../../../elements/AuxIP/FooterBottom';
import Separator from '../../../elements/separator/Separator';

const Login = () => {

let history = useHistory();

 useEffect(() => {
    if(localStorage.getItem("auth")){
        history.push("/dashboard");
      }
 }, [])
 
    return (
        <>
            <SEO title="Home" />
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
                                    <ContactForm formStyle="sign" />
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
export default Login;
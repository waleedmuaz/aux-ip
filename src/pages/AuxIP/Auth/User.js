import React, { useEffect , useState } from 'react';

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

    const [content, setContent]=useState([]);
    const [isLoader, setIsLoader] = useState(false);

    const getIpServicePageData = async () => {
        setIsLoader(true);
        const response = await fetch(`${process.env.REACT_APP_BASEURL}users`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('auth'),
                },
                method: "GET",
            })
        if (!response.ok) {
            throw new Error('Data coud not be fetched!')
        } else {
            let res = await response.json();
            setContent(res.data);
            console.log(res.data);
            return res;
        }
    }




    useEffect(() => {
        if (!localStorage.getItem("auth")) {
            history.push("/login");
        }
        getIpServicePageData();
        setIsLoader(true);
    }, [])
    


    if (!isLoader || content.length <= 0)
        return <div className='loader'><span></span></div>;

        
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
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Email</th>
                                                        <th>Created_at</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    content.map((data , index)=>{
                                                     return(
                                                    <tr key={index}>
                                                        <td>{data.id}</td>
                                                        <td>{data.name}</td>
                                                        <td>{data.email}</td>
                                                        <td>{data.created_at}</td>
                                                    </tr>
                                                     )
                                                   
                                                    })
                                                }
                                                
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





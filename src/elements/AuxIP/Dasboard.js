import React , {useState} from 'react'
import SEO from "../../common/SEO";
import HeaderTwo from '../../common/header/HeaderTwo';
import HeaderTopBar from '../../common/header/HeaderTopBar';
import Separator from "../../elements/separator/Separator";
import FooterBottom from '../../elements/AuxIP/FooterBottom';
import Table from 'react-bootstrap/Table';
import SideBar from './Bar/SideBar'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { TableData } from './TableData';

const Dashboard = () => {

    const [contacts, setContacts] = useState(TableData);
    const [search, setSearch] = useState('');


    return (
        <>
            <SEO title="Home" />
            <main className="page-wrapper">
                <HeaderTopBar />
                <HeaderTwo btnStyle="btn-small" />
                <main id="mian">
                    <section>
                        <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2 sideBarLine">
                                <SideBar/>
                            </div>
                            <div className="col-md-10">
                                <Separator />
                                <div className="dashboard_section my-5">
                                    <div className="full">
                                        <Form>
                                            <InputGroup className='my-3'>

                                                {/* onChange for search */}
                                                <Form.Control
                                                    onChange={(e) => setSearch(e.target.value)}
                                                    placeholder='Search contacts'
                                                />
                                            </InputGroup>
                                        </Form>
                                        <div className="">
                                        <Table responsive>
                                            <thead>
                                                <tr>
                                                <th>Reference</th>
                                                <th>IP Type</th>
                                                <th>Application</th>
                                                <th>Application Numbers</th>
                                                <th>Application Filing Date</th>
                                                <th>Patent Numbers</th>
                                                <th>Grant Date</th>
                                                <th>Country</th>
                                                <th>Due Date</th>
                                                <th>Last Instruction Date</th>
                                                <th>Action Type</th>
                                                <th>Estimated Cost</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {TableData.filter((item) => {
                                                        return search.toLowerCase() === ''
                                                            ? item
                                                            : item.first_name.toLowerCase().includes(search);
                                                    })
                                                    .map((item, index) => (
                                                        <tr key={index}>
                                                            <td>{item.first_name}</td>
                                                            <td>{item.last_name}</td>
                                                            <td>{item.email}</td>
                                                            <td>{item.phone}</td>
                                                            <td>{item.first_name}</td>
                                                            <td>{item.last_name}</td>
                                                            <td>{item.email}</td>
                                                            <td>{item.phone}</td>
                                                            <td>{item.first_name}</td>
                                                            <td>{item.last_name}</td>
                                                            <td>{item.email}</td>
                                                            <td>{item.phone}</td>
                                                        </tr>
                                                    ))}
                                            </tbody>
                                        </Table>
                                        </div>

                                        
                                    </div>
                                </div>
                                <Separator />
                            </div>
                        </div>
                        </div>

                        
                    </section>
                </main>

                
                
                <FooterBottom />
            </main>

        </>
    )
}
export default Dashboard;
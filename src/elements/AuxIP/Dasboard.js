import React , {useState , useEffect} from 'react'
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
import { Redirect, Route, Switch, Link, useHistory } from 'react-router-dom';
import BootstrapTable  from 'react-bootstrap-table-next';
import filterFactory, { textFilter, dateFilter  } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

const Dashboard = () => {

    const [contacts, setContacts] = useState(TableData);
    const [search, setSearch] = useState('');

   

    let nameFilter;
    let priceFilter;
    let stockDateFilter;


    const products = [
        { id: 1, Reference: "referring ", price: 2101,'inStockDate':122},
      ];



 const emptyDataMessage = () => { 
    return 'No Data to Display';
}

const columns = [{
  dataField: 'id',
  text: 'ID'
}, {
  dataField: 'Reference',
  text: 'Reference',
  filter: textFilter({
    getFilter: (filter) => {
      nameFilter = filter;
    }
  })
}, {
    dataField: 'name',
    text: 'IP Type',
    filter: textFilter({
      getFilter: (filter) => {
        nameFilter = filter;
      }
    })
  },{
    dataField: 'name',
    text: 'Application',
    filter: textFilter({
      getFilter: (filter) => {
        nameFilter = filter;
      }
    })
  },{
    dataField: 'name',
    text: 'Application Numbers',
    filter: textFilter({
      getFilter: (filter) => {
        nameFilter = filter;
      }
    })
  },{
    dataField: 'name',
    text: 'Application Filing Date',
    filter: textFilter({
      getFilter: (filter) => {
        nameFilter = filter;
      }
    })
  },{
    dataField: 'name',
    text: 'Patent Numbers',
    filter: textFilter({
      getFilter: (filter) => {
        nameFilter = filter;
      }
    })
  },{
    dataField: 'name',
    text: 'Grant Date',
    filter: textFilter({
      getFilter: (filter) => {
        nameFilter = filter;
      }
    })
  },{
    dataField: 'name',
    text: 'Country',
    filter: textFilter({
      getFilter: (filter) => {
        nameFilter = filter;
      }
    })
  },{
    dataField: 'name',
    text: 'Due Date',
    filter: textFilter({
      getFilter: (filter) => {
        nameFilter = filter;
      }
    })
  },{
    dataField: 'name',
    text: 'Last Instruction Date',
    filter: textFilter({
      getFilter: (filter) => {
        nameFilter = filter;
      }
    })
  },{
    dataField: 'name',
    text: 'Action Type',
    filter: textFilter({
      getFilter: (filter) => {
        nameFilter = filter;
      }
    })
  },{
    dataField: 'name',
    text: 'Estimated Cost',
    filter: textFilter({
      getFilter: (filter) => {
        nameFilter = filter;
      }
    })
  }, {
  dataField: 'inStockDate',
  text: 'InStock Date',
  formatter: cell => cell.toString(),
  filter: dateFilter({
    getFilter: (filter) => {
      stockDateFilter = filter;
    }
  })
}];




const handleClick = () => {
  nameFilter('');
  priceFilter('');
  stockDateFilter();
};
    


    let history = useHistory();

    useEffect(() => {
       if(!localStorage.getItem("auth")){
           history.push("/login");
         }
    }, [])

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
                            <div className="col-md-10 overflow">
                                <Separator />
                                <div className="dashboard_section my-5">
                                    <div className="full">


                                            <button className="btn btn-lg btn-primary my-3"  onClick={handleClick}> Clear all filters </button>
                                            <BootstrapTable
                                                keyField="id"
                                                data={products}
                                                columns={columns}
                                                filter={filterFactory()}
                                                noDataIndication={emptyDataMessage}
                                            />


                                        {/* <Form>
                                            <InputGroup className='my-3'>

                                                <Form.Control
                                                    onChange={(e) => setSearch(e.target.value)}
                                                    placeholder='Search contacts'
                                                />
                                            </InputGroup>
                                        </Form>
                                        <div className="">
                                        <Table responsive bordered>
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
                                        </div> */}

                                        
                                    </div>
                                </div>
                                {/* <Separator /> */}
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
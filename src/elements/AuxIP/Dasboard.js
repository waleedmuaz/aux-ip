import React, { useState, useEffect } from 'react'
import SEO from "../../common/SEO";
import HeaderTwo from '../../common/header/HeaderTwo';
import HeaderTopBar from '../../common/header/HeaderTopBar';
import Separator from "../../elements/separator/Separator";
import FooterBottom from '../../elements/AuxIP/FooterBottom';
import SideBar from './Bar/SideBar'
import { useHistory } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import FileUpload from './FileUpload';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory, {
    PaginationProvider,
    PaginationListStandalone,
} from 'react-bootstrap-table2-paginator';
import { FiRefreshCcw } from 'react-icons/fi';
import { Button } from 'react-bootstrap';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';





const Dashboard = () => {
    let history = useHistory();

    const [filterConstraints, setfilterConstraints] = useState();
    const [filterDate, setfilterDate] = useState();
    const [content, setContent] = useState([]);
    const [isLoader, setIsLoader] = useState(false);


    let reference, ip_type, application, application_numbers, application_filing_date, patent_numbers, grant_date, country, due_date, last_instruction_date, action_type,estimated_cost,instruction;
    //API
    const getIpServicePageData = async () => {
        setIsLoader(true);
        const response = await fetch(`${process.env.REACT_APP_BASEURL}company/detail`,
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
            return res;
        }
    }
    //Table Setting
    const typeOfInstruction = [
        { value: "Pay", label: "Pay" },
        { value: "Abandon", label: "Abandon" },
        { value: "Third party", label: "Third party" },
        
      ];
    const filter = (e) => {
        var d = new Date();
        if(e.target.value==="1m"){
            d.setMonth(d.getMonth() - 1);  
            setfilterDate("1m");
            setfilterConstraints(d.toLocaleDateString());
        }else if(e.target.value==="3m"){
            d.setMonth(d.getMonth() - 3);  
            setfilterDate("3m");
            setfilterConstraints(d.toLocaleDateString()); 
        }else if(e.target.value==="6m"){
            setfilterDate("6m");
            d.setMonth(d.getMonth() - 6);  
            setfilterConstraints(d.toLocaleDateString()); 
        }else{
            setfilterConstraints()
        }
        console.log(filterConstraints);
    }
    const selectRow = {
        mode: 'checkbox',
        clickToSelect: true,
        clickToEdit: true  
      };

    const columns = [{
        dataField: 'reference',
        text: 'Reference',
        sort: true,
        editable: false,
        filter: textFilter({
            getFilter: (filter) => {
                reference = filter;
            }
        }),
        footer: "Reference",
        footerClasses: 'font-weight-bold'


    }, {
        dataField: 'ip_type',
        text: 'IP Type',
        editable: false,
        sort: true,
        filter: textFilter({
            getFilter: (filter) => {
                ip_type = filter;
            }
        }),
        footer: "IP Type",
        footerClasses: 'font-weight-bold'


    }, {
        dataField: 'application',
        text: 'Application',
        editable: false,
        sort: true,
        filter: textFilter({
            getFilter: (filter) => {
                application = filter;
            }
        }),
        footer: "Application",
        footerClasses: 'font-weight-bold'

        
    }, {
        dataField: 'application_numbers',
        text: 'Application Numbers',
        sort: true,
        editable: false,
        filter: textFilter({
            getFilter: (filter) => {
                application_numbers = filter;
            }
        }),
        footer: "Application Numbers",
        footerClasses: 'font-weight-bold'


    }, {
        dataField: 'application_filing_date',
        text: 'Application Filing Date',
        editable: false,
        sort: true,
        filter: textFilter({
            getFilter: (filter) => {
                application_filing_date = filter;
            }
        }),
        footer: "Application Filing Date",
        footerClasses: 'font-weight-bold'


    }, {
        dataField: 'patent_numbers',
        text: 'Patent Numbers',
        sort: true,
        editable: false,
        filter: textFilter({
            getFilter: (filter) => {
                patent_numbers = filter;
            }
        }),
        footer: "Patent Numbers",
        footerClasses: 'font-weight-bold'


    }, {
        dataField: 'grant_date',
        text: 'Grant Date',
        sort: true,
        editable: false,
        filter: textFilter({
            getFilter: (filter) => {
                grant_date = filter;
            }
        }),
        footer: "Grant Date",
        footerClasses: 'font-weight-bold'


    }, {
        dataField: 'country',
        text: 'Country',
        sort: true,
        editable: false,
        filter: textFilter({
            getFilter: (filter) => {
                country = filter;
            }
        }),
        footer: "Country",
        footerClasses: 'font-weight-bold'


    }, {
        dataField: 'due_date',
        text: 'Due Date',
        sort: true,
        editable: false,
        filter: textFilter({
            getFilter: (filter) => {
                due_date = filter;
            }
        }),
        footer: "Due Date",
        footerClasses: 'font-weight-bold'


    }, {
        dataField: 'last_instruction_date',
        text: 'Last Instruction Date',
        sort: true,
        editable: false,
        filter: textFilter({
            getFilter: (filter) => {
                last_instruction_date = filter;
            }
        }),
        footer: "Last Instruction Date",
        footerClasses: 'font-weight-bold'


    },{
        dataField: 'action_type',
        text: 'Action Type',
        editable: false,
        sort: true,
        filter: textFilter({
            getFilter: (filter) => {
                action_type = filter;
            }
        }),
        footer: "Action Type",
        footerClasses: 'font-weight-bold'
    }, {
        dataField: 'estimated_cost',
        text: 'Estimated Cost',
        editable: false,
        sort: true,
        filter: textFilter({
            getFilter: (filter) => {
                estimated_cost = filter;
            }            
        }),
        
        footer: "Estimated Cost",
        footerClasses: 'font-weight-bold'
    },{
        dataField: "instruction",
        text: "Instruction",
        editor: {
          type: Type.SELECT,
          options: typeOfInstruction
        },
        footer: "Instruction",
        footerClasses: 'font-weight-bold'

      }];
      async function  beforeSaveCell(oldValue, newValue, row, column, done) {
        setIsLoader(true);
        let data={
            "content":newValue,
            'id':row.id
        };
        await fetch(`${process.env.REACT_APP_BASEURL}company/detail`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('auth'),
                },
                body: JSON.stringify(data),
                method: "POST",
            })
      }
    const handleClick = () => {
        reference('');
        ip_type('');
        application('');
        application_numbers('');
        application_filing_date('');
        patent_numbers('');
        grant_date('');
        country('');
        due_date('');
        last_instruction_date('');
        action_type('');
        estimated_cost("");
        instruction("");
    };
    const paginationOption = {
        custom: true,
        totalSize: content.length
    };
    ///file upload



    useEffect(() => {
        if (!localStorage.getItem("auth")) {
            history.push("/login");
            setIsLoader(true);
        }
        getIpServicePageData();
        setIsLoader(true);

    }, [])

    if (!isLoader || content.length <= 0)
        return <div className='loader'><span></span></div>;

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
                                    <SideBar />
                                </div>
                                <div className="col-md-10 overflow">
                                    <Separator />
                                    <div className="dashboard_section my-5">
                                        <div className="full">
                                            <div>
                                                <div>
                                                    <FileUpload />
                                                    <Button className="btn btn-lg btn-warning my-3" onClick={handleClick}>
                                                        <FiRefreshCcw></FiRefreshCcw>
                                                    </Button>
                                                </div>
                                            
                                                <div>
                                                    <select onChange={filter} value={filterDate}>
                                                        <option value="all">All</option>
                                                        <option value="1m">1 Month</option>
                                                        <option value="3m">3 Month</option>
                                                        <option value="6m">6 Month</option>
                                                    </select>
                                                </div>

                                            </div>
                                            <PaginationProvider
                                                pagination={paginationFactory(paginationOption)}
                                            >
                                                {
                                                    ({
                                                        paginationProps,
                                                        paginationTableProps
                                                    }) => (
                                                        <div>
                                                            <BootstrapTable
                                                                // bordered={false}
                                                                bootstrap4
                                                                keyField="id"
                                                                data={  content ?   filterConstraints ?    content.filter((itm)=>{
                                                                        return itm.due_date >= filterConstraints
                                                                      }) :content : "No Data"
                                                                    }
                                                                columns={columns}
                                                                filter={filterFactory()}
                                                                noDataIndication="No Data to Display"
                                                                {...paginationTableProps}
                                                                selectRow={ selectRow }
                                                                headerClasses="header-class"
                                                                cellEdit={cellEditFactory({ 
                                                                    mode: "click",
                                                                    blurToSave: true,
                                                                    beforeSaveCell
                                                                })}
                                                                
                                                                />
                                                            <PaginationListStandalone
                                                                {...paginationProps}
                                                            />
                                                        </div>
                                                    )
                                                }
                                            </PaginationProvider>

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
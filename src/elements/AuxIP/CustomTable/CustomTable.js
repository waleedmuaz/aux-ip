import React, { useState, useEffect } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory, {
    PaginationProvider,
    PaginationListStandalone,
} from 'react-bootstrap-table2-paginator';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import { roleUser } from '../../../utils/AuxIP/helper';


const CustomTable = (props) => {

    const [show, setShow] = useState(true);
    const [ipType, setIpType] = useState(true);
    const [applications, setApplications] = useState(true);
    const [applicationNumber, setApplicationNumber] = useState(true);
    const [appFillingDate, setAppFillingDate] = useState(true);
    const [patentNumbers, setPatentNumbers] = useState(true);
    const [grantDate, setGrantDate] = useState(true);
    const [country, setCountry] = useState(true);
    const [dueDate, setDueDate] = useState(true);
    const [lastInstructionDate, setLastInstructionDate] = useState(true);
    const [actionType, setActionType] = useState(true);
    // const [colForm,setColForm]=useState([])

    // const Cols=[
    //     colForm.reference,"","",""
    // ];
    const onRowSelect = (row, isSelect, rowIndex, e) => {
        if (isSelect) {
            let prev = props.selectedData;
            props.setSelectedData(prev => [...prev, row]);
        } else {
            let prev = props.selectedData.filter(function (obj) {
                return obj.id !== row.id;
            });
            props.setSelectedData(prev);
        }
    }

    const typeOfInstruction = [
        { value: "Pay", label: "Pay" },
        { value: "Abandon", label: "Abandon" },
        { value: "Third party", label: "Third party" },
    ];
    const selectRow = {
        mode: 'checkbox',
        clickToSelect: true,
        clickToEdit: true,
        hideSelectAll: true,
        style: {
            background: '#d1ecf1',
        },
        classes: "custom-check-box",
        onSelect: (roleUser() === "User") ? onRowSelect : () => { },
        // onSelectAll: (roleUser() === "User") ? onSelectAll : () => { }
    }

    const columns = [
        {
            dataField: 'user.email',
            text: 'User Email',
            sort: true,
            editable: false,
            hidden:(roleUser() !== "Admin") ? true : false,
        }, {
            dataField: 'reference',
            text: 'Reference',
            sort: true,
            editable: false,
            hidden: show
        }, {
            dataField: 'ip_type',
            text: 'IP Type',
            editable: false,
            sort: true,
            hidden: ipType
        }, {
            dataField: 'application',
            text: 'Application',
            editable: false,
            sort: true,
            hidden: applications
        }, {
            dataField: 'application_numbers',
            text: 'Application Numbers',
            sort: true,
            editable: false,
            hidden: applicationNumber
        }, {
            dataField: 'application_filing_date',
            text: 'Application Filing Date',
            editable: false,
            sort: true,
            hidden: appFillingDate
        }, {
            dataField: 'patent_numbers',
            text: 'Patent Numbers',
            sort: true,
            editable: false,
            hidden: patentNumbers
        }, {
            dataField: 'grant_date',
            text: 'Grant Date',
            sort: true,
            editable: false,
            hidden: grantDate
        }, {
            dataField: 'country',
            text: 'Country',
            sort: true,
            editable: false,
            hidden: country
        }, {
            dataField: 'due_date',
            text: 'Due Date',
            sort: true,
            editable: false,
            hidden: dueDate
        }, {
            dataField: 'last_instruction_date',
            text: 'Last Instruction Date',
            sort: true,
            editable: false,
            hidden: lastInstructionDate
        }, {
            dataField: 'action_type',
            text: 'Action Type',
            editable: false,
            sort: true,
            hidden: actionType
        }, {
            dataField: 'estimated_cost',
            text: 'Estimated Cost',
            sort: true,
            editable: false,

        }, {
            dataField: "instruction",
            text: "Instruction",
            editor: {
                type: Type.SELECT,
                options: typeOfInstruction
            },
            editable: (roleUser() === "Admin") ? false : true,

        }];

    const paginationOption = {
        custom: true,
        totalSize: props.content.length
    };

    const handleShow1 = () => setShow(!show);
    const handleShow2 = () => setIpType(!ipType);
    const handleShow3 = () => setApplications(!applications);
    const handleShow4 = () => setApplicationNumber(!applicationNumber);
    const handleShow5 = () => setAppFillingDate(!appFillingDate);
    const handleShow6 = () => setPatentNumbers(!patentNumbers);
    const handleShow7 = () => setGrantDate(!grantDate);
    const handleShow8 = () => setCountry(!country);
    const handleShow9 = () => setDueDate(!dueDate);
    const handleShow10 = () => setLastInstructionDate(!lastInstructionDate);
    const handleShow11 = () => setActionType(!actionType);

    useEffect(() => {
        setShow(!show);
        setIpType(!ipType);
        setApplications(!applications);
        setApplicationNumber(!applicationNumber);
        setAppFillingDate(!appFillingDate);
        setPatentNumbers(!patentNumbers);
        setGrantDate(!grantDate);
        setCountry(!country);
        setDueDate(!dueDate);
        setLastInstructionDate(!lastInstructionDate);
        setActionType(!actionType);

    }, []);

    var buttonText1 = show ? "Show Reference" : "Hide Reference";
    var buttonText2 = ipType ? "Show IP Type" : "Hide IP Type";
    var buttonText3 = applications ? "Show applications" : "Hide applications";
    var buttonText4 = applicationNumber ? "Show appNumbers" : "Hide appNumbers";
    var buttonText5 = appFillingDate ? "Show appFillingDate" : "Hide appFillingDate";
    var buttonText6 = patentNumbers ? "Show patentNumbers" : "Hide patentNumbers";
    var buttonText7 = grantDate ? "Show grantDate" : "Hide grantDate";
    var buttonText8 = country ? "Show country" : "Hide country";
    var buttonText9 = dueDate ? "Show dueDate" : "Hide dueDate";
    var buttonText10 = lastInstructionDate ? "Show lastInstructionDate" : "Hide lastInstructionDate";
    var buttonText11 = actionType ? "Show actionType" : "Hide actionType";

    return (
        <>
            {(roleUser()==="Admin" ?
            <div className="all_hide_show_button mb-3">
                <button type='button' className={show ? "btn btn-dark" : "btn btn-primary"} onClick={handleShow1}>{buttonText1} </button>
                <button type='button' className={ipType ? "btn btn-dark" : "btn btn-primary"} onClick={handleShow2} >{buttonText2} </button>
                <button type='button' className={applications ? "btn btn-dark" : "btn btn-primary"} onClick={handleShow3} >{buttonText3} </button>
                <button type='button' className={applicationNumber ? "btn btn-dark" : "btn btn-primary"} onClick={handleShow4} >{buttonText4} </button>
                <button type='button' className={appFillingDate ? "btn btn-dark" : "btn btn-primary"} onClick={handleShow5} >{buttonText5} </button>
                <button type='button' className={patentNumbers ? "btn btn-dark" : "btn btn-primary"} onClick={handleShow6} >{buttonText6} </button>
                <button type='button' className={grantDate ? "btn btn-dark" : "btn btn-primary"} onClick={handleShow7} >{buttonText7} </button>
                <button type='button' className={country ? "btn btn-dark" : "btn btn-primary"} onClick={handleShow8} >{buttonText8} </button>
                <button type='button' className={dueDate ? "btn btn-dark" : "btn btn-primary"} onClick={handleShow9} >{buttonText9} </button>
                <button type='button' className={lastInstructionDate ? "btn btn-dark" : "btn btn-primary"} onClick={handleShow10}>{buttonText10} </button>
                <button type='button' className={actionType ? "btn btn-dark" : "btn btn-primary"} onClick={handleShow11}>{buttonText11} </button>
            </div>
            : "")}


            <PaginationProvider
                pagination={paginationFactory(paginationOption)}
            >
                {
                    ({
                        paginationProps,
                        paginationTableProps
                    }) => (
                        <div >
                            <BootstrapTable
                                // bordered={false}
                                bootstrap5
                                keyField="id"
                                data={props.content ? props.filterConstraints ? props.content.filter((itm) => {
                                    return itm.due_date >= props.filterConstraints
                                }) : props.content : "No Data"
                                }
                                columns={columns}
                                filter={filterFactory()}
                                noDataIndication="No Data to Display"
                                {...paginationTableProps}
                                selectRow={selectRow}
                                headerClasses="header-class"
                                cellEdit={cellEditFactory({
                                    mode: "click",
                                    blurToSave: true,
                                })}

                            />
                            <PaginationListStandalone
                                {...paginationProps}
                            />
                        </div>
                    )
                }

            </PaginationProvider>



        </>
    )
}
export default CustomTable;
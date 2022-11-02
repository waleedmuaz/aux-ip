import React, {useEffect, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory, {
    PaginationProvider,
    PaginationListStandalone,
} from 'react-bootstrap-table2-paginator';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import { roleUser } from '../../../utils/AuxIP/helper';
import axios from 'axios';
import { toast } from 'react-toastify';


const CustomTable = (props) => {

    const [formData,setFormData]=useState({column:""});
    
    const handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        setFormData((prevalue) => {
            return {
                ...prevalue,   // Spread Operator               
                [name]: value
            }
        })
    }
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
    
    let columns=[{
        dataField: 'user.email',
        text: 'User Email',
        sort: true,
        editable: false,
        hidden:false,
     }];

    props.colStruct.forEach(element => {
        columns.push({
                dataField: element.field,
                text: (element.field.replaceAll('_', ' ')).toUpperCase(),
                sort: true,
                editable: (element.editable_col===1)?true:false,
                hidden: (element.hidden===1)?true:false,
                editor: (element.field==="instruction")?{
                    type: Type.SELECT,
                    options: typeOfInstruction
                }:{},
            });
    });


    const paginationOption = {
        custom: true,
        totalSize: props.content.length

    };
    const updateToogle = async (id) => {
        props.setIsLoader(true);
        const response = await fetch(`${process.env.REACT_APP_BASEURL}col/toggle`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('auth'),
                },
                method: "POST",
                body: JSON.stringify({
                    "id":id,
                }),
            })
        if (!response.ok) {
            throw new Error('Data could not be fetched!')
        } else {
            getIpServicePageData()
            console.log('done')
        }
    }

    
    const getIpServicePageData = async () => {
        props.setIsLoader(true);
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
            props.setContent(res.data.instruction);
            props.setColStruct(res.data.colStruct);
            props.setColums(res.data.column);
            return res;
        }
    }
    const submitForm = (event) => {
        event.preventDefault();
        const dataArray = formData;
        axios.post(`${process.env.REACT_APP_BASEURL}col `, dataArray, {
            headers: {
                "Content-Type": "multipart/form-data",
                'Authorization': localStorage.getItem('auth')
            }
        })
            .then((response) => {
                if (response.data.status === false) {
                    toast.error('The given data was invalid', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                } else if (response.data.status === 200) {
                    setFormData("");
                    event.target.reset();
                    toast.success('Instructions Submit Successfully!', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                getIpServicePageData()
                console.log(response.data);
                // successfully uploaded response
            })
            .catch((error) => {
                console.log("🚀 ~ file: AddListing.js ~ line 66 ~ submitForm ~ error", error)

            });
    };
    useEffect(() => {
        
    }, []);
   
    return (
        <>
            {(roleUser()==="Admin" && props.colStruct.length>0 ?
            <div className="all_hide_show_button coumn_button mb-3">
                <form onSubmit={submitForm}>
                <div className="row">
                <div className="col-md-12 col-12">
                        <div className="d-flex">
                        <div className="form-group">
                            <input type="text" className="form-control" name="column"
                            onChange={handleChange}
                            value={formData.column}
                            autoComplete="off"
                            placeholder='Enter column name'
                            />
                        </div>
                        <button type='submit' className="btn btn-default submit">Submit</button>
                        </div>
                    </div>
                </div>
                   
                    {/* <div className="col-md-6 col-12">
                        <button type='submit' className="btn btn-default">Submit</button>
                    </div> */}
                </form>

                {
                    props.columns.map((data, index) => (
                        <button type='button' 
                        className={data.hidden===1 ? "btn btn-dark" : "btn btn-primary"} 
                        onClick={event => updateToogle(data.id)} 
                        >
                                {data.field} 
                        </button>
                    ))
                }
                {/* <button type='button' className={actionType ? "btn btn-dark" : "btn btn-primary"} onClick={handleShow11}>{buttonText11} </button> */}
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
                                bootstrap5
                                keyField="id"
                                data={roleUser()==="User" ? props.content ? props.filterConstraints ? props.content.filter((itm) => {
                                    return itm.due_date >= props.filterConstraints
                                }) : props.content : "No Data" : ""
                                }
                                columns={columns}
                                filter={filterFactory()}
                                noDataIndication="No Record Found"
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